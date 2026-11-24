# 00 · Skills and tools: research and application

Skill directories checked: `~/.claude/skills`. No project-level `.claude/skills`, `.agent/skills` or `.agents/skills` folders exist (the repo was empty).

## Read before Phase 0–1 (and how each changed the work)

| Skill | Read | Effect on this project |
|:--|:--|:--|
| **world-class-website** | SKILL.md, references/creative-direction.md, references/skills.md | Set the process: research → audit → three rendered comps from real photos (A as a working scroll prototype) → **stop for approval**. Set the honesty rules (no invented facts, `// pending` copy) and the review sizes (1265×598 @1.5 etc.). |
| **frontend-design** | SKILL.md | Committed to one bold direction. Banned Inter and generic grotesks, which is why Archivo (variable width) and Newsreader were proposed. |
| **modern-web-design** | SKILL.md (first section) | Performance-first motion (transform/opacity only); a first frame that works without JS. Its glassmorphism advice is ignored. |

## To read at the stage that needs them (after approval)

| Skill | When | Purpose |
|:--|:--|:--|
| ui-ux-pro-max | Design system | UX rules only: 375/768/1024/1440, contrast, focus, 1–2 animated elements per view. Its style output is rejected. |
| gsap-scrolltrigger | Phase 3 | `useGSAP` cleanup, `matchMedia` for desktop / mobile / reduced motion |
| motion-framer, animation-designer | Phase 7 | State transitions. The library is added only if it earns its bytes. |
| vercel-react-best-practices | Every build | RSC by default, small client islands |
| accessibility, performance, core-web-vitals | Phases 8–9 | WCAG 2.2, budgets, traces |
| Next.js bundled docs (`node_modules/next/dist/docs`) | Before the first line of app code | Version-specific APIs |

## Installed

**Nothing new.** Every skill the process needs was already present.

## Tools used in Phase 0

- **Playwright (Chromium):** site crawl, Instagram (logged out), references, comps.
- **curl:** official assets.
- **Python + Pillow:** dimensions, contact sheets, colour sampling, contrast maths.
- **Web search:** the interview check, which found nothing usable.
