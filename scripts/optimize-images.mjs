/**
 * Builds web derivatives from the client originals in assets-src/striped (never served, git-ignored).
 * Output: public/images/site/<name>-<width>.webp, plus src/data/image-manifest.json
 * ({ name: { w, h, sizes } }) so the loader and components know the true dimensions.
 *
 *   node scripts/optimize-images.mjs            # all
 *   node scripts/optimize-images.mjs polaroid-  # only names starting with "polaroid-"
 *
 * Why each photo is used is recorded in docs/striped/04-asset-catalogue.md.
 */
import { mkdir, readdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const srcRoot = path.join(root, "assets-src/striped");
const out = path.join(root, "public/images/site");
const manifestPath = path.join(root, "src/data/image-manifest.json");
const WIDTHS = [240, 480, 640, 800, 1200, 1600, 2400]; // keep in sync with src/lib/image-loader.ts
const CATEGORIES = ["editorial", "lifestyle", "polaroids", "products", "instagram", "patches"];

const only = process.argv[2];
await mkdir(out, { recursive: true });
let manifest = {};
try {
  manifest = JSON.parse(await readFile(manifestPath, "utf8"));
} catch {}

const slug = (f) => f.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");

for (const cat of CATEGORIES) {
  for (const file of await readdir(path.join(srcRoot, cat))) {
    const name = cat === "patches" ? `patch-${slug(file)}` : slug(file);
    if (only && !name.startsWith(only)) continue;
    const base = sharp(path.join(srcRoot, cat, file)).rotate(); // EXIF orientation; metadata dropped on output
    const { width: W, height: H } = await base.clone().metadata();
    let widths = WIDTHS.filter((w) => w <= W);
    if (!widths.length) widths = [WIDTHS[0]];
    for (const w of widths) {
      await base
        .clone()
        .resize({ width: Math.min(w, W), withoutEnlargement: true })
        .webp({ quality: w >= 1600 ? 76 : 80, effort: 5 })
        .toFile(path.join(out, `${name}-${w}.webp`));
    }
    manifest[name] = { w: W, h: H, sizes: widths };
    console.log("built", name, `${W}×${H}`, widths.join(","));
  }
}
await writeFile(manifestPath, JSON.stringify(manifest, null, 0) + "\n");
console.log(Object.keys(manifest).length, "images in manifest");
