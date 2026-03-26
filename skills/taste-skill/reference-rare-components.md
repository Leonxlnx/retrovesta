# Reference: 200 Rare UI Components AI Models Almost Never Generate

> A catalog of technically sophisticated, creatively ambitious components that exist far outside the training distribution of current AI models. These are the patterns that distinguish hand-crafted, premium frontend work from generic AI output. Use this as inspiration and a differentiation toolkit.
>
> **Complexity:** ⚡ Quick (hours) · 🔧 Medium (1-2 days) · 🏗️ Complex (3+ days) · 🧪 Experimental (research-grade)

---

## Three.js / WebGL / 3D Components

- 🏗️ **3D Product Configurator** `[Three.js]` `[R3F]` — GLTF model with IBL lighting, PBR material swapping (metal, leather, fabric), and real-time environment reflections
- 🏗️ **Scroll-Driven 3D Camera Path** `[Three.js]` `[GSAP]` — camera follows a bezier spline through a scene synchronized to scroll position via ScrollTrigger
- 🧪 **Voronoi Particle Image Transition** `[WebGL]` `[GLSL]` — images decompose into Voronoi-tessellated particles that scatter and reassemble via fragment shader
- 🏗️ **Interactive Device Showcase** `[Three.js]` `[R3F]` — high-fidelity .glb laptop model with cinematic lid-open sequence and screen content rendered to texture
- 🧪 **Instanced Faceted Crystal Geometry** `[Three.js]` — thousands of reflective mirror planes on a torus knot using InstancedMesh with per-instance orientation matrices
- 🏗️ **Glass Refraction Material** `[R3F]` — real-time transmission, IOR, roughness, and caustics using MeshTransmissionMaterial
- 🏗️ **Infinite 3D Image Carousel** `[WebGL]` `[GLSL]` — images on plane geometries in a cylinder with scroll-driven sinusoidal vertex displacement
- 🧪 **Tearing Paper Gallery** `[Three.js]` — drag-to-rip photo splitting along procedural fracture lines with 3D rotation and shadow on torn edges
- 🏗️ **3D Earth with Atmosphere Shaders** `[Three.js]` `[GLSL]` — rotating globe with separate shader passes for daytime, nighttime city lights, clouds, and Fresnel glow
- 🔧 **Liquid Texture Loader** `[WebGL]` `[GLSL]` — images transitioning through fluid coordinate distortion using displacement maps in fragment shaders
- 🔧 **Kinetic Cylinder Image Animation** `[Three.js]` — images wrapped around cylinder geometry with animated texture offsets and custom backface materials
- 🏗️ **3D Weather Visualization** `[Three.js]` — conditional rain/snow/thunder from real API data using instanced rendering for thousands of particles at 60fps
- 🧪 **Procedural 3D Endless Runner** `[Three.js]` — fully generated infinite obstacle course with lane-based gameplay and collision detection, zero assets
- 🔧 **WebGL Pricing Table** `[Three.js]` `[R3F]` — pricing tiers with embedded real-time 3D crystal/sphere/torus renders per tier
- 🔧 **Shader-Based Image Gallery Reveal** `[Three.js]` `[GLSL]` — DOM images mirrored as Three.js planes with custom reveal shaders on viewport entry
- 🧪 **Generative Grid Artwork** `[Three.js]` — procedurally varied shapes with randomized colors, rotations, and subdivisions generating unique compositions per load
- 🧪 **Spectral Ghost Effect** `[WebGL]` `[GLSL]` — mouse-tracking translucent entity with analog signal decay, VHS scan lines, and volumetric glow
- 🧪 **Generative Flower Cursor Trail** `[WebGL]` — cursor as botanical paintbrush, procedurally generating blooming petal geometries along mouse path
- 🔧 **Neon 3D Tube Cursor Trail** `[Three.js]` — serpentine TubeGeometry trail following mouse with emissive lighting and click-randomized color palettes
- 🏗️ **SDF-Rendered 3D Text** `[Three.js]` `[GLSL]` — extruded typography with custom materials, scroll-driven animations, and real-time font morphing
- 🔧 **Data-Driven 3D Globe** `[Three.js]` `[R3F]` — interactive globe where data points render as 3D bars/pins with color and height mapped to values
- 🏗️ **3D Room Configurator** `[Three.js]` `[R3F]` — drag-and-drop room designer with collision detection, shadow baking, and material previews
- 🧪 **Raymarched Abstract Blob Hero** `[GLSL]` — organic blobs in a full-screen raymarched scene with smooth-blended SDFs responding to mouse
- 🔧 **Physics Card Flip** `[Three.js]` — physically simulated greeting cards that flip, tumble, and stack with spring-based throw mechanics
- 🏗️ **Interactive 3D Scatter Plot** `[Three.js]` `[R3F]` — data points as spheres with fly-through camera, tooltip raycast, and 3D axis labels

