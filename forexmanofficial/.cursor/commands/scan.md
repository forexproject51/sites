# Scan

When the user runs this command, follow this procedure exactly.

## 1. Determine Scope

Ask the user what to scan, or scan everything if no scope specified:
- `all` — scan app surface **and** database submodule (`db`) — same as running app scopes plus **Database (db)** below
- `pages` — scan Pages/ directory only
- `services` — scan Services/ directory only
- `db` — scan **NexlotDatabase** submodule only (models + EF core + migrations paths from config)
- `{specific path}` — scan a specific directory

## 2. Read Project Config

Read `ai-project/config.md` to get project paths.

## 3. Scan and Generate Context Files

For each item in scope:

### Pages
For each page folder in Pages/:
1. Identify files: .cshtml, .cshtml.cs, .js, .scss, *Models.cs
2. Read each file to extract: purpose, key functions (name, line, input, output), dependencies
3. Generate context file at `ai-workspace/pages/{PagePath}/{PageName}.md` following the format in `ai-general/formats/workspace-context.md`

### Services
For each service class:
1. Read the file to extract: purpose, public methods, dependencies
2. Generate context file at `ai-workspace/services/{ServiceName}.md`

### Controllers
For each controller:
1. Read the file to extract: purpose, endpoints, dependencies
2. Generate context file at `ai-workspace/controllers/{ControllerName}.md`

### Helpers
For each helper class:
1. Read the file to extract: purpose, public methods
2. Generate context file at `ai-workspace/helpers/{HelperName}.md`

### Database (`db` scope or part of `all`)

Use **`ai-project/config.md`** paths: **DB submodule root**, **EF models (submodule)**, **EF Database / DbContext (submodule)**, **EF migrations (submodule)**, and **SharedServices** / **Shared Services** when they contain persistence-related code.

1. **Models:** Under the EF models path, group by subfolder or domain. For each group (or large single file), read `.cs` files and generate `ai-workspace/db/models/{mirroring-relative-path}/{Name}.md` using `ai-general/formats/db-workspace-context.md` (models template).
2. **Core:** For DbContext and related configuration under **EF Database / DbContext** path, produce one or more files under `ai-workspace/db/core/` (e.g. `DbContext.md`, `ModelBuilding.md`) using the core template in `db-workspace-context.md`.
3. **Migrations:** Under the migrations path, summarize at least the latest migration themes and snapshot presence in `ai-workspace/db/core/Migrations-overview.md` (or equivalent); avoid duplicating every migration file unless requested.

If the submodule is missing or empty, report that and skip `db` output.

## 4. Report

Show the user:
- Number of context files generated per category (including `db` models / `db` core when applicable)
- Any files that couldn't be processed (with reason)

## Example

```
User: /scan
-> Scans all Pages/, Services/, Controllers/, Helpers/
-> Generates context files in ai-workspace/
-> Reports: "Generated 12 page contexts, 5 service contexts, 2 helper contexts"
```
