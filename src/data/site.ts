/**
 * Site-wide copy. Lines without a `// pending` mark are STRIPED's own words (source noted).
 * Lines marked `// pending` are ours and need STRIPED's approval.
 */
export const site = {
  name: "STRIPED",
  url: "https://striped-world-demo.vercel.app", // pending: demo host
  tagline: "a little piece of this world.", // src: striped.world (every page)
  trio: ["the clothes.", "the music.", "the world."], // src: striped.world home
  bio: "100% sustainable casual wear brand est. 2024", // src: @stripedattire bio (D5: approved for use, quoted)
  by: "by dylAn", // src: striped.world footer
  place: "based in Los Angeles, CA", // src: @stripedattire bio
  instagram: [
    { handle: "@stripedattire", href: "https://www.instagram.com/stripedattire/" },
    { handle: "@itndylAn", href: "https://www.instagram.com/itndylAn/" },
  ],
  demo: "concept by MoyoCode · a demo for STRIPED, not the live store", // pending (D7)
};

/**
 * `soon`: pages outside the demo's scope. Shown, but not clickable, until STRIPED commissions them.
 * "join" points at the join chapter on the homepage, which works.
 */
export const nav: { href: string; label: string; soon?: boolean }[] = [
  { href: "/shop", label: "shop" },
  { href: "/world", label: "the world", soon: true },
  { href: "/about", label: "about", soon: true },
];
export const JOIN_HREF = "/#join";

/** Homepage chapters. Each is a stripe. */
export const home = {
  heroCaption: { label: "from the striped.world album", text: "a lawn full of stripes." }, // pending: caption describes the photo only
  ch1: {
    title: "every stripe has a story.", // src: world.json "Stripes with a life of their own"
    aside: "vintage finds · custom patchwork · dyed pieces", // src: same teaser
    statement: ["small runs, ", "hand-finished", " pieces, and a love for the things that make us different."], // src: /about
    sub: "made in LA. made to feel like you.", // src: /about
    facts: ["made in-house at Grounded", "1 of 1, no two alike", "est. 2024 · Los Angeles"], // src: /about, Butt Buddy page, bio
    collageCredit: "collage by @zarasride", // src: IG captions, Jul–Aug 2026
  },
  ch2: {
    title: "the pieces.",
    aside: "browse the pieces. leave your name. no payment today.", // src: /shop
    cta: "all nine pieces", // pending
  },
  ch3: {
    title: "before → after.", // src: @publicestrellas caption "Before ➡️ After"
    aside: "thrifted. distressed. patched. by hand.", // pending: summary of verified captions
    before: "two sweaters, picked up at Public Estrellas in Lincoln Heights, for the new collection.", // src: @publicestrellas caption, paraphrased // pending
    after: "“Bad case of the STRIPES.”", // src: @publicestrellas
    afterBy: "@publicestrellas",
    suit: "1/1 distressed + patch-worked heather grey sweatsuit on @groundedblanks", // src: @stripedattire, 4 Nov 2026
    suitAside: "“it’s funny making this post because I made this for myself yeah 😅👍🏽”", // src: same caption
    makers: [
      { role: "thrift", who: "Public Estrellas", where: "Lincoln Heights" },
      { role: "patches", who: "Run It Wave", where: "Arizona" },
      { role: "embroidery", who: "Nela Prints", where: "Highland Park" },
      { role: "blanks + home", who: "Grounded Showroom", where: "Los Angeles" },
    ], // src: IG captions 15, 21, 22 Nov 2026 and the dyLAn hat card
  },
  ch4: {
    title: "you don’t get to pick.",
    aside: "STRIPED™ Mystery Patches · 1 for $10", // src: IG caption 22 Nov 2026
    // pending: our plain explainer, built only from the verified caption + poster
    what: "a little square of recycled denim or khaki, printed with the STRIPED tee. sew it on anything. you pay, the box decides which one you get.",
  },
  ch5: {
    title: "the music lives here too.", // pending
    aside: "me r🅰️p on mic + 💙 striped t’s & hats w/ pins", // src: @itndylAn bio
    line: "same hands. same rooms.", // pending
    sub: "dylAn plays where the clothes live: the racks at Playoffs Vintage, the floor at Grounded Showroom.", // pending: built from feed titles
    photoCaption: "a room full of stripes, and a guitar.", // pending: describes the photo only
  },
  ch6: { title: "the people.", aside: "from the striped.world album" },
  ch7: {
    title: "you’re part of the world.", // src: /contact
    sub: "new pieces. little updates. straight to you.", // src: /contact
    music: "join for unreleased music, performances and the moments in between.", // src: home
  },
};

export const careLabel = [
  ["made in", "Los Angeles, CA"], // src: bio, /about
  ["finished", "by hand"], // src: /about
  ["edition", "small runs · 1 of 1"], // src: /about, product pages
  ["contents", "stripes 100%"], // pending: playful, mirrors their "Patch Facts" label
  ["care", "wear it. trade it. pass it on."], // pending
];
