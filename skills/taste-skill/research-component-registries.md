# Component Registries and Algorithmic Selection Pipelines

> Blueprint for constructing LLM-readable registries and selection logic for generative UI

---

## 1. The Core Problem: Selection Bottleneck

LLMs face a fundamental bottleneck when choosing UI components from large sets. Research from MemoryBank and RAP frameworks shows that without structured retrieval mechanisms, models default to a narrow subset of training priors while ignoring specialized entries.

### Selection Failure Modes

| Failure Mode | Description | Root Cause |
|---|---|---|
| **Frequency Bias Collapse** | Model repeatedly selects "Card", "Hero", "Grid" | Disproportionate representation in training corpus |
| **Positional Neglect** | Components at list bottom are practically invisible | Self-attention decay over long sequences |
| **Category Conflation** | Model treats distinct component classes as interchangeable | Unclear semantic boundaries in component definitions |
| **Feature Attribute Blindness** | Model ignores metadata (motion, density, interactivity) | Flat, undifferentiated list structure |

---

## 2. Component Registry Architecture

### 2.1 Metadata Schema Design

Each component must be a richly annotated entity:

```yaml
component:
  id: "orbital-navigation-dock"
  display_name: "Orbital Navigation Dock"
  category: "navigation"
  subcategory: "radial"
  
  visual_attributes:
    density: "sparse"
    motion_intensity: "high"
    layout_paradigm: "radial"
    depth: "3d"
    
  technical_requirements:
    css: ["transform", "perspective", "preserve-3d"]
    js: ["trigonometry", "spring-physics"]
    frameworks: ["framer-motion", "gsap"]
    
  semantic_tags:
    mood: ["futuristic", "experimental", "immersive"]
    industry: ["tech", "creative-agency", "gaming"]
    content_type: ["navigation", "app-launcher", "portfolio"]
    
  constraints:
    min_items: 3
    max_items: 8
    viewport: ["desktop", "tablet"]
    accessibility: "requires-keyboard-fallback"
    
  anti_patterns:
    - "Do not flatten into horizontal navbar"
    - "Do not remove 3D perspective"
```

### 2.2 Registry Organization Strategies

**Hierarchical Taxonomy (Tree)**
- Top level: Layout Category (Navigation, Content Display, Data Visualization, Interaction)
- Second level: Paradigm (Radial, Linear, Grid, Stacked)
- Third level: Specific Components

**Faceted Classification (Multi-axis)**
- Filter by density, motion, layout, mood simultaneously
- Components can exist across multiple facets
- More flexible than strict tree hierarchy

**Semantic Embedding Clusters**
- Group components by latent feature similarity
- Components that "feel" similar are co-located
- Aids serendipitous discovery during LLM reasoning

---

## 3. Algorithmic Selection Pipeline

### 3.1 Multi-Stage Pipeline Architecture

```
User Request
    |
    v
[Stage 1: Intent Classification]
    - Extract content type, mood, density requirements
    - Map to registry facets
    |
    v
[Stage 2: Candidate Filtering]
    - Query registry by matched facets
    - Apply hard constraints (viewport, accessibility)
    - Output: Candidate pool (5-10 components)
    |
    v
[Stage 3: Diversity Injection]
    - Shuffle candidate order
    - Apply anti-recency bias (penalize recently used)
    - Weight by inverse frequency of prior selections
    |
    v
[Stage 4: Contextual Ranking]
    - Score candidates against specific user requirements
    - Factor in technical compatibility
    - Apply persona-based weighting
    |
    v
[Stage 5: Verbalized Selection]
    - LLM outputs top-3 with justification
    - Select based on novelty score, not top probability
```

### 3.2 Intent Classification Matrix

| User Signal | Detected Intent | Registry Filter |
|---|---|---|
| "Dashboard with lots of data" | Dense information display | `density: high`, `category: data-viz` |
| "Creative portfolio" | Visual storytelling | `motion: high`, `mood: experimental` |
| "Simple settings page" | Functional utility | `density: moderate`, `motion: low` |
| "Landing page that wows" | Brand impression | `motion: high`, `depth: 3d`, `mood: premium` |

### 3.3 Anti-Repetition Mechanisms

**Session Memory**
Track components selected in current session. Apply exponential decay penalty:
- Last used: -80% selection probability
- Used 2 ago: -40%
- Used 3 ago: -15%

**Inverse Frequency Weighting**
Maintain global usage counters. Components with lower historical usage get proportionally higher selection weight. Rare components surface more frequently, counteracting training priors.

**Forced Rotation**
Every N generations, mandate selection from the bottom quartile of usage frequency. Ensures the full registry gets exercised over time.

---

## 4. Tagging Systems and Semantic Retrieval

### 4.1 Multi-Dimensional Tagging

| Dimension | Example Tags | Purpose |
|---|---|---|
| **Visual Mood** | brutalist, editorial, minimal, playful, corporate | Aesthetic filtering |
| **Motion Profile** | static, subtle, kinetic, cinematic | Animation intensity matching |
| **Content Density** | sparse, balanced, dense, data-heavy | Information architecture fit |
| **Interaction Model** | passive, hover-reactive, gesture-driven, scroll-bound | Input modality matching |
| **Technical Complexity** | css-only, js-enhanced, webgl-required | Feasibility gating |

### 4.2 Compositional Tag Queries

Enable LLM to compose multi-tag queries:

> "Find components where mood=editorial AND density=sparse AND motion=subtle"

This narrows the candidate pool to contextually appropriate options before any ranking occurs.

---

## 5. Evaluation KPIs for Generated UI

### 5.1 Quality Metrics

| KPI | Description | Measurement |
|---|---|---|
| **Structural Diversity Index** | How many unique component types appear across N generations | Count distinct component IDs / total selections |
| **Positional Fairness Score** | Whether component usage correlates with list position | Correlation coefficient between position and selection frequency |
| **Visual Coherence Rating** | Whether selected components form a cohesive design | Human evaluation or style-consistency classifier |
| **Token Efficiency** | Lines of code generated vs. functional features delivered | LOC / feature count ratio |

### 5.2 Diversity Targets

- No single component should exceed **15%** of total selections over 100 generations
- Bottom quartile of registry should account for at least **10%** of total selections
- No two consecutive generations should share the same primary layout component

### 5.3 A/B Testing Framework

Run parallel pipelines:
- **Control**: Standard selection (no diversity intervention)
- **Treatment**: Full pipeline (shuffling + inverse frequency + verbalized selection)

Measure: diversity index, user satisfaction scores, code quality metrics.

---

## 6. Registry Maintenance and Evolution

### 6.1 Component Lifecycle

| Phase | Action | Trigger |
|---|---|---|
| **Candidate** | New component proposed, metadata drafted | Design trend identified or user request |
| **Active** | Fully documented, in rotation | Metadata complete, examples validated |
| **Deprecated** | Reduced selection weight, flagged for review | Low quality scores or outdated design trend |
| **Archived** | Removed from active registry | Superseded by better alternative |

### 6.2 Continuous Calibration

- Monitor selection distribution weekly
- Adjust metadata tags based on actual generation quality
- Add new components when design trends emerge
- Retire components that consistently produce poor output

### 6.3 Version Control

Treat the registry as code:
- Semantic versioning for schema changes
- Pull request reviews for new component additions
- Automated validation of metadata completeness
- Changelog documenting additions, deprecations, and tag modifications
