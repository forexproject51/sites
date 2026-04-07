# Format: Task/Plan File

## Location

`ai-workspace/tasks/{task-name}/plan.md`

## Template

```markdown
# Plan: {Task Name}

## Overview

[2-3 sentences: what this plan achieves]

## Decisions (if discuss phase ran)

| Area | Decision | Alternatives Considered |
|------|----------|------------------------|
| {gray area} | {what was decided} | {what was rejected and why} |

## Groups

### Group: {group-name}

**Depends on:** [{other group names, or "none"}]
**Can parallel with:** [{other group names, or "none"}]

#### Tasks

- id: {unique-id}
  effort: low|mid|high
  scope: single|multi
  status: pending|in-progress|done|blocked|failed
  agents: [{agent names}]
  title: {one-line description}
  files:
    read: [{file paths from ai-workspace}]
    modify: [{file paths}]
  spec: |
    {technical specification — what to do, expected behavior}
  depends_on: [{task ids within this group, or "none"}]
  verify: |
    command: {exact shell command to run}
    expect: {expected output or condition}
    fallback: {what to check if command isn't applicable}

- id: {next-task}
  ...

### Group: {next-group}
...

## UI Specs

[If UXDesigner produced specs during planning, they go here]

### {Page/Feature Name}

[UXDesigner output format:
PAGE: [page name]
LAYOUT:
  - [section]: [description]
ELEMENTS:
  - [element type]: [purpose, behavior, data source]
INTERACTIONS:
  - [trigger]: [action, expected result]
NOTES: [usability considerations, edge cases]
]
```

## Verify Field Examples

```yaml
  # C# task
  verify: |
    command: dotnet build
    expect: Build succeeded, 0 errors
    
  # Page handler task
  verify: |
    command: dotnet build
    expect: Build succeeded
    fallback: Manual — navigate to /BrokerAccounts, verify table loads

  # JS task  
  verify: |
    command: (per ai-project/config.md — e.g. dotnet build or lint)
    expect: No errors
    fallback: Open browser console, verify no JS errors on page

  # CSHTML task
  verify: |
    command: dotnet build
    expect: Build succeeded
    fallback: Verify page renders, elements match UI spec
```

## Rules

- One plan file per bulk task set
- Tasks are grouped by context similarity
- Every task has an explicit effort tag
- Dependencies are explicit (task IDs)
- Specs describe WHAT to do, not HOW (agents make implementation decisions)
- File paths MUST use aliases from `ai-project/config.md` Project Paths table. Write `db/Models/Brokers/Foo.cs`, not the full path. If no alias covers the prefix, use the full path.

## Constraints

- Every task verify field must contain an executable command and expected output
- Plans must NOT use scope reduction language ("simplified", "basic for now", "future enhancement", "v2 feature", "static placeholder")
- If a requirement cannot fit within current group structure, recommend group splitting — never silently drop scope
