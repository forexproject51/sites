# Repository Scope

## Purpose

States what this repository contains so agents do not apply **Nexlot cabinet**, **C#**, **Razor**, **OviLibs**, or **EF** conventions here.

## Applies To

All agents and all tasks in this workspace.

## Rules

| Need | Correct | Wrong |
|------|---------|-------|
| Stack | Static `.html` + CSS (+ optional small vanilla JS) | Adding Razor, .NET projects, OviLibs, PostgreSQL |
| Primary HTML/CSS rules | `ai-project/rules/code/htmlcss/core.md` + general `htmlcss/styling.md` **principles** (token discipline, no magic numbers where variables exist) | `ai-general/rules/code/htmlcss/core.md` Razor/tag-helper rules as mandatory for `DL*/index.html` |
| Backend work | Out of scope for this repo | Scaffolding `PageModel`, AJAX handlers, services |
| OviLibs / OviPage | Not used | Importing ovi-* patterns from `ai-general/rules/code/js/oviLibs/` |
| Design reference | `landing/variant-2-main/index.html` for tokens and section patterns | Inventing a unrelated design system |

## Examples

When editing `DL3/index.html`, define colors as `var(--accent-primary)` mapped in `:root`, not one-off hex scattered in selectors.

## Constraints

- NEVER add C#, `.cshtml`, EF migrations, or OviLibs dependencies to this repo unless the project owner explicitly changes scope
- ALWAYS read `ai-project/overview.md` before assuming paths or build commands from other templates
- ALWAYS treat `DL1`–`DL10` and `landing/variant-*` as first-class page roots, not nested under an app `wwwroot`
