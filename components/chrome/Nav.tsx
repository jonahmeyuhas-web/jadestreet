"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";
import { Icon } from "./Icons";

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
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid && !open ? "bg-ink/90 md:bg-ink/75 md:backdrop-blur-md" : ""}`}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-4 md:px-8 md:py-5">
        {/* Left: tabs (desktop) / menu (mobile) */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} {...(n.external ? { target: "_blank", rel: "noreferrer" } : {})} className="display text-[17px] text-white/90 transition-colors hover:text-ice">
              {n.label}
            </a>
          ))}
        </nav>
        <button
          className="display relative z-10 justify-self-start text-[17px] text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>

        {/* Center: wordmark */}
        <a href="#top" aria-label={`${site.name} home`} className="relative z-10">
          <img src={asset("/brand/wordmark-white.png")} alt={site.name} className="h-[18px] w-auto sm:h-6 md:h-7" />
        </a>

        {/* Right: socials */}
        <div className="flex items-center justify-end gap-3 md:gap-4">
          {site.socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className={`text-white/85 transition-colors hover:text-ice ${i > 2 ? "hidden sm:block" : ""}`}
            >
              <Icon name={s.icon} className="h-[18px] w-[18px] md:h-5 md:w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile: full-screen menu */}
      <div
        id="mobile-nav"
        className={`fixed inset-0 flex flex-col justify-end bg-ink/95 px-5 pb-12 transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col gap-2" aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} {...(n.external ? { target: "_blank", rel: "noreferrer" } : {})} onClick={() => setOpen(false)} className="display text-6xl text-white hover:text-ice">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
