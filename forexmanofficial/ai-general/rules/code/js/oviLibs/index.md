# OviLibs Component Index

## Purpose

Maps each OviLibs class to its rule file. Read this index to find which file to load for a given task.

## Applies To

Any agent working with OviLibs JavaScript components.

## Component-to-File Mapping

| OviLibs Class | Rule File | When to Read |
|---|---|---|
| `OviButton` | `oviButton.md` | Buttons, click actions, loading states |
| `OviForm`, `OviInputsList` | `oviForm.md` | Form submission, validation, auto-submit |
| `OviInput`, `OviSelect`, `OviSwitch`, `OviDatePicker`, `OviPasswordInput` | `oviInputs.md` | Text fields, selects, toggles, date pickers |
| `OviTable`, `OviTableRenderers` | `oviTable.md` | Data tables, columns, filters, action buttons |
| `OviWizard`, `OviWizardStep` | `oviWizard.md` | Multi-step flows, step validation, skeleton loading |
| `OviModal`, `OviImportance` | `oviModal.md` | Confirm dialogs, custom modals |
| `OviChart`, `OviChartOptions` | `oviChart.md` | Charts (ApexCharts wrapper) |
| `OviDynamicPartial` | `oviPartials.md` | Lazy-loaded sections, skeleton placeholders |
| `OviList`, `OviTabs` | `oviList.md` | Sortable drag-and-drop lists, tab switching |
| `OviDropzone`, `OviHtmlEditor`, `OviDropdown` | `oviDropzone.md` | File upload, rich text editor, dropdowns |
| `OviRequest`, `OviNotification`, `OviElement`, helpers | `oviHelpers.md` | AJAX, toasts, base class, DOM/CSS/string utilities |

## Task-Based Lookup

| I need to... | Read |
|---|---|
| Add a button with loading state | `oviButton.md` |
| Submit a form via AJAX | `oviForm.md` |
| Add input fields to a form | `oviInputs.md` |
| Build a data table with filters | `oviTable.md` |
| Create a multi-step wizard | `oviWizard.md` |
| Show a confirmation dialog | `oviModal.md` |
| Render a chart | `oviChart.md` |
| Lazy-load a page section | `oviPartials.md` |
| Add drag-and-drop sorting | `oviList.md` |
| Add file upload or rich text | `oviDropzone.md` |
| Make an AJAX call or show a toast | `oviHelpers.md` |

## Rules

! MUST READ `ai-general/rules/code/js/core.md` BEFORE reading any file in this folder. Core conventions (OviPage structure, scoped queries, data attributes, naming) apply to all OviLibs usage.
