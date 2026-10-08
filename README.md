# stalactech.com

Personal research blog. Astro (static) + Pagefind search, deployed to GitHub Pages via GitHub Actions. Post pages ship **0 KB of framework JS**.

## Write a post

Create `src/content/blog/YYYY-MM-DD-slug.md`:

```md
---
title: "Post title"
date: 2026-10-08
description: "One-line summary for cards, RSS, and search."
tags: ["vulnerability-research"]
# series: "Graal on Switch"   # optional; enables prev/next in series
draft: false
---

Body in Markdown. Use a `.mdx` file only when a post needs a component.
```

Frontmatter is validated at build time (`src/content.config.ts`) — a missing title/date/tags fails the build and the PR check.

## Add an interest card (shelf)

Shelves are content, not code. Drop a Markdown file in `src/content/shelves/`:

```md
---
title: Vulnerability Research
tag: vulnerability-research
blurb: "Bug reports, disclosures, and vulnerability write-ups."
accent: "#f87171"
order: 1
---
```

The homepage renders one card per shelf, sorted by `order`. Each card links to `/tags/<tag>`, generated from posts' tags — a shelf with no posts yet shows a "first write-up in progress" empty state. Tag a post with that exact `tag` string and it appears automatically.

## JS budget (standing rule)

- Article pages: 0 KB framework JS. The only inline scripts are the <1 KB theme flash-guard and the theme toggle.
- Search costs 0 KB until a reader opens it (Pagefind UI + WASM load lazily from `/pagefind/`).
- **No `client:load` (or any island hydration) on post pages without a written reason in the PR.**

## Develop / build

```bash
npm install
npm run dev      # local preview
npm run build    # astro build + pagefind --site dist
```

Deployment: push to `main` → `.github/workflows/deploy.yml` builds with `withastro/action` and deploys to GitHub Pages. One-time setup: Settings → Pages → Source = "GitHub Actions"; custom domain `stalactech.com` (also in `public/CNAME`).
