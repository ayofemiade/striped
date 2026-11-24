/**
 * The striped.world photo album: 31 photos. src: world.json; alts are STRIPED's own.
 * No people are named. Captions say only what the photo shows.
 */
export type ArchivePhoto = { name: string; alt: string; category: "events" | "attire"; framed: boolean };

const raw: [number, string, "events" | "attire"][] = [
  [1, "A person in a gray and white striped shirt standing in front of a sofa.", "attire"],
  [2, "A person wearing a blue and white striped shirt and a long denim skirt.", "attire"],
  [3, "Four people posing together in striped shirts indoors.", "events"],
  [4, "A group lying in a circle with their heads together, wearing striped tops.", "events"],
  [5, "A person in a turquoise top lying on a red and white striped blanket.", "attire"],
  [6, "A person reclining on a striped blanket on the grass.", "attire"],
  [7, "A person in a blue and white striped sweater against a red striped backdrop.", "attire"],
  [8, "A close-up of a pink and gray striped graphic T-shirt.", "attire"],
  [9, "A close-up of a brown striped shirt with layered necklaces and bracelets.", "attire"],
  [10, "A group standing together on a sunny lawn, several wearing striped shirts.", "events"],
  [11, "A person wearing a turquoise striped shirt on a street.", "attire"],
  [12, "Two people in striped shirts, one styling the other’s hair indoors.", "events"],
  [13, "A seated person in a red striped shirt inside a kitchen.", "attire"],
  [14, "A person in a striped shirt and patterned hat seated indoors.", "attire"],
  [15, "A person in a striped shirt standing in a room with a cloud of smoke.", "attire"],
  [16, "Two people in red and turquoise striped tops at an indoor gathering.", "events"],
  [17, "A group gathered around a sofa in colorful striped tops.", "events"],
  [18, "A candid nighttime photo of people with a bright striped shirt in the foreground.", "events"],
  [19, "A pale blue and white striped polo shirt laid across rocks.", "attire"],
  [20, "A person wearing a red striped shirt seated in warm sunlight.", "attire"],
  [21, "A sunlit portrait of a person in a red striped shirt beside a window.", "attire"],
  [22, "A Polaroid of a person in a blue striped shirt standing in a doorway.", "attire"],
  [23, "A Polaroid of two people in striped shirts beside an outdoor railing.", "attire"],
  [24, "A Polaroid of a person in a blue striped shirt against a pink wall.", "attire"],
  [25, "A Polaroid of a person holding a blue striped shirt against a pink wall.", "attire"],
  [26, "A Polaroid of a person wearing a striped top and striped shorts.", "attire"],
  [27, "A Polaroid portrait of a person wearing a blue striped shirt and patterned cap.", "attire"],
  [28, "A Polaroid of a person in a dark striped shirt leaning against a railing.", "attire"],
  [29, "A Polaroid of a smiling person in a red striped shirt and dark cap.", "attire"],
  [30, "A Polaroid of a striped shirt displayed outdoors beneath a wide sky.", "attire"],
  [31, "A Polaroid close-up of brown and white horizontal stripes.", "attire"],
];

export const archive: ArchivePhoto[] = raw.map(([n, alt, category]) => ({
  name: `polaroid-${String(n).padStart(2, "0")}`,
  alt,
  category,
  framed: n >= 22,
}));

export const photo = (n: number) => archive[n - 1];
