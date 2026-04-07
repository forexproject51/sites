# Razor Page Handler Conventions

## Purpose

Enforces consistent DataTables loading, filtering, sorting, and page handler patterns specific to this project.

! MUST READ ai-general/rules/code/cs/ajax.md BEFORE applying this file.
! MUST READ ai-project/rules/code/cs/core.md BEFORE applying this file.

## Applies To

All `Pages/**/*.cshtml.cs` files.

## Rules

### DataTables Load Handler — Standard Format

All DataTables load functions follow this exact structure:

```csharp
public async Task<IActionResult> OnGetLoad{Entity}TableAsync(IDataTablesRequest request, CancellationToken ct)
{
    if (!this.IsSignedIn()) return this.ResultForbidden();

    var user = await userManager.GetUserAsync(User);
    if (user == null) return this.ResultForbidden();

    // 1. Parse filters
    var mod = this.ParseTableFormData<{Entity}FiltersPayload>();

    // 2. Resolve dates (if date filter exists)
    var (dateFrom, dateTo) = DateParser.ResolveTableDateRange(mod?.DateRange, null, null);

    // 3. Build query
    var query = dbContext.{Entities}
        .AsNoTracking()
        .Where(x => x.UserId == user.Id)
        .AsQueryable();

    // 4. Apply filters conditionally
    if (mod?.Status != null)
        query = query.Where(x => x.Status == mod.Status);
    if (dateFrom.HasValue)
        query = query.Where(x => x.DateCreated >= dateFrom);
    if (dateTo.HasValue)
        query = query.Where(x => x.DateCreated <= dateTo);

    // 5. Counts
    var totalCount = await dbContext.{Entities}
        .AsNoTracking()
        .Where(x => x.UserId == user.Id)
        .CountAsync(ct);
    var filteredCount = await query.CountAsync(ct);

    // 6. Sort — use extension or explicit
    var orderedColumn = request.GetPrimarySort();
    query = orderedColumn != null
        ? query.Order(orderedColumn)
        : query.OrderByDescending(x => x.DateCreated);

    // 7. Paginate + project
    var items = await query
        .Skip(request.Start)
        .Take(request.Length)
        .Select(x => new { x.Id, x.Name, x.Status, x.DateCreated })
        .ToListAsync(ct);

    // 8. Return
    var response = DataTablesResponse.Create(request, totalCount, filteredCount, items);
    return new DataTablesJsonResult(response, true);
}
```

### Sorting

**Standard sorting** — Use the `Order()` extension from `DataTablesQueryableExtensions`. It auto-maps DataTables column names to entity property names.

**Custom column mapping** — When column names don't match entity properties, map before passing:

```csharp
var orderedColumn = request.GetPrimarySort();
if (orderedColumn?.Column?.Name == "date")
    orderedColumn = /* remap to DateCreated */;
```

### Filter Payload Models

Define filter payloads in `{PageName}Models.cs`:

```csharp
public class PayoutsFiltersPayload
{
    public string? Status { get; set; }
    public string? DateRange { get; set; }
}
```

### Date Filters

Always use `DateParser.ResolveTableDateRange()` — never parse date filter strings manually.

### Filter Select Lists

```csharp
public IActionResult OnPostLoadFilterSelectList(LoadSelectModel model)
{
    var options = new List<SelectOptionModel>
    {
        new("value1", "Label 1"),
        new("value2", "Label 2"),
    };
    return new JsonResult(new SelectResultModel(options));
}
```

### Dynamic Partial Loading

```csharp
public async Task<IActionResult> OnPostLoad{Section}Async(CancellationToken ct)
{
    if (!this.IsSignedIn()) return this.ResultForbidden();
    var vm = new SectionViewModel { /* ... */ };
    var html = await renderer.PartialToStringAsync("~/Pages/Components/_Section.cshtml", vm);
    return this.ResultLoadForm(html);
}
```

### Models File

Store page-specific ViewModels, DTOs, and filter payloads in `{PageName}Models.cs` next to the page. If a model is used only in 1–2 places, use anonymous `new { }` instead of creating a named class.

## Constraints

- NEVER parse date filter strings manually — use `DateParser.ResolveTableDateRange()`
- NEVER skip `ParseTableFormData<T>()` for table filter parsing
- NEVER hardcode sort column logic that `Order()` extension already handles
- NEVER inline filter payload classes in the PageModel file — put in `{PageName}Models.cs`
- ALWAYS follow the 8-step DataTables handler structure
- ALWAYS use `DataTablesResponse.Create()` + `DataTablesJsonResult` for table responses
