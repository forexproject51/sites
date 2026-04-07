# OviChart + OviChartOptions

## Purpose

Enforces correct chart initialization and re-initialization patterns using the OviChart ApexCharts wrapper.

## Applies To

JavaScript files that render charts.

## Rules

### Initialization

```js
const opts = new OviChartOptions();
opts.selector = '[data-chart-element]';
opts.barOptions(seriesArray, categoriesArray);
Object.assign(opts.chartOptions, {
    colors: ['#2933ff'],
    chart: { ...opts.chartOptions.chart, height: 300 },
});
this.chart = new OviChart().init(opts);
```

### Re-initialization

Destroy the previous instance before creating a new one to avoid ApexCharts conflicts:

```js
if (this.chart) {
    this.chart.destroy?.();
    this.chart = null;
}
chartEl.innerHTML = '';
this.chart = new OviChart().init(opts);
```

### OviChartOptions Methods

| Method | Purpose |
|---|---|
| `opts.barOptions(series, categories)` | Configure as bar chart |
| `opts.chartOptions` | Raw ApexCharts config object for overrides |
| `opts.selector` | DOM selector for the chart container |

### Data from Server

Pass chart data via `data-*` attributes on the chart container element, parse in `onLoaded`:

```js
const series     = JSON.parse(chartEl.getAttribute('data-chart-series') || '[]');
const categories = JSON.parse(chartEl.getAttribute('data-chart-categories') || '[]');
```

### Support Partial

Include in `@section scripts`:

```html
<partial name="OviChartSupport/_OviChartSupport" />
```

## Constraints

- NEVER create a new chart without destroying the previous one — causes rendering conflicts
- ALWAYS clear `innerHTML` before re-init
- ALWAYS use `OviChart` wrapper — never raw ApexCharts constructor
