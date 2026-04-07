# Styleguide 2: "Meridian" — Refined Futuristic Elegance

> A sleek, high-end futuristic aesthetic. Think premium fintech app meets luxury fashion brand website. Clean lines, structured grids, tasteful neon accents, and smooth kinetic energy. Stylish and modern, never childish.

---

## Design Philosophy

This variant feels like the interface of a next-generation trading platform — one designed by a fashion house. Every element has purpose and precision. Neon accents illuminate, they don't overwhelm. Animations are smooth and deliberate like a luxury car's dashboard coming to life. The design is dynamic and alive with energy, but always controlled, always elegant.

**Keywords:** Futuristic, sleek, kinetic, precise, structured, luminous, editorial, dynamic, high-end, alive

---

## Color Palette

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-void` | `#060a10` | Page body, deepest layer |
| `--bg-dark` | `#0a0e18` | Primary section background |
| `--bg-card` | `#111620` | Card surfaces |
| `--bg-card-alt` | `#151b28` | Alternate card / elevated surface |
| `--bg-hover` | `#1a2030` | Hover and active states on surfaces |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-primary` | `#00e5cc` | Primary accent — CTAs, highlights, key elements |
| `--accent-primary-dim` | `#0abfbc` | Dimmed primary for borders, subtle accents |
| `--accent-blue` | `#3b82f6` | Secondary accent — informational elements, chart lines, secondary buttons |
| `--accent-blue-light` | `#60a5fa` | Blue hover/active states |
| `--accent-purple` | `rgba(99, 102, 241, 0.15)` | Tertiary — very subtle background washes, depth layers |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#f0f4f8` | Headlines, primary text (slightly warm white) |
| `--text-secondary` | `#94a3b8` | Body copy, descriptions |
| `--text-tertiary` | `#64748b` | Captions, metadata, labels |
| `--text-glow` | `#00e5cc` | Stat numbers, highlighted data, links |

### Borders & Effects
| Token | Value | Usage |
|-------|-------|-------|
| `--border-subtle` | `rgba(255, 255, 255, 0.06)` | Default card borders |
| `--border-accent` | `rgba(0, 229, 204, 0.3)` | Accent borders, hover states |
| `--border-accent-bright` | `rgba(0, 229, 204, 0.6)` | Active/focus borders |
| `--glow-primary` | `0 0 20px rgba(0, 229, 204, 0.2)` | CTA and accent glow |
| `--line-glow` | `0 0 8px rgba(0, 229, 204, 0.4)` | Thin luminous lines |

### Gradients
- **Hero background:** Dark base with a diagonal sweep — faint gradient from dark blue-purple (bottom-left) to dark teal (top-right) at 5–8% opacity
- **CTA button:** Solid `#00e5cc` with animated gradient border (teal → blue → teal loop)
- **Section accent stripe:** Thin horizontal luminous line across full width — gradient from `transparent` → `#00e5cc` → `#3b82f6` → `transparent`
- **Card hover border:** Animated gradient that travels around the card border (conic-gradient spin)
- **Text gradient (hero only):** Headline can use gradient text `#00e5cc` → `#3b82f6` for dramatic effect

---

## Typography

### Font Pairing
- **Headings:** `"Exo 2"` (Google Fonts) — weight 600–800. Geometric, slightly futuristic, but fully readable. Not novelty — genuinely elegant.
- **Body:** `"DM Sans"` (Google Fonts) — weight 400–500. Soft geometric sans-serif, warm and modern.
- **Data / Monospace:** `"JetBrains Mono"` (Google Fonts) — weight 400–500. For stat numbers, signal examples, anything that should feel "live data."

### Scale
| Element | Size (Desktop) | Size (Mobile) | Weight | Notes |
|---------|----------------|---------------|--------|-------|
| Hero headline | 52–60px | 34–40px | 800 | Tight tracking (-0.03em). Optional gradient text. |
| Section headline | 34–40px | 26–30px | 700 | Left-aligned with accent underline bar |
| Subheadline | 18–22px | 16–18px | 400 | Lighter weight for contrast |
| Body | 16–17px | 15–16px | 400 | Comfortable line-height (1.6–1.7) |
| Stat number | 44–52px | 36–40px | 700 (JetBrains Mono) | Monospace. Color `--text-glow`. |
| Stat label | 12–13px | 11–12px | 500 | Uppercase, wide tracking (0.08em) |
| Button text | 15–17px | 15px | 600 | Uppercase or sentence-case — consistent per page |

### Text styling rules
- Headlines: Crisp white or gradient text. Tight letter-spacing creates tension and modernity.
- Section headers: Left-aligned. Short teal accent bar (40–60px wide, 3px tall) above or below the headline.
- Stat numbers: `JetBrains Mono`, monospace. Teal colored. This is the "data feed" aesthetic.
- Body text: Comfortable, readable. Generous line height. Never cramped.

---

## Layout & Grid

### Structure
- **Max content width:** 1160px
- **Section padding:** 96–128px vertical (desktop), 56–72px (mobile)
- **Grid:** CSS Grid, 12-column. Clean, structured, editorial.
- **Horizontal rhythm:** Strong left-alignment. Content blocks snap to grid lines.

