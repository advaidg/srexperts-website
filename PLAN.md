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

### Phase 2 — Ship to Git + GitHub Pages

1. `git init` in `/Users/advaidgireesan/Documents/safal`
2. Create GitHub repo `srexperts-website` and push `main`
3. Repo Settings → Pages → Source: **GitHub Actions**
4. `.github/workflows/deploy.yml` builds the static export and publishes to Pages on every push to `main`
5. `.github/workflows/ci.yml` typechecks + builds on every PR

### Phase 3 — Domain wiring (GoDaddy → GitHub Pages)

`public/CNAME` already declares `srexperts.in`. Detailed steps in `DEPLOY.md`.

1. At GoDaddy DNS, set:
   - Four `A` records on `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` on `www` pointing to `<github-username>.github.io`
2. Remove the GoDaddy default parking `A` and `AAAA` records
3. In repo Settings → Pages, confirm the DNS check turns green and tick **Enforce HTTPS**

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

- **Stack**: Next.js 16 with `output: 'export'` on GitHub Pages — free hosting on infra you already own, deploys via GitHub Actions
- **No Tailwind**: editorial layouts read more naturally with hand-tuned CSS + design tokens. Utility-first classes encourage uniform corporate grids, which the brand explicitly rejects.
- **Fonts**: Syne + DM Sans (from brand kit). The PDF mentions Canela/Tiempos as alternatives — brand kit is the source of truth.
- **Mailto for v1**: GitHub Pages is static-only. Real form requires migrating to Vercel/Cloudflare Pages or adding a third-party form endpoint (Formspree, Web3Forms). Defer until volume warrants.
- **OG image as static PNG**, not dynamic `ImageResponse`: Edge runtime not available on Pages. Regenerate manually with `rsvg-convert` if the design changes.
