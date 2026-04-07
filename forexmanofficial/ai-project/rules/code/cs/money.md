# Money & Amount Conventions

## Purpose

Standardizes how monetary values are stored, transmitted, and displayed. All money is stored as integer cents.

## Applies To

All database models with money fields, API responses with monetary values, display formatting.

## Rules

### Storage — Integer Cents

| Correct | Wrong |
|---------|-------|
| `public int AmountCents { get; set; }` | `public decimal Amount { get; set; }` |
| `1234` (= $12.34) | `12.34m` |

Property naming: always suffix with `Cents` — `AmountCents`, `BalanceCents`, `CommissionCents`.

NEVER use `decimal`, `double`, or `float` for money in the database.

### Shared Helpers — Use Existing

| Need | Use | Location |
|------|-----|----------|
| Cents → dollars | `MoneyFormatter.CentsToDollars(cents)` | `SharedServices/Formatting/MoneyFormatter.cs` |
| Format USD | `MoneyFormatter.FormatUsd(cents)` | `SharedServices/Formatting/MoneyFormatter.cs` |
| Compact format | `MoneyFormatter.FormatUsdCompact(cents)` | `SharedServices/Formatting/MoneyFormatter.cs` |
| Dollars → cents | `MoneyFormatter.DollarsToCents(dollars)` | `SharedServices/Formatting/MoneyFormatter.cs` |
| Simple readable | `PriceFormatter.ToReadable(amount)` | `Helpers/Parser/PriceFormatter.cs` |

### API Response

When sending money to the frontend, send cents for calculations and let JS format for display. Or include pre-formatted string:

```csharp
new { amountCents = item.AmountCents, amountFormatted = MoneyFormatter.FormatUsd(item.AmountCents) }
```

### Validation

- Backend: validate `amountCents > 0` and within business limits
- Dollar-to-cents conversion happens in the handler/service, NOT in JavaScript

## Constraints

- NEVER use `decimal`/`double`/`float` for money in database models
- NEVER hardcode money formatting — use `MoneyFormatter`
- NEVER omit the `Cents` suffix on money property names
- ALWAYS store money as `int` cents
- ALWAYS validate amounts are positive before processing
