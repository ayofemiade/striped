/**
 * The nine pieces, exactly as listed on striped.world/shop on 24 Nov 2026.
 * src: striped.world product pages (names, prices, descriptions, status labels, preferences,
 * "the details" and image alts are verbatim). Nothing here is invented.
 */

export type Kind = "hats" | "tees" | "hoodies";

export type Shot = { name: string; alt: string };

export type Product = {
  slug: string;
  name: string;
  kind: Kind;
  price: string; // as shown on striped.world
  priceNote?: string;
  status: string; // the site's own label
  edition: string; // the eyebrow on the product page
  oneOfOne: boolean;
  preview: boolean; // design preview or coming soon: never shown as a finished, photographed piece
  description: string;
  colours?: { label: string; preview?: boolean }[];
  styles?: { label: string; preview?: boolean }[];
  sizes: boolean;
  details: string;
  note?: string;
  card: Shot; // the shop card image
  shots: Shot[]; // gallery, in the site's order
};

const DETAILS_SIZED =
  "sizes and measurements will be confirmed with each piece. preferences help us plan the next drop; they are not confirmed stock. care instructions will come with the finished piece.";
const DETAILS_ONE_SIZE =
  "one size. preferences help us plan the next drop; they are not confirmed stock. care instructions will come with the finished piece.";

export const HOW_IT_WORKS =
  "join the interest list. we’ll follow up when the piece is ready with its exact price, size and delivery options. payment, shipping and returns will be confirmed before any purchase.";
export const INTEREST_NOTE =
  "unpaid preorder interest. no charge, reservation or guaranteed availability. we’ll confirm the details before you buy.";
export const ONE_OF_ONE_NOTE =
  "1/1 photos show the style. individual pieces, sizes and final prices will be confirmed before any payment.";

