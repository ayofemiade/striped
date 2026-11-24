# 09 · QA report: homepage (Phase 3)

**Tested:** 24 Nov 2026, in Chromium (Playwright) and Chrome (Lighthouse, playwright-core). All screenshots are in `docs/striped/qa/home/`.

## Sizes checked

- 1440×900
- 1265×598 (a 1920 laptop at 150% scaling)
- 390×844

Still to run: the full §4 matrix (1536×730, 1920×1080, 768×1024, 844×390, 375×667, 3440×1440). That's Phase 8.

| Check | Result |
|:--|:--|
| Horizontal overflow | none (scrollWidth = viewport at 1440 and 390) |
| Broken images | 0 of all images after a full scroll, at both sizes |
| Console errors | 0 in dev after the fixes. The production build logs 404s from prefetching `/shop`, `/world`, `/about` and `/join`, which aren't built yet. |
| Hero blind | p = 0 / 0.5 / 1 frames correct at all three sizes; the wordmark is woven into the bands; `?p=` freezes a frame |
| Stripes open | all chapters open on scroll; keyboard focus opens a closed stripe |
| Patch draw | works; the result is announced in an `aria-live` region; the drawn kind is highlighted in the box of 38 |
| Player | no YouTube request before a click; on a click it loads `youtube-nocookie.com/embed/<id>` |
| Join form | empty submit → "add your name and a valid email, then try again."; valid submit → demo success, "nothing was sent" |
| Header tone | blue over the blind, paper over the chapters (IntersectionObserver) |
| Phone menu | opens as a blue stripe; Escape closes it and returns focus to the button |
| Reduced motion | the blind rests half-open, the stripes are open and there's no flip. Checked by emulation. |
| No JS | the first frame is complete (blind, wordmark, tagline); no hidden stripes (0 panels) |
| Accessibility (Lighthouse) | 100 desktop and mobile |

## Defects found in the browser and fixed

1. **Tailwind wasn't processing CSS.** The scaffold's Turbopack rule had been lost when I replaced `next.config.ts`. Restored it.
2. **Theme variables were pruned** for the route CSS files. Fixed with `@theme static`.
3. **Images inside closed stripes never loaded.** Chrome's lazy loading ignored them under the clip-path. The stripe now opens with two panels (transform) instead of a clip-path, so nothing is clipped.
4. **Hydration mismatch** from my first workaround for (3). It was removed by the redesign of the opening.
5. **The collage showed a white box** (`multiply` was isolated by the clip). The figure now has its own paper ground.
6. **"dylAn" was rendered "DYLAN"** by the uppercase label style, in the footer and the sweatsuit credit. Those lines moved to the `t-ui` style.
7. **Phone grids:** 12 columns of desktop gutters ate half a 390 px screen. Phones now get one column.
8. **"same hands. same rooms." sat over people's faces.** It moved onto the blue body.
9. **The people grid had holes** because every archive photo is portrait. Rebuilt as one big print, four small, two wide.
10. **The hero closed frame hid the people** at 86% band cover. Now 80%, and the wordmark leaves by p ≈ 0.4.
11. **The header flashed** from paper to blue on load. It now starts blue on the homepage.
12. **Lint:** setState inside effects was replaced by render-time adjustment.

## Not yet tested

- A physical iPhone or Android phone
- Safari or Firefox
- A screen reader pass (NVDA / VoiceOver)
- Frame pacing under 4× CPU throttling (`scroll-jank.mjs`). Phase 7.
