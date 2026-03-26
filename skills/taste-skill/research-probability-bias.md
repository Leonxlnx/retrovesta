# Mitigating Probability Bias and Diversity Collapse in Instruction-Tuned LLMs

> Production-ready strategies for UI component generation

---

## 1. Introduction: The Mode Collapse Phenomenon

When a system prompt instructs a model to select from an extensive array of component options, the model will disproportionately select high-frequency training priors: card-based layouts, hero sections, standard CTA banners.

This is a direct consequence of **typicality bias** introduced during post-training alignment (RLHF, DPO). These alignment techniques enhance instruction adherence and output safety but simultaneously induce a sharp drop in generative diversity. The aligned model assigns disproportionately high probability mass to a narrow range of "safe" responses, collapsing the rich distribution of possibilities from pre-training.

In UI generation, the system bypasses the long tail of creative components in favor of the most statistically viable, generic tokens. Furthermore, when options are presented as a list, the model is subjected to **positional bias**, heavily favoring earlier items.

---

## 2. Theoretical Foundations of Generation Bias

### 2.1 Typicality Bias

Mode collapse is driven by typicality bias in human preference data. Human raters consistently prefer familiar, structured, predictable text. The reward model penalizes variance. The probability landscape gets squeezed into a sharp, narrow peak centered on standard hero sections and three-column grids.

### 2.2 Structural Diversity Collapse

Instruction-tuned models are conditioned on strict structural templates with role markers and specific phrasing. These structural tokens anchor the output space early, suppressing entropy and forcing a deterministic trajectory.

Key insight: **The more highly formatted the system prompt, the more deterministic and uniform the outputs become.** An overly engineered SKILL.md laden with complex structural constraints inadvertently signals the model to retreat to its safest, most predictable patterns.

### 2.3 Positional and Selection Bias in Option Lists

When presented with a list of 25 options, components are not evaluated simultaneously. Due to self-attention mechanics, items positioned at the beginning absorb more attention weight. If "Card" appears high in the list and is highly represented in training data, the probability of selection approaches certainty, rendering the rest practically invisible.

---

## 3. Parameter-Level Decoding Interventions

### 3.1 Temperature and Nucleus Sampling Limitations

| Parameter | Mechanism | Impact on UI Code | Optimal for Diversity |
|---|---|---|---|
| **Temperature** | Flattens overall probability distribution | High risk of syntax errors | Low to Moderate (0.4-0.7) |
| **Top-p** | Truncates sampling pool to cumulative probability mass | Safe for code, but fails to overcome massive probability peaks | Moderate (0.8-0.9) |
| **Presence Penalty** | Penalizes tokens based on binary occurrence | Forces conceptual shifts; excellent for avoiding repetitive layouts | Moderate to High (0.6-1.0) |
| **Frequency Penalty** | Penalizes tokens proportionally to count | High risk to code syntax; overly penalizes structural repetition | Low (0.1-0.3) |

Temperature scaling flattens the distribution uniformly across the entire generation, disrupting logical coherence. If "Card" holds 85% probability, Top-p still won't help.

### 3.2 Strategic Application of Frequency and Presence Penalties

- **Presence Penalty** (0.6-0.8): Forces topical variation and new concepts. Discourages reuse of the same architectural patterns.
- **Frequency Penalty** (low): Scales penalty based on token count. Keep low to protect necessary code repetition (closing tags, wrappers).

### 3.3 Advanced Contrastive Decoding (Guide-to-Generation)

A training-free, plug-and-play decoding strategy using three parallel modules:

1. **Base Generator**: Standard prompt for factual accuracy
2. **Diversity Guide**: Prompted to diverge from prior outputs
3. **Dedupe Guide**: Prompted to mirror previous outputs

Final token probability = amplified diversity logits minus dedupe logits. Uses **entropy-based gating**: if the system is confident about syntax (low entropy), it trusts the base generator. If uncertain, it applies contrastive intervention.

---

## 4. Mitigating Positional Bias in Option Lists

### 4.1 List Shuffling and Permutation Self-Consistency

The most robust solution. Before injecting the SKILL.md into the prompt context, randomly shuffle the order of component options on each execution. This neutralizes the self-attention mechanism's top-of-list bias over time.

### 4.2 Ranking via Iteration Selection

If shuffling is not possible, use a "reduce-and-conquer" strategy:

1. Break the 25 items into five lists of five
2. Evaluate each sub-list independently
3. Select from the five "winners"

