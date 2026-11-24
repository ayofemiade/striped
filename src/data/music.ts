/**
 * src: striped.world/content/world.json (the feed behind "the world"), read 24 Nov 2026.
 * Videos are public YouTube uploads by dylAn. Unreleased songs: TITLES ONLY (decision D4).
 * Audio is never downloaded, hosted or linked.
 */

export type Video = { id: string; title: string; type: string; date: string; artists?: string; place?: string };

export const performances: Video[] = [
  { id: "hzrGa5_fUm0", title: "Live at Grounded Showroom", type: "full live show", date: "2026-08-01", place: "Grounded Showroom" },
  { id: "W5pTA2Eyu2g", title: "'don't ya know' LIVE at Playoffs Vintage", type: "live performance", date: "2024-04-27", place: "Playoffs Vintage" },
  { id: "HyTpw9BOAjs", title: "'Pain (Acoustic)' live at Playoffs Vintage", type: "live performance", date: "2024-04-30", place: "Playoffs Vintage" },
  { id: "NOgfb_ttlxc", title: "'fAmily v1' (unreleased) live at Playoffs Vintage", type: "live performance", date: "2024-05-03", place: "Playoffs Vintage" },
];

export const videos: Video[] = [
  { id: "nzNNNXwJPLk", title: "Date night (Noche de cita)", type: "visualizer", date: "2026-10-13" },
  { id: "wteh1QwQolg", title: "Episode 002: “Questions & more questions.”", type: "episode", date: "2026-10-03" },
  { id: "9rkOpL9N-eA", title: "olive", type: "music video", date: "2025-07-18" },
  { id: "uafNSk217VY", title: "BROCKHAMPTON", type: "music video", date: "2025-05-28" },
  { id: "01DulqAQQHs", title: "Lemons, Pt. 2", type: "music video", date: "2025-05-17" },
  { id: "Q9iqJc68qK8", title: "dreAm AnAlysis (dylAn cover)", type: "cover", date: "2025-05-05" },
  { id: "8VxoTlC2sAs", title: "Galaxy (Visualizer/Lyric Video)", type: "visualizer / lyric video", date: "2025-02-12" },
  { id: "svQjiwupAfw", title: "GRINNIN", type: "music video", date: "2025-01-08" },
  { id: "TmIntF-AtlQ", title: "don't plAy", type: "music video", date: "2025-01-03" },
  { id: "9CD_CZD7-MU", title: "Heated Blankets", type: "music video", date: "2024-12-16" },
  { id: "0RsWVDRCyBU", title: "Eucalyptus", type: "music video", date: "2024-11-18" },
  { id: "iptd2LB4nRo", title: "Earthly Star", type: "music video", date: "2024-11-04" },
  { id: "kS2wqviZNvQ", title: "Intertwined", type: "music video", date: "2024-10-18" },
  { id: "FCkgcZlbRNQ", title: "Apathy", type: "music video", date: "2024-01-23", artists: "dylAn feat. Carter Ace" },
  { id: "LPNfiUeSsUY", title: "don't ya know", type: "music video", date: "2023-11-28" },
  { id: "9igFfWIyZVM", title: "Shape Of Sadness", type: "music video", date: "2023-11-16" },
];

/** Members only on striped.world. Shown as locked titles; nothing plays (D4). */
export const unreleased: { title: string; note?: string }[] = [
  { title: "belize v2 (demo)" },
  { title: "Ibiza" },
  { title: "Sneak n' Link v1", note: "Summer 2026 · LA" },
  { title: "Spendin'", note: "Summer 2026 · LA" },
  { title: "Twins", note: "Summer 2026 · LA" },
  { title: "backpack song v2", note: "prod. stephen niday + cam johnson" },
];

export const year = (d: string) => d.slice(0, 4);
