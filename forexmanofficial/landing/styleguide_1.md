# Styleguide 1: "Obsidian" — Dark Premium Glassmorphism

> A luxurious, premium finance aesthetic. Think Bloomberg terminal meets a luxury brand. Frosted glass surfaces floating over deep dark backgrounds. Refined, restrained, and undeniably premium.

---

## Design Philosophy

This variant feels like opening a high-end trading dashboard for the first time — sleek, sophisticated, and trustworthy. Every element floats on glass. Depth comes from layered translucent surfaces, not flashy effects. The design whispers "premium" rather than shouting it. Users should feel like they've discovered something exclusive, even though it's free.

**Keywords:** Premium, luxurious, refined, frosted, depth, trust, glass, sophisticated, minimal elegance

---

## Color Palette

### Backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-deep` | `#070b11` | Page body, deepest background layer |
| `--bg-base` | `#0c1018` | Section backgrounds, primary surface |
| `--bg-elevated` | `#111827` | Card backgrounds before glass effect |
| `--bg-surface` | `rgba(255, 255, 255, 0.04)` | Glassmorphism card fill |
| `--bg-surface-hover` | `rgba(255, 255, 255, 0.07)` | Card hover state fill |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--accent-teal` | `#0abfbc` | Primary accent — buttons, links, highlights, icons |
| `--accent-teal-bright` | `#00e5cc` | Hover states, glows, emphasis moments |
| `--accent-gold` | `#d4a853` | Secondary luxury accent — VIP badge, premium indicators, star ratings |
| `--accent-gold-muted` | `#a8882f` | Gold at reduced intensity for subtle touches |

### Text Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#ffffff` | Headlines, primary content |
| `--text-secondary` | `#94a3b8` | Body text, descriptions |
| `--text-muted` | `#64748b` | Captions, labels, metadata |
| `--text-accent` | `#0abfbc` | Highlighted text, links, stat numbers |

### Borders & Effects
| Token | Value | Usage |
|-------|-------|-------|
| `--border-glass` | `rgba(255, 255, 255, 0.08)` | Card borders |
| `--border-glass-hover` | `rgba(255, 255, 255, 0.15)` | Card borders on hover |
| `--glow-teal` | `0 0 30px rgba(10, 191, 188, 0.15)` | Subtle teal ambient glow |
| `--glow-gold` | `0 0 20px rgba(212, 168, 83, 0.1)` | Subtle gold glow for VIP elements |

### Gradients
- **Hero background:** Radial gradient from `#0c1018` center to `#070b11` edges, with a faint teal radial glow (`rgba(10, 191, 188, 0.05)`) off-center
- **CTA button:** Linear gradient `135deg` from `#0abfbc` to `#08a8a6`
- **Gold accent:** Linear gradient `135deg` from `#d4a853` to `#c9952b`
- **Card border gradient:** `rgba(255,255,255,0.1)` to `transparent` — top-lit glass effect
- **Section divider:** Horizontal line gradient from `transparent` → `rgba(10, 191, 188, 0.3)` → `transparent`

---

## Typography

### Font Pairing
- **Headings:** `"Plus Jakarta Sans"` (Google Fonts) — weight 600–800. Premium, geometric, modern. Wide letter-spacing for hero headlines.
- **Body:** `"Inter"` (Google Fonts) — weight 400–500. Maximum readability at all sizes. The industry standard for UI.
- **Data / Numbers:** `"Space Grotesk"` (Google Fonts) — weight 500–700. Technical feel for statistics, counters, performance numbers.

### Scale
| Element | Size (Desktop) | Size (Mobile) | Weight | Tracking |
|---------|----------------|---------------|--------|----------|
| Hero headline | 56–64px | 36–42px | 800 | -0.02em |
| Section headline | 36–42px | 28–32px | 700 | -0.01em |
| Subheadline | 20–24px | 18–20px | 500 | 0 |
| Body | 16–18px | 16px | 400 | 0.01em |
| Stat number | 48–56px | 36–42px | 700 (Space Grotesk) | -0.02em |
| Stat label | 13–14px | 12–13px | 500 | 0.05em (uppercase) |
| Caption/legal | 12–13px | 11–12px | 400 | 0.02em |
| Button text | 16–18px | 16px | 600 | 0.02em |

### Text styling rules
- Hero headline: White, bold, tight letter-spacing. May include one word highlighted in `--accent-teal` for emphasis.
- Section headlines: White. Left-aligned (not centered, except hero).
- Stat numbers: Use `Space Grotesk`. Color `--accent-teal` for positive values.
- Uppercase sparingly — only for stat labels and small tags/badges.

