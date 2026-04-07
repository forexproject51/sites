#!/usr/bin/env python3
"""
Create a new MVC controller.

Usage:
    python add_controller.py PaymentController
    python add_controller.py PaymentController --area Shared
    python add_controller.py PaymentController --no-auth
"""

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.scaffold_utils import (
    resolve_controller_paths, render_template, write_file, add_common_args,
)


def main():
    parser = argparse.ArgumentParser(description="Create a new MVC controller")
    parser.add_argument("controller_name", help="Controller name, e.g. PaymentController")
    parser.add_argument("--area", default=None,
                        help="Subfolder under Controllers/ (e.g. Shared)")
    parser.add_argument("--no-auth", action="store_true",
                        help="Skip [Authorize] attribute")
    add_common_args(parser)
    args = parser.parse_args()

    paths = resolve_controller_paths(args.controller_name, args.area)

    ctx = {
        **paths,
        "authorize": not args.no_auth,
    }

    print(f"\nScaffolding controller: {args.controller_name}")
    print(f"  Path: {paths['controller_path']}")
    print(f"  Namespace: {paths['namespace']}")
    print(f"  Auth: {'yes' if not args.no_auth else 'no'}")
    print()

    content = render_template("controller.cs.jinja2", ctx)
    write_file(paths["controller_path"], content, force=args.force, dry_run=args.dry_run)

    print("\nDone.")


if __name__ == "__main__":
    main()
