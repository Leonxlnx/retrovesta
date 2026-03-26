# Stochastic Selection Systems for Vibecoding Pipelines

> Architecting deterministic fairness and controlled randomness in component selection

---

## 1. The Stage-Three Selection Problem

A vibecoding component selection pipeline typically operates in three hierarchical stages:

1. **Stage 1** (Broad Filtration): Reduces an initial corpus of ~100 UI components down to ~25 with strict thematic relevance
2. **Stage 2** (Quality Scoring): Applies heuristic or ML-based evaluation, isolating the top 5 highest-scoring candidates
3. **Stage 3** (Final Selection): Selects a single component from the top-5 cohort

The challenge: Deterministic `argmax` (always pick the highest scorer) forces monotonous repetition. Uniform random selection ignores quality scores entirely. The solution is **weighted random selection with deterministic fairness over time** -- rotation across the top cohort, fierce repetition penalties, and respect for quality weights.

---

## 2. Algorithmic Foundations of Weighted Random Sampling

### 2.1 Cumulative Distribution Function (CDF) + Binary Search

The most common approach (used internally by `random.choices` and `numpy.random.choice`).

Given $n$ components with weights $W = \{w_1, w_2, ..., w_n\}$, construct a monotonically increasing cumulative array $C$ where $C_i = \sum_{j=1}^{i} w_j$. Generate a uniform value $U$ and binary-search for its position in $C$.

- **Construction**: $\mathcal{O}(n)$
- **Each query**: $\mathcal{O}(\log n)$
- **Problem**: Requires full array rebuild whenever any weight changes (e.g., after applying repetition penalties)

### 2.2 Vose's Alias Method

Achieves $\mathcal{O}(1)$ sampling by transforming the distribution into equal-sized bins with primary/alias identities. Two operations per sample: random integer (pick bin) + biased coin flip (primary vs. alias).

- **Construction**: $\mathcal{O}(n)$
- **Each query**: $\mathcal{O}(1)$
- **Fatal flaw**: Requires complete $\mathcal{O}(n)$ table reconstruction after any single weight mutation. In usage-history-aware pipelines, this neutralizes the query advantage entirely.

### 2.3 A-Res Priority Key Sampling (Efraimidis-Spirakis)

Key-based priority sampling that eschews cumulative arrays entirely.

For each component $i$ with weight $w_i > 0$, draw $u_i \sim \mathcal{U}(0,1)$ and compute a stochastic key:

$$k_i = u_i^{1/w_i}$$

Production-stable logarithmic form (avoids numerical underflow):

$$v_i = \frac{-\ln(u_i)}{w_i}$$

Select the component with the **minimum** key $v_i$.

**Critical advantage**: Key generation for component A depends only on $u_A$ and $w_A$. No normalization across the pool required. Penalizing or boosting individual components does not cascade.

### 2.4 Algorithm Comparison

| Algorithm | Init | Query | Dynamic Weight Support | Complexity |
|---|---|---|---|---|
| CDF + Bisect | $\mathcal{O}(n)$ | $\mathcal{O}(\log n)$ | Poor (Rebuild) | Low |
| Vose's Alias | $\mathcal{O}(n)$ | $\mathcal{O}(1)$ | Extremely Poor | High |
| A-Res Keys | $\mathcal{O}(1)$ | $\mathcal{O}(n)$ | Excellent | Low |
| A-ExpJ Stream | $\mathcal{O}(1)$ | $\mathcal{O}(1)$ expected | Good | High |

---

## 3. Entropy Calibration: Softmax and Temperature Scaling

### 3.1 Why Raw Scores Fail

Quality scores from stage 2 are arbitrary, unbounded, potentially negative real numbers (logits). Passing them directly into a weighted sampler causes algorithmic instability.

### 3.2 Softmax Normalization

The standard protocol for mapping arbitrary reals into a valid probability distribution:

$$P(z_i) = \frac{\exp(z_i)}{\sum_{j=1}^{K} \exp(z_j)}$$

Guarantees: all outputs in $(0,1)$, total sums to $1.0$.

**Problem**: Softmax is an aggressive exponential amplifier. Modest differences in scores (e.g., `[10.0, 9.5, 9.0, 8.5, 8.0]`) get exponentially exaggerated. The top scorer absorbs ~95% of probability mass, effectively degrading weighted sampling into deterministic argmax.

### 3.3 Temperature Scaling

Introduces a tunable scalar $T > 0$ that controls distribution entropy:

$$P(z_i) = \frac{\exp(z_i / T)}{\sum_{j=1}^{K} \exp(z_j / T)}$$

| Temperature | Behavior | Effect |
|---|---|---|
| $T \to 0$ | Collapse to argmax | 100% to highest scorer, zero randomness |
| $T = 1.0$ | Standard Softmax | Unadulterated exponential amplification |
| $T = 1.2 - 2.5$ | **Optimal for UI selection** | High quality appears often, full cohort gets exposure |
| $T \to \infty$ | Uniform distribution | All components equal, quality scores ignored |

### 3.4 LogSumExp Numerical Stability

If scores are large (e.g., $z_i = 1000$), $e^{1000}$ causes OverflowError. Fix: subtract the maximum logit before exponentiation (translationally invariant):

$$P_i = \frac{\exp((z_i - z_{\max}) / T)}{\sum \exp((z_j - z_{\max}) / T)}$$

Anchors maximum exponentiation to $e^0 = 1$. Eliminates overflow.

---

## 4. Usage-History-Aware Anti-Repetition

