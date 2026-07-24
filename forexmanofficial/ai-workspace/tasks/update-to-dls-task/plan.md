# Plan: Update DL landings to new copy and layouts (DL1, DL5, DL7, DL9)

## Overview

This plan updates four static design landings (`DL1/`, `DL5/`, `DL7/`, `DL9/` per `ai-project/config.md`) with locked headline, subheadline, and CTA strings where specified; adjusts stats from 95% to 87% where required; shifts `DL5` to a green palette; removes `DL7` ticker and tab UI in favor of a single hero/card flow; and applies `DL5` removals per task screenshot when available. Each landing is an independent file change set so work can run in parallel.

## Decisions (locked)

| Area | Decision | Alternatives considered |
|------|----------|------------------------|
| Source scope | Implement only in repo paths that map to DL1, DL5, DL7, DL9 (`DL1/index.html` … `DL9/index.html`). | Other folders (e.g. `variants/`) out of scope unless explicitly remapped. |
| DL5 removal target | Treat `ai-workspace/tasks/update-to-dls-task/dl5.jpeg` as source of truth for which blocks to delete; if the file is missing or ambiguous, complete a visual pass with the stakeholder before shipping removals. | Guessing removals from HTML alone—rejected without screenshot confirmation. |
| Copy | Use exact English strings from the task spec; no paraphrase. | copywriter-only pass—not required for pasted finals. |
| Verification | CLI checks from repo root; manual browser pass per `ai-project/config.md` optional static server. | Vague “looks good”—rejected. |

## Groups

### Group: DL5

**Depends on:** none  
**Can parallel with:** DL7, DL9, DL1

#### Tasks

- id: dl5-theme-and-js-accent
  effort: mid
  scope: single
  status: pending
  agents: [dev-htmlcss, dev-js]
  title: DL5 — green landing palette and motion accents
  files:
    read: [DL5/index.html, ai-workspace/tasks/update-to-dls-task/user-input.md]
    modify: [DL5/index.html]
  spec: |
    Replace the current gold/amber visual system (`--gold` family, gold borders/glows, gold particle fills) with a coherent green scheme suitable for the page (background, card, borders, buttons, progress accents). Update any canvas/animation colors in the bottom script so particles/effects match the green palette. Preserve layout and accessibility of existing structure unless removal tasks dictate otherwise.
  depends_on: [none]
  verify: |
    command: cd . && grep -F "Trusted by 10,000+ traders worldwide" DL5/index.html >/dev/null && grep -E "10b981|16b?981|34d399|22c55e" DL5/index.html | head -n 1 | grep -E "10b981|16b?981|34d399|22c55e"
    expect: At least one line of output (green hex tokens present in inline CSS or script after change).
    fallback: Serve repo with `python3 -m http.server 8080` from `.`; open `http://localhost:8080/DL5/`; confirm dominant accent reads green, not gold.

- id: dl5-remove-marked-blocks
  effort: mid
  scope: single
  status: pending
  agents: [dev-htmlcss, dev-js]
  title: DL5 — remove UI blocks indicated on dl5.jpeg
  files:
    read: [DL5/index.html, ai-workspace/tasks/update-to-dls-task/dl5.jpeg]
    modify: [DL5/index.html]
  spec: |
    Open `ai-workspace/tasks/update-to-dls-task/dl5.jpeg` side by side with the current page. Remove the exact sections or elements the screenshot indicates (highlights, arrows, or circled regions). Remove related CSS and inline script logic (intervals, DOM IDs) that become dead after removal so the console stays clean. If `dl5.jpeg` is not in the task folder or marking is unclear, stop and confirm targets with the stakeholder before deleting.
  depends_on: [dl5-theme-and-js-accent]
  verify: |
    command: cd . && python3 -c "import pathlib; p=pathlib.Path('ai-workspace/tasks/update-to-dls-task/dl5.jpeg'); raise SystemExit(0 if p.is_file() else 2)"
    expect: Exit code 0.
    fallback: If exit code 2, manually confirm screenshot exists or obtain stakeholder list of selectors to remove; then in browser compare DL5 to the reference image and confirm indicated blocks are gone.

