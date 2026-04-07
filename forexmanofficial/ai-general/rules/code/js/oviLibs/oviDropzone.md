# OviDropzone, OviHtmlEditor, OviDropdown

## Purpose

Enforces correct usage of file upload, rich text editor, and dropdown components.

## Applies To

JavaScript files and CSHTML files using file uploads, rich text editors, or custom dropdowns.

## Rules

### OviDropzone (File Upload)

File upload component. Uses `data-ovi-dropzone` attribute.

Init is auto-managed by OviInputsList when inside an OviForm. For standalone use:

```js
this.dropzone = new OviDropzone().init({
    rootEl: this.element,
    selector: '[data-ovi-dropzone]',
});
```

Values are included in form submission via OviInputsList.

### OviHtmlEditor (Rich Text)

TinyMCE wrapper. Uses `data-ovi-html-editor` attribute.

CSHTML tag helper:

```html
<ovi-html-editor name="description" />
```

OviForm auto-syncs TinyMCE content to the underlying textarea via `tinymce.triggerSave()` before submission.

### OviDropdown

Custom dropdown component.

```js
this.dropdown = new OviDropdown().init({
    rootEl: this.element,
    selector: '[data-ovi-dropdown]',
});
```

### Support Partials

| Component | Styles Partial | Scripts Partial |
|---|---|---|
| OviDropzone | — | `OviDropzoneSupport/_OviDropzoneSupport` |
| OviHtmlEditor | — | `OviHtmlEditorSupport/_OviHtmlEditorSupport` |

## Constraints

- NEVER use raw `<textarea>` for rich text — use `<ovi-html-editor>`
- NEVER use raw `<input type="file">` — use OviDropzone
- ALWAYS include the correct support partial in `@section scripts`
