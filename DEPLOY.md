# Deploy — SR Experts Website

Target: **`srexperts.in`** (GoDaddy registrar) hosted on Vercel.

---

## Step 0 — Prerequisites

You need:

- A GitHub account with `gh` CLI authenticated (`gh auth status`)
- A Vercel account ([vercel.com/signup](https://vercel.com/signup))
- Access to the GoDaddy account that owns `srexperts.in`
- Node.js 20+ locally

---

## Step 1 — Push to GitHub

From the project root:

```bash
git init
git add .
git commit -m "feat: initial SR Experts website"

# create a private repo + push (requires gh CLI)
gh repo create srexperts-website --private --source=. --remote=origin --push
```

If you don't have `gh` CLI installed, do it manually:

1. Go to [github.com/new](https://github.com/new), create a private repo named `srexperts-website` (don't initialize with anything).
2. Then:

```bash
git remote add origin https://github.com/<your-username>/srexperts-website.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. **Import Git Repository** → pick `srexperts-website`.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: leave as `./`.
5. Build command: `next build` (auto).
6. Output directory: leave default.
7. Click **Deploy**.

After ~1–2 min you'll get a preview URL like `srexperts-website-xxx.vercel.app`. Open it. Confirm:

- Hero loads with animated headline
- All 7 nav links work
- `mailto:` link opens your mail client

---

## Step 3 — Add the production domain in Vercel

1. Vercel project → **Settings** → **Domains**.
2. Enter `srexperts.in` → **Add**.
3. Vercel asks how you want to set up DNS. Choose **"Add records to my existing DNS provider"**. It will show you the records to add.
4. Also add `www.srexperts.in` and set it to redirect to the apex.

Vercel will display something like:

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | `76.76.21.21`            |
| CNAME | www  | `cname.vercel-dns.com`   |

**Note the exact values Vercel shows you** — they occasionally rotate IPs. The values above are the current ones at the time of writing.

---

## Step 4 — Add the records in GoDaddy

1. Sign in at [account.godaddy.com](https://account.godaddy.com).
2. **My Products** → next to `srexperts.in` click **DNS** (or **Manage DNS**).
3. You'll see a list of records. Edit the existing `A` record on `@` (the apex) and add a `CNAME` for `www`.

### Records to add / edit

**A record (apex domain → Vercel)**

- Type: **A**
- Name: **@**
- Value: **76.76.21.21**
- TTL: **600 seconds** (or 1 Hour)

If GoDaddy already has an `A` record on `@` pointing to a parking page, **edit** it; don't add a duplicate.

**CNAME record (www → Vercel)**

- Type: **CNAME**
- Name: **www**
- Value: **cname.vercel-dns.com**
- TTL: **1 Hour**

GoDaddy ships with a default `CNAME www → @` — replace its **Data/Value** field with `cname.vercel-dns.com`.

### Records to remove

- **Any old `A` records** on `@` other than the new `76.76.21.21`
- The default GoDaddy **parked page** records (`Parked` CNAMEs, `_domainconnect` is fine to leave)
- Any leftover `AAAA` (IPv6) records on `@` from the parking page — Vercel handles IPv6 automatically; conflicting AAAAs will break verification

### Records to leave alone

- `MX` records (email)
- `TXT` records you didn't add (Google Workspace, etc.)
- The `_domainconnect` `CNAME` — GoDaddy uses this for its own automation, harmless

Click **Save**.

---

## Step 5 — Wait for verification + SSL

1. Back in Vercel → Domains, you'll see `srexperts.in` go from **Invalid Configuration** to **Valid Configuration** within 5–60 minutes (usually ~10 min).
2. Vercel auto-issues a Let's Encrypt SSL certificate. Once issued, the domain shows a green checkmark.
3. Visit `https://srexperts.in` — site should load.

If after an hour it's still pending:

- Run `dig srexperts.in +short` — should return `76.76.21.21`
- Run `dig www.srexperts.in +short` — should return `cname.vercel-dns.com.` then a Vercel IP
- If wrong values: GoDaddy DNS hasn't propagated yet. Wait, then check again. TTL of 600s means up to 10 min.

---

## Step 6 — Set the production env vars

In Vercel → Settings → **Environment Variables**, add (Production scope):

| Key                          | Value                       |
|------------------------------|-----------------------------|
| `NEXT_PUBLIC_SITE_URL`       | `https://srexperts.in`      |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | `hello@srexperts.in`        |

Then **Deployments → ... → Redeploy** the most recent build so it picks them up. This makes canonical URLs, sitemap, and JSON-LD point at the live domain.

---

## Step 7 — Post-deploy checks

- [ ] `https://srexperts.in` redirects from `http://` to `https://` (Vercel automatic)
- [ ] `https://www.srexperts.in` redirects to apex (Vercel automatic if you set the redirect in Step 3)
- [ ] `https://srexperts.in/sitemap.xml` lists all 7 pages
- [ ] `https://srexperts.in/robots.txt` is reachable
- [ ] OG image preview works — paste the URL into [opengraph.xyz](https://opengraph.xyz)
- [ ] Lighthouse mobile + desktop, expect 95+ on Performance / 100 on SEO
- [ ] `mailto:` link works on the Contact page
- [ ] Submit the sitemap in [Google Search Console](https://search.google.com/search-console)

---

## Quick reference — what you literally type into GoDaddy

Open `srexperts.in` → DNS Management → set/edit:

```
A      @     76.76.21.21        600
CNAME  www   cname.vercel-dns.com   1 Hour
```

That's it. Everything else stays as-is (or gets removed if it's the default parking page).
