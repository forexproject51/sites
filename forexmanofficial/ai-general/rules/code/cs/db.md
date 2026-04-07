# EF Core & Database Conventions

## Purpose

Enforces consistent Entity Framework Core patterns for models, queries, and migrations.

## Applies To

EF Core models, DbContext configuration, LINQ queries, migration files.

! MUST READ ai-general/rules/code/cs/core.md BEFORE applying this file.

## Rules

### DbContext Variable

Always name the variable `dbContext` — never `db`, `ctx`, `context`, or `_db`.

### Configuration — Attributes First

Prefer data annotation attributes on model classes. Use fluent API in `OnModelCreating` ONLY for things attributes cannot express.

| Config type | Use attribute | NOT fluent |
|---|---|---|
| Required | `[Required]` | `.IsRequired()` |
| Max length | `[MaxLength(N)]` | `.HasMaxLength(N)` |
| Column type | `[Column(TypeName = "...")]` | `.HasColumnType(...)` |
| Foreign key | `[ForeignKey(nameof(NavId))]` | `.HasForeignKey(x => x.NavId)` |
| Unique index | `[Index(nameof(Prop), IsUnique = true)]` | `.HasIndex(x => x.Prop).IsUnique()` |
| Not mapped | `[NotMapped]` | `.Ignore(x => x.Prop)` |

Fluent API is acceptable ONLY for:
- Global query filters (`HasQueryFilter`)
- Filtered indexes (`HasFilter(...)`)
- Table mapping overrides (`ExcludeFromMigrations()`)
- Delete behavior (`OnDelete(DeleteBehavior.X)`)
- Complex relationship scenarios that attributes cannot express

### Validation Attributes

Add validation attributes to model properties:

| Attribute | When |
|---|---|
| `[Required]` | Non-nullable reference types that must have a value |
| `[MaxLength(N)]` | All string properties |
| `[Range(min, max)]` | Numeric properties with business constraints |
| `[EmailAddress]` | Email fields |
| `[Phone]` | Phone fields |

### Foreign Key Pattern

Always use `[ForeignKey]` attribute on the navigation property, referencing the FK ID via `nameof()`:

```csharp
public Guid BrokerId { get; set; }

[ForeignKey(nameof(BrokerId))]
public Broker Broker { get; set; } = null!;
```

Optional relationships — nullable FK + nullable navigation:

```csharp
public Guid? LogoImageId { get; set; }

[ForeignKey(nameof(LogoImageId))]
public DbFile? LogoImage { get; set; }
```

### Base Entity

Models with shared properties inherit from `BaseEntity`:

```csharp
public abstract class BaseEntity
{
    public Guid Id { get; set; }
    public DateTime DateCreated { get; set; }
    public DateTime DateUpdated { get; set; }
}
```

Models with soft delete implement `ISoftDeletable`:

```csharp
public interface ISoftDeletable
{
    bool IsDeleted { get; set; }
}
```

Usage:

```csharp
public class BrokerAccount : BaseEntity, ISoftDeletable
{
    public bool IsDeleted { get; set; }
    // entity-specific properties
}
```

Exceptions: Identity models (`AppUser`, `CabinetUser`) inherit `IdentityUser<Guid>` — they cannot use `BaseEntity`.

### Timestamp Naming

All models must use `DateCreated` / `DateUpdated`. Existing models with `DateEdited`, `CreatedDate`, `CreatedAt` must be renamed (requires migration).

### Model Conventions

| Convention | Example |
|---|---|
| Primary key | `public Guid Id { get; set; }` (in `BaseEntity`) |
| Model naming | PascalCase singular — `BrokerAccount`, not `BrokerAccounts` |
| FK naming | `{NavigationProperty}Id` — `BrokerId` |
| Navigation (single) | `[ForeignKey(nameof(BrokerId))] public Broker Broker { get; set; } = null!;` |
| Navigation (collection) | `public List<Order> Orders { get; set; } = new();` |
| String props | `[Required] [MaxLength(N)]` or `[MaxLength(N)]` with `string?` |
| Money fields | `int` cents — `AmountCents`, not `decimal Amount` |
| Date fields | `DateTime` UTC — `DateCreated`, `DateUpdated` (via `BaseEntity`) |
| Status enums | Explicit int backing values |
| Soft delete | `ISoftDeletable` — filter with `.Where(x => !x.IsDeleted)` |
| Delete behavior | Cascade for owned, Restrict for shared (fluent API) |

