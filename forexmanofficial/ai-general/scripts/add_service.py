#!/usr/bin/env python3
"""
Create a new service with interface, implementation, and Program.cs registration.

Usage:
    python add_service.py PaymentService
    python add_service.py PaymentService --area Billing/Payment
    python add_service.py PaymentService --lifetime transient
"""

import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.scaffold_utils import (
    resolve_service_paths, render_template, write_file,
    insert_after_last_match, add_common_args,
)


LIFETIME_MAP = {
    "scoped": "AddScoped",
    "transient": "AddTransient",
    "singleton": "AddSingleton",
}


def main():
    parser = argparse.ArgumentParser(description="Create a new service")
    parser.add_argument("service_name", help="Service name, e.g. PaymentService")
    parser.add_argument("--area", default=None,
                        help="Subfolder under Services/ (defaults to name without 'Service' suffix)")
    parser.add_argument("--lifetime", choices=["scoped", "transient", "singleton"],
                        default="scoped", help="DI lifetime (default: scoped)")
    add_common_args(parser)
    args = parser.parse_args()

    paths = resolve_service_paths(args.service_name, args.area)
    method = LIFETIME_MAP[args.lifetime]

    print(f"\nScaffolding service: {args.service_name}")
    print(f"  Interface: {paths['interface_path']}")
    print(f"  Implementation: {paths['implementation_path']}")
    print(f"  Lifetime: {args.lifetime}")
    print()

    ctx = {**paths}

    iface = render_template("service_interface.cs.jinja2", ctx)
    impl = render_template("service_implementation.cs.jinja2", ctx)

    write_file(paths["interface_path"], iface, force=args.force, dry_run=args.dry_run)
    write_file(paths["implementation_path"], impl, force=args.force, dry_run=args.dry_run)

    # Register in Program.cs
    program_cs = paths["program_cs_path"]
    if program_cs.exists():
        using_line = f"using {paths['namespace']};"
        registration = f"builder.Services.{method}<{paths['interface_name']}, {paths['service_name']}>();"

        print(f"\n  Registering in Program.cs:")

        # Add using statement
        insert_after_last_match(
            program_cs, r"^using\s+", using_line,
            dry_run=args.dry_run,
        )

        # Add service registration after last AddScoped/AddTransient/AddSingleton
        insert_after_last_match(
            program_cs, r"builder\.Services\.Add(Scoped|Transient|Singleton)", registration,
            dry_run=args.dry_run,
        )
    else:
        print(f"  [WARN] Program.cs not found at {program_cs}, skipping registration")

    print("\nDone.")


if __name__ == "__main__":
    main()
