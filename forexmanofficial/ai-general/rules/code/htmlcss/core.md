# Razor & CSHTML Core Conventions

## Purpose

Enforces consistent Razor page structure, tag helper usage, data attribute conventions, and skeleton partial requirements.

## Applies To

All `.cshtml` files: pages, partials, layouts, components.

## Rules

### Page Skeleton

Must match scaffold template `page_blank.cshtml.jinja2`:

```html
@page
@model PageNameModel
@{
    ViewData["Title"] = Localizer["section.pageTitle"];
    ViewData["PageBg"] = "dashboard";
    var urlLoadSomething = Url.Page("PageName", "LoadSomething")!;
}

<div data-ovi-page>

    @* Hidden form — provides antiforgery token for AJAX POSTs *@
    <form method="post" class="d-none" data-af-form></form>

    @* ─── Section Name ──────────────────────────────────────────── *@
    <!-- page content -->

</div>

@section styles {
    <!-- CSS support partials -->
}

@section scripts {
    <!-- JS support partials -->
    <script src="~/js/pages/pagename.js"></script>
}
```

Key elements:
- `data-ovi-page` wrapper is MANDATORY — JS scopes all queries to this root
- `data-af-form` hidden form — provides anti-forgery token for AJAX POSTs
- URL variables generated in `@{}` block via `Url.Page()`
- Section dividers: `@* ─── Section Name ──────────────────────────────────────── *@`

### Support Partial Matrix

| Page type | @section styles | @section scripts |
|---|---|---|
| Table page | `OviTableSupport/_OviTablePageStyles` | `OviTableSupport/_OviTablePageScripts`, `Shared/Components/_NexlotTableOverrides` |
| Form page | `OviSelectSupport/_OviSelectSupportCss`, `OviDateTimePickerSupport/_OviDateTimePickerSupportCss` | `OviFormSupport/_OviFormSupport`, `OviSelectSupport/_OviSelectSupport`, `OviDatePickerSupport/_OviDatePickerSupport` |
| Chart page | — | `OviChartSupport/_OviChartSupport`, `OviDynamicPartialSupport/_OviDynamicPartialSupport` |
| Wizard page | — | `OviWizardSupport/_OviWizardSupport` |

### Tag Helper Usage

ALWAYS use ovi-* tag helpers. NEVER use raw HTML equivalents.

| Need | Correct | Wrong |
|------|---------|-------|
| Text input | `<ovi-input name="email" type="email" />` | `<input type="email">` |
| Select dropdown | `<ovi-select name="broker" load-url="@url" />` | `<select name="broker">` |
| Date picker | `<ovi-datepicker name="date" />` | `<input type="date">` |
| Toggle switch | `<ovi-switch name="active" />` | `<input type="checkbox">` |
| Submit button | `<ovi-button type="submit" variant="primary">Save</ovi-button>` | `<button type="submit">` |
| Rich text editor | `<ovi-html-editor name="body" />` | `<textarea>` |

### Data Attribute Conventions

Same rules as JS — use `data-ovi-*` attributes for element identification:

- Generic names by default: `data-ovi-btn-add` (not `data-ovi-btn-brokers-list-add`)
- Disambiguate only when multiple similar: `data-ovi-btn-add="solo"`, `data-ovi-btn-add="group"`
- NEVER use id attributes for JS targeting — use data attributes

### Skeleton Partials for OviDynamicPartial

ALWAYS provide a placeholder partial with skeleton markup for every lazy-loaded section:

```html
<div data-ovi-dynamic-partial-placeholder="stats">
    <partial name="Components/_StatsPlaceholder" />
</div>
<div data-ovi-dynamic-partial="stats"
     data-ovi-dynamic-partial-url="@urlLoadStats">
</div>
```

The placeholder partial MUST contain skeleton/shimmer HTML that mimics the final layout dimensions.

### Shared Components First

Use existing partials from `Pages/Shared/Components/` and tag helpers BEFORE writing equivalent markup from scratch. Check what shared components exist:

- `_SearchInput`, `_SearchButton` — table search
- `_TableFilterItem` — filter dropdown
- `_Table` — table element
- `_NexlotTableOverrides` — sort icons + skeleton loading

### URL Generation

Generate handler URLs in the `@{}` block and store in variables:

```csharp
var urlLoadTable = Url.Page("Index", "LoadTable")!;
var urlDelete    = Url.Page("Index", "Delete")!;
```

### Localization

Use `Localizer["key"]` for all user-visible text. NEVER hardcode English strings.

### Scaffold-First

Create new pages via `python new_page.py`. The scaffolded output is the canonical structure.

## Constraints

- NEVER omit `data-ovi-page` on the page root — JS requires it
- NEVER omit `data-af-form` on pages with AJAX POST handlers — OviRequest needs the anti-forgery token
- NEVER use raw HTML inputs — use ovi-* tag helpers
- NEVER use id attributes for JS targeting — use data-ovi-* attributes
- NEVER hardcode English strings — use `Localizer["key"]`
- NEVER show blank space while loading — provide skeleton placeholders
- ALWAYS include the correct support partials for the page type
- ALWAYS use existing shared components before writing new markup
