export type Video = { id: string; title: string; kind: string; thumb: string };

// YouTube IDs. `thumb` is pinned to a size that actually exists for that
// video (YouTube only has maxresdefault for HD uploads).
const yt = (id: string, q: "maxresdefault" | "sddefault" | "hqdefault") => `https://i.ytimg.com/vi/${id}/${q}.jpg`;

export const videos: Video[] = [
  { id: "Xcw0WSw2mJY", title: "The News", kind: "Official Video", thumb: yt("Xcw0WSw2mJY", "maxresdefault") },
  { id: "M-keULxaRw0", title: "June", kind: "Official Visualizer", thumb: yt("M-keULxaRw0", "sddefault") },
  { id: "kpAwizM6Wlk", title: "Iguana", kind: "Official Video", thumb: yt("kpAwizM6Wlk", "maxresdefault") },
];
