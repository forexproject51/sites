# Forexman — Landing Page Generator Prompt

## Task

Create **10 unique, visually distinct variants** of a single-page landing site for the **Forexman** Telegram channel. Each variant should be a standalone HTML file (`variant-1.html` through `variant-10.html`) placed in a `/variants` folder.

---

## Brand Identity

- **Name:** Forexman
- **Logo:** Use the provided logo image at `assets/logo.png` in every variant. Display it prominently (hero area, top of page, or as a badge). The logo shows "FM" in 3D block letters with teal/cyan currency icons on a dark background.
- **Telegram channel link:** `https://t.me/PLACEHOLDER_LINK` (use this as the CTA href)

---

## What the Channel Offers

Forexman is a free Telegram channel about forex trading. Mention these value props across variants (not all need to appear in every variant — mix and match to keep each one unique):

- **Trading signals** — daily forex signals
- **Copy trading** — follow and copy trades directly
- **Market analysis** — real-time market breakdowns and news
- **Education** — tutorials and tips for beginners and intermediates
- **Community** — active chat with like-minded traders
- **VIP access** — free channel + paid VIP tier with premium signals (mention VIP in some variants, not all)

---

## Style & Visual Direction

- **Overall vibe:** Modern, futuristic, trading-inspired
- **Primary palette:** Dark backgrounds (#080c12, #0d1420 range) with **teal/cyan accents** (#0abfbc, #00e5cc range) — inspired by the logo colors
- **Experimentation encouraged:** While the primary palette is dark + teal, feel free to experiment within this theme — neon greens, electric blues, subtle purples, warm ambers as secondary accents. Each variant should feel fresh.
- **Typography:** Use Google Fonts. Mix display/heading fonts (Rajdhani, Orbitron, Space Grotesk, Exo 2, Chakra Petch, etc.) with clean body fonts (Inter, DM Sans, etc.). Each variant should use a different font pairing.
- **Visual elements to incorporate (vary per design):**
  - Animated grid/matrix backgrounds
  - Candlestick chart motifs or subtle chart line SVGs
  - Glowing borders, neon effects, glassmorphism
  - Particle effects or floating elements
  - Gradient meshes, noise textures
  - Parallax or scroll-triggered animations (for longer variants)
  - Pulsing "live" indicators
  - Fake ticker/price strips
  - Geometric shapes, hexagons, circuit-board patterns

---

## Tone of Voice

- **Friendly and modern** — talk like a real person, not a corporation
- **A little fun** — emojis are okay (fire, rocket, chart emoji), casual language welcome
- **Confident but not arrogant** — "Join 10,000+ traders" not "We are the best"
- **Urgency without being scammy** — limited time offers should feel genuine, not desperate

---

## Page Structure (varies by variant)

Each variant is a **one-page site** but they should differ in layout and structure. Here are layout archetypes to distribute across the 10 variants:

All variants should be **short — 1 to 3 sections max.** No long scrolling landing pages. Keep it tight, punchy, and fast-loading.

### Single Card (variants 1-4)
- Centered card on a full-screen animated background
- Logo, headline, short description, CTA button
- Minimal, one-screen, no scrolling needed
- Similar to the reference example but each visually unique

### Card + Extras (variants 5-8)
- Card or hero section + 1-2 small additional sections (e.g. a feature row, a stats bar, a testimonial strip)
- Still very compact — fits on 1-2 screens max
- Can include feature icons, stats counters, a short testimonial

### Wild Card (variants 9-10)
- Something unexpected — a terminal/hacker theme, a game-like interface, a 3D-inspired layout, a retro-futuristic dashboard, a trading terminal mockup
- Push creative boundaries while staying on-brand
- Still short — no more than 2-3 sections

---

## Required Elements (every variant must include)

1. **Forexman logo** — displayed using `assets/logo.png`
2. **Channel name** — "Forexman" displayed clearly
3. **Headline** — a catchy, unique headline per variant
4. **Short description** — 1-3 sentences about what the channel offers
5. **Primary CTA button** — links to `https://t.me/PLACEHOLDER_LINK`, includes a Telegram icon (inline SVG), text like "Join Free on Telegram", "Get Free Signals", etc. Vary the CTA text per variant.
6. **Mobile responsive** — must look great on phones (most traffic will be mobile)

---

## Optional Elements (use in some variants, not all)

- **Countdown timer** — "Free access closes in XX:XX" that resets (creates urgency). Use in ~4-5 variants.
- **Stats/social proof** — "10,000+ traders", "500+ signals sent", "95% accuracy" (fictional but realistic numbers). Use in ~5-6 variants.
- **Feature list** — icons + short text for each value prop
- **"Limited spots" badge** — "Only 247 spots left" with a decreasing counter
- **Testimonial quotes** — short, realistic-sounding trader testimonials
- **VIP teaser** — mention premium VIP tier in ~3-4 variants
- **FAQ section** — in longer variants
- **Live price ticker** — animated fake forex pair prices (EUR/USD, GBP/USD, etc.)
- **"As seen in" or partner logos** — subtle credibility markers (use generic/placeholder)
- **Secondary CTA** — "Learn more" or "See results" that scrolls to a section

---

## Technical Requirements

- **Single HTML file per variant** preferred (inline CSS + JS). Separate files okay if complexity demands it.
- **No external dependencies** except Google Fonts and optionally CDN libraries (GSAP, Three.js, particles.js) for animations
- **No frameworks** — vanilla HTML/CSS/JS only
- **Smooth animations** — use CSS animations, transitions, and requestAnimationFrame. No janky movements.
- **Fast loading** — optimize for performance. Lazy load heavy elements.
- **Semantic HTML** — proper heading hierarchy, accessible buttons, alt text on images
- **Logo path:** reference the logo as `../assets/logo.png` (since variants are in `/variants` subfolder)

---

## File Structure

```
/forexmanofficial
├── prompt.md (this file)
├── assets/
│   └── logo.png
└── variants/
    ├── variant-1.html
    ├── variant-2.html
    ├── variant-3.html
    ├── variant-4.html
    ├── variant-5.html
    ├── variant-6.html
    ├── variant-7.html
    ├── variant-8.html
    ├── variant-9.html
    └── variant-10.html
```

---

## Reference Example

The file at `../tgland_2/index.html` is a reference for style and structure (card-based variant with countdown timer, dark theme, teal accents, Telegram CTA button). Use it as inspiration for the card-based variants, but make each variant **visually unique** — different layouts, different animations, different font choices, different section arrangements.

---

## Unique Headline Ideas (one per variant, or generate your own)

1. "Your Edge in the Forex Market"
2. "Trade Smarter. Not Harder."
3. "Free Signals. Real Results."
4. "The Trading Community You've Been Looking For"
5. "Stop Guessing. Start Trading."
6. "Forex Signals Delivered Daily to Your Phone"
7. "Join the Movement. Trade with Forexman."
8. "Level Up Your Trading Game"
9. "Where Traders Come to Win"
10. "The Future of Forex is Here"

Feel free to modify or create entirely new headlines that match the variant's vibe.

---

## Important Notes

- Each variant must feel like a **completely different website** — not just a color swap
- Prioritize **mobile experience** — most users will open these on phones from Telegram
- The CTA button should be **impossible to miss** — make it prominent, glowing, animated, or sticky
- Keep text concise — people won't read paragraphs. Short, punchy copy.
- All countdown timers should use JavaScript and reset when they reach zero
- Test that the Telegram link opens correctly (target="_blank")
