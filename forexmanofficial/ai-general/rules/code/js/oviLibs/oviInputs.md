# OviInput, OviSelect, OviSwitch, OviDatePicker, OviPasswordInput

## Purpose

Enforces correct usage of OviLibs input components. Prevents raw HTML inputs that OviForm cannot collect or validate.

## Applies To

JavaScript files and CSHTML files that add or manipulate form inputs.

## Rules

### OviInput

Wraps text-like inputs. Auto-initialized by OviInputsList within an OviForm. The `<ovi-input>` tag helper renders the required `data-ovi-input` markup.

| Method | Purpose |
|---|---|
| `input.getValue()` | Returns current value |
| `input.setValue(val)` | Sets value programmatically |
| `input.markInvalid(message)` | Shows validation error |
| `input.clearValidation()` | Removes validation state |

Input types: `text`, `email`, `number`, `password`, `phone`, `hidden`.

CSHTML tag helper:

```html
<ovi-input name="email" placeholder="Email" type="email"
           extra-attr='maxlength="100" autocomplete="email"' />
```

### OviSelect

Async select dropdown with option loading from server.

```js
// Auto-managed by OviInputsList — no manual init needed in most cases.
// For standalone use:
this.brokerSelect = new OviSelect().init({
    rootEl: this.element,
    selector: '[data-ovi-select="broker"]',
    onChanged: (select, value) => this.onBrokerChanged(value),
});
```

Key methods: `getValue()`, `setValue(val)`, `clearOptions()`, `loadOptions()`.

CSHTML tag helper:

```html
<ovi-select name="brokerId" load-url="@urlLoadBrokers"
            placeholder="Select broker" />
```

### OviSwitch

Toggle switch. Maps to a boolean value in the form.

CSHTML: `<ovi-switch name="isActive" label="Active" />`

### OviDatePicker

Date/datetime picker component.

CSHTML: `<ovi-datepicker name="startDate" placeholder="Select date" />`

Support partial required: `OviDatePickerSupport/_OviDatePickerSupport` in `@section scripts`, `OviDateTimePickerSupport/_OviDateTimePickerSupportCss` in `@section styles`.

### OviPasswordInput

Password input with show/hide toggle. Used on identity pages.

### OviInputsList Integration

All input components above are auto-discovered and initialized by `OviInputsList.autoInit()` when they have the correct `data-ovi-input` / `data-ovi-select` / `data-ovi-switch` / `data-ovi-datepicker` attributes. OviForm creates an OviInputsList automatically.

| Correct | Wrong |
|---------|-------|
| `<ovi-input name="email">` | `<input type="email" name="email">` |
| `<ovi-select load-url="...">` | `<select name="...">` |
| `<ovi-switch name="active">` | `<input type="checkbox" name="active">` |
| `<ovi-datepicker name="date">` | `<input type="date" name="date">` |

## Constraints

- NEVER use raw `<input>`, `<select>`, `<textarea>`, or `<input type="checkbox">` — use ovi-* tag helpers
- NEVER manually init OviInput instances when they are inside an OviForm — OviInputsList handles it
- ALWAYS include the correct support partials in `@section styles` / `@section scripts` for selects and date pickers
