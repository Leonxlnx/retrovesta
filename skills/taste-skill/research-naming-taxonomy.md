# Design-Forward UI Component Naming Taxonomy

> Comprehensive vocabulary for instructing LLMs to generate agency-grade interfaces

---

## 1. The Semantic Architecture of Generative Design

Standard Atomic Design nomenclature ("Card", "Hero", "Navbar") restricts generated output to conventional framework boundaries. When a prompt requests a generic "Dropdown Menu", it yields a standard HTML `<select>`. Prompting for an "Orbital Navigation Dock" signals radial layout with trigonometric positioning and spring animations.

The evolution from describing functional identity to detailing behavioral kinetics and spatial presence is what separates generic from premium generative output.

### Structural Methodologies

| Methodology | Definition | Generative AI Implication |
|---|---|---|
| **BEM** (Block, Element, Modifier) | `block__element--modifier` for strict CSS encapsulation | Optimal for generating raw CSS/SCSS; avoids nested selectors |
| **CEV** (Context, Element, Variant) | `Article_Card_Large` | Provides narrative and spatial context before the atomic unit, improving relevance |
| **RSCSS** | Separates layout structures from state rules and themes | Useful for state-driven interactive components |
| **SMACSS** | Categorizes into Base, Layout, Module, State, Theme | Guides the LLM to structure large stylesheets logically |

Casing conventions act as syntactic signals:
- `kebab-case`: CSS class names, HTML attributes
- `PascalCase`: React/Vue/Next.js component instantiation
- `camelCase`: JavaScript functions, hooks, variables

---

## 2. High-End Editorial and Typographic Nomenclature

Replacing generic web terms with editorial equivalents drastically alters generated visual hierarchy.

### Macro Layout Terms

| Term | Instead of | What it signals to the LLM |
|---|---|---|
| **Masthead** | "Navbar" / "Header" | Bold, brand-defining intro section with Nameplate (SVG logo), navigation, dynamic date tracking. Full viewport. |
| **Folio** | "Footer" / "Pagination" | Persistent bottom information: issue names, secondary nav, legal notices. Often sticky. |
| **Gutter** | "margin" / "padding" | Central channel between structural text columns. Defines horizontal rhythm of the entire page. |

### Typographic Anatomy

| Term | What it does | Prompt effect |
|---|---|---|
| **Lede** (Lead) | Introductory narrative section | Distinct typographic scale, larger font size, heavier weight, distinct line-height |
| **Slug / Slugline** | Condensed catchline above headline | Aggressive tracking, uppercase, eyebrow heading for thematic context |
| **Tracking** | Uniform horizontal spacing across text block | Creates airy, premium button labels and Sluglines |
| **Kerning** | Localized spacing between character pairs | Triggers `font-kerning: normal` or `text-rendering: optimizeLegibility` |
| **Baseline Grid** | Invisible horizontal line typography rests on | Forces mathematically proportionate `line-height` and `margin` values |
| **Leading** | Vertical space between baselines | Rhythmic, harmonious layouts mimicking print |

---

## 3. Spatial and Unconventional Layout Architectures

### Key Layout Paradigms

**Bento Grid (Bento Box)**
Compartmentalized layout mixing heterogeneous content (text, 3D models, video, data) in asymmetrical, tightly packed rounded rectangles. Instructs the model to use CSS Grid with variable `grid-column` and `grid-row` spans. Not flexbox.

**Mosaic Layout**
Highly structured yet visually irregular. Puzzle-like interlocking across both X and Y axes simultaneously. Not masonry (which only staggers vertically).

**Staggered / Fragmented Architecture**
Containers intentionally misaligned, breaking the rigid vertical axis. Creates forward momentum and organic flow. Used in high-end creative portfolios.

**Contemporary trends** (from Godly.website):
- "Islands of animated media" within long-form text
- Scroll-driven animated assets in distinct spatial zones
- Annotations appearing sequentially during navigation
- Generous asymmetrical negative space

---

## 4. Advanced Navigation Paradigms

