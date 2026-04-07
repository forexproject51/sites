# UX — Components (Landings)

## Purpose

Element choices for **marketing landings**: CTAs, cards, proof, media — not app tables or wizards.

## Applies To

UX Designer specs for static HTML landings in this repo.

! MUST READ `ai-project/rules/ux/core.md` BEFORE applying this file.

## CTA hierarchy

| Level | Treatment | Example use |
|-------|-----------|-------------|
| Primary | Solid teal (`btn-primary` class family), high contrast | Join Telegram |
| Secondary | Outline or ghost; lower contrast | Learn more, See plans |
| Tertiary | Text link with underline/hover | Footer links |

| Need | Correct | Wrong |
|------|---------|-------|
| Competing actions | One solid primary per fold | Two identical solid buttons |
| Channel focus | Telegram-forward wording if that is the funnel | Vague “Sign up” if Telegram is the only path |

## Cards & feature blocks

| Pattern | Use when |
|---------|----------|
| Icon + title + 1–2 lines | Feature grids |
| Stat + label | Proof strip |
| Quote + attribution | Testimonials (authentic only) |
| Step number + title + text | How it works |

Cards use dark surfaces (`--bg-card`, `--bg-card-alt`), subtle borders, optional glow on **one** highlight card per section max.

## Imagery

| Type | Rule |
|------|------|
| Product / channel | Real screenshots or approved assets |
| People | Only with rights; no deceptive stock “trader” clichés if implying endorsement |
| Charts | Legible; no fabricated P&L |

## Navigation

| Pattern | Detail |
|---------|--------|
| Header | Compact; do not duplicate every section anchor unless helpful |
| Anchor links | Smooth scroll; focus management if implementing JS |

## Icons

SVG or lightweight icon font; match size to label rhythm. No decorative icon spam.

## Forms (rare)

If an embed or simple form exists: minimal fields, clear errors, no dark-pattern pre-checked boxes.

## Constraints

- NEVER specify `nexlot-table`, `OviWizard`, or data-table patterns for these pages
- NEVER place more than **one** primary-filled CTA in the same viewport without hierarchy
- ALWAYS pair strong claims with honest proof or soften the headline
- ALWAYS specify focus/hover for interactive elements in handoff notes when dev implements custom CSS