Temperature Scaling is stateless. It has no memory of previous selections. Even with high temperature, the top scorer can be drawn consecutively.

### 4.1 Penalty Heuristics

Maintain a persistent usage state vector $C = \{c_1, c_2, ..., c_K\}$ and penalize raw logits before Softmax:

**Multiplicative Repetition Penalty**:
$$z_i' = \frac{z_i}{\rho^{\min(c_i, 1)}}$$
Where $\rho > 1.0$ controls severity. Scales with logit magnitude. Can be a blunt instrument.

**Subtractive Frequency Penalty**:
$$z_i' = z_i - (\alpha \cdot c_i)$$
Where $\alpha$ is the step-deduction coefficient. Components gracefully descend through probability rankings over multiple selections. Predictable, smooth rotation.

### 4.2 Exponentially Weighted Moving Model (EWMM)

Raw cumulative counts cause **permanent starvation**: a component selected 50 times over a week gets an insurmountable penalty, effectively soft-deleted from rotation.

Solution: Usage history with a mathematical half-life via EWMM:

$$c_i(t) = \lambda \cdot c_i(t-1) + \mathbb{I}(\text{selected at } t)$$

Where:
- $\lambda \in (0, 1)$: decay constant
  - $\lambda \to 0$: rapid forgetting (only penalize very recent selections)
  - $\lambda \to 1$: long-term memory (extended cool-down)
- $\mathbb{I}$: indicator function (1 if selected, 0 otherwise)

**Self-healing mechanism**: Upon selection, a component spikes in usage state, generating a heavy penalty. In subsequent cycles, exponential decay gradually erodes the penalty. The component recovers its quality-score dominance and re-enters active rotation.

---

## 5. Deterministic Alternative: Smooth Weighted Round Robin (SWRR)

For enterprise or regulated UX environments where any stochastic variance is unacceptable.

### 5.1 The Clustering Problem with Standard WRR

Components A(5), B(3), C(2) yield execution trace: `A, A, A, A, A, B, B, B, C, C`. Sequential clustering creates extreme repetition.

### 5.2 SWRR Interleaving Algorithm

Used by NGINX. Manages continuous accumulation and discharge of "weight debt" for perfect interleaving.

Three states per component:
- `static_weight` ($W_i$): Constant quality score
- `current_weight` ($CW_i$): Dynamic debt tracker (init 0)
- `total_weight` ($S$): Sum of all static weights

Each cycle:
1. **Accumulate**: $CW_i \leftarrow CW_i + W_i$ for all components
2. **Select**: Component with maximum $CW_i$
3. **Discharge**: $CW_{\text{selected}} \leftarrow CW_{\text{selected}} - S$

### 5.3 SWRR Execution Trace

| Step | Post-Accumulate | Selected | Post-Discharge |
|---|---|---|---|
| 1 | A=5, B=3, C=2 | A (5) | A=-5, B=3, C=2 |
| 2 | A=0, B=6, C=4 | B (6) | A=0, B=-4, C=4 |
| 3 | A=5, B=-1, C=6 | C (6) | A=5, B=-1, C=-4 |
| 4 | A=10, B=2, C=-2 | A (10) | A=0, B=2, C=-2 |
| 5 | A=5, B=5, C=0 | A (5) | A=-5, B=5, C=0 |

Output: `A, B, C, A, A` -- honors exact proportions (50/30/20) without clustering.

### 5.4 SWRR Limitations

Relies on static integer weights. If quality scores mutate continuously (context-dependent), the accumulation/discharge math destabilizes. In dynamic environments, revert to the stochastic pipeline.

---

## 6. The Hybrid Production Pipeline

Unites EWMM, Temperature-Scaled Softmax, and A-Res sampling:

```
Step 1: State Ingestion
  - Receive top-5 components + raw quality scores (Z)
  - O(1) lookup of EWMM usage vector (C) from Redis

Step 2: Logit Penalization
  - z_i' = z_i - (alpha * c_i)

Step 3: Entropy Calibration (Temperature-Scaled Softmax + LogSumExp)
  - P_i = exp((z_i' - max(Z')) / T) / sum(exp((z_j' - max(Z')) / T))

Step 4: Stochastic Key Generation (A-Res)
  - v_i = -ln(u_i) / P_i  (for each component)

Step 5: Selection + State Mutation
  - Select argmin(v_i)
  - Decay all: c_i *= lambda
  - Increment selected: c_selected += 1.0
```

### 6.1 Concurrency and Distributed State

Multiple concurrent requests create race conditions on EWMM state. Solution: Execute state read/update as an atomic Lua script within Redis. Bypasses Python's GIL limitations and guarantees state consistency regardless of request volume.

---

## 7. Synthesis and Recommendations

| Approach | Strengths | Weaknesses | Best For |
|---|---|---|---|
| Simple CDF | Easy to implement | No memory, rebuild on mutation | Prototyping |
| Alias Method | O(1) queries | Catastrophic under dynamic weights | Static distributions |
| SWRR | Perfect deterministic interleaving | Breaks with dynamic weights | Stable-score environments |
| **Hybrid Pipeline** | Self-healing memory, controlled entropy, cache-friendly | Higher implementation complexity | **Production vibecoding systems** |

The hybrid pipeline (EWMM + Temperature Softmax + A-Res) delivers outcomes that are:
- Strictly thematic (respects quality scores)
- Mathematically equitable (fair long-term rotation)
- Seamlessly rotational (no clustering)
- Immune to repetition degradation