---

## GLSL Shader Effects

- 🏗️ **Metaball Blob Background** `[GLSL]` — smooth-blended spheres using polynomial smooth-minimum in a raymarched fragment shader
- 🔧 **Simplex Noise Wave Gradient** `[GLSL]` — multi-layered animated wave gradients using stacked simplex noise mapped to color ramps
- 🔧 **Neural Noise Shader** `[GLSL]` — synapse-like glowing noise using pow() for sharp tendrils with color cycling on scroll progress
- 🧪 **Reaction-Diffusion Patterns** `[GLSL]` — Gray-Scott model on GPU using ping-pong FBO creating Turing-like organic spots and labyrinths
- 🧪 **Raymarched Fractal Landscape** `[GLSL]` — entire 3D terrain from a single fragment shader using fractal Brownian motion with fog and sky
- 🔧 **Fluid Smoke Button** `[GLSL]` — button with embedded real-time generative fBM fluid dynamics as never-repeating animated background
- 🔧 **GPU Voronoi Diagram** `[GLSL]` — real-time Worley noise with animated seed points creating morphing tessellation patterns
- 🔧 **Cinematic Zoom Blur Transition** `[GLSL]` — radial/directional blur in fragment shaders creating depth-illusion zoom between images
- 🔧 **Dithering Post-Process** `[GLSL]` — ordered dithering (Bayer matrix) reducing scenes to limited palettes for retro/print aesthetic
- 🔧 **Perlin Terrain Mesh** `[GLSL]` — PlaneGeometry with vertex displacement by multi-octave Perlin noise, time-animated
- 🔧 **SDF Morphing Animation** `[GLSL]` — smooth interpolation between SDF primitives (sphere → torus → box) with normal recalculation
- ⚡ **Chromatic Aberration Hover** `[GLSL]` — per-channel UV offset on hover where mouse velocity drives split intensity
- 🔧 **Halftone Post-Process** `[GLSL]` — rendered scenes converted to CMYK halftone dots with adjustable size and per-channel angle
- 🔧 **Holographic Fresnel Material** `[GLSL]` — edge-glow with animated iridescent color shifting based on viewing angle plus time
- ⚡ **Glitch Screen Tear** `[GLSL]` — random horizontal displacement slices with color channel offset and scan-line noise
- 🔧 **ASCII Art Post-Process** `[GLSL]` — renders scene as ASCII characters with selection based on luminance value
- ⚡ **Gradient Map Shader** `[GLSL]` — remaps grayscale through custom color lookup tables for duotone/tritone effects
- 🧪 **Real-Time Pixel Sorting** `[GLSL]` — aesthetic pixel-sorting glitch running in real-time via fragment shader
- 🔧 **CRT Monitor Simulation** `[GLSL]` — scanlines, barrel distortion, phosphor glow, and screen curvature simulating vintage displays
- 🔧 **Ink Dispersion Shader** `[GLSL]` — images dissolving into ink-in-water dispersion using noise-driven alpha masking and color bleeding

---

## Canvas & Generative Art

