"""
Shared utilities for all scaffold scripts.
Handles config loading, template rendering, file writing, and code insertion.
"""

import json
import os
import re
import sys
from pathlib import Path

try:
    from jinja2 import Environment, FileSystemLoader
except ImportError:
    print("Error: jinja2 is required. Run: pip install jinja2")
    sys.exit(1)


# ── Path Resolution ───────────────────────────────────────────────────────────

def _scripts_dir() -> Path:
    """ai-general/scripts/ directory."""
    return Path(__file__).resolve().parent.parent


def _ai_general_dir() -> Path:
    return _scripts_dir().parent


def _ai_project_dir() -> Path:
    return _ai_general_dir().parent / "ai-project"


def _workspace_root() -> Path:
    return _ai_general_dir().parent.parent


# ── Config ────────────────────────────────────────────────────────────────────

_config_cache = None


def load_config() -> dict:
    """Load project config from ai-project/scripts/config.json."""
    global _config_cache
    if _config_cache is not None:
        return _config_cache

    config_path = _ai_project_dir() / "scripts" / "config.json"
    if not config_path.exists():
        print(f"Error: config not found at {config_path}")
        sys.exit(1)

    with open(config_path, "r", encoding="utf-8") as f:
        _config_cache = json.load(f)
    return _config_cache


def app_root() -> Path:
    """Absolute path to the application root directory."""
    cfg = load_config()
    return _workspace_root() / cfg["appRoot"]


# ── Case Converters ──────────────────────────────────────────────────────────

def to_camel(name: str) -> str:
    """PascalCase -> camelCase. 'BrokerAccounts' -> 'brokerAccounts'."""
    if not name:
        return name
    return name[0].lower() + name[1:]


def to_pascal(name: str) -> str:
    """camelCase -> PascalCase. 'brokerAccounts' -> 'BrokerAccounts'."""
    if not name:
        return name
    return name[0].upper() + name[1:]


# ── Address Parsing ──────────────────────────────────────────────────────────

def resolve_page_paths(address: str) -> dict:
    """
    From an address like 'BrokerAccounts/Index' or 'Administration/Users/Details',
    derive all related paths and names.
    """
    cfg = load_config()
    parts = address.strip("/").split("/")

    if len(parts) < 2:
        print(f"Error: address must have at least Area/Page, got '{address}'")
        sys.exit(1)

    page_name = parts[-1]
    area_parts = parts[:-1]
    area_path = "/".join(area_parts)

    # JS path: camelCase each segment, flatten to single file for single-level area
    js_segments = [to_camel(p) for p in area_parts]
    if len(js_segments) == 1:
        js_file = js_segments[0] + ".js"
        js_rel = js_file
    else:
        js_file = to_camel(parts[-1]) + ".js"
        js_rel = "/".join(js_segments[:-1]) + "/" + js_segments[-1] + ".js"

    root = app_root()

    return {
        "address": address,
        "page_name": page_name,
        "area_path": area_path,
        "area_parts": area_parts,
        "class_name": page_name + "Model",
        "page_class_name": to_pascal(area_parts[-1]) + page_name + "Page",
        "js_class_name": to_pascal(area_parts[-1]) + page_name + "Page",
        "namespace": cfg["namespace"] + ".Pages." + ".".join(area_parts),
        "page_route": "/" + address,
        # Absolute paths
        "cshtml_path": root / cfg["paths"]["pages"] / area_path / f"{page_name}.cshtml",
        "cshtml_cs_path": root / cfg["paths"]["pages"] / area_path / f"{page_name}.cshtml.cs",
        "js_path": root / cfg["paths"]["js"] / js_rel,
        # Relative paths for use in templates
        "js_rel_path": "~/js/pages/" + js_rel,
    }


