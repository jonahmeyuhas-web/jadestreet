"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid && !open ? "bg-ink/70 backdrop-blur-md" : ""}`}>
      <div className="flex items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" aria-label={`${site.name} home`} className="relative z-10">
          <img src={asset("/brand/wordmark-white.png")} alt={site.name} className="h-5 w-auto md:h-6" />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="display text-[17px] text-white/90 transition-colors hover:text-ice">
              {n.label}
            </a>
          ))}
        </nav>

        <button
          className="display relative z-10 text-[17px] text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile: full-screen */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 flex flex-col justify-end bg-ink/95 px-5 pb-12 transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col gap-2" aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display text-6xl text-white hover:text-ice">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
