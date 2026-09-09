"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";
import { Icon } from "./Icons";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 md:px-8">
        {/* Left: nav words (desktop) / burger (mobile) */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="font-display text-[15px] uppercase tracking-wider text-bone/85 hover:text-paper">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden font-mono text-xs uppercase tracking-widest2 text-bone/85"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Center: wordmark */}
        <a href="#top" className="block" aria-label={`${site.name} home`}>
          <img
            src={asset("/brand/wordmark-white.png")}
            alt={site.name}
            className={`h-[18px] w-auto transition-opacity duration-500 sm:h-6 md:h-7 ${solid ? "opacity-100" : "opacity-0"}`}
          />
        </a>

        {/* Right: socials */}
        <div className="flex items-center justify-end gap-3 md:gap-4">
          {site.socials.map((s, i) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className={`text-bone/80 hover:text-paper ${i > 2 ? "hidden sm:block" : ""}`}>
              <Icon name={s.icon} className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden bg-ink/95 backdrop-blur-md transition-[max-height] duration-400 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2" aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display py-2 text-4xl text-paper">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