- id: dl5-hero-copy-cta
  effort: low
  scope: single
  status: pending
  agents: [dev-htmlcss]
  title: DL5 — headline, subheadline, primary CTA
  files:
    read: [DL5/index.html]
    modify: [DL5/index.html]
  spec: |
    Set visible primary headline to exactly: `Trusted by 10,000+ traders worldwide`. Set supporting paragraph to exactly: `Thousands of traders already use our signals to spot opportunities, copy trades, and grow their accounts - every single day.` Set primary button/link label to exactly: `Join Free on Telegram`. Adjust `<title>` only if needed for consistency with the new headline (match project tone).
  depends_on: [dl5-remove-marked-blocks]
  verify: |
    command: cd . && grep -F "Trusted by 10,000+ traders worldwide" DL5/index.html >/dev/null && grep -F "Thousands of traders already use our signals to spot opportunities, copy trades, and grow their accounts - every single day." DL5/index.html >/dev/null && grep -F "Join Free on Telegram" DL5/index.html >/dev/null && echo OK
    expect: OK
    fallback: Open DL5 in browser; visually confirm the three strings appear as the main hero copy and CTA with no typos or extra wrapping breaks that change meaning.

### Group: DL7

**Depends on:** none  
**Can parallel with:** DL5, DL9, DL1

#### Tasks

- id: dl7-remove-ticker-and-tabs
  effort: mid
  scope: single
  status: pending
  agents: [dev-htmlcss, dev-js]
  title: DL7 — remove marquee/ticker and tab UI; single surface
  files:
    read: [DL7/index.html]
    modify: [DL7/index.html]
  spec: |
    Remove the fixed top ticker (`.ticker` markup and related CSS/animation). Remove tab navigation (`.tab-btn`, `.tab-nav`) and the multi-panel structure: keep one cohesive card body equivalent to the prior default “Signals” experience (logo/header, optional signal/teaser blocks as needed for balance). Delete `switchTab` and any now-unused panel markup (Learn/VIP) and their styles. Adjust vertical padding on `.page` so layout is correct without the ticker. Ensure one primary Telegram CTA remains in the main flow after restructuring.
  depends_on: [none]
  verify: |
    command: cd . && ! grep -q 'class="ticker"' DL7/index.html && ! grep -q "switchTab" DL7/index.html && ! grep -q 'class="tab-nav"' DL7/index.html && echo OK
    expect: OK
    fallback: Open `http://localhost:8080/DL7/`; confirm no scrolling price strip at top and no Signals/Learn/VIP tabs.

- id: dl7-headline-cta
  effort: low
  scope: single
  status: pending
  agents: [dev-htmlcss]
  title: DL7 — headline and CTA copy
  files:
    read: [DL7/index.html]
    modify: [DL7/index.html]
  spec: |
    Primary headline must read exactly: `Get free Forex signals today` (sensible line breaks allowed if present in markup). Primary CTA label must read exactly: `Join Free on Telegram`. Remove or rewrite any leftover sub-note copy under the CTA that contradicts the new single-page presentation if it still references tabs or VIP-only paths.
  depends_on: [dl7-remove-ticker-and-tabs]
  verify: |
    command: cd . && grep -F "Get free Forex signals today" DL7/index.html >/dev/null && grep -F "Join Free on Telegram" DL7/index.html >/dev/null && echo OK
    expect: OK
    fallback: Browser check: headline and button text match the spec exactly.

### Group: DL9

**Depends on:** none  
**Can parallel with:** DL5, DL7, DL1

#### Tasks

