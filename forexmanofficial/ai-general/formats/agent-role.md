# Format: Agent Role File

## Location

`ai-general/agents/roles/{agent-name}.md`

## Template

```markdown
# {Agent Name}

## Identity

[2-3 lines: what this agent is, what domain it owns, what it does NOT do]

## Workflow

1. [First step]
2. [Second step]
3. [...]

## Input Format

[What this agent expects to receive — reference inter-agent format if applicable]

## Output Format

[What this agent returns — reference inter-agent format if applicable]

## Rules — Read Before Working

| When | Read |
|------|------|
| [condition] | [file path] |
| [condition] | [file path (if exists)] |

## Constraints

- NEVER [prohibited action]
- NEVER [prohibited action]
- ALWAYS [required behavior]
- ALWAYS [required behavior]

## Error Handling

RECOVERABLE (handle automatically):
- [error]: [action]

UNRECOVERABLE (stop and report to parent):
- [error]: [what to report]
```

## Rules

- Max 150 lines per file
- No coding rules in the file — use rule address book pointers
- No project-specific references — keep portable
- Every constraint must be actionable and verifiable
- If file exceeds 200 lines, split rules into separate rule files and add pointers to the address book
