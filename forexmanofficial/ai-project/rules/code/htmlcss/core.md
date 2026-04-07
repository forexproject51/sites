# Project-Specific HTML/CSS — Static Landings

! MUST READ `ai-project/rules/project-scope.md` FIRST.
! MUST READ `ai-general/rules/code/htmlcss/static-html-landing.md` BEFORE applying this file.

## Purpose

Forexman **design tokens**, layout primitives, and class patterns for static `index.html` landings (`DL1`–`DL10`, `landing/variant-*`). Aligns implementations with `landing/variant-2-main/index.html`.

## Applies To

All `.html` and project-local `.css` files under `DL*` and `landing/`.

## Rules

### CSS variables (`:root`)

| Token group | Role | Reference values (align, do not drift arbitrarily) |
|-------------|------|-----------------------------------------------------|
| `--bg-void`, `--bg-dark`, `--bg-card`, `--bg-card-alt`, `--bg-hover` | Page + surface depth | `#060a10`, `#0a0e18`, `#111620`, `#151b28`, `#1a2030` |
| `--accent-primary`, `--accent-primary-dim` | Primary CTA, labels, highlights | `#00e5cc`, `#0abfbc` |
| `--accent-blue`, `--accent-blue-light` | Secondary accent, gradients | `#3b82f6`, `#60a5fa` |
| `--text-primary`, `--text-secondary`, `--text-tertiary` | Copy hierarchy | `#f0f4f8`, `#94a3b8`, `#64748b` |
| `--border-subtle`, `--border-accent*` | Dividers, cards | low-alpha white / teal |
| `--font-heading`, `--font-body`, `--font-mono` | Typography stack | Exo 2, DM Sans, JetBrains Mono |
| `--space-*`, `--max-width`, `--section-pad-x`, `--section-pad-y` | Spacing | 4–128px scale; max-width ~1160px |

| Need | Correct | Wrong |
|------|---------|-------|
| New color | Add/update `:root` variable and use `var(--token)` | New raw hex in arbitrary selectors |
| Section width | `.container` + `max-width: var(--max-width)` | Unbounded full-bleed text blocks |

### Typography

| Element | Rule |
|---------|------|
| `h1`–`h3` | `font-family: var(--font-heading)`; clamp sizes for responsive heroes |
| Body | `var(--font-body)`, ~15px base, comfortable line-height |
| Eyebrow / label | `.section-label`: mono, uppercase, letter-spacing, `var(--accent-primary)` |

### Layout primitives

| Class / pattern | Use for |
|-----------------|---------|
| `.container` | Centered content column with horizontal padding |
| `section` | Vertical section rhythm using `--section-pad-y` |
| `.section-headline` | Headline with gradient bar (`::before`) per reference |
| `.lumen-line` | Decorative horizontal gradient line + drawn state if animating |

### Buttons

| Class | Use for |
|-------|---------|
| `.btn-primary` | Main conversion (Telegram, join, get signals) |

Match padding, radius, uppercase treatment, and hover/glow behavior from `landing/variant-2-main/index.html`.

### Assets & fonts

| Need | Correct | Wrong |
|------|---------|-------|
| Google Fonts | `preconnect` + single `css2` link with required weights | Blocking fonts without preconnect |
| Images | `max-width: 100%`, `display: block`, sensible `alt` | Fixed sizes that overflow mobile |

## Examples

Token usage:

```css
.hero-cta {
  color: var(--bg-dark);
  background: var(--accent-primary);
  box-shadow: 0 4px 24px rgba(0, 229, 204, 0.3);
}
```

## Constraints

- NEVER introduce Bootstrap/Ovi/SCSS build assumptions — this repo has no `npm run build:css` for landings
- NEVER hardcode a second divergent palette in the same variant — extend `:root` instead
- ALWAYS preserve semantic HTML5 landmarks (`header`, `main`, `footer`, `section` with meaningful structure)
- ALWAYS match Forexman reference hierarchy (primary teal CTA, blue as secondary accent) unless a **named** experimental variant intentionally documents a deviation