---

## Layout & Grid

### Structure
- **Max content width:** 1200px, centered with auto margins
- **Section padding:** 80–120px vertical (desktop), 48–64px vertical (mobile)
- **Grid system:** CSS Grid — 12-column on desktop, single column on mobile
- **Card grid:** 3 columns desktop → 2 columns tablet → 1 column mobile
- **Stats grid:** 6-column row desktop → 3×2 grid tablet → 2×3 grid mobile

### Hero Layout
- Full viewport height (100vh)
- Content vertically and horizontally centered
- Logo above headline (centered, 80–100px wide)
- Glass card containing headline + subheadline + CTA (optional — or float content freely)
- Background: Deep dark with single off-center teal radial glow

### Section Layout
- Each section has a subtle visual separator — either a gradient line or shift in background shade
- Content sections alternate between full-width backgrounds and contained card groups
- Stats bar: Edge-to-edge section with contained grid inside

### Dashboard-Style Elements
- Stats presented in individual glass cards arranged in a grid — like a trading dashboard
- Each stat card: large number on top, small label below, subtle icon or indicator
- Feature cards: Icon + Title + Description in a glass card. Grid of 3 on desktop.
- VIP section: Wider glass card or panel, centered, with checklist inside

---

## Components

### Cards
```
Background: var(--bg-surface) with backdrop-filter: blur(20px)
Border: 1px solid var(--border-glass)
Border-radius: 16–20px
Padding: 24–32px
Shadow: 0 8px 32px rgba(0, 0, 0, 0.3)
Hover: border-color transitions to var(--border-glass-hover), 
       subtle scale(1.01), shadow intensifies
Transition: all 0.3s ease
```

### Buttons (Primary CTA)
```
Background: linear-gradient(135deg, #0abfbc, #08a8a6)
Color: #ffffff
Font: Plus Jakarta Sans, 600, 16px
Padding: 16px 32px (desktop), 16px full-width (mobile)
Border-radius: 12px
Shadow: 0 4px 20px rgba(10, 191, 188, 0.3)
Hover: brightness(1.1), shadow expands to 0 6px 30px rgba(10, 191, 188, 0.4)
Active: scale(0.98)
Transition: all 0.2s ease
Icon: Telegram SVG icon, 20px, left of text, 8px gap
```

### Buttons (Secondary)
```
Background: transparent
Border: 1px solid rgba(10, 191, 188, 0.4)
Color: #0abfbc
Border-radius: 12px
Hover: background rgba(10, 191, 188, 0.1), border full opacity
```

### Stat Cards
```
Glass card (same as above)
Number: Space Grotesk, 48px, 700, color var(--accent-teal)
Label: Plus Jakarta Sans, 13px, 500, uppercase, letter-spacing 0.05em, color var(--text-muted)
Optional: tiny icon or dot indicator above number
Animated count-up on scroll intersection
```

### Feature Cards
```
Glass card, 100% height in grid
Icon: 40–48px, teal stroke/line icon, top of card
Title: 18–20px, 600, white, below icon
Description: 14–16px, 400, --text-secondary
Hover: gentle lift + border brighten
```

### Checkmark List (VIP)
```
Each item: flex row
Check icon: 20px teal circle with white checkmark (or teal ✓)
Text: 16px, white
Spacing: 12–16px between items
Cross items (❌): muted red (#ef4444 at 70%) or dim gray
```

### Navigation
- No traditional nav. Logo at top-left (or centered).
- Optional: Sticky micro-CTA bar that appears after scrolling past hero — thin bar at top with "Join Free" button.

### Badges / Tags
```
Background: rgba(10, 191, 188, 0.1)
Color: #0abfbc
Border: 1px solid rgba(10, 191, 188, 0.2)
Border-radius: 100px (pill shape)
Padding: 4px 12px
Font: 12–13px, 500
Example: "FREE", "87% WIN RATE", "VIP"
Gold variant for VIP: use --accent-gold instead of teal
```

---

## Animations & Motion

### Philosophy
Motion should be **subtle, smooth, and purposeful**. No flashy or jarring animations. Everything should feel like it's gently materializing — glass surfaces appearing from nothing, numbers counting up quietly.

### Specific Animations

**Page load:**
- Hero content fades in with slight upward translate (0→0, opacity 0→1), 0.6s ease-out, 0.2s delay
- Logo fades in first (0.1s delay), then headline (0.3s), then subheadline (0.5s), then CTA (0.7s) — staggered cascade

