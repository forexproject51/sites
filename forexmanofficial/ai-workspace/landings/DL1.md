# DL1 — Your Edge in the Forex Market

## Purpose

Single-screen “coming soon” style card: brand, value line, Telegram CTA, with animated grid canvas behind glassmorphism UI.

## Files

| Role | Path |
|------|------|
| view | `DL1/index.html` |

## User Stories

- User sees Forexman branding and a short positioning message.
- User can open the Telegram/community link via the primary CTA.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `resize` | 241 | none | none | Sizes canvas to viewport. |
| `draw` | 251 | none | none | Renders animated grid on canvas. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts (Orbitron, Inter) | URL in `<head>` |

## UI Design

Layout: Full-viewport dark background; fixed canvas grid; centered card with corner accents, live badge, logo, headline, description, CTA.
Elements: Canvas `#grid`, gradient orbs, framed card, Telegram CTA.
Patterns: Motion on grid + subtle card entrance; high-contrast teal accent on near-black.
Notes: Inline CSS and JS only; no build step.
