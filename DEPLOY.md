# Deploy — SR Experts Website

Target: **`srexperts.in`** (GoDaddy registrar) hosted on **GitHub Pages**, deployed by GitHub Actions on every push to `main`.

Repo: `https://github.com/advaidg/srexperts-website`

---

## Architecture

```
push to main  →  GitHub Actions (.github/workflows/deploy.yml)
              →  npm ci  →  next build  (output: 'export')
              →  out/ artifact uploaded to Pages
              →  served at srexperts.in
```

The site is a fully static export. No server, no functions, no database. `mailto:` is the contact mechanism for v1.

---

## Step 1 — Enable GitHub Pages on the repo (one time)

1. Open `https://github.com/advaidg/srexperts-website/settings/pages`
2. **Source** → select **"GitHub Actions"** (NOT "Deploy from a branch")
3. Save.

That's all. No branch picking, no folder picking. The Action defines the source.

---

## Step 2 — Trigger the first deploy

The first push to `main` automatically runs the workflow.
Watch it at `https://github.com/advaidg/srexperts-website/actions`.

If you want to retrigger manually: Actions → "Deploy to GitHub Pages" → **Run workflow**.

When green, the site is live at the auto-issued GitHub Pages URL (something like `https://advaidg.github.io/srexperts-website/`). The next two steps move it to your real domain.

---

## Step 3 — Tell GitHub Pages about the custom domain

The repo already has `public/CNAME` containing `srexperts.in`. GitHub Pages reads this on every deploy and treats it as the canonical custom domain.

In `Settings → Pages`:
- **Custom domain** field should auto-populate with `srexperts.in` after the first deploy. If not, type it in and click Save.
- Wait for the **DNS check** to verify (it will fail until Step 4 is done).
- Once green, tick **Enforce HTTPS** (auto Let's Encrypt cert).

---

## Step 4 — DNS records to add at GoDaddy

Sign in at [account.godaddy.com](https://account.godaddy.com) → **My Products** → next to `srexperts.in` click **DNS** (or **Manage DNS**).

GitHub Pages uses **four** apex `A` records (one per anycast IP), plus a `CNAME` for `www`.

### Records to add / edit

**Apex domain — four A records on `@`:**

| Type | Name | Value             | TTL     |
|------|------|-------------------|---------|
| A    | `@`  | `185.199.108.153` | 600 sec |
| A    | `@`  | `185.199.109.153` | 600 sec |
| A    | `@`  | `185.199.110.153` | 600 sec |
| A    | `@`  | `185.199.111.153` | 600 sec |

GoDaddy stacks multiple A records for the same name — that's expected.

**`www` subdomain — one CNAME:**

| Type  | Name  | Value                       | TTL    |
|-------|-------|-----------------------------|--------|
| CNAME | `www` | `advaidg.github.io`         | 1 Hour |

(Replace `advaidg` with your actual GitHub username if it ever changes. The value is **`<username>.github.io`** with no trailing dot, no protocol, no path.)

### Records to remove

- The default GoDaddy `A @ Parked` record
- Any `AAAA` (IPv6) record on `@` from the parking page — leftover AAAAs that don't match GitHub's IPv6 range cause the domain check to fail
- The default `CNAME www → @` — replace its **Value** with `advaidg.github.io`
- Any other `A` records on `@` you didn't add

### Records to leave alone

- `MX` records (email)
- Any `TXT` records you didn't add (e.g. Google Workspace verification)
- The `_domainconnect` CNAME — GoDaddy automation, harmless

Click **Save**. TTL is 600s, so propagation lands in ~10 min.

---

## Step 5 — Verify

1. `dig srexperts.in +short` should return all four `185.199.10x.153` IPs.
2. `dig www.srexperts.in +short` should chain to `advaidg.github.io.` then GitHub IPs.
3. Back in `Settings → Pages`, the **DNS check** turns green.
4. Tick **Enforce HTTPS**. SSL cert issues in a few minutes.
5. Visit `https://srexperts.in` — site should load.

If after an hour Pages still says "DNS check failed":
- Open `https://dnschecker.org/?query=srexperts.in&type=A` — confirm all four IPs appear globally.
- If only some checkers see it, GoDaddy hasn't propagated yet — wait.
- If none, your GoDaddy save didn't go through — re-check the records.

---

## Quick reference — what to literally type into GoDaddy

```
A      @     185.199.108.153    600
A      @     185.199.109.153    600
A      @     185.199.110.153    600
A      @     185.199.111.153    600
CNAME  www   advaidg.github.io  1 Hour
```

Delete anything else on `@` and on `www` that GoDaddy added by default.

---

## Day-to-day workflow

- **Local dev**: `npm run dev` → http://localhost:3000
- **Open a PR**: `.github/workflows/ci.yml` runs typecheck + build on each PR
- **Merge to `main`**: `.github/workflows/deploy.yml` builds and deploys to Pages automatically
- **Need a manual deploy**: Actions tab → "Deploy to GitHub Pages" → Run workflow

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| Action fails on `actions/deploy-pages` | Pages source isn't "GitHub Actions" — fix in Settings → Pages |
| Site loads but CSS/JS 404 | `CNAME` got deleted from `public/` — restore and redeploy |
| DNS check stuck on "failed" after 1 hr | Old `AAAA` records still on `@` from GoDaddy parking — delete them |
| `Enforce HTTPS` is greyed out | DNS check must pass first; wait for green |
| Custom domain auto-removed after deploy | `public/CNAME` was missing in `out/`. Confirm the file exists in the repo |
