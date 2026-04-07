# Quick

For single, small tasks that don't need full planning.

## Criteria

Quick mode is appropriate when ALL of:
- Single concern (one feature, one fix, one change)
- Touches 1-3 files
- Effort: low or mid
- No UI design decisions needed
- No dependencies on other unfinished work

## Procedure

1. Read the user's task input
2. Determine domain → select appropriate dev agent (from agents/index.md)
3. Spawn dev agent directly with:
   - Task input as spec
   - Effort tag (low or mid)
   - No dev-leader, no plan file
4. Agent follows standard dev workflow (rules/dev/overview.md)
5. Agent reports result directly to user
6. If self-review checklist fails → agent fixes
7. Done

## When to Refuse

If the task touches 4+ files, needs multiple agents, or involves UI decisions:
→ Tell user: "This needs full planning. Run /plan instead."
