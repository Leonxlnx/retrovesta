# Reference: 200 AI Tells in Frontend UI Output

> A comprehensive catalog of telltale patterns that betray AI-generated websites and apps. These "AI Tells" are the visual, structural, and behavioral fingerprints that make vibecoded output instantly recognizable. Use this reference to audit your own output and systematically eliminate generic patterns.
>
> **Severity:** 🔴 Instant tell (detected in <1 second) · 🟡 Common pattern (noticeable on inspection) · 🟢 Subtle (only experts notice)

---

## Color & Gradient Patterns

- 🔴 **Purple/indigo default accent** — `bg-indigo-500`, `bg-violet-600`, or `bg-purple-700` dominating the entire palette
- 🔴 **Purple-to-blue hero gradient** — `bg-gradient-to-r from-purple-500 to-blue-500` on hero sections
- 🟡 **Purple-to-pink gradient variant** — `bg-gradient-to-r from-purple-500 to-pink-500` on buttons and headers
- 🟡 **Cyan-to-indigo gradient** — `from-cyan-400 to-indigo-600` as alternative accent gradient
- 🔴 **Gradient text on H1** — `bg-clip-text text-transparent bg-gradient-to-r` applied to hero headlines
- 🟡 **Sterile white backgrounds** — `bg-white` or `bg-gray-50` creating a clinical, lifeless feel
- 🟡 **Flat dark mode** — `bg-gray-900` with zero surface-color nuance or elevation hierarchy
- 🟡 **Neon accents in dark mode** — cyan `#00fff7`, pink `#ff2d95`, acid green `#39ff14`
- 🟢 **`#6366f1` everywhere** — indigo-500 as the go-to accent, straight from Tailwind defaults
- 🟡 **"Tailwind Blue"** — `text-blue-600` or `bg-blue-500` as fallback when not purple
- 🟢 **Unmodified Tailwind palette** — `indigo-500`, `gray-100` used without any customization
- 🟢 **Timid color distribution** — evenly-distributed palette with no dominant color or sharp accents
- 🟡 **Radial gradient card fills** — random radial gradients inside cards for a "modern look"
- 🟡 **Aurora/light-leak hero backgrounds** — blurred colorful shapes floating behind hero content
- 🟡 **CSS mesh gradient heroes** — `linear-gradient(135deg, rgba(99, 102, 241, 0.1)...)` layered backgrounds
- 🟢 **Same-color fill + border on cards** — low-opacity colored fills with matching colored borders
- 🟡 **Soft pastel voids** — glassmorphic cards floating in pastel color fields with no grounding
- 🟢 **No semantic color system** — colors used decoratively rather than functionally (error, success, warning)
- 🟡 **Semi-transparent purple hero overlays** — gradient overlay on hero images using purple/blue
- 🟡 **Neon purple on dark = "dark mode"** — neon purple accent on dark background as universal dark theme
- 🟢 **Binary theming** — `bg-white dark:bg-gray-900` with zero intermediate surface colors
- 🟢 **Uniform 0.1 opacity shadows** — `rgba(0,0,0,0.1)` on every card without variation

---

## Typography Patterns

- 🔴 **Inter font** — the single most recognized AI tell, called "the Comic Sans of AI"
- 🟡 **Roboto fallback** — secondary default when Inter isn't used
- 🟡 **System sans-serif** — `font-sans` resolving to Arial/system fonts with zero personality
- 🟡 **Space Grotesk convergence** — even when told to avoid Inter, AI converges here
- 🟢 **Open Sans "safe" choice** — the "safe" alternative from training data dominance
- 🔴 **No font pairing** — single font family for everything, no serif + sans-serif mixing
- 🟡 **`font-semibold` everywhere** — headings use semibold instead of proper weight hierarchy
- 🟡 **Conservative size jumps** — 1.5× between heading levels instead of dramatic 3×+ jumps
- 🟢 **Identical type scale** — `text-2xl` titles, `text-lg` sections, `text-sm` labels across all outputs
- 🟡 **Generic uppercase headers** — `uppercase tracking-wide` on all section headers
- 🟢 **Missing font import** — `font-family` declaration without the actual Google Fonts import
- 🔴 **No display font** — same font for headings and body text, zero typographic contrast
- 🟢 **Binary weight usage** — only `font-bold` and `font-medium` as weight variations
- 🟢 **`tracking-tighter` as flourish** — tracking-tighter on hero headings as the only typographic treatment
- 🟢 **Default Tailwind type scale** — zero customization of the built-in typographic scale
- 🟢 **No custom typefaces** — real brands commission or license custom type, AI never does

---

## Layout & Structure Patterns

