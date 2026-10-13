import type { Metadata, Viewport } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";

const archivo = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} | Official Site`, template: `%s | ${site.name}` },
  description: `${site.name}. Tour dates, music, videos, merch.`,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} | Official Site`,
    description: site.tagline,
    images: [{ url: asset("/brand/og.jpg"), width: 1200, height: 800 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: asset("/favicon.ico"), sizes: "16x16 32x32 48x48" },
      { url: asset("/favicon-32.png"), type: "image/png", sizes: "32x32" },
      { url: asset("/icon-192.png"), type: "image/png", sizes: "192x192" },
      { url: asset("/icon-512.png"), type: "image/png", sizes: "512x512" },
    ],
    apple: { url: asset("/apple-touch-icon.png"), sizes: "180x180" },
  },
};

export const viewport: Viewport = { themeColor: "#050609" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const vars = `:root{--tex-light:url("${asset("/brand/scratches.webp")}");--mask-box:url("${asset("/brand/rough-box.png")}");--mask-burn:url("${asset("/brand/burn.png")}");--rule:url("${asset("/brand/rule.png")}");}`;
  const fontFace = `@font-face{font-family:"Helvetica Neue Black";src:local("HelveticaNeue-Black"),local("Helvetica Neue Black"),local("HelveticaNeueLTStd-Blk"),url("${asset("/fonts/HelveticaNeueBlack.woff2")}") format("woff2");font-weight:400 900;font-style:normal;font-display:swap;}`;
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: vars + fontFace }} />
      </head>
      <body>
        <div className="bgfx" aria-hidden>
          <img src={asset("/brand/backdrop.jpg")} alt="" decoding="async" />
        </div>
        {children}
        <div className="tex" aria-hidden />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
