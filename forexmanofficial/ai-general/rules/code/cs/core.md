# C# Core Conventions

## Purpose

Enforces consistent C# coding patterns across PageModel handlers, services, and backend code.

## Applies To

All `.cs` files: PageModels, services, helpers, models.

## Rule Import Map

Load ONLY the rules relevant to your current task. Do NOT load all files.

| Working with | Load (ai-general) | Load (ai-project) |
|---|---|---|
| Any .cs file | This file (auto) | ai-project/rules/code/cs/core.md (auto) |
| EF models, queries, DbContext, migrations | cs/db.md | cs/datetime.md, cs/money.md |
| AJAX handlers, API controllers | cs/ajax.md | cs/api.md, cs/logging.md |
| Page handlers, DataTables | cs/ajax.md | cs/pages.md, cs/logging.md |
| Services (SharedServices) | cs/db.md | cs/services.md |
| File organization, new pages | cs/file-structure.md | — |

## Rules

| Need | Correct | Wrong |
|------|---------|-------|
| Private field | `private readonly AppDbContext dbContext;` | `private readonly AppDbContext _dbContext;` |
| Constructor param | `AppDbContext dbContextArg` | `AppDbContext _dbContext` or `AppDbContext context` |
| Handler name | `OnPostUpdateNameAsync` | `OnPost_UpdateName` |
| Helper without state | `private static string Format(...)` | `private string Format(...)` |
| Code grouping | `#region Properties` | `// ── Properties ───` |
| Properties | `public string Name { get; private set; }` | `public string name { get; set; }` |
| DbContext variable | `dbContext` | `db`, `ctx`, `context`, `_db` |

### Naming

- Private fields: plain `camelCase` — NO underscore prefix
- Constructor parameters: append `Arg` suffix to disambiguate — `loggerArg`, `dbContextArg`
- Handlers: `OnGet`, `OnPost`, `OnGet{Name}Async`, `OnPost{Name}Async`
- Always `Async` suffix when handler returns `async Task<IActionResult>`

### Code Grouping — #region

Use `#region` / `#endregion` to group related code in files with many members.

Standard regions for **PageModels**:

```csharp
#region Properties
public string Name { get; private set; } = string.Empty;
#endregion

#region Page Load
public IActionResult OnGet() { ... }
#endregion

#region Table Handlers
public async Task<IActionResult> OnGetLoadTableAsync(...) { ... }
#endregion

#region Form Handlers
public async Task<IActionResult> OnPostSaveAsync(...) { ... }
#endregion

#region Helpers
private static JsonResult FieldError(...) { ... }
#endregion
```

Standard regions for **services**: `Constructor`, `Public Methods`, `Private Methods`.

Standard regions for **models**: `Properties`, `Navigation Properties`, `Computed Properties`.

### Guard Clauses

Use early returns instead of deep nesting. Max 2 levels of indentation for business logic.

```csharp
// GOOD
public async Task<IActionResult> OnPostSaveAsync([FromBody] Input input, CancellationToken ct)
{
    if (!this.IsSignedIn()) return this.ResultForbidden();
    var user = await userManager.GetUserAsync(User);
    if (user == null) return this.ResultForbidden();

    // business logic at indent level 1
}

// BAD
public async Task<IActionResult> OnPostSaveAsync([FromBody] Input input)
{
    if (this.IsSignedIn())
    {
        var user = await userManager.GetUserAsync(User);
        if (user != null)
        {
            // business logic at indent level 3
        }
    }
}
```

### CancellationToken

Add `CancellationToken ct` as last parameter on all async handlers and service methods. Pass it to every EF async call.

```csharp
public async Task<IActionResult> OnGetLoadDataAsync(CancellationToken ct)
{
    var items = await dbContext.Items.AsNoTracking().ToListAsync(ct);
    return OviRequestResult.Success("", items);
}
```

### Helper Methods

Methods that don't use instance state → `private static`.

### Protected Pages

All cabinet pages must have `[Authorize]` attribute on the PageModel class.

## Constraints

- NEVER use underscore prefix for private fields — `dbContext`, not `_dbContext`
- NEVER name DbContext variable anything other than `dbContext`
- NEVER omit `Async` suffix on async handlers
- NEVER nest deeper than 2 levels — use early returns
- ALWAYS use `#region` / `#endregion` to group code in large files
- ALWAYS add `CancellationToken` to async handlers and pass to EF methods
- ALWAYS use `private static` for stateless helper methods
- ALWAYS add `[Authorize]` on protected PageModel classes
