# DL6 — System Online

## Purpose

“System online” / matrix tech aesthetic: matrix-style canvas animation, countdown, system-status copy, CTA.

## Files

| Role | Path |
|------|------|
| view | `DL6/index.html` |

## User Stories

- User sees “online / live system” framing.
- User proceeds to Telegram via CTA.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `drawMatrix` | 246 | none | none | Renders matrix rain / grid frame. |
| `tickCD` | 262 | none | none | Countdown update. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Near-black; full-view matrix canvas; centered system card / copy / CTA.
Elements: Status messaging; timer; join action.
Patterns: Continuous redraw for matrix; interval for CD.
Notes: Performance-sensitive; avoid extra DOM writes inside tight draw loops.
