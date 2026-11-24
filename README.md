# STRIPED™ · concept website (demo)

A concept for **STRIPED™ Attire by dylAn**, made by MoyoCode as a demo. It is **not** the live store (striped.world), and it is not approved or endorsed by STRIPED. Forms send nothing.

**Idea: _Every stripe has a story._** The page is a striped shirt:
- a blue blind of stripes opens onto a lawn full of people in stripes
- every chapter is a stripe that opens onto the brand's world: the pieces, how they're made, the mystery patches, the music played in the shops where the clothes live, and the people

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy on Vercel with the default Next.js settings. No environment variables are needed.

## Notes

- **Stack:** Next.js 16, React 19, Tailwind 4. No animation library.
- **Images** are pre-built WebP sizes in `public/images/site/`, made by `scripts/optimize-images.mjs` from originals that are kept out of the repo.
- **Copy:** all of it lives in `src/data/`, and every line is STRIPED's own wording or is marked `// pending`.
- **Docs:** research, creative direction, design system, QA and performance reports are in `docs/striped/`.
- **Rights:** all photographs, the logo and the collages (by @zarasride) belong to STRIPED and their creators. They are used only to present this concept, and **the repository should stay private.**
