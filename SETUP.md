# Snipstack — Infrastructure Setup Reference

Setup completed 2026-04-29.

## Identifiers

| Resource | Value |
|---|---|
| Domain | snipstack.io |
| GitHub Repo | https://github.com/ashleytechhk/affiliate-snipstack |
| Cloudflare Account ID | 81397f8907c5e0e2e921d58c23f2093f |
| Cloudflare Zone ID | 9c4f14de827e651f28acb867defc6a79 |
| Pages project name | snipstack |
| Pages preview URL | https://b948498e.snipstack.pages.dev |
| Worker name | snipstack-go |
| Worker route | snipstack.io/go/* |
| R2 bucket | snipstack-assets |
| Affiliate ID | 45462 (Surfshark Cellxpert) |

## What is deployed

- **Cloudflare Pages**: "Coming soon" homepage (static Astro 5 build)
  - Deployed via Direct Upload; dist/ served from edge
  - Custom domain snipstack.io + www.snipstack.io attached (CNAME → snipstack.pages.dev)
  - SSL: Full Strict + Always Use HTTPS

- **Cloudflare Worker** (`worker/`): `/go/{product}` affiliate link cloaker
  - Routes: vpn→926, adblock→1498, altnumber→1691, altid→1421, antivirus→934, scamcheck→1843, one→1249
  - sub_id format: `{article-slug}__{product}__{cta-position}`
  - Example: `https://snipstack.io/go/vpn?sub=cheap-spotify-guide__vpn__above-fold`

- **R2 bucket**: `snipstack-assets` (for article images)

- **DNS**: apex + www CNAME → snipstack.pages.dev (Cloudflare proxied)

## Required credentials (load from $HOME/clawd/shared/credentials/api-keys.env)

- `CLOUDFLARE_API_TOKEN` — zone edit + Pages + Workers + R2
- `CLOUDFLARE_ACCOUNT_ID` — 81397f8907c5e0e2e921d58c23f2093f

## Manual step required (GitHub → Cloudflare Pages auto-deploy)

The Pages project was created via Direct Upload API. GitHub → auto-build-on-push needs one OAuth approval:

1. Go to https://dash.cloudflare.com → Pages → snipstack → Settings → Builds & deployments
2. Click "Connect to Git" → authorize GitHub → select ashleytechhk/affiliate-snipstack
3. Once connected, every push to `main` triggers automatic Astro build + deploy

Until this is done, deploy manually via:
```bash
source $HOME/clawd/shared/credentials/api-keys.env
cd /path/to/snipstack
npm run build
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID=$CLOUDFLARE_ACCOUNT_ID npx wrangler pages deploy ./dist --project-name=snipstack --branch=main
```

## Deploy Worker (if updated)

```bash
source $HOME/clawd/shared/credentials/api-keys.env
cd /path/to/snipstack/worker
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID=$CLOUDFLARE_ACCOUNT_ID npx wrangler deploy
```

## Verification commands

```bash
# Homepage
curl -I https://snipstack.io

# Worker redirects
curl -sI "https://snipstack.io/go/vpn?sub=test__vpn__above-fold"
curl -sI "https://snipstack.io/go/adblock?sub=test__adblock__above-fold"
curl -sI "https://snipstack.io/go/altnumber?sub=test__altnumber__above-fold"

# DNS
dig CNAME snipstack.io
dig CNAME www.snipstack.io

# robots.txt
curl https://snipstack.io/robots.txt

# sitemap
curl https://snipstack.io/sitemap-index.xml
```

## Next steps (Phase 1)

- Simon: click "Connect to Git" in Cloudflare Pages dashboard (GitHub OAuth)
- Simon: provide GA4 Measurement ID for analytics injection into Layout.astro
- Simon: GSC verification + sitemap submit at https://search.google.com/search-console
- Karoline: set up Cloudflare Web Analytics beacon (once Simon confirms CF analytics token)
- Karoline: Phase 1 article production (Pillar 1 — "Best VPN with Built-in Ad Blocker for Streaming 2026")

## Offer map (Surfshark Cellxpert)

| slug | offer_id | product |
|------|----------|---------|
| vpn | 926 | Surfshark VPN |
| adblock | 1498 | Surfshark CleanWeb |
| altnumber | 1691 | Alternative Number |
| altid | 1421 | Alternative ID |
| antivirus | 934 | Surfshark Antivirus |
| scamcheck | 1843 | Email Scam Checker |
| one | 1249 | Surfshark One |
