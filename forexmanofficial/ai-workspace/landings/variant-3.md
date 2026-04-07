# landing/variant-3 — Trade Smarter. Profit Daily.

## Purpose

Alternate visual system (Rajdhani / Inter / Space Mono): dashboard-style floats, sparklines, counters — compact script block vs variant-2.

## Files

| Role | Path |
|------|------|
| view | `landing/variant-3/index.html` |

## User Stories

- User sees “terminal” aesthetic with moving sparklines and stat counters.
- User proceeds to Telegram CTAs in page.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `initFloats` | 1530 | none | void | IIFE; floating metric / parallax setup. |
| `buildSparkline` | 1549 | lineEl, fillEl, w, h | none | Path generation for mini charts. |
| `runCounter` | 1596 | el | none | Animates numeric text. |
| `tick` | 1603 | now | none | Inner rAF for counter. |
| `drawSpark` | 1633 | lineEl | none | Updates sparkline on interval/tick. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URLs in `<head>` |

## UI Design

Layout: Dark abyss palette via CSS variables; monospace labels; chart motifs.
Elements: Sparkline SVG paths; float animation layer; CTA zones.
Patterns: IIFE for init; rAF-driven counters; random noise in spark paths.
Notes: Title matches variant-2; distinguish by font stack and section structure when comparing.