- 🔧 **Flow Field Particles** `[Canvas]` — thousands of particles following 2D vector fields derived from layered simplex noise
- 🧪 **Fractal Flame Generator** `[Canvas]` — iterated function system transformations with log-density tone mapping and palette cycling
- 🧪 **Boid Flocking in Color Space** `[Canvas]` — Craig Reynolds' algorithm across spatial and color coordinates creating emergent swarms
- 🧪 **Digital Marbling Simulation** `[Canvas]` — physics-based Turkish Ebru with ink drops, combing tools, and fluid advection
- 🧪 **Chromata Pathfinder Art** `[Canvas]` — agents trace paths through images reading pixel data and altering course by configurable rules
- 🏗️ **Penrose Tiling Generator** `[Canvas]` — aperiodic P2/P3 tiling through recursive triangle subdivision with animated growth
- 🔧 **L-System Fractal Trees** `[Canvas]` — Lindenmayer system string rewriting with randomized angles, lengths, and branch probabilities
- 🧪 **Physarum Slime Mold** `[Canvas]` — agent-based chemotaxis simulation creating emergent network patterns from thousands of particles
- 🔧 **Custom Game of Life** `[Canvas]` `[WebGL]` — GPU-accelerated cellular automaton supporting custom birth/survival rules and pattern import
- 🔧 **Spirograph Engine** `[Canvas]` — layered parametric hypotrochoid/epitrochoid curves with randomized parameters
- 🔧 **Heatmap with Gaussian Kernel** `[Canvas]` — point-based heatmaps using kernel convolution with real-time color gradient mapping
- 🔧 **Poisson Disc Sampling** `[Canvas]` — blue-noise point distribution using Bridson's algorithm for organic stippling
- 🔧 **Strange Attractor Visualization** `[Canvas]` — Lorenz, Rössler, or Halvorsen attractor point clouds with depth-based coloring
- 🔧 **Delaunay Triangulation Mesh** `[Canvas]` — click-to-add-points mesh with animated edge insertion and colorized triangles
- 🔧 **Circle Packing Poster** `[Canvas]` `[SVG]` — recursive circle packing filling arbitrary shapes with color-mapped circles
- 🧪 **Differential Growth** `[Canvas]` — points connected by springs growing outward with collision, creating coral-like forms
- ⚡ **Maze Generator + Solver** `[Canvas]` — recursive backtracker or Kruskal's with animated generation and A* solve
- 🔧 **Generative Topographic Map** `[Canvas]` — contour lines from Perlin noise with elevation coloring
- 🏗️ **Pixel Art Editor** `[Canvas]` — full pixel art tool with layer support, palette management, and export
- 🏗️ **Mandelbrot/Julia Explorer** `[Canvas]` `[WebGL]` — GPU-accelerated fractal zoom with smooth coloring and orbit traps

---

## Fluid & Physics Simulations

- 🧪 **Navier-Stokes Fluid Background** `[WebGL]` — full GPU solver with advection, divergence, curl, vorticity, and Jacobi pressure
- 🧪 **3D Volumetric Smoke** `[WebGL]` — programmable 3D Navier-Stokes with buoyancy, temperature, and volume rendering
- 🧪 **WebGPU MPM Fluid** `[WebGPU]` — Material Point Method combining particles and grids for realistic soft-body/fluid
- 🏗️ **Cloth Simulation** `[Canvas]` `[WebGL]` — mass-spring system with wind, self-collision, and pin constraints via Verlet integration
- 🔧 **Spring Mesh Demolition** `[WebGL]` — spring-connected grid with interactive destruction forces and gravity
- 🧪 **Vortex Shedding Flow** `[WebGL]` — incompressible flow past obstacles exhibiting Von Kármán vortex streets
- 🧪 **Hydraulic Erosion Simulator** `[WebGL]` — water droplets carrying sediment based on velocity/slope creating river valleys
- 🔧 **Soft-Body Physics Blob** `[Canvas]` `[WebGL]` — closed mesh with internal pressure and spring surface tension
- 🔧 **Rigid Body Stacking** `[Cannon.js]` `[Rapier]` — blocks with realistic physics, friction, and collision
- ⚡ **Pendulum Wave Machine** `[Canvas]` — phase-synchronized pendulum array creating mesmerizing interference patterns
- ⚡ **Gravity Well Simulation** `[Canvas]` — point masses with Newtonian gravity attraction and orbital mechanics
- 🔧 **Falling Sand Game** `[Canvas]` — cellular automaton for sand, water, and oil interactions
- 🔧 **Magnetic Field Visualization** `[Canvas]` — real-time calculation and rendering of field lines from interactive dipoles

---

## Audio & Visualization

