# UI Component Patterns

## Purpose

Enforces correct usage of tag helpers, card structures, button hierarchy, badge variants, icon patterns, and class composition. Prevents element-specific CSS and inline styles.

## Applies To

CSHTML files using UI components (tag helpers, cards, buttons, badges, icons).

## Rules

### Tag Helper Quick Reference

| Component | Tag | Key Attributes |
|---|---|---|
| Text input | `<ovi-input>` | `name`, `type`, `placeholder`, `extra-attr` |
| Select | `<ovi-select>` | `name`, `load-url`, `placeholder` |
| Date picker | `<ovi-datepicker>` | `name`, `placeholder` |
| Switch | `<ovi-switch>` | `name`, `label` |
| Submit button | `<ovi-button>` | `type`, `variant`, `icon`, `extra-classes`, `extra-attr` |
| Rich text | `<ovi-html-editor>` | `name` |

### Card Structure

```html
<div class="card">
    <div class="card-header">
        <h5 class="card-title mb-0">Title</h5>
    </div>
    <div class="card-body">
        <!-- content -->
    </div>
</div>
```

Card variant classes (add to `.card`): `card-glow-primary`, `card-glow-success`, `card-gradient-primary`, `card-gradient-success`, `card-surface-deep`, `card-surface-frosted`, `card-gradient-glow`.

### Button Hierarchy

| Role | Classes |
|------|---------|
| Primary action | `btn btn-primary` |
| Secondary / cancel | `btn btn-soft-secondary` |
| Tertiary / info | `btn btn-outline-info` |
| Destructive | `btn btn-danger` or `btn btn-soft-danger` |
| Small variant | Add `btn-sm` |
| Icon before label | `<i class="bx bx-icon me-1"></i>Label` |

Combine classes for complex elements: `btn btn-lg btn-success waves-effect waves-light`.

### Badge Variants

| Use | Classes |
|-----|---------|
| Status badge | `badge badge-soft-{color}` |
| Pill status | `badge badge-soft-{color} rounded-pill` |
| Filled badge | `badge bg-{color}` |

### Icons

Boxicons: `<i class="bx bx-icon-name"></i>`. Use `me-1` when before label text. Use `me-2` in buttons.

MDI: Only for table sort icons (`mdi nexus-sort-icon`) — handled by `_NexlotTableOverrides`.

### Class Composition

Style elements ONLY with CSS classes. Combine Bootstrap utilities and existing Nexlot classes — NEVER create element-specific classes.

| Correct | Wrong |
|---------|-------|
| `class="d-flex align-items-center gap-2"` | `class="broker-header-wrapper"` |
| `class="btn btn-sm btn-soft-danger"` | `class="delete-account-btn"` |
| `class="text-muted small mb-0"` | `style="color: gray; font-size: 14px"` |
| `class="font-monospace fw-medium"` | `class="money-display"` |

## Constraints

- NEVER create element-specific or section-specific CSS classes — compose with existing Bootstrap + Nexlot classes
- NEVER use the `style` attribute — style ONLY with CSS classes
- NEVER use raw `<input>`, `<select>`, `<button type="submit">` — use ovi-* tag helpers
- NEVER use inline `<style>` blocks in `.cshtml` files — add styles to SCSS partials
- ALWAYS use Boxicons (`bx bx-*`) for icons — never Font Awesome or custom SVG
- ALWAYS add `me-1` spacing class between icon and text in buttons/links
