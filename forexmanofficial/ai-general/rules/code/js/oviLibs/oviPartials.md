# OviDynamicPartial

## Purpose

Enforces correct lazy-loaded section patterns with skeleton placeholders using OviDynamicPartial.

## Applies To

JavaScript files that load page sections asynchronously. CSHTML files with lazy-loaded content.

## Rules

### JavaScript Initialization

```js
this.statsPartial = new OviDynamicPartial().init({
    selector: '[data-ovi-dynamic-partial="stats"]',
    selectorPlaceholder: '[data-ovi-dynamic-partial-placeholder="stats"]',
    onLoaded: (partial, data) => this.onStatsLoaded(partial, data),
});
this.statsPartial.load();
```

Store as class property. Call `.load()` after init to trigger the first fetch.

### Reload with Parameters

```js
this.statsPartial.options.body = { period: 'monthly' };
this.statsPartial.load();
```

### onLoaded Callback

Receives the partial instance and server data. Use `partial.elementContainer` to access the loaded DOM:

```js
onStatsLoaded(partial, data) {
    this.initTooltips(partial.elementContainer);
}
```

### CSHTML Structure

Three elements required:

1. **Placeholder** with skeleton markup — visible while loading:

```html
<div data-ovi-dynamic-partial-placeholder="stats">
    <partial name="Components/_StatsPlaceholder" />
</div>
```

2. **Container** with the URL — receives loaded HTML:

```html
<div data-ovi-dynamic-partial="stats"
     data-ovi-dynamic-partial-url="@urlLoadStats">
</div>
```

3. **Skeleton partial** — a separate `.cshtml` file with skeleton/shimmer markup mimicking the final layout.

### C# Handler

```csharp
public async Task<IActionResult> OnPostLoadStatsAsync()
{
    if (!this.IsSignedIn()) return this.ResultForbidden();
    var vm   = new StatsViewModel { /* ... */ };
    var html = await renderer.PartialToStringAsync("~/Pages/Components/_Stats.cshtml", vm);
    return this.ResultLoadForm(html);
}
```

### Support Partial

Include in `@section scripts`:

```html
<partial name="OviDynamicPartialSupport/_OviDynamicPartialSupport" />
```

## Constraints

- ALWAYS provide a skeleton placeholder partial for every OviDynamicPartial — never show blank space while loading
- ALWAYS use `this.ResultLoadForm(html)` to return partial HTML from the C# handler
- ALWAYS start the handler with `if (!this.IsSignedIn()) return this.ResultForbidden();`
- NEVER render the real content server-side in `OnGet` — load it lazily via the partial
