// Every outbound link on the site lives here so the band can update one file.
export const site = {
  name: "Jade Street",
  tagline: "A duo from Los Angeles.",
  url: "https://jadestreet.band", // swap for the real domain when it exists
  presave: "https://ffm.to/qemy44b",
  tour: "https://bnds.us/cb5yeo",
  store: "https://band-109993.square.site/s/shop",
  linktree: "https://linktr.ee/Jadestreetlink",
  // Newsletter: set to your provider's form endpoint (Mailchimp, Laylo,
  // Buttondown, Formspree...). While empty, the sign-up section links out
  // to the Linktree mailing list form instead of showing a dead form.
  signupAction: "",
  socials: [
    { label: "Spotify", href: "https://open.spotify.com/artist/1tDivTkprR30MAE1Q0nb11", icon: "spotify" },
    { label: "Apple Music", href: "https://music.apple.com/us/artist/jade-street/1831136142", icon: "apple" },
    { label: "YouTube", href: "https://www.youtube.com/@jadestreeet", icon: "youtube" },
    { label: "Instagram", href: "https://www.instagram.com/jadestreeet/", icon: "instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@jadestreeet", icon: "tiktok" },
  ],
  nav: [
    { label: "Live", href: "#live" },
    { label: "Music", href: "#music" },
    { label: "Videos", href: "#videos" },
    { label: "Store", href: "#store" },
    { label: "Sign Up", href: "#signup" },
  ],
} as const;

export type SocialIcon = (typeof site.socials)[number]["icon"];
