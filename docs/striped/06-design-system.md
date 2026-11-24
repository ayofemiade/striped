# 06 · Design system

Tokens live in `src/app/globals.css` (`@theme`). Contrast is computed with the WCAG formula; the script is in PROGRESS.

## Colour

| Token | Hex | Role |
|:--|:--|:--|
| `--color-paper` | `#FBF6EC` | page ground (warm, like their cream banner, lighter) |
| `--color-cream` | `#F6E8CD` | second ground, the cream stripe (sampled from STRIPED's banner) |
| `--color-blue` | `#0055B5` | the brand: ink, stripes, bands (STRIPED's CSS + logo) |
| `--color-deep` | `#00306B` | blue in shadow: footer, and text on photos |
| `--color-sky` | `#B8DCEF` | quiet text on blue (STRIPED's CSS) |
| `--color-red` | `#BC1924` | **the single action colour**, sampled from the red dyLAn hat |
| `--color-white` | `#FFFFFF` | text on blue and on photos |

### Measured pairs

| Text on ground | Ratio | Use |
|:--|--:|:--|
| blue on paper | 6.57 | body, headings |
| blue on cream | 5.85 | body on cream stripes |
| white on blue | 7.08 | bands, music |
| paper on blue | 6.57 | bands |
| sky on blue | 4.90 | secondary labels on blue |
| white on red | 5.67 (`#C8202F`, measured); higher for `#BC1924` | join / register button |
| red on paper | 5.26 | the action as a text link |
| white on deep | 12.84 | footer |

### Forbidden

- **Red on blue (1.25:1)**, and blue on red. On blue the action inverts to paper-on-blue with an outline.
- Opacity-reduced blue text under 80%.
- The red anywhere except the join / register-interest action. Its uses are counted in QA.

## Typography

Two families, both SIL OFL, self-hosted with `next/font/google`.
- **Archivo** (variable `wght` 100–900, `wdth` 62–125): the voice of STRIPED's own posters ("You don't get to pick."). The width axis lets type behave like stripes.
- **Newsreader** (variable, `opsz`, italic): the warm lowercase voice, close to the serif in their "Greetings from STRIPED™ world" post.

| Role | Face | Size / leading / tracking |
|:--|:--|:--|
| `t-mega` (woven wordmark) | Archivo 900 · wdth 62 | `min(27vw, 58svh)` / .8 / −.02em |
| `t-band` (stripe titles) | Archivo 900 · wdth 62 | `clamp(30px, 4.6vw, 70px)` / 1 / −.01em |
| `t-display` (section display) | Archivo 900 · wdth 62 | `clamp(56px, 10vw, 168px)` / .84 |
| `t-statement` | Newsreader 400 (+ italic) | `clamp(32px, 4.8vw, 80px)` / 1.04 / −.02em |
| `t-line` | Newsreader italic 500 | `clamp(26px, 3.4vw, 56px)` / 1.02 |
| `t-body` | Newsreader 400 | 18–19px / 1.5 |
| `t-ui` | Archivo 650 · wdth 100 | 14px / 1.2 |
| `t-label` | Archivo 800 · wdth 100 | 12px uppercase +.1em, tabular |

**Rules**
- Brand casing is sacred. Never `text-transform` a product name or "dylAn" / "dyLAn".
- No monospace.
- One italic device: the Newsreader line.

## Space and grid

- `--gutter: clamp(16px, 3vw, 44px)`. 12 columns from 1024 px.
- **Band height** (a closed stripe): `clamp(60px, 8svh, 88px)`. The hero blind has 14 bands, 10 on phones.
- `scroll-padding-top` equals the header height (WCAG 2.4.11).

## Image treatment

- **Instant prints** are shown as objects at their true ratio, never boxed inside cards.
- **Full-frame photos** go full-bleed or flush to an edge.
- **Captions** describe only what's in the photo, or quote the brand's caption with its source.
- **The collages** always carry "collage by @zarasride".

## Permitted motions (the only five)

| # | Motion | Where | Engine | Reduced motion |
|:--|:--|:--|:--|:--|
| 1 | **Blind opens** (scaleY of bands, wordmark woven) | home hero | hand rAF, cached geometry, `put()` writes | the blind is shown half open, static; the photo is fully readable |
| 2 | **Stripe opens** (clip-path inset 50% → 0, 0.9 s, once) | every chapter | IntersectionObserver + CSS transition | open immediately |
| 3 | **Print lift** (translateY −6px, shadow) | product and archive cards, on hover / focus | CSS | none |
| 4 | **Patch draw** (a card flips to reveal the drawn patch, 0.6 s) | patch section | CSS transform | instant swap |
| 5 | **Menu stripe** (the panel grows from the header band) | phone menu | CSS | instant |

- One easing: `--ease-stripe: cubic-bezier(.22, 1, .36, 1)`.
- Nothing moves while the visitor reads.
- No loaders.
- No smooth-scroll library.
- No GSAP needed: every motion above is achievable with rAF, IO and CSS, so it adds 0 KB of JS libraries.

## Components

- `Stripe`: the band, with number, title and aside, and its opening body.
- `Print`: an image with its caption.
- `Price` + `Status`: the honest labels.
- `Button`: `join` (red), `plain` (blue outline), `on-blue` (paper outline).
- `CareLabel`: the footer.
- `DemoNote`: the demo label.
