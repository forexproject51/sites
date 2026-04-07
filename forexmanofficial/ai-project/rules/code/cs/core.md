# Project-Specific C# Rules

! MUST READ `ai-project/rules/project-scope.md` FIRST.

## Repository note

The **forexmanofficial** workspace is **static HTML/CSS only**. There are no `.cs` files here — **skip this entire rule file** for tasks in this repo. Content below remains for template reuse in other projects.

---

## Purpose

Project-specific C# conventions for Nexlot-style cabinet apps that extend `ai-general/rules/code/cs/core.md`.

! MUST READ ai-general/rules/code/cs/core.md BEFORE applying this file (only when this project contains C#).

## Applies To

All C# files when this repository is a .NET application (not this static landing repo).

## Rule Import Map

Load ONLY the project-specific rules relevant to your current task.

| Working with | Load (ai-project) |
|---|---|
| Any .cs file | This file (auto) |
| EF models, queries, DbContext, migrations | cs/datetime.md, cs/money.md |
| AJAX handlers, API controllers | cs/api.md, cs/logging.md |
| Page handlers, DataTables | cs/pages.md, cs/logging.md |
| Services (SharedServices) | cs/services.md |

## Rules

### DbContext Naming

The project has two contexts. Always name variables `dbContext` (for `ApplicationDbContext`) or `identityDbContext` (for `CabinetIdentityDbContext`).

| Correct | Wrong |
|---------|-------|
| `private readonly ApplicationDbContext dbContext;` | `private readonly ApplicationDbContext db;` |
| `dbContext` in constructor and usage | `db`, `ctx`, `context` |

### Response Helpers — Use Existing Extensions

The project provides unified response helpers in `PageExtensions.cs` and `ControllerExtensions.cs`. Use them — do NOT create custom `JsonResult` responses.

| Need | Page handler | Controller |
|------|-------------|------------|
| Success | `OviRequestResult.Success(msg, data)` | `OviRequestResult.Success(msg, data)` |
| Error | `OviRequestResult.Error(msg)` | `OviRequestResult.Error(msg)` |
| Auth fail | `this.ResultForbidden()` | `this.ResultForbidden()` |
| Validation | `this.ResultValidation()` | `this.ResultValidation()` |
| Partial HTML | `this.ResultLoadForm(html)` | N/A |
| Not found | `this.ResultNotFound(msg)` | N/A |
| Delete | `this.ResultDeleteSuccess(count)` | `this.ResultDeleteSuccess(count)` |
| Edit save | `this.ResultEdit(count, data)` | N/A |
| Field error | `FieldError(key, msg)` helper | N/A |

### Shared Helpers — Do NOT Hardcode

Before writing any formatting, parsing, or mapping logic, check these shared locations:

| Concern | Location | Key methods |
|---------|----------|-------------|
| Date parsing | `Helpers/Parser/DateParser.cs` | `FromDatepickerValue()`, `ResolveTableDateRange()` |
| Date formatting | `SharedServices/Formatting/DateTimeFormatter.cs` | `FormatDate()`, `FormatDateTime()` |
| Money formatting | `SharedServices/Formatting/MoneyFormatter.cs` | `CentsToDollars()`, `FormatUsd()` |
| Price display | `Helpers/Parser/PriceFormatter.cs` | `ToReadable()` |
| String utils | `Extentions/StringExtensions.cs` | `ToFirstLower()`, `ToFirstUpper()` |
| File sizes | `Extentions/StringExtensions.cs` | `FileSizeFormatter.FormatSize()` |
| Phone format | `Helpers/Parser/PhoneFormatters.cs` | — |
| Card format | `Helpers/Parser/CardFormatters.cs` | — |
| Status badges | `SharedServices/Status/CabinetStatusResourceKeys.cs` | — |
| DataTables sorting | `SharedServices/Extensions/DataTablesQueryableExtensions.cs` | `Order()` |
| Table form data | `Models/PageModels/PageModelExtensions.cs` | `ParseTableFormData<T>()` |
| DataTables sort | `Extentions/DataTablesRequestExtensions.cs` | `GetPrimarySort()` |

If the functionality you need doesn't exist yet but could be reused — create it in the appropriate shared location, not inline in the page handler.

### Proposing Standardization

When you see duplicated logic, inconsistent patterns, or inline code that should be shared:
1. Propose the refactoring to the user
2. After approval, implement the shared utility
3. Update this rule file with the new shared location

## Constraints

- NEVER hardcode formatting/parsing that exists in shared helpers
- NEVER create new `JsonResult` responses manually — use `OviRequestResult` or `this.Result*()` helpers
- NEVER name DbContext variable anything other than `dbContext`
- ALWAYS check shared helper locations before writing utility code
- ALWAYS propose standardization when spotting duplicated or inline-able logic
