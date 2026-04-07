# commit

# Commit Command

When the user asks to commit, follow this procedure exactly.

## 1\. Gather Changes

Run in parallel for each scope:

- **Main repo**: `git diff --stat && git diff --cached --stat` (workspace root)

- **OviLibs submodule**: `git -C NexlotCabinetWeb/NexlotCabinetWeb/OviLibs diff --stat && git -C NexlotCabinetWeb/NexlotCabinetWeb/OviLibs diff --cached --stat`

- **NexlotDatabase submodule**: `git -C NexlotCabinetWeb/NexlotDatabase diff --stat && git -C NexlotCabinetWeb/NexlotDatabase diff --cached --stat`

Also review the conversation history to understand the intent behind changes.

## 2\. Commit Message Format

```
[Scope] verb: detail
[Scope] verb: detail
```

Rules:

- One line per logical change, grouped by scope

- Scopes: `[Cabinet]`, `[OviLibs]`, `[Database]`, `[Docs]`, `[SCSS]`, `[JS]`

- Start each line with a lowercase verb: `add`, `fix`, `update`, `remove`, `rename`, `refactor`

- No articles (a, the), no filler words, no periods

- Max 60 chars per line

- If a submodule has no changes, omit it entirely

- Derive intent from conversation history + diff, not just filenames

## 3\. Commit Sequence

1. Stage & commit each **submodule** that has changes first (cd into it)

2. Stage submodule pointer changes + remaining files in **main repo**, commit last

3. Never force-push or amend unless explicitly asked

## Example

```
[Cabinet] add: onboarding banner v3 partial
[SCSS] add: _onboarding.scss, import in nexlot-style
[JS] update: dashboard.js earnings chart init
[OviLibs] fix: oviTable sort column index offset
```


