"use client";

import manifest from "@/data/image-manifest.json";

/**
 * Maps a logical src "/images/site/<name>.webp" to the smallest pre-built width that covers
 * the request (scripts/optimize-images.mjs). Images that are smaller than requested fall back
 * to their largest built size, so nothing is ever upscaled on the server.
 */
type Entry = { w: number; h: number; sizes: number[] };
const M = manifest as Record<string, Entry>;

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const m = src.match(/^\/images\/site\/([\w-]+)\.webp$/);
  if (!m) return src;
  const entry = M[m[1]];
  if (!entry) return src;
  const w = entry.sizes.find((x) => x >= width) ?? entry.sizes[entry.sizes.length - 1];
  return `/images/site/${m[1]}-${w}.webp`;
}