export const products: Product[] = [
  {
    slug: "blue-hat",
    name: "the blue dyLAn hat",
    kind: "hats",
    price: "$60",
    status: "register interest",
    edition: "the collection",
    oneOfOne: false,
    preview: false,
    description: "the first piece. royal blue, white embroidered dyLAn, curved brim. a little piece of this world.",
    colours: [{ label: "royal blue" }],
    sizes: false,
    details: DETAILS_ONE_SIZE,
    card: { name: "dylan-hat-blue-01", alt: "plain blue dyLAn hat with white embroidery, photographed on Polaroids" },
    shots: [
      { name: "dylan-hat-blue-01", alt: "plain blue dyLAn hat with white embroidery, photographed on Polaroids" },
      { name: "blue-hat-studio-nov26", alt: "the blue dyLAn hat, plain white embroidery, against a brick wall" },
      { name: "blue-hat-worn-front-nov26", alt: "the plain blue dyLAn hat worn in a shop, front view" },
      { name: "blue-hat-worn-back-nov26", alt: "the plain blue dyLAn hat worn backwards with a blue hoodie" },
      { name: "dylan-hat-blue-02", alt: "the blue dyLAn hat worn in the music studio" },
    ],
  },
  {
    slug: "green-hat",
    name: "the green dyLAn hat",
    kind: "hats",
    price: "$60",
    status: "register interest",
    edition: "the collection",
    oneOfOne: false,
    preview: false,
    description: "same world. new colorway. a green cap with white embroidered dyLAn and a curved brim.",
    colours: [{ label: "green" }],
    sizes: false,
    details: DETAILS_ONE_SIZE,
    card: { name: "green-hat-studio-nov26", alt: "the green dyLAn hat with plain white embroidery, front view" },
    shots: [
      { name: "green-hat-studio-nov26", alt: "the green dyLAn hat with plain white embroidery, front view" },
      { name: "green-hat-polaroids-nov26", alt: "the plain green dyLAn hat surrounded by Polaroids" },
      { name: "green-hat-worn-nov26", alt: "the plain green dyLAn hat worn outdoors with a black and white striped top" },
    ],
  },
  {
    slug: "striped-tee",
    name: "the striped tee",
    kind: "tees",
    price: "$20",
    priceNote: "individual 1/1 prices may vary",
    status: "1/1 · reference photos",
    edition: "1 of 1",
    oneOfOne: true,
    preview: false,
    description: "1/1 striped shirts. each one its own. finished by hand by dylAn in LA.",
    sizes: true,
    details: DETAILS_SIZED,
    card: { name: "striped-tee-04", alt: "a group of people in striped tees in a showroom" },
    shots: [
      { name: "striped-tee-01", alt: "the striped tee · view 1" },
      { name: "striped-tee-02", alt: "the striped tee · view 2" },
      { name: "striped-tee-03", alt: "the striped tee · view 3" },
      { name: "striped-tee-04", alt: "the striped tee · view 4" },
    ],
  },
  {
    slug: "butt-buddy-tee",
    name: "the Butt Buddy tee",
    kind: "tees",
    price: "$110",
    priceNote: "individual 1/1 prices may vary",
    status: "1/1 · reference photos",
    edition: "1 of 1",
    oneOfOne: true,
    preview: false,
    description:
      "a buddy always behind you. a real denim pocket, sewn low on the back. every pocket cut from real jeans. 1 of 1, no two alike.",
    sizes: true,
    details: DETAILS_SIZED,
    card: { name: "butt-buddy-tee-02", alt: "two people wearing cream and striped Butt Buddy tees with their back pockets visible" },
    shots: [
      { name: "butt-buddy-rack-nov26", alt: "a rack of Butt Buddy tees showing their denim back pockets" },
      { name: "butt-buddy-tee-04", alt: "cream Butt Buddy tee laid flat, showing the denim pocket" },
      { name: "butt-buddy-worn-skate-nov26", alt: "cream Butt Buddy tee worn while holding a skateboard, denim back pocket visible" },
      { name: "butt-buddy-worn-pocket-nov26", alt: "cream Butt Buddy tee worn with sunglasses and a toy tucked into its denim back pocket" },
      { name: "butt-buddy-worn-orange-nov26", alt: "orange and navy Butt Buddy tee worn in the studio, back pocket visible" },
      { name: "butt-buddy-tee-02", alt: "two people wearing cream and striped Butt Buddy tees with their back pockets visible" },
      { name: "butt-buddy-tee-06", alt: "cream and striped Butt Buddy tees being worn in the studio" },
    ],
  },
  {
    slug: "hat-v3",
    name: "the dyLAn hat V3",
    kind: "hats",
    price: "$75",
    status: "striped-logo edition",
    edition: "the striped-logo edition",
    oneOfOne: false,
    preview: false,
    description: "the next run. six colours. plain white dyLAn or white dyLAn with stripes. a little mark on each side.",
    note: "real photos show the blue and green striped-logo hats. other colours and finishes remain proposed designs.",
    colours: [
      { label: "blue" },
      { label: "green" },
      { label: "red", preview: true },
      { label: "yellow", preview: true },
      { label: "orange", preview: true },
      { label: "purple", preview: true },
    ],
    styles: [{ label: "striped lettering" }, { label: "plain lettering", preview: true }],
    sizes: false,
    details: DETAILS_ONE_SIZE,
    card: { name: "v3-blue-studio-nov26", alt: "blue dyLAn hat V3 with striped lettering, photographed in the music studio" },
    shots: [
      { name: "v3-blue-studio-nov26", alt: "blue dyLAn hat V3 with striped lettering, photographed in the music studio" },
      { name: "v3-green-studio-nov26", alt: "green dyLAn hat V3 with striped lettering, front view" },
      { name: "v3-blue-polaroids-nov26", alt: "blue dyLAn hat V3 on a collection of Polaroids" },
      { name: "v3-green-polaroids-nov26", alt: "green dyLAn hat V3 on a collection of Polaroids" },
      { name: "v3-blue-worn-studio-nov26", alt: "blue dyLAn hat V3 worn with a white ringer tee" },
      { name: "v3-blue-worn-stripes-nov26", alt: "blue dyLAn hat V3 worn with an orange and navy striped tee" },
      { name: "v3-green-worn-orange-nov26", alt: "green dyLAn hat V3 worn beside a rack of striped shirts" },
      { name: "v3-green-worn-polo-nov26", alt: "green dyLAn hat V3 worn with a green and white striped polo" },
      { name: "v3-green-worn-cream-nov26", alt: "green dyLAn hat V3 worn with a cream ringer tee" },
      { name: "v3-green-worn-grey-nov26", alt: "green dyLAn hat V3 worn with a grey distressed layer" },
    ],
  },
  {
    slug: "dylan-hoodie",
    name: "the dyLAn hoodie",
    kind: "hoodies",
    price: "$160",
    status: "design preview",
    edition: "coming soon · design preview",
    oneOfOne: false,
    preview: true,
    description: "heavyweight blank. 3D puff dyLAn on the chest, eye mark on the hood, stripes on the cuff. made in-house in LA.",
    colours: [{ label: "blue" }, { label: "red" }],
    sizes: true,
    details: DETAILS_SIZED,
    card: { name: "dylan-hoodie-blue-chest-closeup-mockup", alt: "design mockup · the dyLAn hoodie, blue, chest close-up" },
    shots: [
      { name: "dylan-hoodie-blue-chest-closeup-mockup", alt: "design mockup · the dyLAn hoodie, blue, chest close-up" },
      { name: "dylan-hoodie-blue-front-mockup", alt: "design mockup · the dyLAn hoodie, blue, front" },
      { name: "dylan-hoodie-red-front-mockup", alt: "design mockup · the dyLAn hoodie, red, front" },
    ],
  },
  {
    slug: "striped-distressed-hoodie",
    name: "the striped distressed hoodie",
    kind: "hoodies",
    price: "$135",
    priceNote: "individual 1/1 prices may vary",
    status: "1/1 · reference photos",
    edition: "1 of 1",
    oneOfOne: true,
    preview: false,
    description: "hand-distressed. hand-finished. a heavyweight Grounded hoodie with striped patches, each with its own character.",
    // src: @stripedattire, 20 Nov 2026
    note: "hoodies + sweats can be non-distressed per request.",
    sizes: true,
    details: DETAILS_SIZED,
    card: { name: "striped-distressed-hoodie-01", alt: "the striped distressed hoodie · view 1" },
    shots: [1, 2, 3, 4, 5].map((n) => ({
      name: `striped-distressed-hoodie-0${n}`,
      alt: `the striped distressed hoodie · view ${n}`,
    })),
  },
  {
    slug: "striped-distressed-tee",
    name: "the striped distressed tee",
    kind: "tees",
    price: "$30",
    status: "first look soon",
    edition: "coming soon · design preview",
    oneOfOne: false,
    preview: true,
    description: "a new take on the striped tee. first look coming soon.",
    sizes: true,
    details: DETAILS_SIZED,
    card: { name: "", alt: "" },
    shots: [],
  },
  {
    slug: "dylan-distressed-hoodie",
    name: "the dyLAn hoodie (distressed)",
    kind: "hoodies",
    price: "$185",
    status: "first look soon",
    edition: "coming soon · design preview",
    oneOfOne: false,
    preview: true,
    description: "the distressed edition. first look coming soon.",
    sizes: true,
    details: DETAILS_SIZED,
    card: { name: "", alt: "" },
    shots: [],
  },
];

export const bySlug = (slug: string) => products.find((p) => p.slug === slug);
export const KINDS: { id: "all" | Kind; label: string }[] = [
  { id: "all", label: "all" },
  { id: "hats", label: "hats" },
  { id: "tees", label: "tees" },
  { id: "hoodies", label: "hoodies" },
];
