# AJAX Handler Conventions

## Purpose

Enforces consistent AJAX endpoint structure, response format, and error handling in PageModel handlers and controllers.

## Applies To

All AJAX handlers (`OnGet{Name}Async`, `OnPost{Name}Async`) that return JSON responses. All API controller actions.

! MUST READ ai-general/rules/code/cs/core.md BEFORE applying this file.

## Rules

### Auth Guard — Always First Line

Every AJAX handler in a PageModel starts with the auth check:

```csharp
public async Task<IActionResult> OnPostSomethingAsync([FromBody] SomeInput input, CancellationToken ct)
{
    if (!this.IsSignedIn()) return this.ResultForbidden();

    var userId = GetCurrentUserId();
    // ... business logic ...
}
```

Controllers use the same pattern via `ControllerExtensions.IsSignedIn()`.

### Response Format — OviRequestResult

Use `OviRequestResult` for all AJAX returns. NEVER construct raw `JsonResult` with `IsSuccess`/`Message` manually.

| Situation | Return |
|-----------|--------|
| Success | `OviRequestResult.Success(message, data)` |
| Generic error | `OviRequestResult.Error(message)` |
| Auth/permission fail | `this.ResultForbidden()` |
| Model validation fail | `this.ResultValidation()` |
| Partial HTML load | `this.ResultLoadForm(html)` |
| Not found | `this.ResultNotFound(message)` |
| Delete result | `this.ResultDeleteSuccess(changesCount)` |
| Edit result | `this.ResultEdit(changesCount, data)` |

### Error Handling

Wrap database operations in try/catch. Log full exception, return user-friendly message.

```csharp
try
{
    await dbContext.SaveChangesAsync(ct);
    return OviRequestResult.Success("Saved");
}
catch (DbUpdateException ex) when (ex.InnerException is PostgresException { SqlState: "23505" })
{
    logger.LogWarning(ex, "Duplicate key in {Handler}", nameof(OnPostCreateAsync));
    return OviRequestResult.Error("This record already exists.");
}
catch (Exception ex)
{
    logger.LogError(ex, "Unexpected error in {Handler}", nameof(OnPostCreateAsync));
    return OviRequestResult.Error("An unexpected error occurred. Please try again.");
}
```

### Validation Errors with Field Highlighting

For form fields that need inline error highlighting:

```csharp
return OviRequestResult.Error("Validation failed", new
{
    validationErrors = new Dictionary<string, string>
    {
        { "AccountId", "This account ID is already registered." }
    }
});
```

### Request Body Binding

POST handlers receiving JSON body use `[FromBody]`:

```csharp
public async Task<IActionResult> OnPostUpdateAsync([FromBody] UpdateInput input, CancellationToken ct)
```

GET handlers for DataTables receive `IDataTablesRequest request` as parameter.

### Rate Limiting

Apply rate limiting on all POST handlers (mutations) to prevent abuse. Use `[EnableRateLimiting("policy")]` on controllers. Page handlers behind `[Authorize]` get implicit protection.

## Constraints

- NEVER skip the auth guard on AJAX handlers — `if (!this.IsSignedIn()) return this.ResultForbidden();`
- NEVER construct raw `new JsonResult(new { IsSuccess = ... })` — use `OviRequestResult` or `this.Result*()` helpers
- NEVER expose internal exception details to the user — log full exception, return generic message
- NEVER omit `CancellationToken` from async handler parameters
- ALWAYS log exceptions with structured context: `logger.LogError(ex, "... in {Handler}", nameof(...))`
- ALWAYS use `[FromBody]` for POST handlers receiving JSON
- ALWAYS apply rate limiting on mutation endpoints
