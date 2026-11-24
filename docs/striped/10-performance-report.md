# 10 · Performance report: homepage

Production build (`next build && next start`, local), Lighthouse 12, headless Chrome. Mobile is Lighthouse's simulated slow 4G on a Moto G Power profile. **This is a lab result, not field data, and not a real phone.**

| Run | Perf | A11y | Best practices | SEO | LCP | CLS | TBT | Weight |
|:--|--:|--:|--:|--:|--:|--:|--:|--:|
| Desktop · first build | 96 | 96 | 96 | 63 | 1.4 s | 0 | 20 ms | 1,255 KB |
| Mobile · first build | 68 | 96 | 96 | 63 | 5.6 s | 0 | 460 ms | 1,054 KB |
| **Desktop · after fixes** | **97** | **100** | 96 | 63\* | **1.19 s** | 0 | 29 ms | 1,017 KB |
| **Mobile · after fixes** | **82** | **100** | 96 | 63\* | 4.7 s | 0 | **90 ms** | 785 KB |

\* SEO 63 is deliberate: the demo is `noindex` (`is-crawlable` fails by design). It will be 100 when STRIPED approves going live.

## What changed

- **Fonts went from 361 KB preloaded to 156 KB, with only 36 KB preloaded.**
  - Archivo was instanced to the range the design uses (wdth 62–100, wght 600–900) and subset to Latin plus the brand's signs (↗ → ↺ ▶ ™), with fontTools from the official google/fonts source. That's 36 KB instead of 144 KB. OFL licence kept at `src/app/fonts/Archivo-OFL.txt`.
  - Newsreader lost its `opsz` axis and is no longer preloaded, because it is never the LCP element.
- **A 640 px image size was added,** because phone cards were downloading 800 px files.
- **Valid definition-list markup** in the care label.

## Remaining (honest)

- **Mobile LCP of 4.7 s, simulated.** The LCP element is the woven wordmark, which waits for the display font. Next steps for Phase 9:
  - test `font-display: optional` for the wordmark only
  - inline the critical CSS
  - read the real LCP subparts from a trace before changing anything
- **About 28 KB of unused JS** in the framework chunk.
- Console 404s until the other routes exist.

## Phone layer memory

`layer-memory.mjs`, run at 390×844@3:
- **peak 537 MB**, inside the 300–700 MB range the reference project ran safely on iPhones
- largest layers: the document (185 MB) and one long section (150 MB)

These are requested sizes, not exact usage. Still to do: a real-iPhone check.
