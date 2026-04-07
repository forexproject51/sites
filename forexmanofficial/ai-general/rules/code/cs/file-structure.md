# C# File Organization

## Purpose

Enforces consistent file splitting and organization patterns for PageModels and related code.

## Applies To

PageModel files, ViewModel/DTO files, handler files, service files.

## Rules

### Page File Structure

```
Pages/{Section}/
├── Index.cshtml              # Razor view
├── Index.cshtml.cs           # PageModel — handlers only
└── IndexModels.cs            # ViewModels, DTOs, filter payloads for this page
```

For complex pages with many handlers:

```
Pages/{Section}/
├── Connect.cshtml
├── Connect.cshtml.cs         # Page load + primary handlers
├── ConnectModels.cs           # All ViewModels/DTOs for Connect
└── ConnectStepHandlers.cs     # partial class with additional handlers
```

### What Goes Where

| Content | File |
|---------|------|
| PageModel class with OnGet/OnPost handlers | `PageName.cshtml.cs` |
| ViewModels, DTOs, filter payloads | `PageNameModels.cs` |
| Overflow handlers (partial class) | `PageNameStepHandlers.cs` |
| Enums used only by this page | `PageNameModels.cs` |
| Enums used across pages | `Models/Shared/` or database models |

### Anonymous vs Named Types

Use anonymous `new { }` for projections used in 1–2 places. Create a named DTO/ViewModel class when:
- Used in 3+ places
- OR the type needs to cross a service/layer boundary

```csharp
// 1-2 uses — anonymous is fine
var result = items.Select(x => new { x.Id, x.Name, x.Status });

// 3+ uses or crosses service boundary — named class in PageNameModels.cs
var result = items.Select(x => new ItemRow { Id = x.Id, Name = x.Name });
```

### Partial Classes for Large Pages

Split when a PageModel exceeds ~150 lines:
- Main file: constructor, `OnGet`, properties
- Additional file: grouped handlers as `partial class`

### Shared Models

- Models used by multiple pages → `Models/Shared/`
- Models used by services and pages → SharedServices project
- Do NOT duplicate model definitions across pages

### Reusable Code Placement

If functionality exists in shared helpers, extensions, or formatters — use it. Do NOT hardcode logic that is already shared or could be shared. Formats, parsers, status mappings, and converters belong in shared locations so changes propagate from one place.

| Reusable concern | Shared location |
|-----------------|----------------|
| Date parsing | `Helpers/Parser/DateParser.cs` |
| Money formatting | `SharedServices/Formatting/MoneyFormatter.cs` |
| Status → badge mapping | `SharedServices/Status/` |
| String utilities | `Extentions/StringExtensions.cs` |
| Phone/card formatting | `Helpers/Parser/PhoneFormatters.cs`, `CardFormatters.cs` |

### Namespace Convention

- Pages: `NexlotCabinetWeb.Pages.{Section}`
- Models: `NexlotCabinetWeb.Models.{Section}` or inline in `Pages.{Section}`
- Shared: `NexlotCabinetWeb.Models.Shared`

## Constraints

- NEVER put ViewModels/DTOs in the same file as the PageModel — use `PageNameModels.cs`
- NEVER create massive PageModel files over 150 lines without splitting into partials
- NEVER duplicate model definitions across pages — extract to shared
- NEVER hardcode formatting, parsing, or mapping that already exists in shared helpers
- ALWAYS check shared helpers/extensions/formatters before writing new utility code
- ALWAYS use anonymous types for simple 1-2 use projections, named types for 3+
