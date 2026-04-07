# DL7 — Where Traders Come to Win

## Purpose

Tabbed or multi-panel social proof layout: canvas grid, tab switching, win-focused copy, CTA.

## Files

| Role | Path |
|------|------|
| view | `DL7/index.html` |

## User Stories

- User switches tabs to compare proof or offers.
- User joins community from primary CTA.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `resize` | 273 | none | none | Canvas to viewport. |
| `drawGrid` | 276 | none | none | Background grid drawing. |
| `switchTab` | 295 | id, btn | none | Shows panel; updates active tab control. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Background grid canvas; foreground tabs and content panes; CTA.
Elements: Tab buttons wired to `switchTab(id, btn)`.
Patterns: Minimal JS UI state; CSS classes for active tab.
Notes: When adding tabs, extend `switchTab` and matching panel IDs.