- 🏗️ **Audio-Reactive 3D Sphere** `[Three.js]` `[Web Audio]` — sphere vertices displaced by FFT frequency bins creating organic pulsating orb
- 🔧 **Audio-Reactive Particle Fountain** `[Canvas]` `[Web Audio]` — particles with velocity/color/lifetime driven by frequency amplitudes
- 🔧 **Circular Waveform Analyzer** `[Canvas]` `[Web Audio]` — frequency data rendered as radial bars with amplitude-mapped height and color
- 🔧 **3D Audio Spectrum Mountain** `[Three.js]` `[Web Audio]` — terrain mesh where vertex rows correspond to frequency bins
- 🔧 **Waveform Ribbon with Bloom** `[WebGL]` `[Web Audio]` — audio waveform as 3D ribbon mesh with bloom post-processing
- 🏗️ **ADSR Synthesizer** `[Web Audio]` — playable synth with attack/decay/sustain/release and real-time spectrum display
- 🏗️ **Spatial Audio 3D Panner** `[Three.js]` `[Web Audio]` — movable sound sources using HRTF filtering with camera movement
- 🧪 **Audio-Driven Slime Mold** `[Canvas]` `[Web Audio]` — Physarum chemotaxis parameters modulated by frequency bands
- 🔧 **Voice-Reactive Waveform Avatar** `[Web Audio]` — microphone input driving a stylized waveform as visual identity
- ⚡ **Beat-Detection Color Flash** `[Web Audio]` — real-time beat detection triggering synchronized UI color shifts
- 🔧 **Spectrogram Waterfall** `[Canvas]` `[Web Audio]` — scrolling time-frequency spectrogram as color-mapped waterfall
- 🏗️ **Parametric Drum Machine** `[Web Audio]` — step sequencer where each beat triggers audio synthesis and visual percussion

---

## WebGPU & Next-Gen

- 🧪 **Galaxy Simulation (1M+ particles)** `[WebGPU]` — compute shader gravitational physics with procedural color and mouse-force perturbation
- 🧪 **GPU-Curtains DOM-Synced Shaders** `[WebGPU]` — HTML elements becoming WGSL shader-driven geometry in sync with CSS layout
- 🧪 **WebGPU Slime Mold** `[WebGPU]` — GPU compute chemotaxis producing transport network patterns at interactive framerates
- 🧪 **Visual Shader Editor** `[WebGPU]` — patch-based interface for building WGSL logic with real-time preview compilation
- 🧪 **Image Filter Playground** `[WebGPU]` — compute shader halftone, dithering, edge detection, and noise processing
- 🧪 **TSL Displacement Material** `[Three.js]` `[WebGPU]` — Three.js Shading Language for noise-displaced meshes with WebGPU/WebGL dual compilation
- 🧪 **FFT Ocean Surface** `[WebGPU]` — Tessendorf wave synthesis with foam generation, reflection/refraction, and Fresnel
- 🧪 **Real-Time Ray Tracing** `[WebGPU]` — path tracing with bounced lighting, soft shadows, and caustics entirely in compute shaders

---

## AR/VR & WebXR

- 🏗️ **AR Product Placement** `[WebXR]` `[Three.js]` — 3D products in real-world environment via phone camera with surface detection and shadows
- 🏗️ **VR Gallery Walk-Through** `[WebXR]` `[Three.js]` — immersive museum with teleportation, spatial audio, and hand-tracking interaction
- 🏗️ **AR Face Filters** `[TensorFlow.js]` `[Three.js]` — FaceMesh + 3D overlays anchored to facial landmarks
- 🏗️ **Spatial UI Panels in MR** `[WebXR]` `[@react-three/xr]` — floating 2D panels in 3D space with hand and gaze interaction
- 🔧 **360° Panoramic Photo Sphere** `[Three.js]` — equirectangular projection with gyroscope control and interactive hotspots
- 🔧 **AR Measurement Tool** `[WebXR]` — room measurement using hit-test API and persistent distance lines
- 🏗️ **WebXR Hand-Tracking Piano** `[WebXR]` `[Web Audio]` — virtual piano played with tracked finger positions and synthesis

---

## Scroll-Driven CSS Animations

