# UX — Landing Page Layouts

## Purpose

Section patterns and vertical rhythm for **Forexman** static landings. Deviates from app/dashboard layouts — this is **acquisition**, not product UI.

## Applies To

UX specs for `DL1`–`DL10` and `landing/variant-*`.

! MUST READ `ai-project/rules/ux/core.md` BEFORE applying this file.

## Canonical anatomy

Reference implementation: `landing/variant-2-main/index.html`. Typical **long** landing order:

| # | Section | Role |
|---|---------|------|
| 1 | Nav / header | Logo, minimal links, primary CTA repeat |
| 2 | Hero | Value prop, proof hook, main CTA |
| 3 | Social proof | Stats strip, logos, or testimonials (only honest content) |
| 4 | Benefits / features | 3–6 cards or rows; icon + headline + line |
| 5 | How it works | Steps or timeline |
| 6 | Deepened proof | Case-style blocks, quotes, or channel screenshot tastefully |
| 7 | Pricing / packages | If applicable — clear tiers |
| 8 | FAQ | Objections → short answers |
| 9 | Final CTA | Repeat primary action |
| 10 | Footer | Legal, links, disclaimers |

**Short DL variants** (`DL1`–`DL10`): pick a **subset** (often hero + 1–2 blocks + CTA) — still keep one clear primary action.

## Layout selection

| Goal | Structure |
|------|-----------|
| Pure conversion | Hero + proof strip + single feature row + CTA |
| Education-heavy | Hero + “how it works” + FAQ + CTA |
| Trust-first | Hero below fold preceded by compact proof bar |

## Section rules

| Rule | Detail |
|------|--------|
| Hero | One headline, one supporting paragraph, **one** primary CTA visible without scroll on common laptop breakpoints |
| Proof | Numbers must match approved copy — no invented metrics |
| Features | Parallel structure (parallel headings, similar card lengths) |
| Sticky mobile CTA | Optional bottom bar for Telegram on long pages — do not duplicate three competing actions |

## Constraints

- NEVER reuse Nexlot **dashboard / table / wizard** layout names for landings
- NEVER spec partial views, `_Layout`, or lazy-load placeholders — static HTML only
- ALWAYS define what collapses or stacks first on **mobile** for multi-column rows
- ALWAYS leave room for mandatory compliance text where the channel requires it
