# Format: DB workspace context file

## Location

- Models: `ai-workspace/db/models/{mirroring-submodule-path}/{Name}.md`
- Core: `ai-workspace/db/core/{Topic}.md` (e.g. `DbContext.md`, `Migrations-overview.md`)

## Template (models)

```markdown
# {Entity or file group name}

## Purpose

[One line: what this entity or group represents in the domain]

## Source files

| File | Role |
|------|------|
| {path under repo root} | entity / configuration / enum |

## Fields / properties

| Name | Type | Constraints | Notes |
|------|------|-------------|-------|
| {Prop} | {type} | {nullable, FK, etc.} | |

## Relationships

- {navigation or FK to other entities}

## Notes

[Migrations, indexes, soft-delete, etc.]
```

## Template (core)

```markdown
# {Topic — e.g. Application DbContext}

## Purpose

[What this component does for persistence]

## Source files

| File | Role |
|------|------|
| {path} | DbContext / OnModelCreating / DI registration |

## Key details

- DbSets or major configuration
- Multi-context setup if any
- Migration folders and naming convention

## Notes

[Anything agents must not break]
```