This minimizes attention decay that causes bottom-of-list items to be ignored.

---

## 5. Prompt-Level Interventions for Entropy Injection

### 5.1 Verbalized Sampling

Instead of prompting to select a single component, instruct the model to first output a distribution of all options with estimated suitability probabilities.

Example instruction:
> "Analyze the user requirements against the 25 provided component structures. Output a list of the top 5 most viable components, assigning a probability score to each. Do not automatically select the highest probability component. Select the component with the third-highest probability to ensure unique structural delivery."

This technique improves generative variety by up to **2.1x** with zero loss in quality.

### 5.2 String Seed Protocol

Forces mathematical randomness into the generation trajectory:

> "Generate a random string of 15 alphanumeric characters. Then manipulate that string using a specific algorithmic operation to determine which component to generate."

By forcing generation of a high-entropy character sequence first, the internal key-value cache state is fundamentally altered. Subsequent decoding is conditioned on this random string, pushing the autoregressive trajectory off the high-probability ridge.

### Summary of Mitigation Techniques

| Technique | Core Mechanism | Target Bias | Implementation Layer |
|---|---|---|---|
| Verbalized Sampling | Forces probability distribution calculation before generation | Typicality Bias / Mode Collapse | Prompt (Instructional) |
| String Seed Protocol | Generates alphanumeric entropy to alter KV cache state | Probabilistic Instruction Following | Prompt (Cognitive Anchor) |
| List Shuffling | Randomizes option order to neutralize attention weights | Positional Bias | System (Pre-computation) |
| Iteration Selection | Breaks long arrays into sub-lists for localized evaluation | Selection Bias | Prompt (Instructional) |

### 5.3 Log-Scale Focal Uncertainty

Metrics like Log-Scale Focal Uncertainty incorporate label prior probabilities as a risk-modulation factor. SKILL.md instructions should actively penalize confidence when selecting common components, forcing higher justification thresholds compared to long-tail choices.

---

## 6. Semantic Constraint Engineering

### 6.1 Negative Constraints and Prior Suppression

Simply stating "be creative" is insufficient. Negative constraints must target known modes:

> "Do not use standard card-based layouts. Exclude traditional hero sections with centered text and background images. Avoid primary blue CTAs or standard three-column feature grids unless unequivocally mandated by the data structure."

Important: An overly lengthy list of negative constraints can confuse the attention mechanism and cause general instruction adherence failure.

### 6.2 Sequential Deliberation Frameworks

Instead of generic step-by-step instructions, mandate diversity-seeking deliberation:

> "Explore three entirely distinct architectural approaches to solving the user's problem before generating code."

By forcing generation of multiple distinct architectural philosophies within the context window, the system populates its immediate context with diverse semantic tokens, influencing final code generation toward variety.

### 6.3 Scaffolding and Least-to-Most Filtering

Break component selection into hierarchical decisions:

1. Determine primary interaction goal (dense data reading, form entry, spatial navigation)
2. Eliminate suboptimal components from the list
3. From the remaining handful, select the one with highest visual contrast to standard patterns

---

## 7. Architecting the SKILL.md for Production

### 7.1 Formatting: Mitigating Structural Diversity Collapse

Research shows highly rigid prompt templates with excessive role markers and nested XML actively suppress output diversity. The SKILL.md should use **minimalist formatting**:

- **Role Definition**: Define persona without overly constraining creative bounds
- **Task Directives and Negative Constraints**: Explicitly forbid high-frequency priors in plain language
- **Entropy Injection Protocol**: Mandate String Seed or Verbalized Sampling
- **Few-Shot Examples**: Placed after main instructions, covering edge cases rather than repetitive norms

### 7.2 Execution Pipeline Design

1. **Enforce Output Boundaries**: Ban default Card, Hero, Modal unless strictly required
2. **Inject Randomness Seed**: String Seed protocol to index into the component list
3. **Verbalized Sampling for Validation**: Force contextual justification of the randomly indexed component
4. **Structured Output Definition**: Strict schema for final component delivery

### 7.3 Tool Calls and Security

The component list should not be framed as 25 distinct tools. Instead, provide a single generation tool interface and use entropy techniques in the system prompt to force the component argument dynamically. This moves selection away from tool-calling (highly susceptible to typicality bias) into semantic space where entropy techniques work best.

The SKILL.md must be robust against indirect prompt injections and maintain clear separation between immutable rules and variable user data.
