# Architecting the SKILL.md Framework

> Advanced system prompt design for deterministic UI generation in instruction-tuned LLMs

---

## 1. Foundational Architecture

Context engineering has replaced ad-hoc prompt engineering. The SKILL.md is a rigorously structured, reusable system prompt loaded directly into an LLM's context window. It acts as the cognitive engine for AI agents, embedding capabilities, constraints, and behavioral boundaries into the model's identity layer.

### 1.1 The Three Cognitive Layers

| Layer | Function | SKILL.md Role |
|---|---|---|
| **Identity Layer** | Personality, domain expertise, operational boundaries, safety constraints | SKILL.md resides here, defining what the agent knows and is permitted to do |
| **Orchestration Layer** | Dynamic system prompt + LLM reasoning engine + agent runtime | SKILL.md contents flow here when invoked; manages task state and tool routing |
| **Execution Layer** | Tool calls via MCP, code generation, output rendering | SKILL.md influences this indirectly through orchestration decisions |

### 1.2 Progressive Disclosure (Three-Level System)

| Level | Component | Loading Mechanism |
|---|---|---|
| **Level 1** | YAML Frontmatter | Always loaded into baseline system prompt. Intent classification for routing. |
| **Level 2** | SKILL.md Body | Loaded only when the LLM determines relevance to current query. |
| **Level 3** | Linked Files (`/references`) | Navigated and read only on as-needed basis during execution. |

### 1.3 YAML Frontmatter Optimization

- `name`: kebab-case, acts as invocation command and logging identifier
- `description`: Max 1024 characters, states what the skill does AND when to use it
- `triggers`: Exact semantic hints (e.g., "find customer" not generic "search") to reduce false positive activations

---

## 2. Syntactic Architecture: XML vs. Markdown vs. JSON

### 2.1 JSON: Not Suitable for System Prompts

JSON consistently underperforms for complex LLM instructions. Large JSON files break when chunked for embedding (unclosed arrays, incomplete objects). Leads to retrieval issues and misinterpretation. Only useful for data extraction tasks (15% efficiency advantage for simple outputs).

### 2.2 Markdown: Optimal for Instructions

- **18% higher performance** in creative generation tasks compared to JSON and XML
- **15% more token-efficient** than JSON
- LLMs have deep affinity because Markdown mirrors massive portions of training data
- Models inherently understand `#`, `##`, `-` as cognitive weight and task delineation

### 2.3 Hybrid Architecture: Markdown in XML

The optimal approach: Markdown scaffolding encapsulated within irregular XML tags.

- XML tags (`<system_constraints>`, `<component_library>`) act as unambiguous delimiters
- XML-scaffolded prompts: **23% higher accuracy** than JSON, **31% fewer coding bugs**
- Markdown inside XML provides token efficiency + structural clarity
- Prevents the LLM from confusing instructions with expected UI output

---

## 3. Context Window Efficiency and Attention Mechanics

### 3.1 The "Lost in the Middle" Effect

LLMs exhibit a **U-shaped performance pattern** (Serial Position Effect):

- **Primacy bias**: High retention for information at the beginning
- **Recency bias**: High retention for information at the end
- **Middle**: Instructions buried in the center are severely deprioritized, leading to hallucination or ignoring of design constraints

### 3.2 The Instruction Hierarchy

The SKILL.md must assign privilege levels:

- **Level 0** (System/Developer): Foundational rules, core constraints, persona definitions
- **Level 1** (User): Session goal, specific requests

When user requests conflict with SKILL.md constraints (e.g., requesting "neon green chaotic layout"), Level 0 takes priority.

---

## 4. Attention Anchoring and Constraint Layering

### 4.1 Cognitive Anchors: The "Sandwiched" Architecture

1. **Top**: Establish critical constraints (primacy bias)
2. **Middle**: Lengthy reference data (component libraries, token definitions)
3. **Bottom**: Reiterate core behavioral instructions (recency bias)

This "bookend" structure reinforces focus precisely when generation begins.

### 4.2 Selected Prompt Anchoring (Spa)

Wrapping specific information with unique tokens creates a masked embedding matrix, amplifying contextual impact. Use attention-grabbing headings:

- `## PRIORITY_RULES` instead of `## Important`
- Unique marker tokens for critical constraints

### 4.3 Self-Anchor Methodology

Force the model into a verification mindset before code execution:

> "Before generating the React components, output a YAML block confirming the exact border-radius, primary color hex, and spacing variables you will apply."

This pulls hidden mid-prompt constraints to the bottom of the context window, **significantly reducing mid-generation hallucinations**.

### 4.4 Constraint Layering

Stack rules sequentially, progressively narrowing operational freedom:

