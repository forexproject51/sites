# JavaScript Core Conventions

## Purpose

Enforces class-based, object-oriented JavaScript architecture using OviLibs wrappers. Prevents global functions, unscoped DOM queries, and chaotic code structure.

## Applies To

All `.js` page files and shared JavaScript modules.

## Rules

### Class-Based Architecture

All page JS MUST extend `OviPage`. Encapsulate all functionality in classes.

| Need | Correct | Wrong |
|------|---------|-------|
| Page script | `class FooPage extends OviPage` | Bare `<script>`, IIFE, `function init()` |
| Shared logic | Separate class in its own file | Global functions at module level |
| Custom component | `class MyWidget extends OviElement` | Standalone functions manipulating DOM |

### Class Structure

Fields at top under `// ── State ──`, `init()` under `// ── Bootstrap ──`. `init()` calls `super.init()` first, then `initXxx()` methods. Instantiate in `DOMContentLoaded` at the bottom. Must match scaffold template `page_blank.js.jinja2`.

### Element Caching

Store DOM references and Ovi component instances as class properties in `init()`. Reuse properties — NEVER search the DOM repeatedly for the same element.

```js
// CORRECT — cache once, reuse
init() {
    super.init();
    this.saveBtn = new OviButton().init({ rootEl: this.element, selector: '[data-ovi-btn-save]' });
    this.statusEl = this.element.querySelector('[data-ovi-status]');
}

// WRONG — searching every time
onSave() {
    document.querySelector('[data-ovi-btn-save]').disabled = true;
}
```

### Scoped DOM Queries

Search within `this.element` (the `[data-ovi-page]` root) or a known parent container. NEVER search the whole document.

| Correct | Wrong |
|---------|-------|
| `this.element.querySelector('[data-ovi-btn]')` | `document.querySelector('[data-ovi-btn]')` |
| `container.querySelectorAll('[data-item]')` | `document.querySelectorAll('[data-item]')` |
| `new OviForm().init({ rootEl: this.element, ... })` | `new OviForm().init({ rootEl: document, ... })` |

### Data Attribute Selectors

Identify elements by `data-ovi-*` attributes. NEVER select by id or CSS class.

- Generic by default: `data-ovi-btn-add` (not `data-ovi-btn-brokers-list-add`)
- Disambiguate only when multiple similar elements: `data-ovi-btn-add="solo"`, `data-ovi-btn-add="group"`
- If only one element of its kind exists, use the plain attribute with no value

| Correct | Wrong |
|---------|-------|
| `[data-ovi-btn-save]` | `#btnSave`, `.save-button` |
| `[data-ovi-form="settings"]` | `#settingsForm` |
| `[data-ovi-list]` | `.broker-list` |

### Event Handling

Use OviButton's `onClick` option, OviForm's callbacks, OviSelect's `onChanged` — not raw `addEventListener` on Ovi-wrapped elements. Raw listeners are acceptable only on plain DOM elements that have no Ovi wrapper.

### Naming

- camelCase ONLY — no underscores in any method, function, or variable name
- Section dividers: `// ── Section Name ─────────────────────────────────────────────────────────`

### AJAX

`OviRequest` is the ONLY allowed AJAX method. See `oviLibs/oviHelpers.md`.

### Separation of Concerns

Split distinct functionality pieces into separate classes and files. Extend existing Ovi classes when building custom components. One class per logical concern — do not cram unrelated logic into a single page class.

### Scaffold-First

Create new pages via `python new_page.py` (see `ai-general/scripts/new_page.py`). Hand-written pages MUST follow the same structure the scaffold produces.

### OviLibs Component Lookup

Read the specific rule file when working with a component. Full index: `oviLibs/index.md`.

| Working with | Read |
|---|---|
| Buttons, click actions | `oviLibs/oviButton.md` |
| Forms, validation | `oviLibs/oviForm.md` |
| Text/select/switch inputs | `oviLibs/oviInputs.md` |
| Data tables | `oviLibs/oviTable.md` |
| Multi-step wizards | `oviLibs/oviWizard.md` |
| Confirm dialogs, modals | `oviLibs/oviModal.md` |
| Charts | `oviLibs/oviChart.md` |
| Lazy-loaded sections | `oviLibs/oviPartials.md` |
| Sortable lists, tabs | `oviLibs/oviList.md` |
| File upload, rich text | `oviLibs/oviDropzone.md` |
| AJAX, notifications, helpers | `oviLibs/oviHelpers.md` |

## Example

```js
class BrokersPage extends OviPage {

    // ── State ─────────────────────────────────────────────────────────────────
    brokersTable = null;
    addBtn       = null;

    // ── Bootstrap ─────────────────────────────────────────────────────────────
    init() {
        super.init();
        this.initTable();
        this.initAddButton();
    }

    // ── Table ─────────────────────────────────────────────────────────────────

    initTable() {
        this.brokersTable = new OviTable().init({
            rootEl: this.element,
            tableSelector: '[data-ovi-table="brokers"]',
            formSelector: '[data-ovi-table-filters="brokers"]',
            columns: this.getColumns(),
            tableConfig: { orderBy: [['Name', 'asc']] },
            onLoaded: () => this.onTableLoaded(),
        });
    }

    getColumns() {
        return [
            { name: 'Name', title: 'Name', orderable: true, render: (data) => data ?? '—' },
        ];
    }

    onTableLoaded() { }

    // ── Add Button ────────────────────────────────────────────────────────────

    initAddButton() {
        this.addBtn = new OviButton().init({
            rootEl: this.element,
            selector: '[data-ovi-btn-add]',
            onClick: () => this.onAddClicked(),
        });
    }

    onAddClicked() { /* ... */ }
}

document.addEventListener('DOMContentLoaded', () => {
    new BrokersPage().init();
});
```

## Constraints

- NEVER write bare scripts, IIFEs, or global `function` declarations — always extend `OviPage`
- NEVER use `document.querySelector()` or `document.getElementById()` — search within `this.element`
- NEVER select elements by id or CSS class — use `data-ovi-*` attributes
- NEVER search the DOM repeatedly for the same element — cache in class properties
- NEVER use `fetch()`, `$.ajax()`, `XMLHttpRequest` — use `OviRequest`
- NEVER use `alert()` — use `OviNotification`
- NEVER use underscores in method/function/variable names — camelCase only
- NEVER add raw `addEventListener` on elements wrapped by Ovi classes — use the Ovi callback
- ALWAYS call `super.init()` first in `init()`
- ALWAYS instantiate page class in `DOMContentLoaded` listener at file bottom
- ALWAYS split distinct functionality into separate classes and files
- ALWAYS extend existing Ovi classes when building custom components
