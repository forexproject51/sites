# SCSS Architecture & Styling Conventions

## Purpose

Enforces consistent SCSS architecture, variable usage, Bootstrap-first styling, and build process. Prevents hardcoded colors and element-specific classes.

## Applies To

All `.scss` files and styling decisions in CSHTML.

## Rules

### SCSS Architecture

Entry point (`nexlot-style.scss`) composes partials via `@use`:

```
variables -> mixins -> font -> base -> layout -> buttons -> badges -> cards ->
modals -> forms -> components -> table -> background -> notifications -> onboarding
```

New partials go in the designated SCSS folder as `_partialname.scss` and MUST be added to the entry point.

### Variable Usage

Every SCSS partial MUST start with:

```scss
@use 'variables' as *;
```

NEVER hardcode hex color values. Use `$variables` from `_variables.scss`.

| Correct | Wrong |
|---------|-------|
| `color: $primary` | `color: #2933ff` |
| `background: $surface` | `background: #030518` |
| `border: 1px solid $border` | `border: 1px solid rgba(255,255,255,0.06)` |

### Bootstrap-First Styling

Use Bootstrap utility classes BEFORE creating custom SCSS. Most styling needs can be met by combining existing classes:

| Need | Use Bootstrap | Not custom CSS |
|------|--------------|----------------|
| Spacing | `mb-3`, `px-4`, `gap-2` | `.custom-spacing` |
| Flex layout | `d-flex`, `align-items-center`, `justify-content-between` | `.flex-wrapper` |
| Text | `text-muted`, `small`, `fw-semibold`, `text-nowrap` | `.label-text` |
| Visibility | `d-none`, `d-lg-block` | `.hide-mobile` |
| Sizing | `w-100`, `col-lg-6` | `.full-width` |

### No Element-Specific Classes

If a new style is needed, make it universal and reusable. NEVER create a class for a single element or section.

| Correct | Wrong |
|---------|-------|
| `.card-glow-primary` (reusable across all cards) | `.broker-detail-card` (single-use) |
| `.icon-box` (reusable pattern) | `.payout-request-icon` (single-use) |

### Mixins

| Mixin | Purpose | Parameters |
|---|---|---|
| `card-gradient-border($tl, $br, $mid)` | Gradient border via `::before` | Top-left, bottom-right, mid colors |
| `frosted-surface($opacity, $blur, $tl, $br)` | Frosted glass effect | Opacity, blur, top/bottom colors |

### SCSS Rebuild

After editing ANY `.scss` file, run:

```bash
cd NexlotCabinetWeb/NexlotCabinetWeb && npm run build:css
```

This compiles the entry SCSS to the CSS file the browser loads. Do NOT skip.

## Constraints

- NEVER hardcode hex colors in SCSS — use `$variables`
- NEVER create element-specific or section-specific CSS classes — make styles universal and reusable
- NEVER use inline `style` attributes in CSHTML — use CSS classes
- NEVER use inline `<style>` blocks in `.cshtml` files — add to SCSS partials
- NEVER skip the SCSS rebuild after editing `.scss` files
- ALWAYS use `@use 'variables' as *` at the top of every partial
- ALWAYS use Bootstrap utility classes before creating custom SCSS
- ALWAYS add new partials to the entry point SCSS file