### Model File Grouping

Use `#region` to organize large model files:

```csharp
public class Broker : BaseEntity, ISoftDeletable
{
    #region Properties
    [Required]
    [MaxLength(500)]
    public string Name { get; set; } = string.Empty;

    public bool IsDeleted { get; set; }
    #endregion

    #region Navigation Properties
    public Guid? LogoImageId { get; set; }

    [ForeignKey(nameof(LogoImageId))]
    public DbFile? LogoImage { get; set; }

    public List<BrokerAccountType> BrokerAccountTypes { get; set; } = new();
    #endregion
}
```

### LINQ — Method Syntax Only

| Correct | Wrong |
|---|---|
| `dbContext.Items.Where(x => x.Active).ToListAsync(ct)` | `from x in dbContext.Items where x.Active select x` |

NEVER use LINQ query syntax. Always method syntax (`.Where()`, `.Select()`, `.OrderBy()`).

### AsNoTracking

Add `.AsNoTracking()` on every read query. Only omit when you intend to update the fetched entity.

### Select Projections

Project to anonymous types or DTOs — do not return full entities from read queries.

### Include — Only What You Need

Eager-load only the navigations you project or use. Never chain deep `ThenInclude` trees.

### Existence Checks

Use `.AnyAsync()` — generates SQL `EXISTS`, faster than `.CountAsync() > 0`.

### Split Queries

When including 2+ collection navigations, use `.AsSplitQuery()` to avoid Cartesian explosion.

### Filtering Pattern

Build composable `IQueryable` — append `.Where()` conditionally:

```csharp
var query = dbContext.Items.AsNoTracking().AsQueryable();

if (statusFilter.HasValue)
    query = query.Where(x => x.Status == statusFilter);

if (dateFrom.HasValue)
    query = query.Where(x => x.DateCreated >= dateFrom);
```

### Navigation Properties Over Joins

Prefer navigation properties. Use explicit joins only when navigation is inefficient.

### Batch Operations

Use `AddRange()` / `UpdateRange()` instead of calling `Add()` / `Update()` in a loop. Call `SaveChangesAsync()` once.

### Custom Extensions and Attributes

If a pattern repeats across 3+ models or queries, propose creating a shared extension or attribute:
- Extension on `IQueryable<ISoftDeletable>` for `.WhereNotDeleted()`
- Custom validation attributes for domain-specific constraints

Propose to the user before creating — after approval, implement and update rules.

### Migrations

Generate migrations with `dotnet ef` CLI only. NEVER write or edit migration files manually.

```bash
dotnet ef database update --context ApplicationDbContext --project ../NexlotDatabase/NexlotDatabase/NexlotDatabase/NexlotDatabase.csproj
```

## Constraints

- NEVER use LINQ query syntax — method syntax only
- NEVER omit `.AsNoTracking()` on read queries
- NEVER return full EF entities from read queries — project to DTOs or anonymous types
- NEVER write or edit migration files manually — use `dotnet ef` CLI only
- NEVER use `CountAsync() > 0` — use `AnyAsync()`
- NEVER name the DbContext variable anything other than `dbContext`
- NEVER configure relationships/constraints in fluent API when an attribute works
- NEVER use timestamp names other than `DateCreated` / `DateUpdated`
- ALWAYS use `[ForeignKey(nameof(...))]` on navigation properties
- ALWAYS add `[Required]`, `[MaxLength]` and other validation attributes on model properties
- ALWAYS inherit from `BaseEntity` for models with Id + timestamps
- ALWAYS implement `ISoftDeletable` for models with soft delete
- ALWAYS pass `CancellationToken` to all EF async methods
- ALWAYS use composable `IQueryable` for conditional filters
