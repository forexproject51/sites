# OviForm + OviInputsList

## Purpose

Enforces correct form submission, validation display, and input list management via OviForm and OviInputsList.

## Applies To

JavaScript files that handle form submission or collect form input values.

## Rules

### OviForm Initialization

```js
this.settingsForm = new OviForm();
this.settingsForm.init({
    rootEl: this.element,
    selector: '[data-ovi-form="settings"]',
    onSubmitSuccess: (form, answer) => this.onSettingsSaved(form, answer),
    onSubmitError: (form, answer) => this.onSettingsError(form, answer),
});
```

The `<form>` element MUST have `data-ovi-form="name"`. The POST URL is read from `data-ovi-form-url` on the form element, or passed as `options.url`.

### Callbacks

| Callback | When | Typical use |
|---|---|---|
| `onSubmitStarted(form)` | Before POST | Show custom loading |
| `onSubmitSuccess(form, data)` | Server returns `isSuccess: true` | Notification, UI update |
| `onSubmitError(form, result)` | Server returns error or validation failure | Error notification |
| `onSubmitFinished(form, result)` | After POST completes (success or error) | Cleanup |
| `onSubmitCustom(form)` | Replaces POST entirely | Filter forms that trigger table reload |

### Key Options

| Option | Default | Purpose |
|---|---|---|
| `useOviInputs` | `true` | Auto-create OviInputsList for `[data-ovi-input]` elements |
| `submitOnChange` | `false` | Auto-submit when any input changes (filter forms) |
| `inputsListOptions` | `{}` | Passed to OviInputsList constructor |

### Key Methods

| Method | Purpose |
|---|---|
| `form.submit()` | Programmatic submit (triggers `requestSubmit()`) |
| `form.getFormValues()` | Returns current form values as object |
| `form.startLoading()` / `form.stopLoading()` | Manages submit button states + readonly |
| `form.readonly(true/false)` | Toggles input readonly state |

### OviInputsList

Auto-created by OviForm when `useOviInputs: true`. Manages all `[data-ovi-input]` elements within the form.

| Method | Purpose |
|---|---|
| `inputsList.autoInit()` | Discover and init all inputs in container |
| `inputsList.getValuesObject()` | Returns `{ name: value }` for all managed inputs |
| `inputsList.markFieldsAsInvalid(validationResult)` | Shows field-level validation errors |
| `inputsList.onAnyInputChanged` | Callback when any input value changes |

Standalone use (outside OviForm):

```js
this.inputsList = new OviInputsList({ rootEl: this.element });
this.inputsList.autoInit();
const values = this.inputsList.getValuesObject();
```

### Validation Flow

1. Server returns `{ isSuccess: false, validationResult: { violations: [...] } }`
2. OviForm calls `inputsList.markFieldsAsInvalid(validationResult)`
3. Each violation with a `fieldKey` highlights the matching input
4. Violations without `fieldKey` are shown via `OviNotification.error()`

## Constraints

- NEVER use `fetch()` to submit a form — use OviForm
- NEVER manually collect form values with `new FormData()` in page code — use `form.getFormValues()` or let OviForm handle it
- ALWAYS pair `data-ovi-form` on the HTML `<form>` with an OviForm JS instance
- ALWAYS handle both `onSubmitSuccess` and `onSubmitError`
