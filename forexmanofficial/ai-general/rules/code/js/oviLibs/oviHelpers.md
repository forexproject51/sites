# OviRequest, OviNotification, OviElement & Utility Classes

## Purpose

Enforces correct AJAX, notification, base element, and utility class usage. Prevents raw fetch/alert and unscoped DOM operations.

## Applies To

All JavaScript files in the project.

## Rules

### OviRequest (AJAX)

The ONLY allowed AJAX method. `fetch()`, `$.ajax()`, and `XMLHttpRequest` are forbidden.

```js
// GET
const result = await OviRequest.get('?handler=LoadData');
if (result.ok && result.response?.isSuccess) {
    // use result.response.data
}

// POST
const result = await OviRequest.post('?handler=SaveData', { key: value });

// PUT
const result = await OviRequest.put(url, body);

// DELETE
const result = await OviRequest.delete(url);

// File download
await OviRequest.downloadFile(url, 'report.xlsx');
```

Return shape: `{ ok, response, status, error }`.

| Method | Arguments |
|---|---|
| `OviRequest.get(url, options?)` | URL string |
| `OviRequest.post(url, body, options?)` | URL + FormData or object |
| `OviRequest.put(url, body, options?)` | URL + body |
| `OviRequest.delete(url, options?)` | URL |
| `OviRequest.downloadFile(url, filename, options?)` | URL + download filename |
| `OviRequest.abortRequest(requestId)` | Cancel by ID |
| `OviRequest.abortAll()` | Cancel all active |

Auto-includes `XSRF-TOKEN` and `X-Requested-With` headers. Sends JSON `Content-Type` unless body is `FormData`.

### OviNotification (Toasts)

```js
OviNotification.success('Message', 'Title');
OviNotification.error('Message', 'Title');
OviNotification.warning('Message', 'Title');
OviNotification.info('Message', 'Title');
```

NEVER use `alert()`.

### OviElement (Base Class)

Base class for all Ovi components. Provides `show(isShow)` method. Extend for custom components:

```js
class MyWidget extends OviElement {
    init(options) {
        this.element = options.rootEl.querySelector(options.selector);
        return this;
    }
}
```

### Utility Classes

| Class | Key Methods | Purpose |
|---|---|---|
| `OviCssHelper` | `toggleDisplay(el, isShow)` | Show/hide elements |
| `OviHtmlHelper` | `escapeAttr(str)` | Escape HTML attributes |
| `OviObjectHelper` | `combineObjects(custom, defaults)` | Merge options with defaults |
| `OviStringHelper` | String manipulation utilities | |
| `OviDateHelper` | Date formatting/parsing | |
| `OviDomHelper` | DOM manipulation helpers | |
| `OviUrlHelper` | URL construction/parsing | |
| `OviOther` | `copy(value, onSuccess, onError)` | Clipboard copy |
| `OviAnimations` | CSS animation triggers | |
| `OviScroll` | Scroll utilities | |

### translate() (Localization)

```js
const label = translate('keyName', 'Fallback Text');
```

Uses `window.__t` injected by `_FrontendTranslations.cshtml`. NEVER hardcode English strings in JS.

## Constraints

- NEVER use `fetch()`, `$.ajax()`, `XMLHttpRequest` — use `OviRequest`
- NEVER use `alert()` — use `OviNotification`
- NEVER hardcode English strings — use `translate(key, fallback)`
- ALWAYS check `result.ok` and `result.response?.isSuccess` after OviRequest calls
- ALWAYS extend `OviElement` for custom components — do not create standalone classes without a base