- 🔴 **Hero Left Text, Right Image** — the single most common AI landing page pattern
- 🔴 **Three feature boxes below hero** — `grid grid-cols-3 gap-6` with icon + title + description cards
- 🔴 **Template section ordering** — Hero → Features (3 cards) → Testimonials → Pricing → CTA → Footer
- 🟡 **Centered hero + gradient CTA** — centered hero text with a single gradient-filled CTA button
- 🟡 **Perfect symmetry everywhere** — no asymmetry, overlap, or grid-breaking elements
- 🟡 **Sidebar dashboard** — `flex h-screen` with `w-64 border-r` sidebar + main content area
- 🟢 **`max-w-7xl mx-auto` on everything** — same container pattern on every page section
- 🟡 **Stacked cards** — cards stacked vertically instead of purposeful spatial composition
- 🟢 **Uniform padding** — `p-4` for cards, `p-6` for sections, applied everywhere without variation
- 🟢 **Uniform spacing** — `space-y-4` between form fields, `space-y-6` between sections
- 🟡 **Logo strip below hero** — grayscale partner/client logos in a row
- 🟡 **Narrative-less carousel** — carousel added as filler content with no storytelling purpose
- 🟡 **Cards inside cards** — 3+ levels of nested visual containers
- 🟡 **Hero Metric Layout** — big number + small label + gradient accent in every dashboard
- 🟢 **Identical measurements** — 24px padding, 16px border-radius, identical card heights throughout
- 🟡 **Default bento grid** — bento grid for feature sections as the trendy default
- 🟡 **Oversized hero sections** — hero taking up disproportionate viewport space
- 🟡 **Gradient + floating white cards** — full-bleed gradient backgrounds with white cards on top
- 🟢 **Nested box decoration** — icons inside boxes inside other boxes
- 🟡 **Three-tier pricing** — exactly 3 tiers (Free/Pro/Enterprise) every time
- 🟡 **Dashboard-as-hero** — complex UI screenshot in the hero that nobody understands
- 🟡 **Universal responsive grid** — `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- 🟢 **`flex-col md:flex-row`** — for every responsive column-to-row conversion
- 🟡 **Broken mobile layouts** — designs that work on desktop but break on mobile
- 🟢 **Centering everything** — `flex items-center justify-center min-h-screen`
- 🟢 **Emotionally cold layouts** — perfectly symmetrical, zero visual tension
- 🟢 **Repetitive mood sections** — sections restating the same value in slightly different words

---

## CSS & Tailwind Patterns

- 🟡 **`rounded-2xl` on everything** — excessive border-radius on all elements
- 🟡 **Pill buttons** — `rounded-full` on every CTA
- 🟡 **Universal shadow** — `shadow-lg` / `shadow-xl` as card shadow without variation
- 🟡 **Default glassmorphism** — `backdrop-blur-lg bg-white/30 border border-white/20` on cards and navbars
- 🟢 **`border border-gray-200`** — on every card and container without exception
- 🔴 **The AI gradient** — `bg-gradient-to-r from-purple-500 to-blue-500`
- 🟡 **Generic transition** — `transition-all duration-300` as the universal animation
- 🟢 **`hover:shadow-lg` only** — the only hover effect on cards
- 🟢 **`text-gray-600` body text** — for all body text without any variation
- 🟢 **Uniform container padding** — `p-6` / `p-8` on every container
- 🟢 **Uniform grid gaps** — `gap-4` / `gap-6` in every grid/flex layout
- 🟢 **One-shade-darker hover** — `hover:bg-blue-700` as the only button hover effect
- 🟢 **`bg-white dark:bg-gray-800`** — for every card background in dark mode
- 🟢 **`text-gray-600 dark:text-gray-400`** — for all secondary text
- 🟢 **Mixed border-radius** — inconsistent `rounded`, `rounded-lg`, `rounded-xl` on one page
- 🟢 **`w-full` everywhere** — applied to every input and button
- 🟢 **Unnecessary `overflow-hidden`** — on card containers even when nothing overflows
- 🟢 **`text-sm text-gray-500`** — for every helper text and caption
- 🟢 **Mixed styling approaches** — inline styles, CSS modules, and Tailwind in the same project
- 🟢 **Glowing button hover** — `shadow-indigo-500/50` glow effects
- 🟡 **`min-h-screen bg-gray-50`** — the universal page background
- 🟢 **Identical button padding** — `px-6 py-3` on every single button

---

## Component Patterns

- 🔴 **shadcn/ui defaults** — `<Button>`, `<Card>`, `<Dialog>`, `<Input>` with zero customization
- 🔴 **Lucide React icons** — `import { Zap, Heart, Star } from 'lucide-react'` in every feature section
- 🟡 **Dark mode toggle top-right** — in the corner of every AI-generated app
- 🟡 **Generic icon feature cards** — Lucide icon (`w-8 h-8 text-blue-600 mb-4`) + title + paragraph
- 🟡 **"Most Popular" badge** — on the middle pricing tier, every time
- 🟡 **Forms without validation** — no error states, required indicators, or inline feedback
- 🟢 **Toast for everything** — `sonner` or shadcn Toast notification for every user action
- 🟢 **`hover:shadow-lg` only interaction** — the only interactive feedback on cards
- 🟡 **Template navbar** — logo left, links center, CTA right, hamburger on mobile
- 🟢 **Unnecessary cookie banner** — Cookie consent banner generated even when not needed
- 🟡 **Star ratings in testimonials** — filled/unfilled star icons in testimonial sections
- 🟡 **"New"/"Beta" pill badges** — `rounded-full bg-purple-100 text-purple-800 text-xs`
- 🟢 **Heroicons as alternative** — when not Lucide, always Heroicons
- 🟢 **Framer Motion default** — default animation library (when animations exist at all)
- 🟢 **CVA auto-installed** — `class-variance-authority` installed automatically with shadcn
- 🟢 **`@/components/ui/` structure** — shadcn default file structure
- 🟢 **`cn()` utility** — from `@/lib/utils` for conditional class merging
- 🟢 **React Hook Form + Zod** — default form validation combo
- 🟢 **Radix UI underneath** — Radix primitives underneath every component

---

## Animation & Motion Patterns

- 🔴 **Subtle fades only** — `transition-all duration-300` applied generically, no real motion
- 🟡 **`hover:scale-105` on cards** — uniform scale on every card
- 🟡 **Staggered fade-in** — incrementing delays on card grids on page load
- 🟡 **Entrance-only animations** — no scroll-triggered, micro-interaction, or exit animations
- 🟢 **Universal timing** — same `duration-300 ease-in-out` on all animations
- 🟡 **Hover lift + shadow** — `hover:shadow-lg hover:-translate-y-1 transition-all`
- 🟢 **`animate-pulse` without logic** — placeholder pulse with no actual loading state
- 🟢 **`animate-ping` notifications** — for notification indicators as the only animation
- 🟢 **`animate-bounce` loading** — for loading indicators
- 🟡 **No loading states** — forms submit with no visual indicator
- 🟡 **Generic scroll fade** — same fade-in animation on every element on scroll
- 🟢 **Snapping buttons** — buttons that snap instead of easing, no custom curves
- 🟡 **Missing skeleton screens** — no loading/skeleton screen states
- 🟡 **No brand motion** — all motion is generic, reflects no personality
- 🔴 **Static by default** — most output has zero animations unless explicitly requested

---

## Content & Copy Patterns

- 🔴 **Template variables shipped** — `{{COMPANY_NAME}}`, `{{CEO_NAME}}` left in production
- 🔴 **"Transform your business"** — "Innovative solutions" / "Revolutionize the way" generic taglines
- 🔴 **Generic CTAs** — "Get Started" / "Let's Go!" / "Start Now!" with zero specificity
- 🔴 **Fake testimonials** — "Sarah M., CEO at [Company]" or "Michael R., CTO at [Object Object]"
- 🟡 **AI buzzwords** — "Cutting-edge," "Leverage," "Streamline," "Revolutionary," "Seamless," "Empower"
- 🟡 **"In today's fast-paced..."** — "In today's fast-paced digital landscape..." opening paragraphs
- 🟡 **Rule of Three** — "Fast, reliable, and secure" consulting-firm-values descriptions
- 🟡 **Lorem ipsum or perfect placeholders** — placeholder text that says nothing specific
- 🟢 **Em dash overuse** — excessive em dashes throughout all copy
- 🟡 **Negation structure** — "It's not about X, it's about Y" everywhere
- 🟢 **Generic meta descriptions** — missing or template-generated meta descriptions
- 🟢 **Broken OpenGraph** — missing OG metadata, broken social media share previews
- 🟢 **Outdated copyright** — `© 2024` when the current year is 2026
- 🟡 **Generic "About Us"** — About page that could apply to literally any company
- 🟡 **Impossible metrics** — "99.9% uptime," "10x faster," "420% AI-powered"
- 🟡 **Emoji headers** — 🚀✨💎🔥 as section decorators
- 🟡 **"Your all-in-one platform"** — generic value proposition
- 🟡 **Empty scalability claims** — "Scale without limits" / "Empower your team"
- 🟢 **Hedging language** — "may help you," "can potentially" — non-committal phrasing
- 🟡 **Generic superlatives** — "Best-in-class" / "world-class"
- 🔴 **Dead giveaway vocabulary** — "Delve into" / "at its core" / "tapestry" / "landscape"
- 🟡 **Vague aspirational headlines** — "Build the future of work"
- 🟡 **Buzzword features** — "Leverage AI to unlock insights"
- 🟢 **Repetitive value propositions** — sections restating the same point in slightly different words

---

## Code & Technical Patterns

- 🔴 **Universal default stack** — Next.js + TypeScript + Tailwind CSS + shadcn/ui
- 🟡 **Vercel subdomain** — deployed on `yourapp.vercel.app`, detected by VibeCheck extension
- 🟡 **Supabase default backend** — Supabase for backend/auth as universal backend choice
- 🟡 **`"use client"` everywhere** — at top of every component even when server components fit better
- 🟡 **Obvious comments** — `// TODO: implement`, `// Handle error` describing obvious code
- 🟡 **useState + useEffect spaghetti** — `React.useState` for everything with effect chains
- 🟢 **Backup files left behind** — `index-backup-2.html`, `component-old.tsx` in the repo
- 🟡 **Duplicate components** — same structure repeated with slight variations instead of reusing
- 🟡 **Missing accessibility** — no ARIA labels, keyboard navigation, or alt text
- 🔴 **Hardcoded API keys** — secrets embedded directly in frontend code
- 🟡 **Bad SEO hierarchy** — incorrect H1-H6 semantic structure
- 🟡 **Console errors on load** — untested code throwing errors on page load
- 🟢 **Reimplementing utilities** — recreating functions that already exist in the project
- 🟢 **Scattered auth logic** — authentication in 3+ locations without consistency
- 🟢 **Competing state management** — 2+ patterns fighting each other
- 🟢 **Hardcoded assumptions** — assumptions that later features will violate
- 🟢 **N+1 queries** — quadratic loops nobody measured
- 🟢 **Switch statement overuse** — complex switch statements in React components
- 🟢 **Over-commenting** — excessive repetitive comments describing obvious code
- 🟡 **Broken nav links** — `/docs`, `/api`, `/pricing` leading to 404 pages
- 🟢 **Unminified production** — code not bundled or tree-shaken
- 🟢 **Descriptive class names** — generic CSS names that are descriptive rather than semantic
- 🟢 **Convention mismatch** — using classes in a functional codebase
- 🟡 **`v0` artifact strings** — detectable in JavaScript bundles
- 🟡 **Lovable/Bolt runtime identifiers** — platform fingerprints in deployed source code

