# ARUMANIS — Halaman Maintenance

Portal Infrastruktur Air Minum dan Sanitasi Kabupaten Cianjur. Halaman statis Next.js, di-deploy ke [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

## Lokal

```bash
pnpm install
pnpm dev
```

## Deploy ke Cloudflare Workers

`pnpm deploy` **jangan** dipakai — itu perintah built-in pnpm, bukan script.

```bash
npx wrangler login
pnpm run cf-deploy
```

Preview lokal: `pnpm preview`

Build menghasilkan `out/`. Wrangler menyajikannya sebagai Workers static assets (`wrangler.jsonc`).

Di dashboard Cloudflare, **Deploy command** harus `pnpm run cf-deploy` (atau biarkan default `wrangler deploy` — `wrangler.jsonc` sudah menjalankan `pnpm run build`).