- ⚡ **Scroll Progress Reading Bar** `[CSS only]` — using `animation-timeline: scroll()`, pure CSS, no JavaScript
- 🔧 **Scroll-Driven Parallax Hero** `[CSS only]` — multiple layers with different `animation-timeline: scroll()` keyframe ranges
- ⚡ **View-Timeline Card Cascade** `[CSS only]` — cards fading+sliding via `animation-timeline: view()` with zero JS
- 🔧 **Scroll-Snap Carousel with Scaling** `[CSS only]` — items scale/blur based on center proximity via `animation-timeline: view(inline)`
- ⚡ **Header Shadow-on-Scroll** `[CSS only]` — nav gaining box-shadow progressively via `animation-timeline: scroll()`
- 🔧 **Horizontal Scroll-Jacking** `[CSS only]` — vertical scroll driving horizontal translation via `animation-timeline: scroll(block)`
- 🔧 **Album Cover 3D Flick** `[CSS only]` — covers rotating in 3D perspective during scroll using `view()` with `rotateY`
- 🔧 **Scroll-Driven Navbar Morph** `[CSS only]` — transparent overlay morphing to compact fixed header with blur via scroll()
- ⚡ **Paragraph Highlight Reveal** `[CSS only]` — `<mark>` background animating from 0% to 100% width via `animation-timeline: view()`
- 🔧 **Text Path on SVG Curve** `[CSS]` `[SVG]` — text flowing along `<textPath>` with `startOffset` driven by scroll position

---

## CSS @property & Houdini

- ⚡ **Animated Gradient Border Rotation** `[CSS only]` — `@property --angle` rotating a `conic-gradient` border around a card
- 🔧 **Gradient Color-Stop Waves** `[CSS only]` — registered `<percentage>` properties animated in `linear-gradient` stops creating ocean waves
- ⚡ **Hue-Cycling Rainbow Scroll** `[CSS only]` — `@property --hue` as `<angle>` animated via scroll creating rainbow shifts in `oklch()`
- 🔧 **Animated Mesh Gradient** `[CSS only]` — multiple `@property` color variables animated at different rates in stacked radial gradients
- 🔧 **Spotlight/Flashlight Reveal** `[CSS only]` — `@property --cx/--cy` tracking cursor driving a `radial-gradient` mask
- 🏗️ **Generative Blob Paint Worklet** `[CSS Houdini]` — `registerPaint('blob')` with PRNG-seeded organic shapes
- 🔧 **Confetti Paint Worklet** `[CSS Houdini]` — custom confetti particles reading `--confetti-count` and `--confetti-size`
- 🔧 **Sparkle/Snow Paint Worklet** `[CSS Houdini]` — Canvas-based particles in paint worklet with noise-based drift
- 🔧 **Diagonal Border Clip Worklet** `[CSS Houdini]` — paint worklet drawing non-rectangular borders (waves, diagonal cuts)
- ⚡ **CSS Anchor Positioned Tooltip** `[CSS only]` — CSS Anchor Positioning API with `@position-try` fallback chains, no JS
- 🔧 **CSS `linear()` Spring Easing** `[CSS only]` — 20+ stops approximating spring curves purely in CSS transitions
- 🔧 **CSS Elastic Overscroll** `[CSS only]` — rubber-band pull effect using `scroll-snap` + `animation-timeline: scroll()`

---

## View Transitions API

- 🔧 **Cross-Document Page Morph** `[View Transitions]` — `@view-transition { navigation: auto; }` with matched `view-transition-name` for MPA
- 🔧 **Add-to-Cart Dot Animation** `[View Transitions]` — button dot morphing and flying to cart icon via `::view-transition-old/new`
- 🔧 **Drag-Reorder with Transitions** `[View Transitions]` — DOM reorder in `startViewTransition()` for smooth FLIP-like animation
- 🔧 **Kanban Column Bounce** `[View Transitions]` — items animating between columns with `::view-transition-group` bounce keyframes
- 🔧 **Container-Query Card Morph** `[CSS]` `[View Transitions]` — `@container` queries transitioning horizontal to vertical card layout
- ⚡ **Tabbed Content Swap** `[View Transitions]` — smooth view transition between tab panels preserving common elements

---

## GSAP & Advanced Animation

