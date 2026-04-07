# DL8 — Trade Smarter. Not Harder.

## Purpose

Compact landing with fluctuating “online” or speed/readout motif and supporting copy + CTA.

## Files

| Role | Path |
|------|------|
| view | `DL8/index.html` |

## User Stories

- User sees live-feel metrics (online count / speed).
- User clicks through to Telegram.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `flucOnline` | 146 | none | none | Varies online / metric display. |
| `tickSp` | 155 | none | none | Secondary ticker (speed or secondary stat). |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Dark minimal; metric callouts; hero; CTA.
Elements: Numbers updated by timers; optional sparkline-style accents in markup.
Patterns: Lightweight periodic updates; avoid layout thrash.
Notes: Align copy with non-guaranteed “live” data disclaimers if used in production.