def resolve_service_paths(service_name: str, area: str = None) -> dict:
    """Derive paths for a service. Area defaults to name without 'Service' suffix."""
    cfg = load_config()
    if area is None:
        area = re.sub(r"Service$", "", service_name)
    interface_name = "I" + service_name

    root = app_root()
    svc_dir = root / cfg["paths"]["services"] / area

    return {
        "service_name": service_name,
        "interface_name": interface_name,
        "area": area,
        "namespace": cfg["namespace"] + ".Services." + area,
        "interface_path": svc_dir / f"{interface_name}.cs",
        "implementation_path": svc_dir / f"{service_name}.cs",
        "program_cs_path": root / cfg["paths"]["programCs"],
    }


def resolve_controller_paths(controller_name: str, area: str = None) -> dict:
    """Derive paths for a controller."""
    cfg = load_config()
    root = app_root()

    if area:
        ns = cfg["namespace"] + ".Controllers." + area.replace("/", ".")
        ctrl_path = root / cfg["paths"]["controllers"] / area / f"{controller_name}.cs"
        route_prefix = controller_name.replace("Controller", "")
    else:
        ns = cfg["namespace"] + ".Controllers"
        ctrl_path = root / cfg["paths"]["controllers"] / f"{controller_name}.cs"
        route_prefix = controller_name.replace("Controller", "")

    return {
        "controller_name": controller_name,
        "area": area,
        "namespace": ns,
        "route_prefix": route_prefix,
        "controller_path": ctrl_path,
    }


# ── Template Rendering ───────────────────────────────────────────────────────

_jinja_env = None


def _get_jinja_env() -> Environment:
    global _jinja_env
    if _jinja_env is not None:
        return _jinja_env

    tpl_dir = _ai_project_dir() / "scripts" / "templates"
    if not tpl_dir.exists():
        print(f"Error: templates directory not found at {tpl_dir}")
        sys.exit(1)

    _jinja_env = Environment(
        loader=FileSystemLoader(str(tpl_dir)),
        keep_trailing_newline=True,
        trim_blocks=True,
        lstrip_blocks=True,
    )
    _jinja_env.filters["camel"] = to_camel
    _jinja_env.filters["pascal"] = to_pascal
    return _jinja_env


def render_template(template_name: str, context: dict) -> str:
    """Render a Jinja2 template from ai-project/scripts/templates/."""
    env = _get_jinja_env()
    tpl = env.get_template(template_name)
    return tpl.render(context)


# ── File Operations ──────────────────────────────────────────────────────────

def write_file(path, content: str, *, force: bool = False, dry_run: bool = False) -> bool:
    """Write content to a file. Creates parent directories. Skips if exists unless force=True."""
    path = Path(path)
    if path.exists() and not force:
        print(f"  [SKIP] {path} (already exists, use --force to overwrite)")
        return False

    if dry_run:
        print(f"  [DRY-RUN] Would create: {path}")
        return True

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print(f"  [OK] Created {path}")
    return True


def insert_before_last_match(file_path, pattern: str, content: str, *,
                              dry_run: bool = False) -> bool:
    """Find the LAST occurrence of pattern in file and insert content before that line."""
    file_path = Path(file_path)
    if not file_path.exists():
        print(f"  [ERROR] File not found: {file_path}")
        return False

    lines = file_path.read_text(encoding="utf-8").split("\n")
    insert_idx = -1
    regex = re.compile(pattern)

    for i in range(len(lines) - 1, -1, -1):
        if regex.search(lines[i]):
            insert_idx = i
            break

    if insert_idx == -1:
        print(f"  [ERROR] Pattern '{pattern}' not found in {file_path}")
        return False

    if dry_run:
        print(f"  [DRY-RUN] Would insert before line {insert_idx + 1} in {file_path}")
        return True

    content_lines = content.split("\n")
    for j, line in enumerate(content_lines):
        lines.insert(insert_idx + j, line)

    file_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"  [OK] Inserted before line {insert_idx + 1} in {file_path}")
    return True


