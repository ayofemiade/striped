# 02 · Creative reference analysis

**Method.** Each site was driven in Chromium (Playwright) at 1440×900 and at 390×844. I captured the first view plus frames at 15/35/60/85% of the page, and extracted computed fonts, sizes, colours and platform scripts.
- Frames: [research/references/](research/references/), with contact sheets `sheet-<site>.jpg` and `sheet-mobile.jpg`.
- **Limits:** cookie banners were not dismissed (they appear in some frames). Hover was not tested. Video was seen only as frames. Scroll was instant jumps, so any scroll-scrubbed scene was seen at sample points, not in motion.

These are lessons, not templates. Nothing below is to be copied: layouts, type, cursors, loaders and copy all stay with their owners.

---

## 1. THEBE MAGUGU (thebemagugu.com)

**Observed**
- Shopify, with GSAP. 15,523 px tall (about 17 screens).
- Type: "TM Academic" (a heavy serif, 22 px, 900) for headings. Times New Roman text. Arial Narrow for small labels.
- White ground. Colour comes **only from the photographs**: a red floor with chalk lines, a pink cracked wall, a blue pitch mural.
- Full-bleed campaign image first, with a 2-line story ("FRINGE ACTIVITIES — A form-fitting silhouette … come alive with every gesture.") and one "SHOP" link.
- Then a product row: four packshots on white, name and price only. Then another campaign story.
- The site alternates **story → products → story**.

**What works, and why**
- Each collection is a *named idea* with a set-designed photograph. The words are short because the image does the talking.
- Products sit directly after the story that explains them, so commerce feels like a consequence of the editorial.
- A tiny, quiet UI (11–13 px uppercase nav) lets the photography be loud.

**What fails**
- It leans on an expensive photo production STRIPED doesn't have.
- Very long, and repetitive in structure once you've seen two cycles.
- Mobile is a stack of the same.

**Learn**
1. Story first, then the pieces that story produced.
2. Let photographs carry the colour. Keep the UI ink small.
3. Name each chapter with an idea, not a category.

**Don't take:** the serif-only luxury register. STRIPED is warm and street, not a fashion house.

## 2. VONDER (vonder.ai)

**Observed**
- Next.js (Turbopack chunks). 17,245 px tall.
- "gtCanon" serif (light, 300) at about 50 px for the hero line. "zalandoSans" 11 px tracked caps for UI.
- Hero: the brand name set huge across the top of a portrait, the head overlapping the letters. Then very white sections with small centred serif statements ("Less phone. More presence.").
- A drawn "memory graph" line illustration. Products slide in sideways in a horizontal strip.

**What works, and why**
- It introduces *a way of living* before the product. Calm pacing: one sentence per screen.
- One serif at light weight gives authority without shouting.

**What fails**
- The type-behind-head hero is a well-worn pattern.
- Long white gaps read as emptiness on a laptop.
- Cookie banner over the hero.
- Tech coldness is the opposite of STRIPED.

**Learn**
1. Pace: one idea per view, so the visitor *enters* rather than skims.
2. A single sentence can hold a whole section if the type is good.

**Don't take:** name-behind-portrait (look-alike risk), the cold white space, the tech tone.

## 3. ATTICUS FINCH CLOTHING (atticusfinchclothing.com.au)

