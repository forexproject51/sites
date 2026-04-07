# UX — Forexman Landing Pages

## Purpose

Visual personality and hierarchy for **short marketing landings** (DL variants + `landing/variant-*`). Guides UX specs — implementation lives in HTML/CSS.

## Applies To

All UX Designer output for this repo.

! MUST READ `ai-project/rules/project-scope.md` BEFORE applying this file.

## Visual Personality

| Trait | Rule |
|-------|------|
| Palette | Deep void background; **teal/cyan** primary; **blue** secondary; cool grays for body |
| Depth | Gradient hairlines, soft glow on CTAs/cards, layered dark surfaces — intentional, not flat |
| Type | Bold geometric headings; readable sans body; mono for labels/stats |
| Density | Generous section padding; scannable chunks — not dense app UI |
| Focus | **One primary CTA** per major viewport fold |

## Color semantics (landings)

| Color role | Use for |
|------------|---------|
| Teal / cyan | Primary actions, key highlights, label accent |
| Blue | Secondary emphasis, gradients paired with teal |
| Green | Positive signals only if aligned with brand (do not imply guaranteed profit) |
| Muted gray | Secondary copy, meta, footer |
| Red | Risk warnings, errors — sparingly |

## Visual hierarchy

| Level | Treatment |
|-------|-----------|
| Hero headline | Largest; high contrast |
| Section title | Strong heading + optional gradient rule |
| Body | Muted secondary color; line length constrained by container |
| Eyebrow | Mono, uppercase, teal |

## Motion

| Need | Correct | Wrong |
|------|---------|-------|
| Reveal on scroll | Subtle; respect `prefers-reduced-motion` | Blocking hero content until animation finishes |
| CTA hover | Light lift/glow consistent with CSS | Chaotic multi-second loops on every control |

## Anti-patterns (generic “template slop”)

| Avoid | Why |
|-------|-----|
| Unrelated neon rainbow gradients | Not Forexman brand |
| Stock “three generic icons” with filler | Weak differentiation |
| Fake trust badges / invented media logos | Trust erosion |
| Particle explosions / cyberpunk chrome | Distracts from CTA |

**Note:** Teal/cyan **is** the brand accent — distinguish purposeful brand glow from unrelated rainbow gradients.

## Constraints

- NEVER specify Razor layouts, Bootstrap grid class names, or Ovi components for these pages
- NEVER place competing primary CTAs side-by-side without hierarchy (solid vs outline)
- NEVER hide the main Telegram / join action below excessive copy on mobile
- ALWAYS specify mobile stacking order when sections sit side-by-side on desktop
- ALWAYS anchor specs to `landing/variant-2-main/index.html` unless experimenting under a **named** DL variant
