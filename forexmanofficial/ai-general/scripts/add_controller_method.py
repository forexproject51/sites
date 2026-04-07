#!/usr/bin/env python3
"""
Add a method to an existing MVC controller.

Usage:
    python add_controller_method.py Shared/FiltersController LoadStatusSelectList --method post
    python add_controller_method.py PaymentController ProcessPayment --method post --with-body ProcessPaymentModel
"""

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.scaffold_utils import (
    resolve_controller_paths, render_template, insert_before_class_closing_brace,
    add_common_args,
)


def main():
    parser = argparse.ArgumentParser(description="Add method to existing controller")
    parser.add_argument("controller_path",
                        help="Controller path, e.g. Shared/FiltersController or PaymentController")
    parser.add_argument("method_name", help="Method name, e.g. LoadStatusSelectList")
    parser.add_argument("--method", choices=["post", "get"], default="post",
                        help="HTTP method (default: post)")
    parser.add_argument("--with-body", default=None, metavar="TYPE",
                        help="Use custom [FromBody] parameter type instead of LoadSelectModel")
    add_common_args(parser)
    args = parser.parse_args()

    # Parse controller_path to extract area and controller name
    parts = args.controller_path.strip("/").split("/")
    if len(parts) == 1:
        area = None
        ctrl_name = parts[0]
    else:
        area = "/".join(parts[:-1])
        ctrl_name = parts[-1]

    if not ctrl_name.endswith("Controller"):
        ctrl_name += "Controller"

    paths = resolve_controller_paths(ctrl_name, area)
    cs_path = paths["controller_path"]

    if not cs_path.exists():
        print(f"Error: Controller file not found at {cs_path}")
        sys.exit(1)

    ctx = {
        "method_name": args.method_name,
        "method": args.method,
        "with_body": args.with_body,
    }

    print(f"\nAdding method: {args.method_name}")
    print(f"  File: {cs_path}")
    print(f"  HTTP: [{args.method.upper()}]")
    print()

    method_code = render_template("controller_method.cs.jinja2", ctx)
    insert_before_class_closing_brace(cs_path, method_code, dry_run=args.dry_run)

    print("\nDone.")


if __name__ == "__main__":
    main()
