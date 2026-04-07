# DL4 — Trade with Precision

## Purpose

Precision/system aesthetic: canvas visualization, finite “spots” or capacity motif, CTA to Telegram.

## Files

| Role | Path |
|------|------|
| view | `DL4/index.html` |

## User Stories

- User perceives scarcity or precision (spots / visual metaphor).
- User opens CTA link.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `resize` | 202 | none | none | Canvas dimensions to window. |
| `draw` | 206 | none | none | Redraws canvas scene. |
| `decreaseSpots` | 229 | none | none | Updates remaining spots / UI state. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Full-bleed dark UI; canvas layer; foreground copy and CTA.
Elements: Spot counter or similar tied to `decreaseSpots`.
Patterns: Resize-driven redraw loop; scarcity tick.
Notes: Coordinate with HTML IDs used by `decreaseSpots` when editing.
