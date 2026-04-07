# AI General — Overview

Portable, project-agnostic AI development framework. Copy this folder to any project and it works.

## What to Read and When

| Situation | Read |
|-----------|------|
| Starting any task as any agent | `agents/index.md` → find the right agent |
| You ARE an agent starting work | `agents/roles/{your-role}.md` → your full role definition |
| Before writing code | Your role's rule address book → points to `rules/code/{domain}/` |
| Static `.html` marketing landings (no Razor) | `rules/code/htmlcss/static-html-landing.md` |
| Creating a plan file | `formats/plan.md` → plan file format |
| Creating an agent role file | `formats/agent-role.md` → role file format |
| Creating a rule file | `formats/rule.md` → rule file format |
| Creating a workspace context file | `formats/workspace-context.md` → context file format |
| Sending a task to another agent | `communication/agent-protocol.md` → inter-agent formats |
| Communicating with the user | `communication/user-protocol.md` → user communication rules |
| Understanding the dev workflow | `rules/dev/overview.md` → mandatory work protocol |

## Folder Structure

```
ai-general/
  overview.md               ← you are here
  agents/
    index.md                ← agent registry (who does what)
    roles/                  ← one file per agent role
  rules/
    code/
      cs/                   ← C# coding rules
      js/                   ← JavaScript coding rules
      htmlcss/              ← CSHTML + SCSS + static HTML landing rules
    dev/
      overview.md           ← development process rules
  formats/                  ← file format specifications
  communication/            ← inter-agent and user communication protocols
```

## Key Principles

- Agent files carry pointers to rules, not rules themselves
- Rule files are split by domain (cs, js, htmlcss) and topic
- Format files define strict templates for all protocol artifacts
- Nothing in this folder references any specific project
