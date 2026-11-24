# PROGRESS

## Phase 0 · Research and project audit: ✅ complete (24 Nov 2026)

**Objective:** understand the brand, the material, the references and the constraints before designing.

**Repository audit:** an empty git repo (branch `main`, no commits, no framework, no package manager). No existing code to preserve, so it's a fresh build. Node 24.16, npm 11.13.

**Completed**
- Crawled striped.world fully: 4 pages, 9 products, sitemap, JS and the public content feed.
- Instagram: @stripedattire and @itndylAn, logged out, 12 posts each, captions read.
- Five references, desktop and phone.
- Downloaded the asset library: 101 images, 12 MB, all official.
- Contrast and colour measurements.

**Files created**
- `docs/striped/00-skills-and-tools.md`, `01-brand-intelligence.md`, `02-creative-reference-analysis.md`, `04-asset-catalogue.md`
- `docs/striped/research/` (current-site, instagram, references screenshots)
- `public/assets/striped/` (brand, editorial, lifestyle, polaroids, products, instagram)

**Issues and limits**
- Instagram showed only 12 of 51 / 68 posts without a login.
- The external interview wasn't found.
- 24 product photos are only 360×540.
- No vector wordmark.
- The unreleased audio was deliberately not downloaded.

**Tests performed:** asset integrity (every file opened with Pillow; 6 fallback-page misses removed); colour contrast maths.

## Phase 1 · Creative strategy: ✅ approved (24 Nov 2026)

**Approval:** Moyosore chose **A · Every Stripe Has a Story**.
- D2: what's public is enough.
- D3: collages yes, credited.
- D4: song titles only.
- D5: use "100% sustainable" (quoted as STRIPED's bio).
- D6: red V3 = preview.
- D7: demo label yes.

**Written after approval:** 05 information architecture, 06 design system, 07 technical architecture.

## Phase 2 · Foundation: ✅ complete

- Next 16.4.6, React 19.3, Tailwind 4.
- Image pipeline: `scripts/optimize-images.mjs` builds 115 images × up to 7 sizes, plus a manifest.
- Originals in git-ignored `assets-src/`.
- Tokens, type roles, the `Stripe` primitive, header (tone-aware, phone menu stripe), footer care label, `OpenOnView`.

## Phase 3 · Homepage: ✅ built and checked, ⏸ waiting for your review (Stop 2)

**Sections:**
- hero blind
- 01 every stripe has a story
- 02 the pieces
- 03 before → after (+ sweatsuit, makers)
- 04 you don't get to pick (fair draw from the real 38 patches)
- 05 the music lives here too (live sets in shops, click-to-load YouTube, locked titles)
- 06 the people
- 07 you're part of the world (demo form)
- care-label footer

**Checked:** in the browser at 1440×900, 1265×598 and 390×844, with reduced motion and with no JS. Lighthouse on a production build; layer memory on a phone profile. See 09 and 10, and `docs/striped/qa/home/`.

**Remaining:** `/shop`, `/shop/[slug]` ×9, `/world`, `/about`, `/join`, which the homepage already links to. Then Phases 7–10.

**Homepage approved by Moyosore (24 Nov 2026).**

Follow-up: the patch chapter got a plain "what's a mystery patch?" line and a strip of five real patch photos, after Moyosore asked what the section was for.

## Phases 4–5 · Shop + 9 product pages: ✅ built and checked, ⏸ waiting for review

**`/shop`, "the rack":**
- each category is a stripe band
- the filter (all · hats · tees · hoodies, with counts) leaves only the chosen stripe open
- each row ends with a verified "how they're made" card
- the honest 1/1 note, and a "just between us" link to the world

**`/shop/[slug]` ×9, "one of one":**
- the first photo large, the rest two-up; 360px photos are never stretched
- the info column is sticky
- edition, price and price note, description and note are verbatim
- colour and style chips mark "design preview"
- the hoodie mockups are labelled "design mockup"
- the "first look soon" pieces get a striped block instead of an image
- demo interest form ("keep me posted", the product's own consent wording)
- "the details" and "how it works" verbatim
- "more from this world"
- phones get a swipeable photo strip

**Defects fixed:**
- the Next 16 instant-navigation error: params now resolve inside Suspense, with a striped placeholder shell
- `usePathname` in the layout is wrapped in Suspense, with a static `HeaderView` fallback
- an empty 4th column in the rack
- the "how they're made" card read as a loading skeleton

**Checked:** the shop and all 9 product pages at 1440 and 390. No overflow, 0 broken images, 0 console errors. Filtering, client navigation and the product form all work.

**Next:** `/world`, `/about`, `/join`.

## (archive) Phase 1 status before approval

**Completed**
- `03-creative-direction.md`: three concepts, scoring, recommendation (A), rejected directions, decisions D1–D7.
- `08-implementation-roadmap.md`.
- Comps in `docs/striped/comps/`. Concept A is a working scroll prototype, checked at 1440×900, 1265×598 and 390×844 (no horizontal overflow at 390).

**Defects found in the comps (to fix in the build)**
- Concept A: on phones the woven wordmark is too small. It needs a 2-line STRI/PED layout.
- CSS `lowercase` broke "dyLAn". Never transform product names.

**Remaining:** 05 IA, 06 design system and 07 technical architecture, written after you approve a direction.

**Phase complete?** No. It is waiting for your decision.
