# SR Experts Website — Plan

## Goal

Ship a credible, editorial v1 marketing site for SR Experts at the firm's owned domain. Multi-page, premium corporate tone, content directly from the supplied PDF, brand strictly from the supplied brand kit.

## Phases

### Phase 1 — Local build (this commit)

- [x] Decisions locked: Next.js 15 + App Router on Vercel, mailto for v1, domain already owned
- [x] Project scaffolding: `package.json`, `tsconfig.json`, `next.config.mjs`, `.gitignore`, `.env.example`
- [x] Design system: brand tokens in CSS, Syne + DM Sans via `next/font`, `Header`, `Footer`, `Logo`, global typography
- [x] Pages built with content from PDF
  - [x] Home (`/`)
  - [x] About (`/about`)
  - [x] Services (`/services`)
  - [x] Industries (`/industries`)
  - [x] Case Studies (`/case-studies`)
  - [x] Insights (`/insights`)
  - [x] Contact (`/contact`)
- [x] SEO basics: per-page `metadata`, `robots.ts`, `sitemap.ts`
- [x] Security headers via `next.config.mjs`
- [x] Local build verified (`npm install` + `next build`)

### Phase 2 — Ship to Git + Vercel

1. `git init` in `/Users/advaidgireesan/Documents/safal`
2. Create empty GitHub repo `srexperts-website` (private)
3. `git remote add origin <repo url>` and push `main`
4. Import repo into Vercel (build command `next build`, output auto-detected)
5. First deploy lands on a `*.vercel.app` preview URL — confirm everything renders

### Phase 3 — Domain wiring

User-supplied domain (already owned). Detailed steps in `DEPLOY.md`.

1. In Vercel project → Settings → Domains → add the apex domain and `www`
2. At the registrar, set DNS:
   - Apex `@` → A record `76.76.21.21`
   - `www` → CNAME `cname.vercel-dns.com`
3. Wait for verification + automatic Let's Encrypt SSL (usually < 10 min)
4. Set `NEXT_PUBLIC_SITE_URL` env var to `https://<domain>` and redeploy

### Phase 4 — Content + lead capture (post-launch, separate work)

- Real case studies (5 placeholder slots already structured)
- First Insights articles (MDX setup ready in `CLAUDE.md`)
- Real contact form: Resend API route + zod validation
- Founder photos, logo wall, real metrics on About → "Our Numbers"
- LinkedIn + Calendly links in footer
- Structured data: `Organization` + `LocalBusiness` JSON-LD

## Non-goals for v1

- No CMS. Copy edits go through code.
- No blog backend. Insights page ships with category headers + an empty grid.
- No analytics in code yet — add Vercel Analytics or Plausible from the dashboard.
- No e-commerce, login, gated content.

## Risks + mitigations

| Risk | Mitigation |
|---|---|
| Copy drifts from brand voice over time | `CLAUDE.md` codifies voice principles; PRs reviewed against them |
| Brand colours used loosely | Tokens in `globals.css` are the only sanctioned values |
| Domain DNS takes longer than expected | Vercel auto-issues SSL once records propagate; usually <1 hour |
| Contact volume outgrows mailto | Phase 4 adds Resend without changing the page structure |

## Decision log

- **Stack**: Next.js + MDX on Vercel — best fit for editorial premium feel, SEO, and one-click deploy
- **No Tailwind**: editorial layouts read more naturally with hand-tuned CSS + design tokens. Utility-first classes encourage uniform corporate grids, which the brand explicitly rejects.
- **Fonts**: Syne + DM Sans (from brand kit). The PDF mentions Canela/Tiempos as alternatives — brand kit is the source of truth.
- **Mailto for v1**: ship faster, swap to a real form when there's volume.