- id: dl9-stat-and-copy
  effort: low
  scope: single
  status: pending
  agents: [dev-htmlcss]
  title: DL9 — 87% stat and hero copy/CTA
  files:
    read: [DL9/index.html]
    modify: [DL9/index.html]
  spec: |
    Change the visible “Win Rate” style statistic from `95%` to `87%` everywhere it appears for that metric (currently the stat grid). Update primary headline to exactly: `Trusted by 10,000+ traders worldwide`. Update subhead to exactly: `Thousands of traders already use our signals to spot opportunities, copy trades, and grow their accounts - every single day.` Set primary CTA label to exactly: `Join Free on Telegram`. If any script animates the old percentage, align behavior with `87%` for consistency.
  depends_on: [none]
  verify: |
    command: cd . && grep -F "87%" DL9/index.html >/dev/null && ! grep -Fq "95%" DL9/index.html && grep -F "Trusted by 10,000+ traders worldwide" DL9/index.html >/dev/null && grep -F "Join Free on Telegram" DL9/index.html >/dev/null && echo OK
    expect: OK
    fallback: If grep fails on `95%` due to unrelated content, inspect file manually for any remaining `95%` near “Win Rate”; open page and confirm stat shows 87%.

### Group: DL1

**Depends on:** none  
**Can parallel with:** DL5, DL7, DL9

#### Tasks

- id: dl1-stat-sub-remove-footnote
  effort: low
  scope: single
  status: pending
  agents: [dev-htmlcss]
  title: DL1 — 87% accuracy, new subhead, no text under CTA
  files:
    read: [DL1/index.html]
    modify: [DL1/index.html]
  spec: |
    In the stats row, change the accuracy figure from `95%` to `87%`. Replace the `.desc` body copy with exactly: `Thousands of traders already use our signals to spot opportunities, copy trades, and grow their accounts - every single day.` Remove the helper line under the primary button (currently `.sub-text` / “Free forever · No credit card · 2 min setup”) including its styles if unused. Ensure no extra paragraph remains directly under the CTA.
  depends_on: [none]
  verify: |
    command: cd . && grep -F "87%" DL1/index.html >/dev/null && ! grep -Fq "95%" DL1/index.html && grep -F "Thousands of traders already use our signals to spot opportunities, copy trades, and grow their accounts - every single day." DL1/index.html >/dev/null && ! grep -Fq "Free forever · No credit card" DL1/index.html && echo OK
    expect: OK
    fallback: Browser: stat shows 87%; subhead matches; no muted line under the Telegram button.

## UI Specs

### Global

- Typography and spacing: keep each page’s existing font stack and card width unless removal of sections requires minor vertical rhythm tweaks.
- Primary CTA: remains the Telegram-styled anchor with `tracker` attribute where it already exists; do not change tracking integration unless required by removed markup.

### DL5

- After theme change, visual identity reads **green-first**; mission/gamification chrome either removed per screenshot or left intact only if screenshot does not mark it.

### DL7

- Post-change: single-column card; no secondary navigation; no ticker/marquee at viewport top.

## DAG (summary)

```text
dl5-theme-and-js-accent → dl5-remove-marked-blocks → dl5-hero-copy-cta

dl7-remove-ticker-and-tabs → dl7-headline-cta

dl9-stat-and-copy  (standalone)

dl1-stat-sub-remove-footnote  (standalone)

Cross-group: no dependencies; all four groups may run in parallel.
```

## Self-validation (planner checklist)

| # | Check | Result |
|---|--------|--------|
| 1 | Coverage | DL1/5/7/9 requirements from user input map to tasks above. |
| 2 | Scope reduction | No “simplified / v2 / placeholder” language in specs. |
| 3 | Verify | Each task has `command`, `expect`, and `fallback` where CLI alone is insufficient. |
| 4 | Agents | `dev-htmlcss` / `dev-js` assigned per domain; no dev-cs. |
| 5 | Dependency IDs | All `depends_on` reference ids defined in this plan. |
| 6 | Groups | No circular group dependencies; parallel groups OK. |
| 7 | Paths | Uses `DL1/index.html`, `DL5/index.html`, etc., per config aliases under `.`. |

**Note:** Add `dl5.jpeg` (and optionally `dl7.jpeg` for cross-check) under `ai-workspace/tasks/update-to-dls-task/` before executing `dl5-remove-marked-blocks`, or rely on the task’s fallback/stakeholder step.
