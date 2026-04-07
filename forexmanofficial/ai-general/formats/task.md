# Format: Inter-Agent Task Spec

## Purpose

Strict format for task specifications passed from DevLeader to dev agents. No prose, no greetings, pure structured specification.

## Template

```
TASK: [one-line description]
EFFORT: low|mid|high
FILES: [list of files to read/modify, from ai-workspace context]
RULES: [list of rule files to read, from address book — only those relevant to this task]
CONTEXT: [ai-workspace context file paths to read first]
SPEC: |
  [multi-line technical specification]
  [what to implement, how, expected behavior]
VERIFY: [how to verify success — build command, check to run]
```

## Rules

- No prose. No greetings. No "please" or "could you."
- TASK is always one line
- EFFORT determines model tier (low=fast, mid=standard, high=powerful)
- FILES lists concrete file paths, not directories
- RULES lists only rules relevant to THIS task, not all rules
- CONTEXT lists ai-workspace context files to read BEFORE touching code
- SPEC describes WHAT to implement and expected behavior
- VERIFY is a concrete command or check, not "make sure it works"
