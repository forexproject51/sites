# OviButton

## Purpose

Enforces correct OviButton initialization, state management, and event handling. Prevents raw event listeners on button elements.

## Applies To

JavaScript files that create or interact with buttons.

## Rules

### Initialization

Create via `new OviButton().init(options)`. Prefer the **selector approach** (scoped to `rootEl`):

```js
this.saveBtn = new OviButton().init({
    rootEl: this.element,
    selector: '[data-ovi-btn-save]',
    onClick: (btn) => this.onSaveClicked(btn),
});
```

Fallback — by element reference (only when you already have the DOM node and no data attribute is practical):

```js
this.deleteBtn = new OviButton().init({
    element: someElement,
    onClick: (btn) => this.onDeleteClicked(btn),
});
```

| Approach | When to use |
|---|---|
| `{ rootEl, selector }` | **Preferred.** Scoped query via data attribute. |
| `{ element }` | Only when the DOM node is already available (e.g. dynamically created or passed from another component). |

Store as a class property in `init()` or `initXxx()`. Reuse the property — never re-query.

### Event Handling

Use the `onClick` callback in options. NEVER add `addEventListener('click', ...)` on an OviButton's `.element`.

| Correct | Wrong |
|---------|-------|
| `onClick: (btn) => this.onSave(btn)` in init options | `this.saveBtn.element.addEventListener('click', ...)` |

### State Management

| Method | Effect |
|---|---|
| `btn.updateState(OviButtonStates.LOADING)` | Disables button, shows spinner, hides content |
| `btn.updateState(OviButtonStates.IDLE)` | Re-enables button, hides spinner, shows content |
| `btn.disable(true)` | Disables without visual state change |
| `btn.disable(false)` | Re-enables |

States enum: `OviButtonStates.IDLE`, `OviButtonStates.LOADING`, `OviButtonStates.SUCCESS`, `OviButtonStates.ERROR`.

### Generating Button HTML from JS

Use `getOviButtonHtml()` for dynamically creating button markup:

```js
const html = getOviButtonHtml({
    type: 'submit',       // 'submit' | 'button' | 'link'
    variant: 'primary',   // Bootstrap variant
    text: 'Save',
    icon: 'bx-save',      // Boxicons class (auto-prefixed with 'bx ')
    extraClasses: 'btn-sm',
    extraAttr: 'data-ovi-btn-save',
});
```

### Extending OviButton

For custom button behavior, extend `OviButton` and override methods or provide custom `stateFunctions` in options.

### CSHTML Counterpart

Use `<ovi-button>` tag helper for server-rendered buttons (submit buttons with loading):

```html
<ovi-button type="submit" variant="primary" icon="bx-save">Save</ovi-button>
```

## Constraints

- NEVER add `addEventListener('click', ...)` on an OviButton's element — use `onClick` in init options
- NEVER search for buttons by id or CSS class — use `data-ovi-btn-*` attributes
- ALWAYS store OviButton instances as class properties — never create and discard
- ALWAYS use `updateState()` for loading/idle transitions — never manually toggle classes