---

## Imagery & Visual Patterns

- 🔴 **3D humans with glowing orbs** — abstract figures in impossible poses holding orbs
- 🟡 **Floating abstract dashboards** — dashboards floating in space as product illustrations
- 🟡 **Flat SaaS characters** — round heads, pastel limbs, startup mascot style
- 🟡 **Rocket launch people** — vector people high-fiving or launching rockets
- 🟡 **3D blobs with charts** — random orbs/blobs with charts as decoration
- 🟡 **Faceless productivity scenes** — stock-style laptop/office imagery
- 🟢 **Uncanny symmetry** — slightly-too-smooth AI-generated illustrations
- 🟡 **Unsplash placeholders** — stock photos left as placeholders, never replaced
- 🟡 **Generic mockup frames** — hero sections with empty device mockups
- 🟡 **✨ sparkle emoji decoration** — used as Badge/header decorators

---

## Meta & Structural Tells

- 🟡 **No design tokens** — raw Tailwind utilities instead of custom CSS variables
- 🟡 **No custom color ramps** — relying entirely on Tailwind's built-in color families
- 🔴 **Logo-swap test fail** — swapping the logo makes the site indistinguishable from competitors
- 🟢 **White space hiding emptiness** — generous spacing hiding lack of content strategy
- 🟡 **Binary light/dark mode** — only two themes with no brand-specific palette
- 🟡 **"The Linear clone"** — dark UI + subtle motion + blue-to-indigo hero cloned from Linear
- 🔴 **No brand voice** — design and copy that could apply to literally any company
- 🔴 **"Sea of Sameness"** — overall aesthetic recognizable as AI within 0.5 seconds
- 🟡 **Uncanny production-readiness** — looks polished but feels like you've seen it 1,000 times
- 🟢 **Excessive optimism** — "Great job!" everywhere, relentlessly positive tone
- 🟡 **Hosting fingerprints** — default Vercel/Netlify/Railway subdomains
- 🟡 **Missing favicon** — no favicon or generic default favicon
- 🟡 **Disconnected forms** — forms not connected to any backend, CRM, or database
- 🟢 **Missing Schema.org** — no structured data markup
- 🟡 **No design system** — using raw component library defaults
- 🟢 **Missing viewport meta** — no viewport meta tags and touch-target sizing
- 🟢 **Identical header/footer** — same structure across all pages with no variation
- 🟢 **Zero custom Tailwind layers** — `@tailwind base; @tailwind components; @tailwind utilities` only
- 🟢 **Missing `prefers-reduced-motion`** — no accessibility-aware animation controls
- 🟢 **Cookie-cutter meta tags** — template descriptions that all sound identical
