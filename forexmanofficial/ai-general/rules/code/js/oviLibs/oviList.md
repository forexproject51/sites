# OviList + OviTabs

## Purpose

Enforces correct usage of OviList (Sortable.js drag-and-drop wrapper) and OviTabs (tab switching).

## Applies To

JavaScript files that implement sortable lists or tabbed interfaces.

## Rules

### OviList

Wraps Sortable.js for drag-and-drop list reordering.

```js
this.itemList = new OviList().init({
    rootEl: this.element,
    selector: '[data-ovi-list="items"]',
    onOrderChanged: (list, order) => this.onOrderChanged(order),
});
```

Store as class property. The list container must have `data-ovi-list="name"`.

### OviTabs

Tab switching manager.

```js
this.tabs = new OviTabs().init({
    rootEl: this.element,
    selector: '[data-ovi-tabs]',
    onTabChanged: (tabs, activeTab) => this.onTabChanged(activeTab),
});
```

### CSHTML Attributes

| Attribute | Purpose |
|---|---|
| `data-ovi-list="name"` | Sortable list container |
| `data-ovi-tabs` | Tab group container |

## Constraints

- ALWAYS use OviList for drag-and-drop — never raw Sortable.js init
- ALWAYS store instances as class properties
