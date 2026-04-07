# Project Overview

## Identity

**Forexmanofficial** — static **HTML/CSS marketing landing pages** for the **Forexman** forex trading channel (Telegram-first acquisition). No server app, no database, no Razor, no OviLibs. Goal: high-converting short landings with a cohesive dark fintech aesthetic.

## Content Layout

| Area | Purpose |
|------|---------|
| `DL1/` … `DL10/` | Ten short **design landing** variants — experiments and alternate layouts |
| `landing/` | Longer reference landings (`variant-1`, `variant-2-main`, `variant-3`) plus copy/style notes (`content.md`, `sections.md`, `styleguide_*.md`, `implementation_prompt.md`) |

Canonical visual/structure reference for tokens and patterns: `landing/variant-2-main/index.html`.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS in `<style>` blocks or separate `.css` (no SCSS build in this repo) |
| Scripts | Optional vanilla JS inline or trailing `<script>` — no bundler, no OviPage |
| Assets | Images/fonts via relative paths or CDNs (e.g. Google Fonts) as in reference files |

## Design Direction

| Aspect | Rule |
|--------|------|
| Mood | Dark premium fintech — deep blues/blacks, **teal/cyan** primary accent, supporting **blue** |
| Type | Headings **Exo 2**, body **DM Sans**, mono labels **JetBrains Mono** (match reference) |
| Effects | Subtle glows, gradient hairlines, card depth — polished, not generic “AI slop” |
| Goal | One clear primary CTA per major fold; scannable sections; mobile-first stacking |

## Key Patterns

| Pattern | Detail |
|---------|--------|
| Tokens | `:root` CSS variables for colors, spacing, radii, typography — see `ai-project/rules/code/htmlcss/core.md` |
| Layout | `.container` max-width (~1160px), section vertical rhythm, `.section-label` + headline blocks |
| CTA | Primary filled button (teal); secondary/outline variants as in reference |
| Compliance | Do not invent performance stats; follow approved copy in `landing/content.md` and legal/disclaimer needs of the channel |

## Agent Focus

| Task type | Primary agent |
|-----------|----------------|
| HTML structure, CSS, responsive layout | dev-htmlcss |
| Short headlines, body copy, CTAs | copywriter |
| Section order, hierarchy, mobile behavior | ux-designer |
| Small interactions (scroll reveals, nav) | dev-js (minimal) |

**dev-cs does not apply** — no C# codebase.

## Folder Detail

See `ai-project/config.md` → Project Paths.
