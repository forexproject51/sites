# landing/variant-2-main — Trade Smarter. Profit Daily.

## Purpose

Primary reference landing: design-token CSS variables, many sections (hero, stats, performance, steps, FAQ, footer CTA), inline base64 assets; `defer` script with observers and canvas grid.

## Files

| Role | Path |
|------|------|
| view | `landing/variant-2-main/index.html` |

## User Stories

- User reads full funnel; stats count up in view; copy-trading steps light in sequence.
- User follows Telegram / VIP links in footer.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| (rAF callback) | 2247 | none | none | Adds `hero-loaded` to `#hero`. |
| `resize` | 2259 | none | none | Canvas sizing for `#gridCanvas`. |
| `drawGrid` | 2264 | none | none | Draws drifting grid lines. |
| `animate` | 2287 | time | none | rAF loop advancing grid offset. |
| `revealObserver` | 2304 | entries | none | Staggers `.reveal` visibility. |
| `lumenObserver` | 2324 | entries | none | Adds `drawn` on `[data-lumen]` lines. |
| `formatNumber` | 2338 | val, target, suffix | string | K+ and suffix formatting. |
| `animateCounter` | 2345 | el | none | Eased count from `data-count`. |
| `tick` | 2352 | now | none | Inner frame for counter. |
| `counterObserver` | 2363 | entries | none | Triggers counters in stat sections. |
| `stepsObs` | 2381 | entries | none | Sequential “lit” step animation. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URLs in `<head>` |

## UI Design

Layout: `--max-width` centered column; section rhythm with labels and luminous dividers; footer with large CTA.
Elements: Hero canvas; `.reveal` blocks; `[data-lumen]` dividers; `#stepsFlowWrap` copy-trading flow.
Patterns: Multiple `IntersectionObserver`s; single canvas animation loop; `DOMContentLoaded` bootstrap.
Notes: Largest file in repo; prefer section-local edits to avoid merge pain.
