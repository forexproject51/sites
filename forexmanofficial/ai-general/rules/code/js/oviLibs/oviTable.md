# OviTable

## Purpose

Enforces correct OviTable initialization, column definitions, render patterns, filter integration, and empty state handling.

## Applies To

JavaScript files that initialize or configure data tables. CSHTML files containing table markup.

## Rules

### Initialization

Must match scaffold template `page_table.js.jinja2`:

```js
this.oviTable = new OviTable().init({
    rootEl: this.element,
    tableSelector: '[data-ovi-table="tableName"]',
    formSelector: '[data-ovi-table-filters="tableName"]',
    columns: this.getColumns(),
    tableConfig: {
        orderBy: [['ColumnName', 'desc']],
    },
    datatablesConfig: {
        pageLength: 20,
        scrollY: 'calc(100vh - 400px)',
    },
    onLoaded: () => this.onTableLoaded(),
});
```

Store as class property. `rootEl` MUST be `this.element` (scoped).

### Column Definitions

Separate method `getColumns()` returns an array:

```js
getColumns() {
    return [
        { name: 'FieldName', title: 'Display Title', orderable: true,
          render: (data) => data ?? '—' },
        { name: 'Status', title: 'Status', orderable: true, className: 'text-end',
          render: (data) => this.renderStatusCell(data) },
    ];
}
```

| Property | Required | Purpose |
|---|---|---|
| `name` | Yes | Server-side column name |
| `title` | Yes | Display header text |
| `orderable` | No | Allow sorting (default false) |
| `render` | No | Function returning HTML string |
| `className` | No | CSS class on `<td>` |

### Render Functions

Return HTML strings. Return `'—'` for null/empty values. Define as separate class methods for complex renders:

- **Status**: `<span class="badge badge-soft-{color}">{text}</span>`
- **Money**: `<span class="font-monospace fw-medium">$X.XX <span class="text-muted text-xs">USD</span></span>`
- **Date**: `DD MMM YYYY, HH:mm` in `<span class="text-nowrap">`
- **Action buttons**: Use `OviTableRenderers.actionButtonsGroup([...])`

### OviTableRenderers

```js
render: (data, type, row) => OviTableRenderers.actionButtonsGroup([
    OviTableRenderers.editActionLinkBtn(editUrl),
    OviTableRenderers.deleteActionConfirmBtn(deleteUrl, '', entityName),
]);
```

### Filter Form

The `formSelector` points to a `<form data-ovi-table-filters="tableName">` that wraps filter inputs. OviTable reads filter values on search/submit and passes them to the server.

### Reload

```js
this.oviTable.reload();  // Reloads with current filters
```

### CSHTML Structure

```html
<div class="card nexlot-table-card">
    <div class="card-header bg-transparent border-bottom">
        <form data-ovi-table-filters="tableName">
            <!-- filter inputs + search button -->
        </form>
    </div>
    <div class="card-body py-3 px-3">
        <div class="nexlot-table-wrapper" data-nexlot-table-wrapper="tableName">
            <partial name="Shared/Components/_Table" model="@Model.TableConfig" />
        </div>
    </div>
</div>
```

### Support Partials

In `@section styles`: `OviTableSupport/_OviTablePageStyles`
In `@section scripts`: `OviTableSupport/_OviTablePageScripts`, `Shared/Components/_NexlotTableOverrides`

## Constraints

- NEVER init OviTable with `rootEl: document` — use `this.element`
- NEVER return empty string from render functions — return `'—'` for missing values
- ALWAYS define columns in a separate `getColumns()` method
- ALWAYS include `_NexlotTableOverrides` partial for sort icons and skeleton loading
