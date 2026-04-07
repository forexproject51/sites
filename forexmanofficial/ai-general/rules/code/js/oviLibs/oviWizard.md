# OviWizard + OviWizardStep

## Purpose

Enforces correct wizard initialization, step configuration, navigation gating, and skeleton loading patterns.

## Applies To

JavaScript files implementing multi-step flows (connect wizard, payout request, etc.).

## Rules

### Initialization

```js
const wizard = new OviWizard().init({
    steps: [
        new OviWizardStepOptions({
            id: 'step-one',
            name: 'Step 1',
            selector: '[data-step="1"]',
            onShow: async (step) => { /* load step data */ },
            onNextStepRequested: async (step) => {
                const result = await this.stepForm.submitAsync();
                return result?.isSuccess ?? false;
            },
        }),
        new OviWizardStepOptions({
            id: 'step-two',
            name: 'Step 2',
            selector: '[data-step="2"]',
        }),
    ],
    nextStepBtnSelector: '[data-wizard-next]',
    prevStepBtnSelector: '[data-wizard-prev]',
    onStepChanged: (wizard, from, to) => { /* update progress UI */ },
});
await wizard.show();
```

### Step Options

| Property | Purpose |
|---|---|
| `id` | Unique step identifier |
| `name` | Display name for progress indicators |
| `selector` | DOM selector for the step container |
| `onShow` | Async callback when step becomes visible — load data here |
| `onNextStepRequested` | Async callback returning boolean — gate navigation on validation |

### Skeleton Loading

Each step supports automatic skeleton/content toggling:

```html
<div data-step="1">
    <div data-ovi-wizard-step-skeleton><!-- skeleton markup --></div>
    <div data-ovi-wizard-step-content class="d-none"><!-- real content --></div>
</div>
```

```js
step.setLoading(true);   // shows skeleton, hides content
step.setLoading(false);  // hides skeleton, shows content
```

### Navigation Gating

`onNextStepRequested` MUST return `true` to allow forward navigation. Use form validation or async checks:

```js
onNextStepRequested: async (step) => {
    const result = await this.form.submitAsync();
    return result?.isSuccess ?? false;
},
```

### Support Partial

Include in `@section scripts`:

```html
<partial name="OviWizardSupport/_OviWizardSupport" />
```

## Constraints

- NEVER allow navigation without validation — implement `onNextStepRequested` on steps that need it
- ALWAYS provide skeleton markup for steps that load data asynchronously
- ALWAYS use `step.setLoading()` to toggle skeleton/content visibility
