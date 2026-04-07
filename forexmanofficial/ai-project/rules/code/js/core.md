# Project-Specific JavaScript — Static Landings

! MUST READ `ai-project/rules/project-scope.md` FIRST.

## Purpose

Minimal **vanilla JS** patterns for Forexman HTML landings: small enhancements only. **No** OviPage, **no** OviRequest, **no** scaffolds from Nexlot.

## Applies To

`<script>` blocks at end of `index.html` or rare standalone `.js` files in this repo.

## Rules

| Need | Correct | Wrong |
|------|---------|-------|
| Module system | Plain script; IIFE if scoping needed | Webpack/Vite/React for static DL pages |
| DOM ready | `defer` on script tag or run at end of `body` | Blocking `head` script assuming DOM |
| Motion | `prefers-reduced-motion` check for scroll animations | Forced motion on all users |
| Nav | Toggle class on header/sidebar for mobile menu | Full SPA router |
| Network | None for core content — landings must work static | `fetch` to undocumented APIs unless task adds backend |

## Optional patterns

| Pattern | Use for |
|---------|---------|
| `IntersectionObserver` | Section reveals, lumen-line “draw” class |
| Small state classes | `is-open`, `drawn`, `visible` — toggled from JS |
| Copy link | `navigator.clipboard` with button fallback text |

## Constraints

- NEVER import `ai-general/rules/code/js/oviLibs/*` patterns — OviLibs are out of scope
- NEVER require anti-forgery forms or `translate()` — those are server-app concerns
- NEVER block rendering or CTA clicks on analytics or decorative scripts
- ALWAYS keep JS total small; prefer CSS `:hover` / transitions where sufficient
