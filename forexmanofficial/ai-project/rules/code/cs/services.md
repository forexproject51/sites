# SharedServices Conventions

## Purpose

Defines patterns for the SharedServices project shared between Cabinet and Admin apps.

## Applies To

All files in `NexlotDatabase/NexlotDatabase/SharedServices/`.

! MUST READ ai-general/rules/code/cs/core.md BEFORE applying this file.
! MUST READ ai-general/rules/code/cs/db.md BEFORE applying this file.

## Rules

### Project Structure

```
SharedServices/
├── SharedServices.csproj
├── DependencyInjection.cs        # AddSharedServices() registration
├── Formatting/
│   ├── DateTimeFormatter.cs
│   └── MoneyFormatter.cs
├── Status/
│   └── CabinetStatusResourceKeys.cs
├── Extensions/
│   └── DataTablesQueryableExtensions.cs
├── Services/
│   ├── BrokerAccountService.cs
│   ├── CashbackHistoryService.cs
│   ├── PayoutService.cs
│   └── DashboardDataService.cs
└── Models/                        # Shared DTOs if needed
```

### Service Conventions

- Services are stateless — inject `ApplicationDbContext dbContext` via constructor
- All public methods are `async Task<T>` with `CancellationToken ct` as last parameter
- Use `.AsNoTracking()` on all read queries
- Return DTOs or anonymous projections, NOT EF entities
- Method naming: `{Verb}{Noun}Async` — `GetPayoutsForUserAsync`, `CreatePayoutAsync`
- Private fields: plain camelCase — `dbContext`, `logger`

### When to Create a Service

Create a shared service ONLY when business logic is needed in both Cabinet pages AND API controllers (or Admin app). If logic is used in only one place — implement it in place (page handler or controller).

| Scenario | Where to put logic |
|----------|-------------------|
| Used by 1 page only | Inline in page handler |
| Used by 1 controller only | Inline in controller |
| Used by page + controller | SharedServices service |
| Used by Cabinet + Admin | SharedServices service |

### DI Registration

Register all services in `DependencyInjection.AddSharedServices()`. Call from `Program.cs`.

```csharp
public static IServiceCollection AddSharedServices(this IServiceCollection services)
{
    services.AddScoped<BrokerAccountService>();
    services.AddScoped<PayoutService>();
    return services;
}
```

### Transaction Handling

Use `SaveChangesAsync()` at the end of each service method. For multi-entity operations:

```csharp
await using var transaction = await dbContext.Database.BeginTransactionAsync(ct);
try
{
    // ... multiple operations ...
    await dbContext.SaveChangesAsync(ct);
    await transaction.CommitAsync(ct);
}
catch
{
    await transaction.RollbackAsync(ct);
    throw;
}
```

### Error Handling

Services throw exceptions or return result objects. Page handlers / controllers catch and translate to `OviRequestResult`.

## Constraints

- NEVER return EF entities from service methods — return DTOs or result objects
- NEVER create a service for logic used in only one place — implement inline
- NEVER forget to register new services in `DependencyInjection.AddSharedServices()`
- ALWAYS use `CancellationToken` in all async service methods
- ALWAYS use `dbContext` as the variable name for `ApplicationDbContext`
- ALWAYS use `.AsNoTracking()` on read queries in services
