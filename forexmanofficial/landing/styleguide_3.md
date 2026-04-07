# Styleguide 3: "Apex" — Data-Driven Dashboard & 3D Immersive

> A data visualization powerhouse meets immersive 3D depth. Think Bloomberg Terminal aesthetics fused with Apple product-page scroll storytelling and Three.js spatial design. Data IS the design. Depth IS the experience.

---

## Design Philosophy

This variant treats data as art and the page as a 3D space. Statistics aren't just displayed — they're the primary visual element. The page has genuine depth: elements exist on different z-layers, shadows create spatial relationships, and 3D transforms give cards and sections a physical presence. Scrolling feels like moving through a data-rich environment, not just reading a page.

**Keywords:** Data-driven, volumetric, immersive, layered, spatial, dashboard, 3D, cinematic, architectural, depth

---

## Color Palette

### Backgrounds (Layered Depth System)
| Token | Hex | Usage | Z-Layer |
|-------|-----|-------|---------|
| `--bg-abyss` | `#050508` | Deepest background, body | Layer 0 |
| `--bg-deep` | `#0a0c12` | Section backgrounds | Layer 1 |
| `--bg-mid` | `#12161f` | Elevated panels, secondary cards | Layer 2 |
| `--bg-surface` | `#1a1f2e` | Primary cards, interactive elements | Layer 3 |
| `--bg-raised` | `#222838` | Raised cards, hover states, tooltips | Layer 4 |

Each layer gets progressively lighter, creating visual depth hierarchy.

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-teal` | `#0df5c8` | Primary accent — slightly brighter/more electric than other variants |
| `--accent-teal-std` | `#0abfbc` | Standard teal for less prominent accents |
| `--accent-emerald` | `#10b981` | Secondary green — positive indicators, growth, success |
| `--accent-glow` | `#b0fff0` | Bright teal-white for 3D lighting highlights, glare effects |
| `--accent-red` | `#ef4444` | Negative/loss indicators in data displays |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#ffffff` | Headlines, key data |
| `--text-body` | `#c8d6e5` | Body copy (slightly warmer than pure gray) |
| `--text-dim` | `#7b8fa8` | Labels, captions, metadata |
| `--text-data` | `#0df5c8` | Data values, stat numbers, positive metrics |
| `--text-data-secondary` | `#10b981` | Secondary data values |

### Shadows (Critical for 3D depth)
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.3)` | Subtle lift |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.4)` | Standard card shadow |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.5)` | Prominent elevated cards |
| `--shadow-xl` | `0 24px 64px rgba(0,0,0,0.6)` | Hero cards, modals |
| `--shadow-glow` | `0 0 40px rgba(13, 245, 200, 0.08)` | Ambient teal underglow |
| `--shadow-3d` | `0 20px 60px -10px rgba(0,0,0,0.7)` | 3D card tilt shadow |

### Gradients
- **Hero backdrop:** Multiple layered radial gradients — a large soft teal glow (5% opacity) upper-right, a faint emerald glow (3%) lower-left, creating atmospheric depth
- **Data card header:** Linear gradient from `--bg-surface` to `--bg-mid` — top-lit effect
- **3D card face:** Slight linear gradient top-to-bottom within cards (lighter top = light source from above)
- **Performance chart:** Gradient fill under chart line — `#0df5c8` at 20% opacity → transparent
- **Mesh gradient background:** Optional CSS mesh gradient with 3–4 very dark color stops (deep navy, dark teal, dark charcoal) — creates organic depth

---

## Typography

### Font Pairing
- **Headings:** `"Rajdhani"` (Google Fonts) — weight 600–700. Technical, bold, geometric, slightly condensed. Perfect for data-heavy dashboards and impactful headlines.
- **Body:** `"Inter"` (Google Fonts) — weight 400–500. The gold standard for UI readability. Clean at every size.
- **Data / Numbers:** `"Space Mono"` (Google Fonts) — weight 400–700. True monospace for all numerical data. Creates the "live data feed" feeling.

