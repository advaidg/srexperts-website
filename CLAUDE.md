# SR Experts — Website

Marketing site for **SR Experts**, an integrated advisory firm (Strategy, Finance, Legal, Technology, Marketing). Premium corporate tone, editorial layout, mid-market positioning.

Tagline: **The Only Expert You Need.**

## Stack

- **Framework**: Next.js 15 (App Router) + React 19, TypeScript strict
- **Styling**: Plain CSS with design tokens (no Tailwind). Editorial layouts, not utility-first grids.
- **Fonts**: Syne (display) + DM Sans (body) via `next/font/google`
- **Hosting**: GitHub Pages (static export, deployed by GitHub Actions on push to `main`)
- **Forms**: `mailto:` only for v1 (no backend)
- **Build mode**: `output: 'export'` — fully static. No server runtime, no Edge functions, no API routes.

## Brand tokens

Defined in `src/app/globals.css` under `:root`. Source of truth: `reference/SRExperts-Brand-Kit.html`.

| Token | Value | Use |
|---|---|---|
| `--color-navy` | `#1C3478` | Primary brand |
| `--color-navy-light` | `#24449c` | Hover / secondary navy |
| `--color-ink` | `#0d1a35` | Deepest text, dark sections |
| `--color-gold` | `#C4A24A` | Single accent — eyebrows, dot, hover underline |
| `--color-gold-light` | `#e8c96a` | Tints |
| `--color-bone` | `#f5f4f1` | Default page background |
| `--color-mist` | `#8a9ab8` | Muted text, captions |
| `--color-line` | `rgba(28,52,120,0.1)` | Hairlines |

Accent rule: **gold is rare.** Use it once per section at most. Navy on bone is the default.

## Voice principles (apply everywhere)

- Declarative sentences. Avoid hedging language.
- Active voice. No passive constructions.
- Concrete nouns. No abstract jargon.
- One idea per paragraph. White space is part of the design.

## Page map

| Route | File | Purpose |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero, problem, services overview, why us, trusted by, CTA |
| `/about` | `src/app/about/page.tsx` | Origin, philosophy, approach, leadership, numbers |
| `/services` | `src/app/services/page.tsx` | 5 practices, what we deliver, who it's for |
| `/industries` | `src/app/industries/page.tsx` | 7 sectors with positioning |
| `/case-studies` | `src/app/case-studies/page.tsx` | Featured engagements (placeholder cards for v1) |
| `/insights` | `src/app/insights/page.tsx` | Categories + article grid placeholder |
| `/contact` | `src/app/contact/page.tsx` | mailto link + office info |

## Conventions

- Page components are server components by default. Add `"use client"` only when interaction demands it (none of the v1 pages do).
- Each page has its own `metadata` export for SEO.
- Sections are wrapped in `<section>` with `aria-labelledby` and a heading carrying that id.
- Spacing scale via `--space-*` tokens. Never hardcode pixels in page files.
- Components live in `src/components/`. One component per file.
- Reusable copy data (services, industries) lives inline in the page file unless reused — keep it simple.

## Static export constraints

Because we deploy to GitHub Pages:

- No `next/image` optimization (`images.unoptimized = true`). Use raw `<img>` or pre-optimized sources.
- No `route.ts` handlers — no API routes, no `ImageResponse`. OG image and apple-icon are static PNGs in `public/`.
- No `dynamic = "force-dynamic"` or `revalidate` — every page is built at compile time.
- `metadata` is fine. `sitemap.ts` and `robots.ts` work but must export `dynamic = "force-static"`.
- Trailing slashes are on (`trailingSlash: true`) so `/about` becomes `/about/index.html` which Pages serves cleanly.

If you need a server feature (real form, dynamic OG, ISR), the migration target is Vercel — flip `output` off, drop `images.unoptimized`, restore the `headers()` block in `next.config.mjs`. The rest of the code is portable.

## What is intentionally NOT here in v1

- CMS / MDX rendering for Insights — file structure is ready, but the index page renders placeholder cards. Wire up when the first article is written.
- Real case study pages — featured cards link to `#` for now.
- Contact form backend — `mailto:` only. Swap to Resend route handler later.
- Logo wall images, founder photos, real metrics — placeholder slots in code.
- Cookie banner — site stores nothing.

## Adding the first Insight (when ready)

1. Install `@next/mdx` and friends.
2. Create `src/content/insights/<slug>.mdx`.
3. Read filesystem in `/insights/page.tsx` and `/insights/[slug]/page.tsx`.
4. Update `metadata` per article.

## Adding a real contact form (when ready)

1. `npm i resend zod`.
2. Add `RESEND_API_KEY` to Vercel env vars.
3. Create `src/app/api/contact/route.ts` with Zod validation + Resend send.
4. Replace the `mailto:` block on `/contact` with a `<form action="/api/contact" method="POST">`.

## Reference assets

- `reference/SRExperts-Brand-Kit.html` — open in a browser to inspect colours, logo lockups, typography
- `reference/SR-Experts-Website-Content.pdf` — source content document, do not deviate from copy without approval

## Deploy

See `DEPLOY.md` for the full Git → Vercel → custom domain walkthrough.
