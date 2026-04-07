# DL3 — Level Up Your Trading Game

## Purpose

Gamified / energy landing: animated background, stats, countdown, community CTA with animated counters.

## Files

| Role | Path |
|------|------|
| view | `DL3/index.html` |

## User Stories

- User sees urgency via countdown and social proof numbers.
- User joins via Telegram CTA after reading feature messaging.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `drawBg` | 346 | none | none | Canvas/visual background animation. |
| `tickCD` | 385 | none | none | Countdown timer step. |
| `countUp` | 395 | id, target, suffix, duration | none | Animates numeric text to target. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Dark theme; hero + stats; canvas-backed motion; countdown block; CTA zone.
Elements: Animated numerals; timer; primary join button.
Patterns: Count-up on load or timer loop; canvas `drawBg` ties to `requestAnimationFrame` or interval.
Notes: Check script bottom of file for timer wiring next to `tickCD`.