### Scale
| Element | Size (Desktop) | Size (Mobile) | Weight | Notes |
|---------|----------------|---------------|--------|-------|
| Hero stat (giant number) | 80–120px | 56–72px | 700 (Space Mono) | The centerpiece. Data as hero. |
| Hero headline | 48–56px | 32–38px | 700 (Rajdhani) | Below or beside the hero stat |
| Section headline | 32–38px | 24–28px | 700 | |
| Subheadline | 18–20px | 16–18px | 400 | |
| Body | 15–17px | 15px | 400 | Line-height 1.65 |
| Stat number (card) | 40–48px | 32–38px | 700 (Space Mono) | |
| Stat label | 11–12px | 10–11px | 600 | Uppercase, tracking 0.1em |
| Data label (mini) | 10–11px | 9–10px | 500 | Monospace, uppercase, for chart axes/indicators |
| Button text | 15–16px | 14–15px | 600 | |

### Text styling rules
- **Data is the hero.** The biggest text on the page should be a number, not a headline. e.g., "+2,000" in massive type, with "pips/month on Gold" as the contextual label below.
- Section headlines: `Rajdhani`, bold, tight. Clean and architectural.
- All numbers use `Space Mono`. Always. This is non-negotiable for visual consistency.
- Labels are always uppercase, small, wide-tracked — like a dashboard instrument label.

---

## Layout & Grid

### Structure
- **Max content width:** 1200px
- **Section padding:** 100–140px vertical (desktop), 60–80px (mobile)
- **Grid system:** CSS Grid. Dashboard-inspired: asymmetric grids welcome (2/3 + 1/3 splits, large card + two small cards, etc.)
- **Z-depth layout:** Sections don't just stack — they exist on different depth planes. Use shadows, scale, and background lightness to suggest depth.

### Hero Layout — "Data Immersion"
- Full viewport height
- **Giant stat as hero:** The hero isn't a headline — it's a number. e.g., "+2,000" in 100px Space Mono, color teal, with "pips profit this month on XAUUSD" as the label below.
- Secondary stats float nearby in smaller cards
- Logo positioned top-center or top-left, smaller (60–80px)
- CTA button prominent below the data display
- Background: Layered depth — grid pattern at Layer 0, subtle gradient atmosphere, floating decorative data elements at very low opacity
- Optional: CSS 3D perspective on the hero card cluster — cards tilted slightly, suggesting a 3D dashboard interface

### Dashboard Grid Section
- Stats displayed in a **dashboard card grid** — asymmetric layout:
  - 1 large card (takes 2 columns, shows the primary metric with a mini chart)
  - 4 smaller cards (each shows a single metric)
- Each card has clear hierarchy: number → label → optional sparkline or indicator
- Cards have distinct depth (different shadow levels) suggesting z-layers

### Feature Grid
- 2×3 or 3×2 grid
- Each card slightly tilted on hover (subtle 3D rotateX/rotateY, 2–3 degrees max)
- Cards have "thickness" — bottom border or shadow creates a "slab" effect

### 3D Perspective Section
- One section can use CSS `perspective` on the container and `transform: rotateX(2deg) rotateY(-1deg)` on cards to create an isometric/3D dashboard view
- Cards appear to float in space
- Scroll-triggered: cards rotate from tilted to flat as user scrolls past

---

## Components

### Dashboard Cards (Primary)
```
Background: var(--bg-surface)
Border: 1px solid rgba(255, 255, 255, 0.05)
Border-radius: 12–16px
Padding: 24–32px
Shadow: var(--shadow-md), plus var(--shadow-glow) on featured cards
Inner gradient: subtle top-to-bottom (lighter top edge → base color)
Hover: transform translateY(-4px), shadow escalates to var(--shadow-lg),
       subtle 3D tilt via CSS perspective (rotateX 1deg)
Transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)
```

### Metric Card (Stats)
```
Same as dashboard card base
Top section: large number (Space Mono, 40–48px, --text-data)
Below number: label (11px, uppercase, --text-dim)
Optional: mini sparkline chart (SVG, 60px tall) showing trend
Optional: small delta badge ("+12% ▲" in green or red)
Indicator: tiny dot (6px) — green pulsing = live/positive
```

