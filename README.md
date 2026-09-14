# ARUMANIS — Halaman Maintenance

Portal Infrastruktur Air Minum dan Sanitasi Kabupaten Cianjur. Halaman statis Next.js, di-deploy ke [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

## Lokal

```bash
pnpm install
pnpm dev
```

## Deploy ke Cloudflare Workers

1. Login: `npx wrangler login`
2. Preview: `pnpm preview`
3. Publish: `pnpm deploy`

Build menghasilkan folder `out/`. Wrangler menyajikannya sebagai Workers static assets (`wrangler.jsonc`).