- 🔧 **3D Cylinder Text Scroll** `[GSAP]` `[CSS 3D]` — letters on a CSS 3D cylinder with ScrollTrigger scrubbing rotation
- 🔧 **Flip Plugin Layout Morph** `[GSAP Flip]` — grid-to-list toggle with `Flip.from()` and spring stagger
- 🔧 **Pinned Horizontal Scroll Gallery** `[GSAP]` — section pinned with `ScrollTrigger.pin()` translating horizontally with per-image parallax
- ⚡ **SplitText Character Reveal** `[GSAP]` — text split into spans animated with `stagger: { each: 0.014 }` cascading
- 🔧 **MorphSVG Navigation** `[GSAP]` — hamburger morphing through organic blob before settling into X
- 🏗️ **Lenis + GSAP Cinematic Scroll** `[Lenis]` `[GSAP]` — physics-based inertial scrolling with pinning, scrubbing, and narratives
- 🔧 **Draggable with Momentum** `[GSAP]` — elements dragged with physics-based momentum snapping to grid via `inertia: true`
- 🔧 **MotionPath SVG Animation** `[GSAP]` — element following complex bezier paths on scroll with auto-rotation along tangent
- ⚡ **Spring Button Squash/Stretch** `[GSAP]` `[Framer Motion]` — Disney-style compression on press with spring bounce release
- ⚡ **Layout Animation List Reorder** `[Framer Motion]` — `layout` and `layoutId` props with `AnimatePresence` for enter/exit
- 🔧 **Spring Drag with Velocity Handoff** `[Framer Motion]` — released elements continuing with imparted velocity and friction
- 🔧 **Physics Dialog Squash** `[GSAP]` `[Framer Motion]` — modal entering with spring overshoot and squash-and-stretch
- 🔧 **Per-Axis Spring Stiffness** `[Popmotion]` — different spring parameters for X and Y creating asymmetric motion
- 🔧 **Staggered Blinds Transition** `[GSAP]` — venetian-blinds strips sliding and rotating sequentially via timeline

---

## Micro-Interactions

- ⚡ **Magnetic Proximity Button** `[JS]` — button translating toward cursor within configurable radius using `requestAnimationFrame` + `lerp()`
- 🔧 **Context-Morphing Custom Cursor** `[JS]` — cursor scaling over links, morphing to text icon over paragraphs, showing labels
- 🔧 **Noisy Circle Cursor** `[Paper.js]` — simplex-noise-distorted circle warping organically and snapping clean over nav
- 🔧 **Flashlight Text Reveal** `[CSS]` `[JS]` — radial-gradient mask following cursor revealing hidden text
- ⚡ **Motion Blur Cursor Trail** `[JS]` — multiple circles with increasing delays creating ghosting effect
- 🔧 **Velocity-Based Cursor Skew** `[JS]` — cursor calculating movement velocity and applying proportional `skewX`/`skewY`
- 🔧 **Liquid Fill Radio Button** `[SVG]` — liquid drop animation filling circle from bottom on selection
- 🔧 **Directional Press Ripple** `[JS]` — Material ripple plus button bending in press direction
- 🔧 **Viscous Toggle Switch** `[SVG]` — handle stretching like liquid blob using SVG gooey filter
- ⚡ **Elastic Star Rating** `[Framer Motion]` — stars popping with spring overshoot when clicked, shrinking softly when unselected
- 🔧 **3D Tilt Card with Parallax + Glare** `[JS]` — perspective + rotateX/Y from mouse, layered translateZ, glare overlay
- 🔧 **Hamburger Blob Morph** `[SVG]` `[GSAP]` — three-line icon morphing through organic blob into X
- ⚡ **Scroll-Velocity Motion Blur** `[JS]` — elements gaining `filter: blur()` proportional to scroll speed
- 🔧 **Hover-Reveal Spotlight** `[CSS]` `[JS]` — dark overlay with cursor-following circular clip-path mask
- 🔧 **Elastic Text Distortion** `[JS]` — text warping away from cursor like rubber, snapping back on leave

---

## Typography Experiments

- 🔧 **Variable Font Cursor Distance** `[JS]` `[Variable Fonts]` — per-character `font-variation-settings: 'wght'` changing by mouse proximity
- 🔧 **Variable Font Width on Scroll** `[CSS]` `[Variable Fonts]` — heading stretching condensed → expanded via `animation-timeline: scroll()`
- ⚡ **Per-Character Spring Reveal** `[Splitting.js]` `[GSAP]` — characters animated with spring y and opacity at 14ms stagger
- 🔧 **Kinetic 3D Typography on Scroll** `[GSAP]` `[CSS 3D]` — each word on separate 3D-rotated plane scrubbing on scroll
- 🔧 **Scroll-Velocity Text Distortion** `[Blotter.js]` — RollingDistortMaterial with distortion mapped to scroll delta
- ⚡ **Scramble/Decode Text Reveal** `[JS]` — characters cycling through random glyphs before settling (decryption effect)
- 🔧 **Split-Flap Board Transition** `[CSS 3D]` `[JS]` — mechanical Solari display with 3D rotateX flip between characters
- 🔧 **Text Path SVG on Scroll** `[SVG]` `[GSAP]` — `<textPath>` with animated `startOffset` creating text flowing along curves
- 🏗️ **WebGL Flowmap Typography** `[WebGL]` — text with fluid-simulation distortion where cursor creates wave ripples
- 🔧 **Generative Per-Letter Mods** `[JS]` `[Canvas]` — each letter procedurally stroked, filled, or distorted uniquely per load
- ⚡ **Breathing Headline** `[CSS]` — display text with subtle scale oscillation and letter-spacing animation