### Hero Layout
- **Full viewport height** (100vh), content vertically centered
- **Split layout option:** Text block left-aligned (60% width), decorative element on right (40%) — e.g. floating logo with animated accent lines, or an abstract trading chart visualization
- Alternatively: Centered stack with large headline, subtitle, stats row, CTA
- Background: Dark with diagonal gradient wash and subtle animated grid lines

### Section Patterns
- **Stats section:** Full-width dark band. 4–6 metrics in a single horizontal row. Each metric: monospace number + label. Thin luminous line separators between metrics.
- **Features:** 3-column grid. Each card is a solid dark surface with thin border. Icon top, title, description. Clean and uniform.
- **VIP section:** Full-width section with a slightly elevated background shade. Content in a centered panel (max 800px). Checklist layout.
- **Copy trading:** 3-step horizontal flow on desktop, vertical on mobile. Numbered steps connected by a luminous line.

### Content Alignment
- Primary alignment: **Left-aligned text** throughout (more editorial/professional feel)
- Hero can be centered if it works better compositionally
- Never center body paragraphs — left-align always

---

## Components

### Cards
```
Background: var(--bg-card)
Border: 1px solid var(--border-subtle)
Border-radius: 8–12px (slightly sharper than Styleguide 1)
Padding: 24–28px
Shadow: none by default (rely on border contrast against dark bg)
Hover: border-color transitions to var(--border-accent),
       optional animated gradient border effect
Transition: border-color 0.3s ease
```

### Buttons (Primary CTA)
```
Background: #00e5cc (solid, confident)
Color: #0a0e18 (dark text on bright button — high contrast)
Font: Exo 2, 600, 15–16px, uppercase, tracking 0.05em
Padding: 14px 28px (desktop), 16px full-width (mobile)
Border-radius: 8px
Border: none
Shadow: 0 4px 24px rgba(0, 229, 204, 0.3)
Hover: background #00f5dc (brighter), shadow expands,
       animated border glow pulse
Active: scale(0.97), shadow contracts
Transition: all 0.2s ease
Icon: Telegram SVG, 18px, left of text, 8px gap, same dark color
Additional: Consider an animated gradient border that loops on idle — draws attention without being annoying
```

### Buttons (Secondary)
```
Background: transparent
Border: 1px solid var(--border-accent)
Color: var(--accent-primary)
Border-radius: 8px
Hover: background rgba(0, 229, 204, 0.08), border brightens
```

### Stat Row Item
```
Layout: flex column, centered
Number: JetBrains Mono, 44px, 700, color var(--text-glow)
Label: DM Sans, 12px, 500, uppercase, tracking 0.08em, color var(--text-tertiary)
Separator: 1px solid var(--border-subtle) between items (vertical line)
Pulsing dot: tiny 6px circle, background var(--accent-primary),
             animation: pulse 2s infinite (scale 1→1.5→1, opacity 1→0.5→1)
```

### Feature Cards
```
Same card base as above
Icon: 36–40px, teal stroke icon (2px stroke), margin-bottom 16px
Title: 17–18px, 600, white
Description: 14–15px, 400, --text-secondary
Grid gap: 24px
All cards equal height in row
```

### Checklist (VIP)
```
Each row: flex, align-center
Icon: teal arrow-right (→) or chevron, 16px — NOT checkbox style
Text: 15–16px, --text-primary
Spacing: 10–14px between rows
Negative items (❌): dim gray text (#475569), subtle strikethrough or muted cross icon
```

### Step Flow (Copy Trading)
```
3 items horizontal (desktop) / vertical (mobile)
Each step: number in teal circle (32px), title, one-line description
Connected by: thin luminous line (2px, --accent-primary at 30%) between circles
Number circle: border 2px solid var(--accent-primary), color teal, bg transparent
Active/hover: circle fills with teal, number goes dark
```

### Accent Line Dividers
```
Full-width horizontal line between sections
Height: 1px
Background: linear-gradient(90deg, transparent, var(--accent-primary) 30%, var(--accent-blue) 70%, transparent)
Creates a subtle luminous separator — signature element of this styleguide
```

---

## Animations & Motion

### Philosophy
Motion in this variant is **kinetic and precise**, like a luxury car's instrument cluster lighting up. Animations have clear beginnings and endings. Movement suggests purpose and direction — things slide in from specific angles, lines draw themselves, data appears with intent.

### Specific Animations

**Page load:**
- Hero text slides in from left (translate -30px → 0), opacity 0→1, 0.7s ease-out
- Decorative elements slide in from right simultaneously
- Stats row items appear one by one, left to right, 0.1s stagger, slide-up 15px
- CTA button fades in last (0.8s delay) with a subtle glow pulse on arrival

**Scroll reveals:**
- Elements slide in from left or bottom depending on position
- Translate distance: 30px. Duration: 0.6s. Easing: cubic-bezier(0.16, 1, 0.3, 1) — fast start, smooth settle
- Card grids stagger 0.08s per card
- Luminous line dividers "draw" themselves from center outward (width 0→100%, 0.8s)

