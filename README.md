# SR Experts — Website

Marketing site for SR Experts. Next.js 15 (App Router), TypeScript, deployed to Vercel.

## Quickstart

```bash
nvm use 20  # or any node >= 20
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | TypeScript strict check |

## Project layout

```
src/
├── app/
│   ├── layout.tsx          # root layout, fonts, header, footer
│   ├── page.tsx            # /
│   ├── about/              # /about
│   ├── services/           # /services
│   ├── industries/         # /industries
│   ├── case-studies/       # /case-studies
│   ├── insights/           # /insights
│   ├── contact/            # /contact
│   ├── globals.css         # design tokens + base styles
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    └── Logo.tsx
reference/                  # brand kit + content PDF (do not delete)
```

## Docs

- `CLAUDE.md` — project context, conventions, tokens, voice
- `PLAN.md` — phased delivery plan + decisions
- `DEPLOY.md` — Git → Vercel → domain wiring

## Brand

Tokens are defined once in `src/app/globals.css`. Source of truth: `reference/SRExperts-Brand-Kit.html`.

| | |
|---|---|
| Primary | Navy `#1C3478` |
| Accent | Gold `#C4A24A` |
| Background | Bone `#f5f4f1` |
| Display | Syne |
| Body | DM Sans |

Use gold sparingly — it is not a button colour, it is an accent.
