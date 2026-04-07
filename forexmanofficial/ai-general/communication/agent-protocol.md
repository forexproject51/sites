# Inter-Agent Communication Protocol

## 1. Task Spec (DevLeader -> Dev Agent)

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

No prose. No greetings. No "please" or "could you." Pure structured specification.

## 2. Result (Dev Agent -> DevLeader)

```
STATUS: done|blocked|failed|needs-other|rotate
CHANGES: [list of files changed with brief description of change]
ISSUES: [problems encountered, empty if none]
WS_UPDATED: [list of ai-workspace context files updated, empty if none]
BLOCKED_BY: [what's blocking, only if STATUS is blocked]
FAILED_REASON: [why it failed, only if STATUS is failed]
NEEDS_FROM: [agent type needed, only if STATUS is needs-other]
NEEDS_SPEC: [what the other agent must do, only if STATUS is needs-other]
PROGRESS: [what's done, only if STATUS is rotate]
RESUME_FROM: [where to continue, only if STATUS is rotate]
RULES_ADDED: [{file path}: {one-line description}, only if [auto] rules were written]
```

### `needs-other` Status

The agent discovered that work outside its speciality is missing or incomplete. It cannot finish until another agent handles the request. The agent reports what it needs, pauses, and waits. DevLeader routes the request to the correct agent, then resumes the original agent with the result.

Example:
```
STATUS: needs-other
CHANGES: []
NEEDS_FROM: dev-htmlcss
NEEDS_SPEC: Add data-action="withdraw" attribute to the submit button in Pages/Withdrawals/Index.cshtml, line ~45
```

### `rotate` Status

The agent's context is exhausted (too many files read, repeated failures). It saves state and requests a fresh agent to continue. Dev-leader reads PROGRESS and RESUME_FROM, spawns a fresh agent with the original spec plus the progress summary.

## 3. Group Result (DevLeader -> TaskRunner)

```
GROUP: [group name/id]
STATUS: done|blocked|failed
TASKS_COMPLETED: [count]
TASKS_TOTAL: [count]
PLAN_CHANGES: [list of effort/task modifications DevLeader made, empty if none]
ISSUES: [unresolved problems, empty if none]
RULES_ADDED: [{file path}: {one-line description}, only if [auto] rules were written]
```

## 4. Cross-Agent Request Protocol

When a dev agent reports `needs-other`, DevLeader handles the handoff:

1. Read the `NEEDS_FROM` and `NEEDS_SPEC` from the result
2. Spawn (or resume) the requested agent with a targeted task spec containing only the missing work
3. Wait for that agent to complete
4. Resume the original agent, passing the result: what was changed, which files were updated
5. Original agent finishes its work and reports final status

Flow example:
```
DevLeader spawns DevHTMLCSS -> done
DevLeader spawns DevJS -> needs-other (needs dev-htmlcss to add data attribute)
  DevLeader spawns DevHTMLCSS with targeted fix -> done
  DevLeader resumes DevJS with fix confirmation -> done
```

Guardrails:
- Max 2 cross-agent request rounds per task. If still unresolved after 2, escalate to user.
- DevLeader logs each cross-agent request in the group result (`PLAN_CHANGES`) so patterns of missing work can be addressed in rules.

## 5. Error Handling

### Dev Agent Errors

RECOVERABLE (agent handles automatically):
- Build fails after change -> read error, fix, rebuild
- Lint error introduced -> fix and re-verify
- File not found at expected path -> search using ai-workspace context, update context file
- ai-workspace context file outdated (line numbers wrong) -> read actual file, update context

UNRECOVERABLE (agent stops, reports to parent):
- Task spec is ambiguous — cannot determine what to do -> report `blocked`
- Required dependency missing (service/model doesn't exist yet) -> report `blocked`
- Change would break other functionality -> report `blocked`
- Cannot verify success (build environment broken) -> report `failed`

### DevLeader Error Handling

- Dev agent reports `blocked` -> check if another task provides the dependency, reorder; if not, escalate to user
- Dev agent reports `failed` -> analyze failure, attempt once to fix by re-specifying the task; if second attempt fails, escalate to user
- Dev agent reports `needs-other` -> handle cross-agent request (section 4 above)
- Multiple agents fail in same group -> stop group, escalate to user with full context

### TaskRunner Error Handling

- DevLeader reports `blocked` for a group -> pause execution, notify user with group context
- DevLeader reports `failed` -> stop execution of dependent groups, notify user
- Independent groups continue even if one group fails
