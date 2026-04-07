# Static HTML Marketing Landings

## Purpose

Portable conventions for **standalone** `.html` marketing pages (embedded or linked CSS), when there is **no** Razor stack.

## Applies To

Static `.html` landings: single-file or few files; no CSHTML, no tag helpers.

## Rules

| Need | Correct | Wrong |
|------|---------|-------|
| Structure | `header` / `main` / `section` / `footer`; one `h1` per page | Div-only soup with no landmarks |
| Tokens | Central `:root` variables; reference via `var(--*)` | Repeated hex/rgb across dozens of rules |
| Styles | One coherent block (or one `.css` per variant) | Fragmented inline styles on every element |
| Responsive | Fluid type (`clamp`), flexible grids, touch-sized taps | Fixed pixel layouts that break < 375px |
| JS | Optional, progressive enhancement; defer non-critical work | Heavy frameworks for trivial effects |
| Meta | `viewport`, `title`, `meta description` for SEO/social | Missing viewport on mobile landings |
| Motion | Respect `prefers-reduced-motion` for non-essential animations | Parallax on every section |

## Examples

```html
<section aria-labelledby="signals-heading">
  <div class="container">
    <p class="section-label">Signals</p>
    <h2 id="signals-heading">Daily setups</h2>
  </div>
</section>
```

## Constraints

- NEVER treat this file as a substitute for **project** token tables — follow `ai-project/rules/code/htmlcss/core.md` when present
- NEVER apply Razor/`ovi-*` rules from `htmlcss/core.md` to pure static `.html` unless the file is actually CSHTML
- ALWAYS keep critical LCP content and CTA visible without requiring JS
