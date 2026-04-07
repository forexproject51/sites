# Tone of Voice — Forexman Landings

## Purpose

Defines writing style for **marketing** copy on static landings: headlines, subheads, bullets, CTAs, and footers. Supports a **confident, direct** trading-education brand without sounding scammy or corporate.

## Applies To

All user-visible text in `DL*`/`landing/**/*.html` and related markdown briefs (`content.md`, styleguides).

## Voice

| Trait | Do | Do not |
|-------|-----|--------|
| Direct | Short sentences; lead with benefit | Wall Street jargon stacks |
| Confident | Clear claims tied to **approved** proof points | Guaranteed profits, “risk-free,” invented stats |
| Action-oriented | Strong CTA verbs (Join, Get, Start) | Passive “Submit” / “Click here” |
| Human | “You” / “your”; channel personality | Cold disclaimer-speak in hero copy |

### Capitalization

| Surface | Rule |
|---------|------|
| Primary CTA buttons | ALL CAPS or Title Case per design reference — **stay consistent within one variant** |
| Section headings | Title Case |
| Body | Sentence case |
| Eyebrows / labels | Uppercase small caps pattern matching `.section-label` |

### Numbers & claims

| Need | Correct | Wrong |
|------|---------|-------|
| Performance mentions | Only figures present in `landing/content.md` or legal-approved source | New win rates, subscriber counts, or “verified” badges without source |
| Urgency | Honest scarcity if true | Fake countdowns or stock lies |

### Punctuation

- No period at the end of short CTA button labels.
- Prefer em dash (—) for punchy asides where appropriate.
- One exclamation max per short block; none in fine print.

## Technical language

Audience: retail forex traders (mixed experience). Prefer plain terms; explain acronyms once if needed.

| Instead of | Write |
|------------|-------|
| “Utilize our methodology” | “Use our rules” |
| “Opt-in to communications” | “Get alerts on Telegram” |

## Localization

Default **English** for this repo. Add other languages only when explicitly requested; keep layout ready for longer strings.

## Constraints

- NEVER promise specific returns, “sure” wins, or risk-free trading
- NEVER use fake testimonials or stock personas as if real — align with real channel policy
- NEVER sound like a bank compliance PDF in hero or above-the-fold CTAs
- ALWAYS keep disclaimers readable where compliance requires them
- ALWAYS sync numbers and channel facts with `landing/content.md` when it exists