| Paradigm | Description | Technical Requirements |
|---|---|---|
| **Orbital / Radial Menu** | Circular navigation, options radiate from central node | Trigonometry (sin/cos) for positioning, rotational physics animations |
| **Floating Dock** | Detached hovering nav bar with proximity-based icon magnification | Complex event listeners, bounding box calculations |
| **Perspective / 3D Canvas** | Uses Z-axis for visual depth | CSS `perspective`, `preserve-3d`, `translateZ`, or Three.js/WebGL |

### Navigation Toggle Iconography

| Name | Geometry | Use Case |
|---|---|---|
| **Hamburger** | Three equal horizontal lines | Universal mobile nav toggle |
| **Doner** | Three lines decreasing in length top to bottom | Filtering action, dynamic visual weight |
| **Meatballs** | Three horizontal dots | Contextual overflow menus, action sheets |
| **Bento** | 3x3 grid of dots/squares | App-launcher, multi-module dashboard |

---

## 5. Motion-Forward and Kinetic Terminology

### Core Transition Choreography (Material Design)

| Pattern | Animation Behavior | Use Case |
|---|---|---|
| **Container Transform** | Element expands to fill screen, morphing into detailed view | Maintains navigational context during state change |
| **Shared Axis** | Elements move in tandem along X, Y, or Z axis | Sequential content (onboarding steps, wizard flows) |
| **Fade Through** | Outgoing fades, container clears, incoming fades in with slight scale-up | Unrelated content transitions |

### Physics-Based Motion

| Term | Behavior | Technical Implementation |
|---|---|---|
| **Elastic / Spring Dynamics** | Overshoots target, bounces back, settles | Stiffness, damping, mass parameters (Framer Motion, React Spring) |
| **Viscous / Liquid Effects** | Fluid dynamics simulation | SVG morphing, CSS Gooey filters (`feGaussianBlur` + `feColorMatrix`), WebGL shaders |
| **Magnetic Elements** | Components pulled toward cursor on approach | Distance vector calculation between cursor coordinates and bounding box |
| **Inertial Scrolling** | Retained momentum after release, gradual deceleration | Custom friction algorithms |

### Kinetic Typography

- **Flip Words**: Rapidly cycling strings within a single container
- **Text Generate Effect**: Staggered character-by-character fade-in
- **Typewriter Effect**: Sequential character reveal with cursor

### Animation Technology Stack

**GSAP**: Industry standard for timeline-heavy, complex sequential animations
- Keywords: "Timeline-based sequences", "ScrollTrigger", "MorphSVG"
- Strength: Precise absolute control over time and easing

**Framer Motion**: Preferred for React, declarative spring animations
- Keywords: "Layout Transitions", "Shared Layout", "Variants", `whileHover`, `whileTap`
- Strength: Declarative, gesture-driven animations

### Onomatopoeic Animation Conventions

| Term | Motion | Easing Profile |
|---|---|---|
| **Pop** | Rapid scale-up (0.8 to 1.1 then settle to 1.0) | High bounce and overshoot. For success states, notifications. |
| **Swoosh** | Swift sweeping motion across wide axis | Pronounced ease-in, dramatic ease-out |
| **Snap** | Instantaneous rigid alignment to grid/target | No bounce. Finality and precision. |

---

## 6. Scrollytelling and Narrative Progression

Transforms the scrollbar into an interactive timeline scrubber.

| Pattern | Behavior | Implementation |
|---|---|---|
| **Graphic Sequence** | Discrete visuals swap at scroll thresholds | `position: sticky` container, opacity toggling via Intersection Observer |
| **Animated Transition** | Continuous morphing mapped to scroll progress | CSS properties bound to `scrollY` via GSAP ScrollTrigger |
| **Moviescroller** | Frame-by-frame image sequence tied to scroll | `<canvas>` drawing sequential images from preloaded array |
| **Show-and-Play** | Media auto-activates when entering viewport | HTML5 media APIs controlled by intersection logic |
| **Pan and Zoom** | Scroll controls camera perspective over large asset | Dynamic `transform-origin` and matrix scaling |