| Layer | Definition | Example |
|---|---|---|
| **Infrastructure/Format** | Output wrapper and file references | "Generate only raw React code. No conversational filler." |
| **Behavioral** | How the model handles ambiguity | "If the component doesn't exist in the library, ask for clarification instead of inventing." |
| **Fallback/Failure** | Handling timeouts, empty results, bottlenecks | Graceful degradation, predictable failure behavior |

Hard floor at the bottom: "Execute exactly as written. Do not optimize. Do not summarize. Do not interpret."

---

## 5. Enforcing UI/UX Design Quality Constraints

### 5.1 Machine-Readable Design Tokens

Natural language ("Use a calm blue for buttons") is too ambiguous. Define strict tokens:

- **Spacing**: `space-xs` (4px), `space-sm` (8px), `space-md` (16px)
- **Color semantics**: `color-action-primary` (#1A73E8), `color-surface-danger` (#FCE8E6)
- **Typography**: `text-heading-1` (24px, 700 weight, -0.5px tracking)

Critical rule: "You are strictly prohibited from generating raw hex codes or arbitrary pixel values. You must exclusively select variables from the provided design tokens matrix."

### 5.2 The Zoom-In Method (vs. the Mega-Prompt)

The Mega-Prompt (ingesting everything and generating in one pass) fails at scale. Instead, use a multi-pass pipeline:

1. **Macro Pass (Structure)**: Wireframe and layout hierarchy using semantic HTML, ignoring granular styling
2. **Meso Pass (Component Mapping)**: Validate hierarchy, populate with specific design system components
3. **Micro Pass (Token Polish)**: Apply precise design tokens, spacing variables, interaction states

Pause and validate between each step.

### 5.3 The KERNEL Prompting Framework

Force the LLM to analyze through a specific matrix before code:

```yaml
context: [specific user goal and workflow state]
task: [exact component hierarchy to build]
constraints: [forbidden aesthetic choices and token limits]
format: [target framework and required syntax]
```

This activates the model's "Theory of Mind" regarding the developer's requirements.

---

## 6. Overriding Aesthetic Biases

### 6.1 Why Negative Constraints Fail

Instructing "Do NOT use rounded corners" causes the model to focus attention on "rounded" and "corners", often generating exactly what was forbidden. This is a probabilistic limitation of next-token prediction.

### 6.2 Pairing Negations with Positive Routing

Instead of: "Do not use standard HTML checkboxes"

Use: "When a boolean selection is required, strictly utilize the custom `<ToggleSwitch>` component. Usage of native `<input type='checkbox'>` is a violation of the design protocol."

The positive instruction overwhelms the probability distribution toward the desired output.

### 6.3 System 2 Debiasing Prompts

Force analytical, deliberate reasoning instead of fast, associative defaults:

1. Elicit a base answer (initial UI plan)
2. Invoke critique: "Critique your proposed component structure. Identify any generic, default UI patterns. Regenerate the layout replacing them with high-contrast, brutalist design logic as defined in the typography rules."

This substantially mitigates biased, generic responses.

---

## 7. In-Context Learning and Few-Shot Optimization

### 7.1 The Over-Prompting Phenomenon

More examples do not universally yield higher accuracy. Excessive examples paradoxically degrade performance. The model becomes hyper-fixated on narrow nuances of examples rather than abstracting patterns.

Optimal: **2-4 highly diverse, carefully stratified examples** covering different edge cases (standard generation, error handling, complex state management).

### 7.2 Example Placement and Format

- Wrap examples in explicit XML tags (not blending into instructional text)
- Include `<user>`, `<agent_thought>`, `<tool_code>`, `<model>` components
- Leave off the final closing tag to force the LLM to continue in the demonstrated format

**Best placement order**:
1. Longform reference data (component guidelines) at top
2. Specific instructions in middle
3. Few-shot examples near bottom (before user query)

---

## 8. Injecting Structured Randomness for Diversity

### 8.1 Why Temperature Adjustments Fail for Code

High temperature disrupts strict probability chains required for syntax. Leads to hallucinated CSS classes, broken JSON payloads, invalid component logic.

### 8.2 Choice Libraries and Combinatorial Matrices

Define approved conceptual themes as arrays:

- **Layout Paradigms**: [Bento Grid, Staggered, Mosaic, etc.]
- **Typography Scales**: [Editorial, Condensed, Expressive, etc.]
- **Density Profiles**: [Sparse, Balanced, Dense, etc.]

Instruct the LLM to select one from each array, output the combination in a `<concept_matrix>` block, then generate strictly adhering to that unique combination.

### 8.3 Memetic Proxies and Role Configuration

Establish distinct designer personas for variety:

- **Persona A (Minimalist)**: Whitespace, monochromatic, ultra-clean, no borders
- **Persona B (Data Scientist)**: Information density, strict grid, high-contrast focal data
- **Persona C (Brand Expressionist)**: Bold, expressive, large typography, aggressive primary color

When generating multiple options, route through different persona filters to activate different clusters in the model's latent space.
