# Format: Rule File

## Location

- Portable: `ai-general/rules/code/{domain}/{topic}.md`
- Project-specific: `ai-project/rules/code/{domain}/{topic}.md`

## Template

```markdown
# {Rule Title}

## Purpose

[One sentence: what this rule enforces and why it exists]

## Applies To

[What files/situations this rule covers]

## Rules

[Imperative instructions. Use tables for mapping.]

| Need | Correct | Wrong |
|------|---------|-------|
| [situation] | [do this] | [not this] |

## Examples

[1-2 concrete code examples maximum]

## Constraints

- NEVER [specific prohibited action]
- ALWAYS [specific required action]
```

## Rules

- Max 300 lines per rule file (split if larger)
- Imperative language only — no "consider", "try to", "you might"
- Include both DO and DO NOT
- 1-2 examples maximum — one teaches, more waste tokens
- Every sentence must constrain or guide behavior. If removing a line doesn't change agent behavior, delete it.
