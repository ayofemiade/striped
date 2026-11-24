/**
 * STRIPED™ Mystery Patches. src: @stripedattire "What's inside?" poster + caption, 22 Nov 2026.
 * The pool, the counts, the prices and every quoted line are STRIPED's own.
 * Pink · khaki: "0 regular. All 4 are ???", so its 4 sit inside the 7 secret chase.
 */
export type Patch = { id: string; colour: string; base: "denim" | "khaki" | "???"; count: number; line: string };

export const patches: Patch[] = [
  { id: "forest-green-denim", colour: "forest green", base: "denim", count: 4, line: "4 of 38" },
  { id: "cactus-green-denim", colour: "cactus green", base: "denim", count: 2, line: "2 of 38" },
  { id: "magenta-denim", colour: "magenta", base: "denim", count: 1, line: "1 of 38. Like, one." },
  { id: "pink-denim", colour: "pink", base: "denim", count: 1, line: "1 of 38. Like, one." },
  { id: "white-denim", colour: "white", base: "denim", count: 3, line: "3 of 38" },
  { id: "purple-denim", colour: "purple", base: "denim", count: 1, line: "1 of 38. Like, one." },
  { id: "royal-blue-denim", colour: "royal blue", base: "denim", count: 6, line: "6 of 38" },
  { id: "purple-khaki", colour: "purple", base: "khaki", count: 4, line: "4 of 38" },
  { id: "forest-green-khaki", colour: "forest green", base: "khaki", count: 2, line: "2 of 38" },
  { id: "teal-khaki", colour: "teal", base: "khaki", count: 4, line: "4 of 38" },
  { id: "royal-blue-khaki", colour: "royal blue", base: "khaki", count: 2, line: "2 of 38" },
  { id: "white-khaki", colour: "white", base: "khaki", count: 1, line: "1 of 38. Like, one." },
  { id: "secret-chase", colour: "secret chase", base: "???", count: 7, line: "7 of 38" },
];

export const TOTAL = patches.reduce((n, p) => n + p.count, 0); // 38

export const patchCopy = {
  title: "You don’t get to pick.",
  sub: "13 colors. Denim or khaki. Your patch gets decided before you do. That’s the fun part.",
  facts: [
    ["Shown", "plenty."],
    ["Yours", "1."],
    ["Chosen by", "not you."],
  ] as const,
  intro: "One STRIPED™ Mystery Patch. Which one? Great question. We don’t know either.",
  made: "hand made with lots of love in collaboration w/ @runitwave in Arizona. 100% recycled.",
  collect: "Collect all 13! Trade with your friends! Get a duplicate! Trade it again!",
  sign: "Hand-picked by nobody.",
  prices: "1 for $10 · 2 for $18 · 3 for $25",
  warning: "Small patches. Big feelings. May contain a color you already have. Striped shirt not included.",
};

/** A fair draw from the real pool of 38: rarer patches come up as rarely as they do in the box. */
export function draw(rand = Math.random): Patch {
  let r = rand() * TOTAL;
  for (const p of patches) {
    if ((r -= p.count) < 0) return p;
  }
  return patches[patches.length - 1];
}