### Hero Stat Display
```
Number: Space Mono, 80–120px, 700, color --accent-teal
Label: Rajdhani or Inter, 18–20px, 400, --text-body
Container: Can be in a card, or floating on the dark background
Glow: text-shadow 0 0 40px rgba(13, 245, 200, 0.3) — number glows subtly
Animation: Count-up from 0, duration 3s, ease-out
```

### CTA Button
```
Background: var(--accent-teal) (#0df5c8)
Color: #050508 (near-black for maximum contrast)
Font: Rajdhani, 600, 15px, uppercase, tracking 0.04em
Padding: 14px 28px (desktop), 16px full-width (mobile)
Border-radius: 10px
Shadow: 0 4px 20px rgba(13, 245, 200, 0.25),
        0 0 40px rgba(13, 245, 200, 0.1) — double shadow for depth + glow
Hover: background #2affd8 (brighter), translateY(-2px), shadow expands
Active: scale(0.97), translateY(0)
Icon: Telegram SVG, dark color, 18px
Additional effect: Subtle ambient pulse glow when idle (box-shadow animation, 3s infinite)
```

### Secondary Button
```
Background: var(--bg-surface)
Border: 1px solid rgba(13, 245, 200, 0.3)
Color: var(--accent-teal)
Border-radius: 10px
Shadow: var(--shadow-sm)
Hover: border-color full teal, background var(--bg-raised), slight translateY(-1px)
```

### Checklist (VIP)
```
Each row: flex, align-center, padding 8px 0
Check icon: square rounded checkbox filled with teal, white check SVG inside (16px)
Text: 15px, --text-body
Green items: teal check
Red items: muted icon, --text-dim color, subtle line-through on text
Spacing: 8–12px between items
Container: Dashboard card with "VIP ACCESS" label badge at top
```

### Step Process (Copy Trading)
```
Vertical timeline on mobile, horizontal on desktop
Each step: numbered circle (40px, thick border, --accent-teal) → title → description
Connector: vertical/horizontal line (3px, --bg-raised → --accent-teal gradient)
Animation: As each step scrolls in, the connector line "fills" with teal (height/width animates 0→100%)
Step circle: starts as outline, fills with teal as the connector reaches it
Creates a "loading progress" effect as you scroll through steps
```

### Mini Sparkline Charts (decorative)
```
SVG element, 100–120px wide, 40–50px tall
Line: 2px stroke, color --accent-teal
Fill below line: linear-gradient(to bottom, rgba(13,245,200,0.15), transparent)
Data: 10–15 random but trending-upward points
Animation: line draws itself left-to-right (stroke-dashoffset animation), 2s
Can appear inside metric cards or as decorative section elements
```

---

## Animations & Motion

### Philosophy
Motion creates a sense of **immersion and spatial movement.** Elements don't just fade in — they arrive from specific places in 3D space. Scrolling feels like navigating through layers of data. The page has weight, depth, and physical presence.

### Specific Animations

**Page load — Cinematic data reveal:**
- Background atmosphere fades in (0→1 opacity, 1s)
- Hero number counts up dramatically: 0 → 2,000, Space Mono, 3s ease-out
- Number has a bright glow that intensifies then settles (glow peaks at 1.5s, then dims to ambient)
- Supporting stats cascade in with stagger (0.15s each), rising from below with fade
- CTA materializes last with a soft glow pulse

**Scroll — Parallax depth:**
- Background elements (grid, gradient glows) scroll at 0.3–0.5x speed → creates parallax depth
- Cards scroll at 1x (normal)
- Foreground decorative elements at 1.1–1.2x → enhances layered feeling
- Implementation: CSS `transform: translateZ()` with perspective on container, or JS-controlled translateY offsets

**Scroll — 3D card entrance:**
- Cards enter viewport with `transform: perspective(1000px) rotateX(10deg) translateY(40px)` and `opacity: 0`
- Animate to `rotateX(0) translateY(0) opacity(1)`, duration 0.7s
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- This creates the effect of cards "laying flat" from a tilted position — very 3D