def insert_after_last_match(file_path, pattern: str, content: str, *,
                             dry_run: bool = False) -> bool:
    """Find the LAST occurrence of pattern in file and insert content after that line."""
    file_path = Path(file_path)
    if not file_path.exists():
        print(f"  [ERROR] File not found: {file_path}")
        return False

    lines = file_path.read_text(encoding="utf-8").split("\n")
    insert_idx = -1
    regex = re.compile(pattern)

    for i in range(len(lines) - 1, -1, -1):
        if regex.search(lines[i]):
            insert_idx = i
            break

    if insert_idx == -1:
        print(f"  [ERROR] Pattern '{pattern}' not found in {file_path}")
        return False

    if dry_run:
        print(f"  [DRY-RUN] Would insert after line {insert_idx + 1} in {file_path}")
        return True

    content_lines = content.split("\n")
    for j, line in enumerate(content_lines):
        lines.insert(insert_idx + 1 + j, line)

    file_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"  [OK] Inserted after line {insert_idx + 1} in {file_path}")
    return True


def insert_before_class_closing_brace(file_path, content: str, *,
                                       dry_run: bool = False) -> bool:
    """
    Find the closing brace of the main class in a C# file and insert content before it.
    Uses brace depth tracking from the first 'class' declaration.
    """
    file_path = Path(file_path)
    if not file_path.exists():
        print(f"  [ERROR] File not found: {file_path}")
        return False

    text = file_path.read_text(encoding="utf-8")
    class_match = re.search(r"\bclass\s+\w+", text)
    if not class_match:
        print(f"  [ERROR] No class declaration found in {file_path}")
        return False

    open_brace = text.index("{", class_match.end())
    depth = 1
    pos = open_brace + 1
    while pos < len(text) and depth > 0:
        if text[pos] == "{":
            depth += 1
        elif text[pos] == "}":
            depth -= 1
        pos += 1

    closing_brace_pos = pos - 1

    if dry_run:
        line_num = text[:closing_brace_pos].count("\n") + 1
        print(f"  [DRY-RUN] Would insert before class closing brace (line {line_num}) in {file_path}")
        return True

    if not content.startswith("\n"):
        content = "\n" + content
    if not content.endswith("\n"):
        content = content + "\n"

    new_text = text[:closing_brace_pos] + content + text[closing_brace_pos:]
    file_path.write_text(new_text, encoding="utf-8")

    line_num = text[:closing_brace_pos].count("\n") + 1
    print(f"  [OK] Inserted before class closing brace (line {line_num}) in {file_path}")
    return True


def add_nav_item(address: str, label: str, icon: str = None, *,
                 dry_run: bool = False) -> bool:
    """Insert nav items into both desktop topbar and mobile horizontal nav."""
    cfg = load_config()
    root = app_root()
    page_route = "/" + address.strip("/")
    ok = True

    # Desktop nav: insert before the closing </ul> inside #topbar-nav-menu
    desktop_path = root / cfg["nav"]["desktopNav"]
    desktop_item = render_template("nav_desktop_item.jinja2", {
        "page_route": page_route,
        "label": label,
    })
    if not insert_before_last_match(
        desktop_path,
        r"</ul>",
        desktop_item,
        dry_run=dry_run,
    ):
        ok = False

    # Mobile nav: insert before the closing </ul> inside .navbar-nav
    mobile_path = root / cfg["nav"]["mobileNav"]
    mobile_item = render_template("nav_mobile_item.jinja2", {
        "page_route": page_route,
        "label": label,
        "icon": icon or "bx-circle",
    })
    if not insert_before_last_match(
        mobile_path,
        r"</ul>",
        mobile_item,
        dry_run=dry_run,
    ):
        ok = False

    return ok


# ── Common CLI Helpers ───────────────────────────────────────────────────────

def add_common_args(parser):
    """Add --dry-run, --force, --verbose flags to an argparse parser."""
    parser.add_argument("--dry-run", action="store_true",
                        help="Preview without writing files")
    parser.add_argument("--force", action="store_true",
                        help="Overwrite existing files")
    parser.add_argument("--verbose", action="store_true",
                        help="Show template rendering details")
