export type Release = {
  slug: string;
  title: string;
  kind: "EP" | "Single";
  date: string; // ISO
  art: string;  // /art/*.jpg
  apple: string;
  spotify: string; // artist page until per-release links are added
  featured?: boolean;
  show?: boolean;
};

const SPOTIFY = "https://open.spotify.com/artist/1tDivTkprR30MAE1Q0nb11";

// Newest first. Artwork is pulled from the official releases.
export const releases: Release[] = [
  {
    slug: "spider",
    title: "Spider",
    kind: "Single",
    date: "2026-10-02",
    art: "/art/spider.jpg",
    apple: "https://music.apple.com/us/album/spider-single/6810000599",
    spotify: "https://open.spotify.com/track/70OK0hf2bDAk51Jb5mkk7A",
    show: true,
  },
  {
    slug: "iguana",
    title: "Iguana",
    kind: "Single",
    date: "2026-06-12",
    art: "/art/iguana.jpg",
    apple: "https://music.apple.com/us/album/iguana-single/6769920607",
    spotify: "https://open.spotify.com/track/45om1bmc2YBOvXRWJDXdih",
    show: true,
  },
  {
    slug: "the-news-ep",
    title: "The News",
    kind: "EP",
    date: "2026-01-16",
    art: "/art/the-news-ep.jpg",
    apple: "https://music.apple.com/us/album/the-news-ep/6776544834",
    spotify: "https://open.spotify.com/album/3h4gqc6HPujvEWV9Vj4zV5",
    show: true,
  },
  {
    slug: "feels-like-green",
    title: "Feels Like Green",
    kind: "Single",
    date: "2025-11-13",
    art: "/art/feels-like-green.jpg",
    apple: "https://music.apple.com/us/album/feels-like-green-single/6776493360",
    spotify: SPOTIFY,
  },
  {
    slug: "satellites",
    title: "Satellites",
    kind: "Single",
    date: "2025-10-28",
    art: "/art/satellites.jpg",
    apple: "https://music.apple.com/us/album/satellites-single/6776102690",
    spotify: SPOTIFY,
  },
  {
    slug: "bad-man",
    title: "Bad Man",
    kind: "Single",
    date: "2025-09-03",
    art: "/art/bad-man.jpg",
    apple: "https://music.apple.com/us/album/bad-man-single/6776052008",
    spotify: SPOTIFY,
  },
];
