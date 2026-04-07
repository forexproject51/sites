# Agent Index

## Workspace: static landings (Forexmanofficial)

If `ai-project/rules/project-scope.md` applies (HTML/CSS only, no backend): assign **dev-htmlcss** for page work; **copywriter** and **ux-designer** for copy and layout; **dev-js** only for small inline scripts. **dev-cs** and Nexlot/Ovi workflows **do not apply**.

## Dev Agents — When to Assign

- If the task involves C# code, PageModel handlers, EF Core queries,
  database models, services, migrations, or AJAX endpoints
  -> use **dev-cs**

- If the task involves JavaScript, page classes, forms, tables,
  AJAX calls, or client-side behavior
  -> use **dev-js**

- If the task involves Razor CSHTML templates, SCSS styling, tag helpers,
  layout structure, or responsive design
  -> use **dev-htmlcss**

- If the task involves user-facing text, labels, notifications,
  localization keys, or tone of voice
  -> use **copywriter**

- If the task involves UI/UX decisions — what elements to use,
  page layout, user flow, interaction design
  -> use **ux-designer** before dev-htmlcss and dev-js

- If the task touches multiple layers (e.g. C# + JS + CSHTML)
  -> assign multiple agents. Typical order: dev-cs first, then dev-htmlcss, then dev-js

## Quality Agents

- After a group of tasks completes, or for important changes
  -> use **auditor** for cross-cutting verification

## Effort -> Model Tier

- If effort is **low** (pattern exists, obvious approach, single concern)
  -> spawn agent with model tier: fast

- If effort is **mid** (clear approach, adapts existing patterns, moderate complexity)
  -> spawn agent with model tier: standard

- If effort is **high** (architecture decision, complex logic, multiple valid approaches, risk)
  -> spawn agent with model tier: powerful

## Utility Agents

- If the task involves creating, updating, or filling rule files
  in ai-general/rules/ or ai-project/rules/
  -> use **rule-manager**

- If the task involves creating scaffolding scripts, maintaining templates,
  or automating repetitive file creation patterns
  -> use **scaffolder**

## Scaffolding — Mandatory Check

Before creating any new file from scratch (page, service, controller),
agents MUST read `ai-general/scripts/overview.md` and use an applicable
scaffold script instead of writing boilerplate manually.

## Orchestration Agents

| Agent | Model | When |
|-------|-------|------|
| planner | powerful | Bulk scope — user invokes to create execution plan (self-validates) |
| task-runner | fast | Bulk scope — dispatches plan groups to DevLeaders |
| dev-leader | **powerful** | Multi/bulk scope — technical orchestration per group |

**CRITICAL — Model tiers in this table are MANDATORY.** When spawning orchestration agents, the spawning agent MUST respect the model tier listed above. NEVER pass `model: "fast"` when spawning a powerful-tier agent (dev-leader, planner). Doing so degrades orchestration quality and causes cascading failures. See `ai-project/config.md` → Model Tiers for model IDs.
