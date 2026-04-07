# Scaffolding Scripts

## Rule

**ALWAYS check this file before writing any new file from scratch.**
If a script exists for your task, run it instead of writing boilerplate manually.
Only hand-write if no applicable script exists or the output would need >80% modification.

## Available Scripts

All scripts live in `ai-general/scripts/`. Templates and config live in `ai-project/scripts/`.
Run from the `.cursor-dev/` directory.

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `new_page.py` | Create a new Razor Page (CSHTML + CS + JS + folders) | Creating any new page from scratch |
| `add_handler.py` | Add AJAX handler to existing PageModel | Adding OnGet/OnPost handler to a page |
| `add_service.py` | Create service (interface + impl + Program.cs registration) | Creating any new service |
| `add_controller.py` | Create a new MVC controller | Creating any new controller |
| `add_controller_method.py` | Add method to existing controller | Adding endpoint to existing controller |

## Usage Examples

### Create a new page

```bash
# Blank page
python ai-general/scripts/new_page.py BrokerAccounts/Index --title "Broker Accounts"

# Table page with nav items
python ai-general/scripts/new_page.py Reports/Index --type table --title "Reports" \
  --nav --nav-label "Reports" --nav-icon "bx-bar-chart-alt-2"

# Deeply nested page
python ai-general/scripts/new_page.py Administration/Users/Details --title "User Details"
```

### Add handler to existing page

```bash
python ai-general/scripts/add_handler.py BrokerAccounts/Index DeleteAccount --method post
python ai-general/scripts/add_handler.py BrokerAccounts/Index LoadDetails --method get
python ai-general/scripts/add_handler.py BrokerAccounts/Index SubmitForm --method post --with-body SomeInputModel
```

### Create a service

```bash
python ai-general/scripts/add_service.py PaymentService
python ai-general/scripts/add_service.py PaymentService --area Billing/Payment
python ai-general/scripts/add_service.py PaymentService --lifetime transient
```

### Create a controller

```bash
python ai-general/scripts/add_controller.py PaymentController --area Shared
python ai-general/scripts/add_controller.py ReportsController --no-auth
```

### Add method to controller

```bash
python ai-general/scripts/add_controller_method.py Shared/FiltersController LoadStatusSelectList --method post
python ai-general/scripts/add_controller_method.py PaymentController ProcessPayment --method post --with-body ProcessPaymentModel
```

## Common Flags

All scripts support:

- `--dry-run` — preview what would be created/modified without writing anything
- `--force` — overwrite existing files (default: skip existing)
- `--verbose` — show template rendering details

## Adding New Scripts

When a repeatable pattern is identified (same boilerplate written 3+ times):

1. Create a Jinja2 template in `ai-project/scripts/templates/`
2. Create a Python script in `ai-general/scripts/`
3. Update this file with the new script entry
4. Use the **scaffolder** agent for this work
