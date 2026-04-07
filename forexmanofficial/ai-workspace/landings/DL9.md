# DL9 — See Who's Joining Right Now

## Purpose

Live feed illusion: scrolling or animating list of “joiners” with online counter and CTA.

## Files

| Role | Path |
|------|------|
| view | `DL9/index.html` |

## User Stories

- User sees social activity feed.
- User joins via Telegram.

## Key Functions

| Name | Line | Input | Output | Purpose |
|------|------|-------|--------|---------|
| `makeItem` | 189 | none | element / string | Builds feed row content. |
| `animateFeed` | 218 | none | none | Feed scroll / inject animation. |
| `tickOnline` | 237 | none | none | Updates online count. |

## Dependencies

| Type | Name | Path |
|------|------|------|
| external | Google Fonts | URL in `<head>` |

## UI Design

Layout: Feed panel + hero metrics; emphasis on real-time social proof.
Elements: List container for feed items; online badge.
Patterns: Timed feed updates; recycling DOM nodes optional.
Notes: Synthetic names — swap for real data only with legal/compliance review.
