# snayak27.github.io

> **Living project state lives in [`CONTEXT.md`](CONTEXT.md) — read it first, every session, and update it before you stop.**
> `CONTEXT.md` is the shared brain across Claude Code and Antigravity. This file is Claude-specific reference only.

## What this is
Personal portfolio + technical deep-dive site for **Sashibhusan Nayak** — Techno-Functional SAP Consultant (S/4HANA Finance / FICO, MBA Finance) extending into SAP BTP, Build, Business AI (Joule), and a self-built AI engineering ecosystem (multi-agent platform, RAG, LLM router, agent governance).

## Stack
- **Type:** Static site — vanilla HTML + CSS + JS. **No build step, no framework, no package manager.**
- **Hosting:** GitHub Pages, served from repo root (`index.html`).
- **Repo:** `https://github.com/snayak27/snayak27.github.io`

## Key Commands
| Command | Use |
|---|---|
| `python -m http.server 3333` | Local dev server (also defined in `.claude/launch.json`) |
| open `http://localhost:3333` | Preview |

## Architecture
- `index.html` — main portfolio landing page (large, ~87KB; self-contained styles/scripts).
- `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `og-image.png` — site-level assets/SEO.
- **Topic deep-dive subdirectories** (each has its own `index.html`): `behavioral-rules/`, `brave-bridge/`, `claw-router/`, `cloak-browser/`, `community/`, `computer-science/`, `ecosystem/`, `hermes-agent/`, `hive/`, `organic-url-index/`, `pi-hole-stack/`, `sap-landscape/`, `second-brain/`, `uac/`.
- `*.bak` files = manual backups of `index.html` at milestones. Do not edit; safe to ignore.

## Conventions
- Hand-authored HTML; keep new pages consistent with the existing page's structure, inline styling approach, and meta/OG/structured-data blocks.
- When adding a page, also update `sitemap.xml` and any nav links on `index.html`.
- **Commits:** clean, logical, well-documented (Conventional Commits style: `feat:`, `fix:`, `docs:`, `chore:`). One concern per commit.
- **Do NOT push.** No `git push`/`pull`/remote ops — the user pushes via GitHub Desktop. Commit locally only.

## Key Files
| Path | Purpose |
|---|---|
| `index.html` | Main landing page |
| `CONTEXT.md` | Shared living state (read/update every session) |
| `AGENTS.md` | Antigravity's entry point (also points to CONTEXT.md) |
| `sitemap.xml` | Keep in sync when pages are added/removed |
| `*/index.html` | Per-topic deep-dive pages |

## Verification
After editing pages, start the dev server and use the preview tools to check rendering/console before declaring done.
