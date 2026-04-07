# UX — Mobile & Responsive (Landings)

## Purpose

How Forexman **static landings** adapt from desktop to phone: touch targets, readable type, CTA reachability.

## Applies To

All UX specs for `DL*` and `landing/variant-*`.

! MUST READ `ai-project/rules/ux/core.md` BEFORE applying this file.
! MUST READ `ai-project/rules/ux/page-layouts.md` BEFORE applying this file.

## Breakpoint model

| Breakpoint | Label | Typical device |
|------------|-------|----------------|
| >= 1024px | Desktop | Laptops, large tablets landscape |
| 640–1023px | Tablet | Tablets, small laptops |
| < 640px | Mobile | Phones |

Specs use **mobile / tablet / desktop** labels; avoid one-off pixel perfectionism unless matching existing CSS `clamp` breakpoints.

## Landing-specific adaptation

| Desktop | Mobile |
|---------|--------|
| Nav inline + CTA | Hamburger / compact nav; CTA full-width or sticky |
| Hero two-column (copy + visual) | Stack: headline → CTA → visual (or visual first if subordinate) |
| Multi-card feature row | 1 column; consistent card order |
| Side-by-side stats | Stack or horizontal scroll only if arrows/hint clear |
| Footer multi-column | Accordion or stacked link groups |

## Touch & interaction

| Need | Correct | Wrong |
|------|---------|-------|
| Tap targets | Min ~44×44px hit areas | Text-sized links alone for primary CTA |
| Horizontal scroll | Avoid for main narrative | Whole-page sideways scroll |
| Fixed elements | Sticky CTA clears content (padding-bottom on `main`) | Obscuring legal text |

## Typography

- Body **no smaller** than ~14px equivalent on mobile; maintain line-height for readability.
- Headlines: rely on `clamp()`-style scaling already in reference CSS.

## Constraints

- NEVER reference Bootstrap column classes in specs unless the HTML actually uses Bootstrap (default: **no**)
- NEVER omit mobile behavior for any multi-column section
- ALWAYS verify primary CTA is reachable **within one scroll** on a ~390px-wide viewport for short DL pages
- ALWAYS preserve contrast ratios for teal on dark backgrounds (WCAG conscious)