---

## Form Interactions

- 🔧 **Floating Label with Liquid Underline** `[SVG]` `[CSS]` — label animating up on focus while SVG wave path animates as underline
- ⚡ **Elastic Validation Shake** `[Framer Motion]` `[GSAP]` — invalid fields shaking with spring physics, dampened oscillation
- 🔧 **Progress Multi-Step Form** `[JS]` `[CSS]` — connecting line filling progressively with spring bounce on completion
- 🔧 **Morphing Submit Button** `[SVG]` `[CSS]` — button morphing from rectangle to circle to loader to checkmark
- ⚡ **Slot-Machine Character Count** `[Framer Motion]` — counter with AnimatePresence for slot-machine number transitions
- ⚡ **Spring Auto-Expanding Textarea** `[JS]` — height changes animated via spring using ResizeObserver
- 🔧 **Drag-to-Reorder Form Fields** `[GSAP Flip]` — form fields reorderable via drag with FLIP animation
- 🔧 **Credit Card Flip Preview** `[CSS 3D]` `[JS]` — card number/expiry/CVV driving a 3D card that flips to show CVV

---

## Navigation Patterns

- 🔧 **Morphing SVG Nav Indicator** `[GSAP Flip]` — active indicator morphing and sliding to new position
- 🔧 **Orbital/Radial Menu** `[JS]` `[Framer Motion]` — items in a circle around central button, revealed with staggered spring
- 🔧 **Gesture Navigation with Velocity** `[JS]` — swipe momentum determining complete or snap-back, like iOS back-swipe
- 🔧 **Gooey Tab Indicator** `[SVG]` `[CSS]` — active indicator sliding between tabs with liquid stretch via SVG blur + color matrix
- 🔧 **Typewriter Command Palette** `[JS]` — command-line navigation with fuzzy matching and typewriter text rendering
- 🏗️ **3D Spatial Navigation** `[Three.js]` — menu items in 3D space where camera movement serves as navigation
- 🔧 **Stacked Deck Page Nav** `[GSAP]` `[CSS 3D]` — pages as card deck with swipe-to-reveal and 3D depth
- 🔧 **Horizontal-Vertical Scroll Hybrid** `[GSAP]` — sections alternating between horizontal and vertical scrolling

---

## Scroll Storytelling & Creative Transitions

- 🔧 **Pinned Scene with Internal Scroll Animation** `[GSAP]` — full-viewport scene pinned while scroll drives 360° product rotation
- 🔧 **Scroll-Triggered SVG Line Drawing** `[GSAP]` `[SVG]` — illustration drawing itself via `stroke-dashoffset` tied to scroll
- 🔧 **SVG Morphing Page Transition** `[GSAP MorphSVG]` — blob overlay expanding from clicked element position
- 🔧 **Clip-Path Reveal Transition** `[CSS]` `[JS]` — animated `clip-path: polygon()` splitting page into sliding quadrants
- 🧪 **WebGL Dissolve Transition** `[Three.js]` `[GLSL]` — content dissolving into particles that reconstitute into new page
- 🔧 **Sticky Comparison Slider** `[GSAP]` — two overlapping images in pinned section with scroll-controlled divider
- ⚡ **Chapter-Based Progress Bar** `[JS]` `[CSS]` — reading progress with chapter markers, current chapter highlighted

---

## Creative Patterns & Novel Components

- 🏗️ **Interactive 404 Mini-Game** `[Canvas]` `[JS]` — playable Snake/Breakout on error page where "404" serves as game elements
- ⚡ **Grainy Gradient Cards** `[SVG]` `[CSS]` — organic analog textures via `feTurbulence` layered under CSS gradients
- 🏗️ **Real-Time Collaborative Cursors** `[WebSocket]` `[CRDT]` — Figma-style multiplayer cursors with name labels
- 🏗️ **Parametric Rive Configurator** `[Rive]` — sliders parametrically modifying visuals by interpolating between state machine states
