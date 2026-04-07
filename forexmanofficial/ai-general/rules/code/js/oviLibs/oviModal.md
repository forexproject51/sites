# OviModal + OviImportance

## Purpose

Enforces correct modal and confirmation dialog usage via oviModal. Prevents direct Bootstrap modal usage.

## Applies To

JavaScript files that show confirmation dialogs, action modals, or any overlay.

## Rules

### Confirmation Dialog

```js
oviModal.loadAndShow({
    template: OviModalTemplates.ConfirmationModal,
    title: 'Confirm Action',
    templateSpecificOptions: {
        bodyText:          'Are you sure you want to do this?',
        oviImportance:     OviImportance.Danger,
        actionUrl:         '?handler=DeleteItem',
        actionBody:        formData,
        actionBodyNeedJson: false,
        confirmButtonText: 'Delete',
        confirmButtonIcon: 'bx bx-trash',
        onConfirmSuccess: () => {
            OviNotification.success('Item deleted.', 'Deleted');
        },
        onConfirmFinished: (resp) => {
            if (!resp?.isSuccess) {
                OviNotification.error(resp?.message ?? 'Failed.', 'Error');
            }
        },
    },
});
```

### ConfirmationModal Options

| Option | Purpose |
|---|---|
| `bodyText` | Message shown in the modal body |
| `oviImportance` | Visual severity: `OviImportance.Danger`, `.Warning`, `.Info` |
| `actionUrl` | POST URL for the confirm action |
| `actionBody` | `FormData` or plain object sent with the request |
| `actionBodyNeedJson` | `true` to send JSON, `false` for FormData (default) |
| `confirmButtonText` | Label for the confirm button |
| `confirmButtonIcon` | Boxicons class for the confirm button icon |
| `onConfirmSuccess` | Callback on successful server response |
| `onConfirmFinished` | Callback after request completes (success or error) |

### OviImportance

Enum controlling visual styling of the modal:

| Value | Use for |
|---|---|
| `OviImportance.Danger` | Destructive actions (delete, revoke, disconnect) |
| `OviImportance.Warning` | Caution actions (suspend, change settings) |
| `OviImportance.Info` | Informational confirmations |

### Anti-Forgery Token

When `actionBody` is a `FormData`, include the anti-forgery token by creating it from the hidden `data-af-form`:

```js
const formData = new FormData(this.element.querySelector('[data-af-form]'));
formData.append('itemId', id);
```

## Constraints

- NEVER use Bootstrap modal directly (`new bootstrap.Modal()`, `$('#modal').modal()`) — use `oviModal.loadAndShow()`
- ALWAYS handle the error case in `onConfirmFinished`
- ALWAYS include the anti-forgery token in `actionBody` for POST actions
