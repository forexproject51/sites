# API Controller Conventions

## Purpose

Enforces consistent patterns for MVC API controllers in this project.

! MUST READ ai-general/rules/code/cs/ajax.md BEFORE applying this file.

## Applies To

All files in `Controllers/` — API endpoints consumed by frontend or external clients.

## Rules

### Controller Structure

```csharp
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class ItemsController : Controller
{
    private readonly ApplicationDbContext dbContext;
    private readonly ILogger<ItemsController> logger;

    public ItemsController(ApplicationDbContext dbContextArg, ILogger<ItemsController> loggerArg)
    {
        dbContext = dbContextArg;
        logger = loggerArg;
    }
}
```

### Auth Guard

Every action that requires authentication — first line:

```csharp
if (!this.IsSignedIn()) return this.ResultForbidden();
```

Use `ControllerExtensions` (`Services/Security/ControllerExtensions.cs`) for `IsSignedIn()`, `ResultForbidden()`, `ResultValidation()`, `ResultDeleteSuccess()`.

### Return Type — OviRequestResult

All API controllers return `OviRequestResult` for consistency with the frontend OviRequest/OviNotification contract.

| Correct | Wrong |
|---------|-------|
| `return OviRequestResult.Success("Done", data);` | `return Ok(data);` |
| `return OviRequestResult.Error("Not found");` | `return NotFound();` |
| `return this.ResultForbidden();` | `return Unauthorized();` |

Exception: special controllers (images serving, culture switching) that return non-JSON responses (`File()`, `LocalRedirect()`).

### Rate Limiting

Apply `[EnableRateLimiting("policy")]` on controllers with POST/mutation endpoints. Define policies in `Program.cs`.

```csharp
[EnableRateLimiting("api-mutations")]
[HttpPost("create")]
public async Task<IActionResult> CreateAsync([FromBody] CreateInput input, CancellationToken ct)
```

### Naming

| Element | Convention | Example |
|---------|-----------|---------|
| Controller class | `{Entity}Controller` | `PayoutsController` |
| GET action | `Get{What}Async` | `GetListAsync` |
| POST action | `{Verb}{What}Async` | `CreateAsync`, `UpdateAsync` |
| Route | `api/{controller}/{action?}` or `[controller]` | `api/payouts/create` |
| Parameter | camelCase, descriptive | `[FromBody] CreatePayoutInput input` |

### Input Models

Place input models in a co-located `{Controller}Models.cs` or in `Models/Api/`. For inputs used in 1–2 actions, anonymous types are acceptable in the response but NOT for inputs — always use typed input classes with `[FromBody]`.

### Shared Functionality

If a controller and a page need the same business logic — extract to a service in SharedServices and inject in both. Do NOT duplicate logic between controllers and page handlers.

```csharp
// Service handles business logic
var result = await payoutService.CreatePayoutAsync(userId, input.AmountCents, ct);

// Controller just translates to response
return result.Success
    ? OviRequestResult.Success("Payout created", new { result.Id })
    : OviRequestResult.Error(result.Message);
```

Only create a service when sharing is needed. If the logic is used only in one controller or one page — implement it in place.

## Constraints

- NEVER return raw `Ok()`, `BadRequest()`, `NotFound()` from API controllers — use `OviRequestResult`
- NEVER duplicate business logic between controllers and pages — extract to a service
- NEVER skip auth guard on protected actions
- ALWAYS apply rate limiting on POST/mutation endpoints
- ALWAYS use `CancellationToken` in async controller actions
- ALWAYS use typed input classes for `[FromBody]` parameters