Specialized libraries: **Scrollama** for mathematically complex scroll intersections.

---

## 7. Micro-Interactions and Affective Feedback

The anatomy: **Trigger** (what initiates) -> **Rules** (what happens) -> **Feedback** (what user perceives) -> **Loops/Modes** (what changes over time)

| Component | Description |
|---|---|
| **Hover Growth / Scale State** | `transform: scale(1.05)` on hover. Signals interactivity. |
| **On-Click Ripple** | Circular wave expanding from exact click coordinate |
| **Shimmer / Sweep Button** | Translucent gradient endlessly sweeping across background |
| **Success Checkmark / Morphing Confirmation** | Button morphs shape (rectangle to circle), draws animated SVG checkmark |
| **Tooltip Fade-In / Hover Card** | Slight Y-translation + opacity fade, not instant |
| **Skeleton Screen / Placeholder Loader** | Low-fidelity wireframe pulses/shimmers during data fetch |
| **Animated Toggle / Toggle Slider** | Smooth thumb translation + background color morph |

---

## 8. Avant-Garde UI Libraries

### Aceternity UI (Spatial, Cinematic)

- **Aurora Background**: Organic animated gradients mimicking Northern Lights
- **Background Beams with Collision**: Physics-based vectors exploding on collision with DOM boundaries
- **Wobble Card**: Real-time perspective shift responding to mouse coordinates (3D parallax)
- **Text Reveal Card**: Text revealed within a radius around moving cursor (flashlight effect)
- **Tracing Beam**: Vertical SVG path tracking scroll progress with glowing aura

### Magic UI (Micro-interactions, Text Animations)

- **Orbiting Circles**: Logos/avatars revolving around a central node
- **Progressive Blur**: Stepped Gaussian blur along gradient mask to fade container edges
- **Animated Beam**: Glowing stroke path visualizing data transfer between two points
- **Marquee**: Infinite scrolling banner for client logos or ticker text

### Other Libraries

- **HyperUI**: Extensive collection of ready-to-use Tailwind components
- **CuiCui**: Fresh, opinionated brutalist/experimental aesthetics

---

## 9. Elite Agency Nomenclature

### Locomotive (Montreal)

- **Charcoal CMS**: Internal infrastructure with Templates, Widgets, Property Inputs
- **Fluid Flag Effect**: WebGL shader where images ripple based on cursor interaction, intensity tied to pixel brightness
- **Elastic Lines**: SVG paths that stretch and snap based on user drag
- **L.I.S.A.**: Interactive assistant with circle visualizations for speech

### Active Theory (Los Angeles)

- **Hydra**: Proprietary optimized 3D engine for max GPU throughput
- **Aura**: Cross-compilation architecture for iOS, Android, Desktop, VR

### Resn

- Treats the entire browser as a single fluid canvas (not separate HTML pages)
- Naming focuses on transitional states between content, not static blocks

### Pitch

- Outputs classified as "Makers" (AI Presentation Maker) and "Decks" (Sales Decks)
- Internal classification as "dynamic assets" vs. "dead documents"

---

## 10. Synthesizing the Lexicon for AI Prompts

Generic prompt:
> "Create a landing page"

The model defaults to the mathematical average of all training data landing pages.

Design-forward prompt:
> "Generate an editorial-forward landing page. Utilize a Bento Grid architecture. The Masthead should feature a Fluid Flag Effect background using WebGL shaders. Implement a Sticky Scroll Reveal with Shared Axis transitions mapped to `scrollY`. Typography must adhere to a strict Baseline Grid with an aggressively tracked Slugline above the primary Lede. All primary button interactions should feature Hover Growth, On-Click Ripple, and Elastic ease-out physics."

This forces: CSS Grid for layout, Intersection Observers + GSAP ScrollTrigger for scrollytelling, WebGL/Canvas for fluid backgrounds, physics-based animation libraries for micro-interactions.
