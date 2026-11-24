# 07 · Technical architecture

| Layer | Choice |
|:--|:--|
| Framework | Next.js 16.4.6 (App Router, `src/`, Turbopack), React 19.3, TypeScript strict |
| Styling | Tailwind 4 (`@theme` tokens) plus route-level CSS files for composition |
| Motion | Hand-written rAF (hero), IntersectionObserver + CSS (stripes). **No animation library.** |
| Fonts | `next/font/google`: Archivo (wght + wdth) and Newsreader (opsz, italic). Self-hosted at build time. |
| Images | Originals in `assets-src/` (git-ignored). `scripts/optimize-images.mjs` (sharp) builds WebP sizes into `public/images/site/` and `src/data/image-manifest.json`. `next/image` uses a custom loader, so nothing is optimised on request. |
| Data | `src/data/*.ts`: products, music, archive, copy. Brand-verified strings carry a `src:` comment; our own lines are marked `// pending`. |
| Forms | Client-only, demo mode: validate, then show a success state that says "demo · nothing was sent". **Never** posts to STRIPED's Netlify endpoint. |
| Video | YouTube `youtube-nocookie.com`, loaded only on click. The thumbnail is a local still or a plain stripe card (no third-party request before the click). |
| SEO | `metadataBase`, per-page titles and descriptions, `sitemap.ts`, `robots.ts` (`noindex` while it's a demo). |

## File layout

```
src/app/(site)/layout.tsx      header, footer, fonts
src/app/page.tsx + home.css    homepage
src/app/shop/...               rack + [slug]
src/app/world/... about/... join/...
src/components/stripe/...      Stripe, Blind (hero), useOpenOnView
src/components/ui/...          Img, Button, Price, CareLabel, DemoNote
src/data/products.ts, music.ts, archive.ts, site.ts, patches.ts
src/lib/image-loader.ts, scroll-geometry.ts
```

## Performance budgets

- LCP under 2.5 s; the hero image is server-rendered with `fetchPriority="high"`.
- JS under about 150 KB compressed (no motion library).
- Fonts under about 120 KB.
- Hero images under about 400 KB.
- Phone layer memory is measured at 390×844@3 for the hero scene.