**Data animations:**
- Stat numbers: typewriter-style count-up using monospace font. Duration 2.5s.
- Pulsing "live" dots next to active stats — 2s infinite pulse
- Optional: price ticker strip at top or bottom — smoothly scrolling pairs and prices

**Hover states:**
- Cards: border color transitions to teal, optional subtle animated gradient border
- CTA: glow expands, background brightens
- Feature cards: border accent appears, subtle translateY(-2px)

**Background:**
- Animated thin grid lines (very low opacity, 2–3%) slowly scrolling or pulsing
- Optional: subtle floating geometric shapes (triangles, thin lines) drifting very slowly
- Optional: single animated candlestick chart SVG line drawing across a section background

**Signature animation: Luminous line draw.** Key sections have a thin teal-to-blue gradient line that draws itself into existence as you scroll. This becomes the visual signature of this variant.

---

## Background & Decorative Elements

- **Base:** Solid dark (`--bg-void`) — clean and quiet
- **Diagonal gradient wash:** Very subtle gradient overlay — dark purple/blue from one corner, barely visible. Creates depth without clutter.
- **Grid lines:** Fine horizontal and vertical lines at 2–3% opacity. Suggest a trading grid/chart. Optionally animated (slow drift).
- **Candlestick SVG:** One section can have a subtle decorative SVG of candlestick shapes or a chart line — very low opacity (5–8%), purely decorative
- **Floating elements:** 2–3 very subtle geometric shapes (thin triangles, small circles) floating slowly in the background — adds life without distraction
- **No noise textures.** This variant is clean and sharp, not textured.

---

## Iconography

- **Style:** Outlined / stroke. Consistent 2px stroke. Slightly more geometric/angular than Styleguide 1.
- **Size:** 20–24px inline, 36–40px for feature cards
- **Color:** `--accent-primary` (teal) default. Can use `--accent-blue` for secondary icons.
- **Corner style:** Slightly squared/angular — matches the sharper border-radius of cards
- **Source:** Inline SVGs. Lucide or Phosphor style — geometric variant.
- **Feature icons:**
  - Trading signals: lightning bolt over chart line
  - Copy trading: two parallel arrows / duplicate icon
  - Market analysis: bar chart with trend line
  - Education: compass or brain circuit
  - Support: message bubble with live dot
  - Community: connected nodes / network

---

## Spacing System

4px base unit:
- `4px` — micro gaps
- `8px` — tight spacing
- `12px` — list items, compact gaps
- `16px` — card padding (compact)
- `24px` — standard card padding, grid gaps
- `32px` — between related groups
- `48px` — between unrelated groups
- `72px` — section padding (mobile)
- `96–128px` — section padding (desktop)

---

## Responsive Breakpoints

| Breakpoint | Width | Changes |
|------------|-------|---------|
| Mobile | < 640px | Single column. Full-width buttons. Vertical step flows. Stat row wraps to 2×3. |
| Tablet | 640–1024px | 2-column feature grid. Stats stay in row with smaller text. |
| Desktop | > 1024px | Full layout. Split hero. 3-column grids. Generous spacing. |

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

- **Live price ticker:** Animated horizontal strip (top or between sections) showing scrolling Forex pairs with prices — EUR/USD 1.0842 ▲ | GBP/USD 1.2634 ▼ | XAU/USD 2341.50 ▲. Decorative, creates "live trading" atmosphere.
- **"Signals Live" indicator:** Pulsing teal dot + "Live" text near the signal stats. Suggests real-time activity.
- **Animated stat counters:** Monospace numbers counting up with typewriter precision.
- **Luminous line progress:** As user scrolls, the accent line dividers light up sequentially — creating a sense of progression through the page.
- **Step activation:** In the 3-step copy trading section, each step "lights up" as you scroll to it — number circle fills with teal, line connects to next.
- **CTA pulse:** The primary CTA button has a subtle, slow glow pulse when idle (not aggressive — refined, like breathing).
- **Trading terminal vibe:** Monospace numbers, live indicators, and grid backgrounds make data feel alive and real-time — even though it's static.

---

## Signature Differentiators (what makes this variant unique)

1. **Luminous line dividers** — gradient teal-to-blue lines that draw themselves between sections
2. **Monospace data aesthetic** — JetBrains Mono for all numbers creates a "trading terminal" precision feel
3. **Left-aligned editorial layout** — more like a premium publication than a landing page
4. **Split hero** — text on one side, visual element on the other (not centered)
5. **Sharp, angular energy** — tighter border-radius, geometric icons, precise animations
6. **Dark text on bright CTA button** — inverts the expected, creates visual punch

---

## Overall Mood

The user opens this page and immediately feels the energy of live markets. Thin luminous lines guide their eyes. Numbers appear with mechanical precision. The layout is editorial, confident, structured — like reading a premium financial magazine that happens to be interactive. The CTA button glows with restrained power. Everything says: "This is where serious traders go. And it happens to be free."
