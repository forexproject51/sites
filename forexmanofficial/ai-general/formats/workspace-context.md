# Format: Workspace Context File

## Location

`ai-workspace/{category}/{path-mirroring-project}/{name}.md`

Example: `ai-workspace/pages/BrokerAccounts/Index.md`

## Template

```markdown
# {Page/Service/Controller Name}

## Purpose

[One-line: what this page/service does from the user's perspective]

## Files

| Role | Path |
|------|------|
| view | {relative path to .cshtml} |
| model | {relative path to .cshtml.cs} |
| js | {relative path to .js} |
| scss | {relative path to .scss, if exists} |
| models | {relative path to Models file, if exists} |

## User Stories

- User can [action 1]
- User can [action 2]

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| {FunctionName} | {line number} | {params or "none"} | {return type/shape} | {one-line description} |

## Dependencies

| Type | Name | Path |
|------|------|------|
| service | {ServiceName} | {relative path} |
| model | {ModelName} | {relative path} |
| partial | {PartialName} | {relative path} |
| page | {PageName} | {relative path, if cross-page dependency} |

## UI Design (pages and UI components only)

Layout: [brief description of page layout structure]
Elements:
- [element type]: [what it shows, why it's here]
Patterns:
- [UX pattern used]: [why this pattern was chosen over alternatives]
Notes: [any design decisions, constraints, or rationale worth preserving]
```

## Rules

- Max 80 lines per context file (pages with UI Design section get extra room)
- Line numbers must be kept current (updated after structural changes)
- Purpose is from the USER's perspective, not technical
- Only list functions that matter for understanding the page — skip trivial getters/formatters
- UI Design section is mandatory for pages and UI components, omit for services/helpers/controllers
- UXDesigner writes the UI Design section after execution
