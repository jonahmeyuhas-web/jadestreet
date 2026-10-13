// Every outbound link on the site lives here so the band can update one file.
export const site = {
  name: "Jade Street",
  tagline: "A duo from Los Angeles.",
  url: "https://jadestreet.band", // swap for the real domain when it exists
  presave: "https://ffm.to/qemy44b",
  tour: "https://www.bandsintown.com/a/15606489-jade-street",
  store: "https://band-109993.square.site/s/shop?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
  linktree: "https://linktr.ee/Jadestreetlink",
  // Mailing list lives on Laylo; the Sign up button links here.
  mailingList: "https://laylo.com/jadestreet",
  // Optional: a form endpoint to collect emails inline instead. While empty,
  // the Sign up section shows the button to `mailingList`.
  signupAction: "",
  socials: [
    { label: "Spotify", href: "https://open.spotify.com/artist/1tDivTkprR30MAE1Q0nb11", icon: "spotify" },
    { label: "Apple Music", href: "https://music.apple.com/us/artist/jade-street/1831136142", icon: "apple" },
    { label: "YouTube", href: "https://www.youtube.com/@jadestreeet", icon: "youtube" },
    { label: "Instagram", href: "https://www.instagram.com/jadestreeet/", icon: "instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@jadestreeeet", icon: "tiktok" },
  ],
  // `external` links open in a new tab; the rest scroll to a section.
  nav: [
    { label: "Live", href: "https://www.bandsintown.com/a/15606489-jade-street", external: true },
    { label: "Listen", href: "#music", external: false },
    { label: "Watch", href: "#videos", external: false },
    { label: "Store", href: "https://band-109993.square.site/s/shop?utm_source=ig&utm_medium=social&utm_content=link_in_bio", external: true },
    { label: "Sign Up", href: "#signup", external: false },
  ],
} as const;

export type SocialIcon = (typeof site.socials)[number]["icon"];
