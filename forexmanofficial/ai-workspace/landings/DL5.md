# DL5 — Complete Your Trading Mission

## Purpose

Mission / game metaphor: point field or “mission” canvas, countdown, live spots, Telegram CTA.

## Files

| Role | Path |
|------|------|
| view | `DL5/index.html` |

## User Stories

- User follows mission-style copy and timers.
- User joins when convinced by animated activity.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `drawPts` | 227 | none | none | Draws canvas point field / motion. |
| `tickCD` | 258 | none | none | Countdown tick handler. |
| `tickSpots` | 271 | none | none | Updates spot/availability display. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Dark mission theme; canvas + HUD-style stats; CTA block.
Elements: Countdown; dynamic spots; primary CTA.
Patterns: Multiple `setInterval`/`rAF` drivers for CD and spots.
Notes: Keep `drawPts` and resize handler in sync if layout changes.
