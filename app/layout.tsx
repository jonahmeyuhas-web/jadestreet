import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Courier_Prime, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";

const display = Barlow_Condensed({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const mono = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });
const sans = Inter({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: `${site.name} | Official Site`, template: `%s | ${site.name}` },
  description: `${site.name} is a duo from Los Angeles. Tour dates, music, videos, merch.`,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} | Official Site`,
    description: site.tagline,
    images: [{ url: asset("/brand/og.jpg"), width: 1200, height: 800 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: asset("/favicon.svg") },
};

export const viewport: Viewport = { themeColor: "#07070c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${sans.variable}`}>
      <body>
        {children}
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
