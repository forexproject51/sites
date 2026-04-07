#!/usr/bin/env python3
"""
Add an AJAX handler to an existing PageModel.

Usage:
    python add_handler.py BrokerAccounts/Index DeleteAccount --method post
    python add_handler.py BrokerAccounts/Index LoadDetails --method get
    python add_handler.py BrokerAccounts/Index SubmitForm --method post --with-body SomeInputModel
"""

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.scaffold_utils import (
    resolve_page_paths, render_template, insert_before_class_closing_brace,
    add_common_args,
)


def main():
    parser = argparse.ArgumentParser(description="Add AJAX handler to existing PageModel")
    parser.add_argument("address", help="Page address, e.g. BrokerAccounts/Index")
    parser.add_argument("handler_name", help="Handler name, e.g. DeleteAccount")
    parser.add_argument("--method", choices=["post", "get"], default="post",
                        help="HTTP method (default: post)")
    parser.add_argument("--with-body", default=None, metavar="TYPE",
                        help="Add [FromBody] parameter with this type name")
    add_common_args(parser)
    args = parser.parse_args()

    paths = resolve_page_paths(args.address)
    cs_path = paths["cshtml_cs_path"]

    if not cs_path.exists():
        print(f"Error: PageModel file not found at {cs_path}")
        sys.exit(1)

    ctx = {
        "handler_name": args.handler_name,
        "method": args.method,
        "with_body": args.with_body,
    }

    print(f"\nAdding handler: On{args.method.capitalize()}{args.handler_name}Async")
    print(f"  File: {cs_path}")
    print()

    handler_code = render_template("handler.cs.jinja2", ctx)
    insert_before_class_closing_brace(cs_path, handler_code, dry_run=args.dry_run)

    print("\nDone.")


if __name__ == "__main__":
    main()
