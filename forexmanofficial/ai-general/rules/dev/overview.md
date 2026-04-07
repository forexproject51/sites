# Development Process Rules

## Purpose

Defines the mandatory work protocol for all dev agents and the self-improvement mechanism for accumulating project-specific learnings.

## Agent Work Protocol

Every dev agent (dev-cs, dev-js, dev-htmlcss, copywriter) follows these steps in order.

### Mandatory Steps

1. **Read task spec** — understand what to do, which files are involved
2. **Read rules** — from your rule address book, load only rules relevant to this task's domain
   - Always: `ai-general/rules/code/{domain}/core.md`
   - Always: `ai-project/rules/code/{domain}/core.md` (if exists)
   - Conditionally: domain-specific rules based on task type (see your role's rule address book)
3. **Check scaffold scripts** — if the task requires creating a new file from scratch (page, service, controller, handler), read `ai-general/scripts/overview.md`. If an applicable script exists, run it instead of writing boilerplate manually. Only hand-write if no script exists or the output would need >80% modification.
4. **Read ai-workspace context** — for every file/page/service/controller mentioned in the task, read the corresponding context file from `ai-workspace/`
5. **Plan code reads** — from context files, identify which actual code files and which line ranges to read. Do NOT read entire files.
6. **Read code surgically** — read only the sections identified in step 5
7. **Execute** — make the changes
8. **Verify** — run the appropriate verification command:
   - C# changes: `dotnet build` (working directory from **`ai-project/config.md`**)
   - CSS/SCSS changes: follow the styling/build notes in **`ai-project/config.md`** (some repos use `npm run build:css`; others edit static CSS only)
   - Localization: check key parity
   - JS: check for errors
8a. **Self-review checklist** — before reporting done, verify ALL of the following:
    - [ ] Changes match task spec exactly (nothing extra, nothing missing)
    - [ ] Build passes (ran verify command from task spec)
    - [ ] No new lint warnings introduced
    - [ ] No hardcoded values that should come from config/model
    - [ ] No commented-out code left behind
    - [ ] ai-workspace context file updated if structure changed
    - [ ] Changes don't break any existing functionality visible in ai-workspace dependencies

    If any item fails: fix it before reporting. If cannot fix: report in ISSUES field.
9. **Update ai-workspace** — if the task changed file structure, added functions, changed dependencies, or altered a page's purpose, update the corresponding `ai-workspace/` context file
10. **Report** — return result in the inter-agent format (see `ai-general/communication/agent-protocol.md`)

### Database / EF Context

When tasks touch entities, migrations, DbContext, or shared persistence in the **NexlotDatabase** submodule, also load **`ai-workspace/db/`** alongside other `ai-workspace/` context.

### Context Loading Priority

When context budget is limited, prioritize in this order:
1. Task spec (always)
2. Applicable rules (always)
3. ai-workspace context files for target files (always)
4. `ai-workspace/db/` context (when task touches DB/EF)
5. Actual code sections identified from context (as needed)
6. ai-workspace context for related/dependent files (if dependencies exist)

## Stuck Detection

The following patterns indicate an agent is stuck. Detection is mandatory — agents must NOT override these rules with "one more try."

| Pattern | After | Action |
|---------|-------|--------|
| Same build error | 2 fix attempts | Try different approach |
| Same build error | 3 fix attempts | Report rotate |
| Same lint error | 2 fix attempts | Try different approach |
| Same lint error | 3 fix attempts | Report rotate |
| File modified then reverted | 2 cycles | Stop, report blocked |
| Agent reading same file 3+ times | 3 reads | Stop, check if ai-workspace context is stale |
| Verification fails after implementation | 2 attempts | Re-read spec, check if misunderstood |
| Verification fails after implementation | 3 attempts | Report blocked |

### Escalation Chain

```
Try different approach (agent handles)
  ↓ still failing
Report rotate (fresh context continues)
  ↓ still failing after fresh context
Report blocked (dev-leader decides)
  ↓ dev-leader can't resolve
Escalate to user
```

## Context Rotation

WARN conditions (agent should compress context):
- Agent has read more than 15 files in one session
- Agent has attempted the same fix 2× without success
- Agent notices output quality declining (hallucinating paths, repeating instructions)

ROTATE conditions (agent must stop and request fresh context):
- Agent has read more than 25 files in one session
- Same build/lint error after 3 fix attempts
- Same file section modified 3× without passing verification

When ROTATE triggers:
1. Commit or stash any in-progress changes
2. Update ai-workspace context files for all modified files
3. Report to parent with STATUS: rotate

   STATUS: rotate
   CHANGES: [files changed so far]
   PROGRESS: [what's done, what remains]
   WS_UPDATED: [context files updated]
   RESUME_FROM: [specific task/step to continue from]

## Self-Improvement Mechanism

Agents can propose improvements to project-specific rules when corrected by the user.

### Trigger

User corrects an agent's output and indicates the correction should become a rule (explicitly says "update the rule", "remember this", "don't do this again", or similar).

### Process

1. Agent identifies which rule file the correction applies to (domain + topic)
2. Agent proposes the exact change — shows the text to add or modify
3. User confirms or adjusts
4. Agent writes the update to the appropriate file in `ai-project/rules/`
5. Agent appends entry to `ai-workspace/changelog.md`:
   ```
   [date] [agent] Updated ai-project/rules/code/{domain}/{topic}.md: [one-line description]
   ```

### Guardrails

- NEVER modify files in `ai-general/` — the portable core stays clean
- NEVER delete existing rules — only add or refine
- If the correction contradicts an existing rule in `ai-general/`, flag the conflict to the user instead of silently overriding
- `ai-project/rules/` entries take precedence over `ai-general/rules/` when both exist for the same topic
- Each new rule entry must include the "why" derived from the user's correction

### Agent-Triggered Path

Trigger: Dev-leader or auditor identifies a repeatable failure pattern during execution.

Process:
1. Identify which rule file the pattern applies to (domain + topic)
2. Write the entry directly to the appropriate file in `ai-project/rules/`
   - Tag with `[auto]` at the start of the entry to mark it as agent-authored
   - Include the "why" derived from the failure context
3. Append entry to `ai-workspace/changelog.md`:
   ```
   [date] [agent] [auto] Updated ai-project/rules/code/{domain}/{topic}.md: [one-line description]
   ```

No user confirmation needed — entries are tagged `[auto]` for later review.

| Who | When |
|-----|------|
| Dev-leader | Dev agent reports `failed` or `blocked` with a cause that is likely to recur |
| Auditor | Cross-cutting verification finds an issue that should have been prevented |
| User | Existing path: user corrects and says "remember this" (no `[auto]` tag) |

`[auto]` entry format example:
```
[auto] NEVER use $.ajax, $.get, or $.post — use OviRequest (see oviLibs/).
Added by dev-leader during payout-filters task, 2026-04-06.
```

`[auto]` entry lifecycle:
- `[auto]` entries live in `ai-project/rules/` alongside user-approved rules
- Agents read them normally (they're in the same file they already load)
- User can review `[auto]` entries at any time:
  - Remove the `[auto]` tag → entry becomes a permanent approved rule
  - Delete the entry → it was a one-off, not worth keeping
