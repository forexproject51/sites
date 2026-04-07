#!/usr/bin/env python3
"""
Create a new Razor Page with CSHTML, CS, and JS files.

Usage:
    python new_page.py BrokerAccounts/Index --title "Broker Accounts"
    python new_page.py Reports/Index --type table --title "Reports"
    python new_page.py Reports/Index --type table --title "Reports" --nav --nav-label "Reports" --nav-icon "bx-bar-chart-alt-2"
"""

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.scaffold_utils import (
    resolve_page_paths, render_template, write_file, add_nav_item,
    add_common_args, to_camel,
)


def main():
    parser = argparse.ArgumentParser(description="Create a new Razor Page")
    parser.add_argument("address", help="Page address, e.g. BrokerAccounts/Index")
    parser.add_argument("--type", choices=["blank", "table"], default="blank",
                        help="Page type (default: blank)")
    parser.add_argument("--title", default=None,
                        help="Page title for ViewData (defaults to last area segment)")
    parser.add_argument("--nav", action="store_true",
                        help="Add navigation items to topbar and mobile nav")
    parser.add_argument("--nav-label", default=None,
                        help="Nav display text (defaults to --title)")
    parser.add_argument("--nav-icon", default="bx-circle",
                        help="Boxicons class for mobile nav icon (default: bx-circle)")
    add_common_args(parser)
    args = parser.parse_args()

    paths = resolve_page_paths(args.address)
    title = args.title or paths["area_parts"][-1]
    table_id = to_camel(paths["area_parts"][-1]) + "Table"

    ctx = {
        **paths,
        "title": title,
        "table_id": table_id,
    }

    page_type = args.type
    print(f"\nScaffolding {page_type} page: {args.address}")
    print(f"  Title: {title}")
    print()

    # Generate files
    cshtml = render_template(f"page_{page_type}.cshtml.jinja2", ctx)
    cshtml_cs = render_template(f"page_{page_type}.cshtml.cs.jinja2", ctx)
    js = render_template(f"page_{page_type}.js.jinja2", ctx)

    write_file(paths["cshtml_path"], cshtml, force=args.force, dry_run=args.dry_run)
    write_file(paths["cshtml_cs_path"], cshtml_cs, force=args.force, dry_run=args.dry_run)
    write_file(paths["js_path"], js, force=args.force, dry_run=args.dry_run)

    # Nav items
    if args.nav:
        label = args.nav_label or title
        print(f"\n  Adding nav items (label: {label}, icon: {args.nav_icon})")
        add_nav_item(args.address, label, args.nav_icon, dry_run=args.dry_run)

    print("\nDone.")


if __name__ == "__main__":
    main()
