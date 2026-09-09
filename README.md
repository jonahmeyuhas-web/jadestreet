# Jade Street — official site

Single-page band site. Next.js 14 (App Router) exported to static HTML, Tailwind for styling, no other runtime dependencies.

Palette: black, dusk navy, one electric blue. Type: Helvetica Neue Black (licensed file in `public/fonts/`, Archivo Black fallback). No other colors or fonts.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3040.

## Where things live

| Path | What |
|---|---|
| `lib/data/site.ts` | Every outbound link: presave, tour, store, socials, newsletter endpoint. |
| `lib/data/tour.ts` | Tour dates. Past dates hide automatically at build time. |
| `lib/data/releases.ts` | Releases with artwork in `public/art/`. Newest first, one marked `featured`. |
| `lib/data/videos.ts` | YouTube IDs for the Watch section. |
| `components/sections/` | The page, one file per section, in page order. |
| `components/chrome/` | Nav, footer, icons, scroll reveal. |
| `app/globals.css` | Tokens, buttons, grain, reveal, marquee. |
| `public/brand/` | Wordmarks and hero photo. |
| `public/fonts/` | Drop the licensed `HelveticaNeueBlack.woff2` here; Archivo Black is the fallback. |

## Updating content

- **New release**: drop a 1000×1000 JPEG in `public/art/`, add an entry at the top of `releases.ts`, move `featured: true` to it.
- **New tour**: replace the `shows` array in `tour.ts`. Rebuild; past dates fall off on their own.
- **Newsletter**: set `signupAction` in `site.ts` to your provider's form endpoint. Until then the section links to the Linktree mailing list.

## Deploy

`npm run build` writes a fully static site to `out/`. It runs anywhere: Vercel (zero config), GitHub Pages (workflow included in `.github/workflows/pages.yml`), or any static host.

For GitHub Pages without a custom domain, the workflow sets `NEXT_PUBLIC_BASE_PATH=/jadestreet`. With a custom domain, remove that env line.
