# Plan

When the user runs this command, follow this procedure exactly.

## 1. Gather Input + Discuss (mode-dependent)

Read the user's task input.

If running in PLAN MODE:
  - Identify gray areas in the task input
  - Ask user targeted questions (max 3-5, multiple choice preferred, one at a time)
  - UI tasks: ask about layout, density, interactions, empty states
  - Ambiguous scope: ask about priorities, boundaries, what's in/out
  - Multiple approaches: present 2-3 options with tradeoffs, ask user to pick
  - After all questions answered, write DECISIONS block into the plan

If running in AGENT MODE:
  - Check for critical ambiguities that would produce fundamentally different plans
  - If found: ask only the critical questions (max 2-3, all at once, multiple choice)
  - Lock answers into DECISIONS block, then proceed to step 2
  - If no critical ambiguities: proceed directly to step 2

## 2. Invoke Planner

Spawn the **planner** agent with the task input. The planner will:

1. Read `ai-general/agents/index.md` to understand available agents
2. Read `ai-project/config.md` for path aliases and build commands
3. Read `ai-workspace/` context files to understand project structure
4. If UI tasks exist, spawn **ux-designer** for high-level layout specs
5. Decompose tasks into atomic units
6. Map dependencies as a DAG
7. Group tasks by context similarity
8. Assign agents and effort tags to each task
9. Self-validate using built-in checklist (coverage, scope reduction, verify commands, dependencies, path aliases)
10. Output plan to `ai-workspace/tasks/{task-name}/plan.md`

## 3. Present Plan

Show the user the plan file path and a summary:
- Number of groups
- Number of tasks per group
- Dependency order
- Estimated effort distribution (low/mid/high counts)

## 4. Wait for Review

The user reviews and optionally edits the plan. Do NOT proceed to execution until the user explicitly starts it.

## 5. Resume (if state exists)

If `ai-workspace/tasks/{task-name}/state.md` exists with status in-progress:
  Show user the current position and ask: "Resume from {group}/{task}?"
  If yes: dispatch task-runner with resume context
  If no: reset state.md, start fresh

## Example

```
User: /plan
User: Fix the dashboard chart, add payout filters, refactor broker account page

-> Planner produces ai-workspace/tasks/dashboard-payouts-broker/plan.md
-> Summary shown to user
-> User reviews, edits, then says "execute"
-> TaskRunner dispatches groups
```
