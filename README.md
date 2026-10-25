# sidfromthesideline

A personal archive of my life and what I've been up to: where I've travelled, what I've worked on, and how I've tried to give back.

**Live site:** _coming soon_ <!-- replace with the Vercel / Cloudflare Pages URL once hosting is connected -->

## Sections

| Section | What goes there | Content folder |
| --- | --- | --- |
| Travel | Trips and what I took from them | `src/content/travel/` |
| Professional | Work, projects, things I've built | `src/content/professional/` |
| Outreach | Volunteering and community work | `src/content/outreach/` |

## Stack

- [Astro](https://astro.build): static site generator, zero client-side JS by default
- Content collections: every entry is a Markdown file, validated against a schema in `src/content.config.ts`
- Hosting: deploys automatically on every push to `main`

## Adding an entry

Create a Markdown file in the right section folder:

```md
---
title: Two weeks in Japan
date: 2025-04-12
summary: One sentence that shows up in the list view.
draft: false # optional; set to true to hide it from the site
---

Write the entry here.
```

The file name becomes the URL, so `src/content/travel/japan-2025.md` is served at `/travel/japan-2025/`.

## Running locally

Requires Node 22.23.4 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves the built site
```