**Scroll reveals:**
- Sections use IntersectionObserver
- Elements fade in + translate up 20px, 0.5s ease-out
- Stagger children in card grids: each card delays +0.1s

**Stat counters:**
- Numbers animate from 0 to final value using `requestAnimationFrame`
- Duration: 2s, easing: ease-out (fast start, slow finish)
- Trigger: when stats section enters viewport

**Hover states:**
- Cards: border brightens, subtle scale(1.01), shadow expands — 0.3s ease
- CTA button: brightness increase, glow expands — 0.2s ease
- Links: color brightens, optional underline slide-in

**Background:**
- Subtle animated radial gradient that slowly shifts position (30s+ loop) — barely perceptible ambient movement
- Optional: very slow floating particle dots (3–5 particles, low opacity, large blur) for depth

**NO:** Glitch effects, rapid blinking, aggressive bouncing, strobe-like transitions, spinners, or anything that feels "cheap."

---

## Background & Decorative Elements

- **Primary background:** Solid deep dark (`--bg-deep`) with one or two radial gradient spots of very faint teal
- **Grid pattern:** Optional subtle dot-grid or fine line-grid at very low opacity (3–5%) — suggests a dashboard/data environment
- **Ambient glow:** One large, soft, off-center teal circle glow behind the hero — like a distant light source
- **Section variation:** Alternate between `--bg-deep` and `--bg-base` for visual rhythm
- **Decorative chart line:** Optional single subtle SVG line (mimicking a chart trend) running across a section background at very low opacity
- **No images besides the logo.** This design relies entirely on glass, color, and typography.

---

## Iconography

- **Style:** Outlined / stroke icons. Not filled. Consistent 1.5–2px stroke width.
- **Size:** 24–32px for inline, 40–48px for feature cards
- **Color:** `--accent-teal` default, white on hover or in active states
- **Source:** Use inline SVGs for Telegram icon and key feature icons. Lucide, Phosphor, or Heroicons style.
- **Feature icons to create:**
  - Trading signals: chart with upward arrow
  - Copy trading: two overlapping rectangles / sync arrows
  - Market analysis: magnifying glass over chart
  - Education: graduation cap or open book
  - Support: headset or chat bubble with clock
  - Community: group of people / user group

---

## Spacing System

Use a consistent 4px base unit:
- `4px` — tight gaps (icon-to-label)
- `8px` — compact spacing
- `12px` — list item gaps
- `16px` — card inner padding small
- `24px` — card inner padding standard
- `32px` — section inner padding
- `48px` — between card groups
- `64px` — section padding mobile
- `80–120px` — section padding desktop

---

## Responsive Breakpoints

| Breakpoint | Width | Layout changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column. Full-width cards and buttons. Stacked layout. |
| Tablet | 640–1024px | 2-column grids. Side margins increase. |
| Desktop | > 1024px | Full 3-column grids. Max-width container. Generous spacing. |

---

## Tone of Voice (applies to all variants)

- **Friendly and modern** — talk like a knowledgeable friend, not a corporation or a salesman
- **Casual but credible** — emojis are fine (🚀 📈 🔥), informal language welcome, but back it up with real numbers
- **Confident without arrogance** — "Join 40,000+ traders" not "We are the #1 best"
- **Urgency without sleaze** — "Get free access now" not "LAST CHANCE!!! BUY NOW!!!"
- **Inclusive** — speak to beginners and advanced traders alike. No gatekeeping jargon.
- **Direct** — short sentences. Punchy copy. Get to the point.

---

## Gamification & Engagement Elements

- **Animated stat counters** — numbers count up from 0 when scrolled into view. Creates a "wow" moment.
- **"Live" indicator** — small pulsing green/teal dot next to stats like "87% win rate" or "5+ signals today" suggesting real-time data
- **Progress metaphor** — VIP section could use a visual "unlock" metaphor — a path from free to VIP showing what you gain
- **Achievement-style badges** — display stats like "40K+ traders" in badge/shield shapes suggesting milestones
- **Scroll progress** — optional thin teal progress bar at very top of page showing scroll depth
- **Hover micro-interactions** — cards respond to hover with subtle depth shift. Buttons have satisfying press feedback.

---

## Overall Mood

Imagine a user opens this page at midnight on their phone. The dark glass surfaces glow softly. The numbers are crisp and impressive. The teal accents guide their eyes exactly where they need to go. It feels exclusive, premium, and trustworthy — like being invited into a private trading floor. And then they see it's all free. The CTA button glows. They tap it.

That's the feeling.