**Chart line draw:**
- Sparkline SVGs use `stroke-dasharray` + `stroke-dashoffset` animation
- Line draws from left to right, 2–3s, triggered on scroll
- Fill gradient fades in after line completes

**Stat counters:**
- Space Mono numbers count up with a "rolling digits" feel
- Duration: 2.5–3s, ease-out
- During count: subtle text-shadow glow intensifies, then settles
- Each digit can optionally "roll" independently (like an odometer) for premium feel

**Hover — 3D tilt:**
- Cards respond to mouse position with subtle 3D tilt (max 3 degrees)
- Implementation: JS tracks mouse position over card, applies `rotateX` and `rotateY` transforms
- Shadow shifts opposite to tilt direction (light source tracking)
- Mobile: disable tilt, use simple translateY lift instead

**Background ambient:**
- Animated grid pattern: very subtle pulsing opacity on grid lines (0.02→0.04 opacity, 8s loop)
- Floating data fragments: tiny monospace numbers or chart fragments drifting slowly at very low opacity (2–3%)
- Gradient atmosphere: slow color shift/movement (30s+ loop)

---

## Background & Decorative Elements

### Layered Background System
This variant uses multiple background layers to create atmospheric depth:

1. **Layer 0 — Base:** Solid `--bg-abyss` (#050508)
2. **Layer 1 — Grid:** Fine-line grid pattern (horizontal + vertical lines, 1px, 2–3% opacity). 40–60px grid spacing. Suggests a coordinate system / data grid.
3. **Layer 2 — Atmosphere:** 2–3 large radial gradients of very faint color (teal, emerald) positioned off-center. Creates "light sources" in the darkness.
4. **Layer 3 — Particles (optional):** If using canvas/JS — sparse, slow-moving dots (20–30 particles). Size 1–3px. Low opacity (10–20%). Drift direction: upward. Blur: 1–2px.
5. **Layer 4 — Floating data:** Very faint monospace text fragments ("1.0842", "▲", "+87", small chart squiggles) floating slowly. 2–3% opacity. Purely atmospheric.

### Section Backgrounds
- Alternate between `--bg-abyss` and `--bg-deep` for rhythm
- Featured sections (VIP, Performance) get the `--bg-deep` treatment with an extra gradient atmosphere layer
- Dashboard grid section: slightly lighter base (`--bg-deep`) to make card shadows more visible

### Decorative Data Elements
- Mini chart lines in backgrounds (SVG, 3–4% opacity)
- Grid intersections highlighted with tiny dots at very low opacity
- Thin accent lines (1px, teal at 10%) connecting related elements across sections

---

## Iconography

- **Style:** Geometric, structured, slightly bolder than other variants. 2–2.5px stroke weight.
- **Size:** 24–28px inline, 40–48px for feature cards
- **Color:** `--accent-teal` primary. `--accent-emerald` for positive/growth indicators.
- **Special:** Icons can have a subtle glow effect (`filter: drop-shadow(0 0 6px rgba(13,245,200,0.3))`)
- **Dashboard style:** Icons feel like they belong in a data dashboard — precise, informational
- **Feature icons:**
  - Trading signals: radar/pulse line with peaks
  - Copy trading: circular arrows / sync with data nodes
  - Market analysis: layered chart bars with magnifier
  - Education: ascending step diagram / growth path
  - Support: terminal cursor with response bubble
  - Community: interconnected data nodes / network graph

---

## Spacing System

4px base. This variant uses slightly more generous spacing to let the 3D depth breathe:
- `4px` — micro
- `8px` — tight
- `12px` — compact
- `16px` — standard internal
- `24px` — card padding
- `32px` — card padding (large cards)
- `48px` — between card groups
- `64px` — grid section gaps
- `80px` — section padding (mobile)
- `100–140px` — section padding (desktop, extra generous for immersive feel)

---

## Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Mobile | < 640px | Single column. Hero stat smaller (56–72px). Cards stack vertically. 3D tilt disabled — use translateY hover instead. Parallax reduced. |
| Tablet | 640–1024px | 2-column dashboard grid. Hero stat medium (72–90px). Reduced 3D intensity. |
| Desktop | > 1024px | Full dashboard grid (asymmetric). Hero stat full size. 3D tilt on hover. Parallax active. |

---

## Tone of Voice (same across all variants)

- **Friendly and modern** — talk like a knowledgeable friend, not a corporation
- **Casual but credible** — emojis are fine (🚀 📈 🔥), back it up with real numbers
- **Confident without arrogance** — "Join 40,000+ traders" not "We are the #1 best"
- **Urgency without sleaze** — "Get free access now" not "LAST CHANCE!!! BUY NOW!!!"
- **Inclusive** — speak to beginners and advanced alike
- **Direct** — short sentences, punchy copy, get to the point

---

## Gamification & Engagement Elements

- **Data as hero:** The biggest, most prominent element on the page is a number. "+2,000 pips/month" at massive scale. Data isn't supporting content — it IS the content.
- **Live dashboard feel:** Pulsing dots, monospace numbers, grid backgrounds, sparkline charts — the entire page feels like a live trading dashboard that's actively processing data.
- **3D card interaction:** On desktop, cards respond to mouse movement with subtle 3D tilt. It feels physical, tangible, interactive — like moving objects on a desk.
- **Scroll-activated chart draws:** As users scroll, chart lines draw themselves, connectors fill up, numbers count. The page "activates" as you explore it.
- **Depth layering:** Parallax scrolling creates real spatial depth. Background moves slower than foreground. Elements exist on different planes. The page feels 3D even without WebGL.
- **Odometer counters:** Stat numbers roll digit-by-digit like a luxury car's odometer. Mechanical, precise, satisfying.
- **Step "loading" progress:** The copy trading 3-step section fills its connector line like a loading bar as you scroll, creating a sense of progress and completion.
- **Achievement metrics:** Stats are displayed like personal achievements — large numbers with "level" labels, badge-like containers, suggesting mastery and progression.

---

## Signature Differentiators (what makes this variant unique)

1. **Data as hero design** — Numbers are the biggest visual elements, not headings
2. **Real 3D depth** — CSS perspective, parallax, mouse-tracking tilt, layered shadows
3. **Dashboard grid layout** — Asymmetric card grids that look like a trading dashboard
4. **Atmospheric background layers** — 4–5 stacked layers creating genuine spatial depth
5. **Chart-draw animations** — SVG sparklines that draw themselves on scroll
6. **Space Mono dominance** — Monospace numbers everywhere create a distinct data-driven personality
7. **Most visually ambitious** — Uses the most animations, layers, and interaction of all three variants

---

## Technical Notes for Implementation

- **3D tilt on hover:** Track mouse position relative to card center. Map to rotateX (vertical) and rotateY (horizontal), max ±3 degrees. Apply via CSS `transform`. Use `will-change: transform` for performance.
- **Parallax:** Use `IntersectionObserver` + scroll event to translate background elements. Keep it smooth — use `requestAnimationFrame`. Or use CSS `perspective` + `translateZ` on a containing element.
- **Performance:** This variant has the most animations. Use `will-change` hints on animated elements. Disable particles and parallax on mobile. Use CSS containment (`contain: layout style paint`) on cards.
- **Canvas particles (optional):** If implemented, use a single canvas element behind content. Limit to 20–30 particles. Use `requestAnimationFrame` with delta time. Kill animation when tab is inactive (document.hidden).
- **SVG charts:** Inline SVGs for sparklines. Use `stroke-dasharray` equal to path length, animate `stroke-dashoffset` from path-length to 0.

---

## Overall Mood

The user opens this page and feels like they've entered a command center. Data surrounds them — floating, glowing, alive. Numbers are monumental, presented with the reverence they deserve in the trading world. As they scroll, charts draw themselves, stats materialize, and the page reveals its layers of depth. Each card feels like a physical object that reacts to their presence. It's immersive, impressive, and data-rich — yet somehow approachable. The free VIP offer feels almost too good to be true against this backdrop of professional, data-driven credibility. They tap the CTA. They're in.
