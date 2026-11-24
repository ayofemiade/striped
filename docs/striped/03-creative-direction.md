# 03 · Creative direction

**Status: awaiting approval (Stop 1).** No site code is written until a direction is approved.

Comps, built from STRIPED's real photos and openable in a browser:
- `comps/a-every-stripe.html`: a **working scroll prototype**. Add `?p=0…1` to freeze the hero at any point.
- `comps/b-develop.html`: add `?d=0…1` to set how far the prints have developed.
- `comps/c-side-a-b.html`
- Screens are in `comps/shots/`.

To view them, run `python -m http.server 4173` in the repo root and open `http://127.0.0.1:4173/docs/striped/comps/a-every-stripe.html`.

---

## What the material allows (constraints before taste)

- **One real brand colour:** `#0055B5`, plus cream `#F6E8CD` and white. The light blues `#B8DCEF` / `#83BEE7` appear in the site's CSS.
- **The photography is instant film and casual 35 mm.** It is warm, daylight, friends and LA. There is no studio campaign apart from the six collages (which are a collaborator's artwork).
- **There is a lot of people-in-stripes material:** 31 archive photos and 9 lifestyle prints. Product packshots are fewer, and 24 of them are only 360×540.
- **The process is documented in one post:** before → after, plus the "step by step" posters. No video of the making exists.
- **Music is public on YouTube** (19 videos and a full live show). The unreleased songs are members-only.
- **No payments.** The interest list is unpaid.
- **No vector wordmark** and no founder portrait intended as one.

The three directions below are genuinely different answers to one question: *what is the single idea that makes this site only STRIPED's?*

---

## Concept A · **Every Stripe Has a Story** (recommended)
*The page is the shirt. Every stripe opens.*

| Field | Content |
|:--|:--|
| **Central concept** | The brand's own line, "Every stripe has a story", becomes the site's architecture. The homepage is made of horizontal stripes, as a striped shirt is. Each stripe is closed until you reach it: a band holding one chapter title. Then it **opens** like a slat of a blind into the story behind it (a photo, a process, a performance). One verb across the whole site: **open the stripe.** |
| **Visual identity** | Royal blue and cream bands. Photographs appear *through* stripes before they appear whole, the way light comes through blinds (STRIPED already shoots the Spooky Day sweaters against window blinds). The stripe is the grid, the divider, the reveal and the loading state. It's never decoration. |
| **Typography** | **Archivo** (SIL OFL, variable width 62–125 and weight 100–900), mostly at its *condensed black* end: the voice of STRIPED's own posters ("You don't get to pick."). The width axis lets type behave like stripes (narrow and wide bands). **Newsreader** (SIL OFL) italic carries the warm lowercase voice ("a little piece of this world."), echoing the italic serif in their "Greetings from STRIPED™ world" post. **No Inter.** Signature treatment: the wordmark is **woven into the stripes**, with its letters existing only inside the blue bands. |
| **Colour** | Ground paper `#FBF6EC` and cream `#F6E8CD`. Ink and bands `#0055B5` (7.08:1 on white, 5.74:1 on cream). `#B8DCEF` for quiet labels on blue (4.9:1). One action colour for **"join / register interest" only**, taken from the red dyLAn hat, never placed on blue (about 1.4:1). Final values are measured in the design system. |
| **Photography** | Hero: `polaroid-10`, a whole lawn of people in stripes, revealed through the blind. Music: `polaroid-17`, a guitarist in a room full of stripes. Process: before/after sweaters and the 1/1 sweatsuit flat-lays at full size. Products: at real print proportion, never boxed. |
| **Hero** | Full blue blind across the crowd. "a little piece of this world." in Newsreader italic. "the clothes. the music. the world." top right. STRIPED in condensed black, woven into the stripes. Scroll and the slats open onto the crowd. The first frame needs no JavaScript: it's a static striped image with the same text. |
| **Layout** | Sections differ because their stripe holds different content. **01** a statement (their about text). **02** the pieces on a cream rack. **03** before → after, with the makers credited. **04** the music, full-bleed, with a setlist of real performances in shops. **05** the people (the archive). **06** join. The footer is set as a garment's **care label** ("made in LA · finished by hand · 1 of 1"). The label echoes their own "Patch Facts" label, so it's a brand device, not our invention. |
| **Interaction and motion** | (1) The hero blind opens with scroll, using transforms only (scaleY). (2) Each chapter stripe opens with `clip-path` as it enters, once. (3) Product prints lift on hover. (4) The patch picker: "you don't get to pick", a random patch from 13 colours. A product truth, as Infinity's initials are for socks. Reduced motion: stripes start open and the hero is static. |
| **Why it suits STRIPED** | It's literally their name and their own sentence. It joins the clothes and the music in one structure (both are "stripes" of the same shirt). It scales to any page: the shop is a rack of stripes, and the product page opens one stripe per detail. |
| **Memorable as** | *"The whole site is a striped shirt, and every stripe opens onto a story."* |
| **Risks** | (a) **Stripes as costume.** Mitigation: the stripe always *does* something (it reveals, divides or loads), and a count of decorative stripes stays at zero. (b) **Phone wordmark.** The comp at 390 px crushes it. Fix: stack it as STRI/PED at 2 lines (verified in the build). (c) **Motion sickness from many bands.** There are 14 bands moving one way, transform-only, with no parallax, a pause-motion control and reduced motion respected. (d) **The cutout wordmark is our type, not their scrawl.** Ask for the vector scrawl (D2) and use it in the footer and favicon. |

## Concept B · **Develop**
*dylAn's box of instant prints. Every image develops for you.*

| Field | Content |
|:--|:--|
| **Central concept** | The site is a table of instant prints that dylAn shot (he photographs the product himself). Every image arrives undeveloped (pale, cyan-grey) and develops into colour as you reach it, as instant film does. "Pick one up" opens a print into a chapter or a product. |
| **Visual identity** | A warm table surface, white print borders, soft shadows, slight rotations. Typewriter captions in the print's bottom strip, where people really write on instant prints. |
| **Typography** | Newsreader italic for statements. **Courier Prime** (OFL) for captions only, echoing their "the dyLAn hat / approves this message" cards. Archivo for UI. |
| **Colour** | Table `#E9DFCB`, print white `#FDFCF8`, ink `#0055B5`. The photos carry all other colour. |
| **Photography** | Everything shown as prints: lifestyle, `polaroid-22…31`, products. Full-frame archive photos get a print border. |
| **Hero** | One large print developing in the centre ("a little piece of this world." in its caption strip), five smaller prints around it. "every print, one of one." `// pending` copy. |
| **Interaction and motion** | Develop on view (a filter transition, about 1.2 s, once). Prints lift and straighten on hover. A tap on mobile picks a print up. |
| **Why it suits STRIPED** | Instant film *is* their medium. Intimate and personal, it feels made by one person. |
| **Memorable as** | *"Every photo develops in front of you, like a Polaroid."* |
| **Risks** | (a) **Tilted bordered prints look like Jjettas' signature** and like the current site's cards, so it's incremental, not a leap. (b) Animating CSS filters on many large images is expensive on phones. (c) A scattered "table" is hard to make usable on a 390 px screen and doesn't index products well. (d) It's the photo medium, not the brand's idea: it says "film", not "stripes", "made by hand" or "music". |

## Concept C · **Side A / Side B**
*One record. The clothes on one side, the music on the other.*

| Field | Content |
|:--|:--|
| **Central concept** | STRIPED as a two-sided record. A persistent switch flips the whole site between **Side A · the clothes** (blue on cream) and **Side B · the music** (cream on blue). Sections are "tracks" in a tracklist. |
| **Visual identity** | Tracklists, side letters set huge (A / B, echoing dylAn's capital **A**), colour inversion as the flip. |
| **Typography** | Archivo condensed black for the side letters and track titles. Newsreader italic for lines. |
| **Colour** | Two exact inversions of blue and cream. |
| **Photography** | Side B: `polaroid-17` (guitar in a room of stripes) and performance frames. Side A: products and people. |
| **Hero** | A full-height photo with a giant side letter, and a tracklist of real performances and videos. |
| **Interaction and motion** | Flip (a colour inversion with a quick wipe). The setlist plays YouTube in place. |
| **Why it suits STRIPED** | It makes the music a first-class half of the brand, and the capital-A play is real. |
| **Memorable as** | *"You flip the site like a record."* |
| **Risks** | (a) **It splits what should be joined.** The insight is that the clothes and music come from the *same hands in the same rooms*, and two sides say the opposite. (b) The tracklist is a costume for products (prices aren't track times). (c) The music side is thin for a first-time visitor (unreleased songs are gated; the rest is YouTube). (d) The comp's photo-left/list-right first frame is close to a split hero. |

---

## Scoring (1–5; honesty is a gate)

| | A · Every Stripe | B · Develop | C · Side A/B |
|:--|:-:|:-:|:-:|
| Originality | **5** | 3 | 4 |
| Brand relevance | **5** (their name + their sentence) | 4 | 3 |
| Visual quality | **5** | 4 | 4 |
| Usability / conversion | 4 | 3 | 3 |
| Technical feasibility | 4 | 3 | 4 |
| **Honesty with the assets (gate)** | pass | pass | pass (tracklist risk) |
| Mobile | 4 (wordmark fix needed) | 2 | 4 |
| **Total** | **27** | 19 | 22 |

## Recommendation: **A · Every Stripe Has a Story**

- It's the only concept whose *structure* is the brand idea. STRIPED's name is a pattern and their own line is "every stripe has a story", so the page is a striped shirt whose stripes open.
- It joins clothes, making and music inside one object instead of separate tabs.
- It lets the real photographs be big.
- B's best part (instant prints as objects) is absorbed into A as the image unit for product and archive pages, so nothing true is lost.
- C's best part (the capital **A**, and the setlist of shows in clothing shops) becomes A's music chapter.

## Directions considered and rejected

| Direction | Why rejected |
|:--|:--|
| Torn-paper collage as the whole interface | It's @zarasride's art style. Using it as UI would copy a collaborator. Their collages are shown as artworks, credited. |
| A magazine-cover homepage ("STRIPED, Issue 01") | A known trope, and it says "publication", not "made by hand". |
| Dodgers-style LA monogram system | Trademark risk, and it would make the site about a team. The monogram stays on the hat, in photos only. |
| "Before → After" workbench as the *whole* site | Too little process material (one post) to carry every page. It becomes chapter 03. |
| WebGL fabric / cloth simulation of stripes | Technology looking for a reason. DOM transforms do the job at a fraction of the weight. |
| A cassette or vinyl player UI | Costume. There's no released album to sell and the songs are gated. |
| "100% sustainable" as a headline | An unverified environmental claim (FTC Green Guides risk). The facts (thrifted, hand-distressed, cut from old denim) are stronger. |

## Proposed information architecture (detailed in 05 after approval)

| Route | Single idea | Content (all real) |
|:--|:--|:--|
| `/` | The shirt: stripes that open | the 6 chapters above |
| `/shop` | **The rack**: pieces hang in one row per category, filtered all · hats · tees · hoodies | 9 pieces, status labels exactly as on striped.world |
| `/shop/[slug]` | **One of one**: the piece opens stripe by stripe (photos → details → how it works → register interest) | real descriptions, prices, colour/size preferences, honest preorder text |
| `/world` | **Same hands, same rooms**: music and performances in the clothing spaces | public YouTube (click to load), live sets, the 31-photo archive, members-only song titles behind "join" |
| `/about` | **Who makes the stripes**: the process and the LA makers, credited | process posters, before/after, sweatsuit, credits |
| `/join` | "you're part of the world." | interest list form, demo-only (doesn't send data), plus the FAQ verbatim |

## Proposed technical approach (detailed in 07 after approval)

- **Stack:** Next.js 16 (App Router, static where possible), React 19, Tailwind 4 `@theme` tokens, TypeScript.
- **Motion:** GSAP ScrollTrigger for the chapter openings, and a hand-written rAF loop for the hero blind (one owner per element).
- **Images:** `next/image` with a sharp pipeline to AVIF/WebP at responsive widths. The hero LCP image is preloaded.
- **Content:** all copy in `src/data/*.ts`, with brand-verified lines unmarked and our lines marked `// pending`.
- **Forms:** demo-only. They show a success state, are labelled "demo: nothing is sent", and **never post to STRIPED's live endpoint**.
- **Hosting:** a private Vercel preview, only when you say "push".

## Decisions needed from you

1. **D1. Direction:** approve **A** (recommended), or choose B or C.
2. **D2. Brand files:** can we ask STRIPED for the vector scrawled wordmark and the full-res "-nov26" photos? Or do I build with what's public (fine for a demo)?
3. **D3. The collages:** use the six @zarasride collages in the demo, credited? They're the best-resolution campaign art, but they're someone else's work. Recommended: **yes, credited, in one chapter only**.
4. **D4. Unreleased music:** recommended: **show the titles only, behind "join"; play nothing.** Alternative: play 20-second previews streamed from their own server (still their unreleased work).
5. **D5. Sustainability wording:** recommended: **factual process words only** (thrifted, hand-distressed, patches cut from old denim), not "100% sustainable".
6. **D6. Red hat / red V3:** show it as real (Instagram, 21 Nov) or as "design preview" (site)? Recommended: **follow the site (design preview)** until STRIPED confirms.
7. **D7. Demo label:** a small, discreet "concept by MoyoCode · demo" in the footer and on forms. Recommended: **yes**.