**Observed**
- Shopify, built by Dazze. 4,730 px tall.
- Helvetica Neue only. Product cards on a warm stone ground (#E9E1DA-ish), with name, price, "+8 SIZES AVAILABLE" and a quick-shop link.
- Full-bleed drop announcement ("AVAILABLE 10AM NOVEMBER 10 →"). Brand blocks (NN.07, Fracap, Fred Perry) with a paragraph of origin each. Navy footer with opening hours and shipping.

**What works, and why**
- **Commerce clarity.** You always know what it is, what it costs, and whether your size exists. The tinted card ground unifies packshots shot by different people.
- A drop time is announced as an event.

**What fails**
- Generic. You couldn't tell it from a hundred Shopify themes.
- It works because it's a multi-brand retailer, which STRIPED is not.

**Learn**
1. Every card answers *what, how much, available?* in one glance.
2. A shared tone behind mixed-source photos makes a catalogue feel curated. **Useful:** STRIPED's photos come from many sessions.
3. Announce a drop as a moment with a time.

**Don't take:** the template skeleton, uppercase Helvetica, multi-brand framing.

## 4. JJETTAS (jjettas.com, Justin Jefferson)

**Observed**
- Next.js. 17,158 px tall.
- "beachwood-variable" display at **313 px**, tracking −9 px, used as huge outlined/ghost words behind photos ("PARTNERSHIPS"). "fontBody" text, a little mono.
- Dark loader with a percentage, then a blue light-tunnel video. A rookie-card image beside a portrait. **Photos styled as tilted prints with white borders.** A torn/grainy leather texture ground.
- On phones the loader sat at **0% for more than 5 seconds** at 390×844.

**What works, and why**
- It's about a *person's world*: moments, partners, foundation. It isn't a CV.
- Tilted bordered prints read as a personal scrapbook. Huge type gives a stadium scale.

**What fails**
- The preloader is a wall on mobile.
- Many effects compete: video tunnel, textures, ghost type, cards.
- The partner logo strip is self-promotion.

**Learn**
1. Show the world around the person, through *their* artefacts.
2. Printed-photo objects make a site feel touched by hand. **Note:** STRIPED actually shoots instant prints, so for them this is *true*, not a costume.
3. **Never** gate the first view behind a loader.

**Don't take:** the ghost-type-behind-photo pattern, the loader, the light-tunnel video, the sports bravado.

## 5. INFINITY SOCKS (theinfinitysocks.com)

**Observed**
- Static site, GSAP plus Lenis. 18,429 px tall.
- "FK Screamer" (condensed black, 100 px) display. Geist / Geist Mono text. Cream ground (#EDE4D2) and near-black chapters.
- An intro counts through numerals (44 → 87) with macro sock texture *inside* the digits. A HUD-style chapter counter (`16 · THE TECH · 03/07`). A "PAUSE MOTION" control. A STITCHED. chapter where you try your own initials on the sock. Ends "GET READY." with two packaged pairs.

**What works, and why**
- **Every interaction demonstrates a real product property**: texture in the numbers, initials stitched, four zones.
- The pause-motion button respects users.
- Condensed black type is used with conviction.

**What fails**
- A long intro before any content (with SKIP).
- The HUD/telemetry costume (X 66.3 · Y 39.7) is fake data as decoration, which the skill forbids.
- Heavy for a sock.

**Learn**
1. Motion must *prove* something true about the product.
2. Let the visitor touch a product property (initials → for STRIPED: a 1/1 piece, or a random patch).
3. Offer "pause motion".

**Don't take:** the intro countdown, the HUD costume, Lenis scroll-jacking, numerals-as-mask (their signature).

---

## Synthesis

| Principle | From | How it applies to STRIPED |
|:--|:--|:--|
| Story → the pieces it produced | Thebe | Each chapter ends in the real pieces it explains (process → the distressed hoodie) |
| Photos carry the colour; the UI stays small | Thebe, Vonder | Let the instant prints be loud. UI in one blue, small |
| One idea per view | Vonder | Chapters, not feeds |
| Card answers what / how much / available | Atticus | Every piece: name · price as shown on striped.world · status ("1 of 1", "design preview") |
| A shared ground unifies mixed photos | Atticus | Cream ground behind every packshot |
| The person's world through their artefacts | Jjettas | dylAn's own instant prints, captions, Instagram words |
| Motion proves a product truth | Infinity | Stripes opening (the brand is literally stripes); a random patch you "don't get to pick" |
| Pause motion, no loader wall | Infinity, Jjettas (counter-example) | First frame is real content in under 1 s; a pause control |

## What none of the references does

Every reference presents a brand **made by a company and shown by a website**. None of them makes the *making* the structure, and none connects two crafts from the same hands.

STRIPED has a fact no reference has:
- **One person makes the clothes and the music, and the music happens in the shops where the clothes live** (live at Playoffs Vintage, live at Grounded Showroom).
- **The brand's literal name is a pattern**, which can be the site's architecture rather than a decoration.

That gap is where STRIPED stands apart.

## Look-alike risks to avoid

| Risk | Why |
|:--|:--|
| Brand name huge behind a portrait | Vonder, and a common trope |
| Ghost outline type behind tilted photos | Jjettas signature |
| Numerals filled with texture, HUD counters | Infinity signature |
| A torn-paper collage *as UI* | It's @zarasride's art style; using it as interface copies a collaborator |
| The interlocking LA monogram | Dodgers trademark territory; it stays only on the hat in the photos |
