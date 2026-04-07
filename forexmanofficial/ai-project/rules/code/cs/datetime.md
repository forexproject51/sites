# DateTime Conventions

## Purpose

Ensures consistent timezone handling and date formatting. All dates stored and processed as UTC.

## Applies To

All database models with DateTime fields, API responses with dates, date filtering, date display.

## Rules

### Storage — Always UTC

| Correct | Wrong |
|---------|-------|
| `DateTime.UtcNow` | `DateTime.Now` |
| `entity.DateCreated = DateTime.UtcNow;` | `entity.DateCreated = DateTime.Now;` |

Standard field names: `DateCreated`, `DateUpdated`.

### Shared Helpers — Use Existing

| Need | Use | Location |
|------|-----|----------|
| Parse datepicker range | `dateRange.FromDatepickerValue()` | `Helpers/Parser/DateParser.cs` |
| Parse datetime picker | `dateRange.FromDateTimepickerValue()` | `Helpers/Parser/DateParser.cs` |
| Resolve table date filter | `DateParser.ResolveTableDateRange(range, from, to)` | `Helpers/Parser/DateParser.cs` |
| Format for display | `DateTimeFormatter.FormatDate(utcDate)` | `SharedServices/Formatting/` |
| Format with time | `DateTimeFormatter.FormatDateTime(utcDate)` | `SharedServices/Formatting/` |

### Date Formats

| Format | Use case | Example |
|--------|----------|---------|
| `dd.MM.yyyy` | Default datepicker format | `26.03.2026` |
| `dd.MM.yyyy HH:mm` | DateTime picker format | `26.03.2026 14:30` |
| `DD MMM YYYY` | Display in UI | `26 Mar 2026` |
| ISO 8601 | API responses | `2026-03-26T14:30:00Z` |

### API Response

Send dates as ISO 8601 UTC strings. Let JavaScript handle timezone conversion for display.

### Date Range Filtering

Always use the shared `DateParser.ResolveTableDateRange()` for table filters. It handles datepicker separators, UTC conversion, and inclusive day bounds.

```csharp
var (dateFrom, dateTo) = DateParser.ResolveTableDateRange(mod?.DateRange, null, null);
if (dateFrom.HasValue)
    query = query.Where(x => x.DateCreated >= dateFrom);
if (dateTo.HasValue)
    query = query.Where(x => x.DateCreated <= dateTo);
```

## Constraints

- NEVER use `DateTime.Now` — always `DateTime.UtcNow`
- NEVER parse datepicker strings manually — use `DateParser` methods
- NEVER hardcode date format strings — use `DateParser` constants or `DateTimeFormatter`
- ALWAYS store dates as UTC in the database
- ALWAYS use `DateCreated` / `DateUpdated` as field names
