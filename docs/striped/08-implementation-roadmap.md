# 08 · Implementation roadmap

Each phase ends only after it has been looked at in a real browser at the review sizes. Compiling is not the same as designing. You review each finished section before I move on (Stop 2). Nothing is committed or pushed until you say "push".

| Phase | Deliverable | Done when |
|:--|:--|:--|
| 0 · Research and audit | 01, 02, 04, 00-skills, comps | ✅ complete (this report) |
| 1 · Strategy | 03 (three concepts + recommendation) | ⏸ **waiting for approval of a direction (D1–D7)** |
| 1b · After approval | 05 IA, 06 design system (measured contrast for every pair), 07 technical architecture | Approved by you |
| 2 · Foundation | Next 16 + Tailwind 4 scaffold; tokens; Archivo / Newsreader self-hosted; `<Stripe>` primitive; header, footer care label; image pipeline (AVIF/WebP) | Renders at all sizes with no overflow; no-JS first frame |
| 3 · Homepage | Built one section at a time: hero blind → 01 statement → 02 pieces → 03 before/after → 04 music → 05 people → 06 join → footer | Each section screenshotted at 1265×598, 1440×900, 768×1024, 390×844, then critiqued and refined |
| 4 · Shop | `/shop` "the rack", filters (all · hats · tees · hoodies), honest status labels, empty state | Discoverability test: any piece reachable in ≤2 actions |
| 5 · Product | `/shop/[slug]` × 9: gallery, preferences, register interest (demo), related pieces | All 9 pages checked; MOCKUP and "design preview" labelled |
| 6 · Story and world | `/about` (makers, process), `/world` (music, live sets, archive, members-only titles) | Every line traces to a source or is marked `// pending` |
| 7 · Motion polish | Timing and easing audit, pause-motion control, reduced motion | ≤2 moving elements per view; 60 fps under 4× CPU throttle on the hero |
| 8 · Responsive and a11y | All §4 sizes, keyboard, focus, contrast, alt text | No overflow; WCAG 2.2 AA checks pass |
| 9 · Performance and SEO | Metadata, OG images, sitemap, robots; Lighthouse | Measured LCP / CLS / INP, with limits stated |
| 10 · QA and creative review | 09–12 reports, screenshots | Acceptance gate in the world-class-website skill §6 |
