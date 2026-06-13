# The SAP Landscape — Explained for Everyone

A beginner-friendly, visual guide to the entire SAP product universe (2026). It answers one question from many angles: **which SAP product is used where, and by whom?**

🔗 **Live site:** https://snayak27.github.io/sap-landscape/
👤 **By:** [Sashibhusan Nayak](https://snayak27.github.io/) — Techno-Functional SAP Consultant, Bangalore

---

## What this is

SAP makes 100+ products and most explanations assume you already know them. This site doesn't. It explains the whole landscape for a total beginner, sliced five ways:

| Path | What it answers |
|---|---|
| **By Deployment** | Where does SAP run? On-premise · Private Cloud (RISE) · Public Cloud (GROW) · Hybrid |
| **By Role** | Who uses it? CFO · CIO · CHRO · CPO · COO · Developer |
| **By Process** | What does it automate? Finance · HR · Procurement · Supply Chain · Customer · IT |
| **By Size** | At what scale? Small · Mid-market · Enterprise |
| **By Product** | 9 beginner-friendly deep-dives + the full landscape map |

Every page: a real-world analogy → the problem it solves → who uses it → where it runs → how it connects → a real example. Every acronym has a hover-tooltip, and there's a full [jargon buster](glossary.html).

## Design

Visually matched to the author's [portfolio](https://snayak27.github.io/) — Inter font, warm cream/orange palette, animated background blobs, spring-physics cards. Shared theme so it feels like one personal brand.

## Tech

Plain static HTML/CSS/JS. No build step. CDN: Google Fonts (Inter) only. Hosted on GitHub Pages.

```
index.html              ← landing ("pick a door")
landscape.html          ← the full product map (the centerpiece)
glossary.html           ← jargon buster (filterable)
deployment/             ← 5 pages
by-role/                ← 7 pages
by-process/             ← 7 pages
by-size/                ← 4 pages
products/               ← 9 product deep-dives
assets/css/             ← theme.css (tokens) + components.css
assets/js/main.js       ← nav, scroll-reveal, tooltips
research-notes.md       ← grounded fact base (internal)
```

## Sources

Grounded in official SAP sources — sap.com, learning.sap.com, SAP Discovery Center, and the SAP News Center (Sapphire 2026 announcements verified live). Reflects the landscape as of June 2026.

## Deploy to GitHub Pages

1. Create a repo named `sap-landscape` (or any name — update the `og:url` / sitemap accordingly).
2. Push these files to the `main` branch.
3. Settings → Pages → Source: `main` / root.
4. Live at `https://<user>.github.io/sap-landscape/`.

---

*An independent educational guide. All product names and trademarks belong to SAP SE.*
