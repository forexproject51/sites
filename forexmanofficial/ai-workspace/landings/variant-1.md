# landing/variant-1 — Free Signals. Real Results.

## Purpose

Full multi-section marketing landing: hero, stats, proof, features, win-rate viz, sticky CTA bar, scroll progress; Plus Jakarta / Inter / Space Grotesk tokens in CSS variables.

## Files

| Role | Path |
|------|------|
| view | `landing/variant-1/index.html` |

## User Stories

- User scrolls long-form story; sticky bar appears after hero.
- User sees animated counters and win-rate ring when sections enter view.
- User joins via Telegram CTAs.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `updateProgress` | 1783 | none | none | Sets top scroll-progress bar width. |
| `updateHeroBottom` | 1797 | none | none | Stores hero bottom for sticky threshold. |
| `updateStickyBar` | 1801 | none | none | Toggles sticky bar visibility vs scroll. |
| `onScroll` | 1815 | none | none | rAF-throttled scroll handler. |
| `easeOut` | 1852 | t | number | Cubic ease for counters. |
| `formatNumber` | 1856 | val, count | string | Locale / rounding for stat text. |
| `animateCounter` | 1863 | el, target, suffix, duration | none | Count-up animation. |
| `step` | 1865 | now | none | Inner frame for `animateCounter`. |
| `animCircle` | 1919 | now | none | Animates SVG stroke for win-rate ring. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URLs in `<head>` |

## UI Design

Layout: Single `<main>` with stacked bands; scroll progress; sticky bottom/side CTA after hero.
Elements: `.reveal` sections; `.win-rate-circle` + `.circle-fill`; `#scroll-progress`, `#sticky-bar`.
Patterns: IntersectionObserver for reveals/counters/circle; passive scroll listeners.
Notes: Meta description and title tuned for “free signals” positioning.
