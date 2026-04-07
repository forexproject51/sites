# Project Configuration

## Model Tiers

| Tier | Model ID |
|------|----------|
| fast | composer-2-fast |
| standard | claude-sonnet-4 |
| powerful | claude-opus-4.6 |

## Build Commands

| Domain | Command | Working Directory |
|--------|---------|-------------------|
| (none required) | Static HTML — open files in browser or serve with any static server | repo root |

Optional local preview:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/landing/variant-2-main/` or `http://localhost:8080/DL1/`.

## Project Paths

| What | Path |
|------|------|
| Repo root | `.` |
| Design landings DL1–DL10 | `DL1/` … `DL10/` (each with `index.html`) |
| Reference landings & docs | `landing/` |
| AI rules (project) | `ai-project/rules/` |
| Changelog | `ai-workspace/changelog.md` |

## Localization

Single-language **English** landings unless a task explicitly adds another locale. No JSON localization files in this repo.
