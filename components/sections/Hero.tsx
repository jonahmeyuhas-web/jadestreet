import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Photo */}
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={asset("/brand/hero-mobile.jpg")} />
        <img
          src={asset("/brand/hero.jpg")}
          alt=""
          className="h-full w-full object-cover object-[62%_center] md:object-center"
          fetchPriority="high"
        />
      </picture>
      {/* Grade: deepen the bottom so the wordmark and buttons sit cleanly */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 via-45% to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-32 md:px-8 md:pb-16">
        <img
          src={asset("/brand/wordmark-white.png")}
          alt={site.name}
          className="w-full max-w-[1100px] drop-shadow-[0_8px_30px_rgba(0,0,0,.6)]"
        />
        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
          <p className="font-mono text-xs uppercase tracking-widest2 text-paper/80 md:text-sm">
            {site.tagline} &nbsp;·&nbsp; North America 2026
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={site.presave} target="_blank" rel="noreferrer" className="btn btn-paper">
              Presave the next release
            </a>
            <a href="#live" className="btn btn-ghost">Tour dates</a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#live" aria-label="Scroll" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 font-mono text-[10px] tracking-widest2 text-paper/50 md:block">
        ↓
      </a>
    </section>
  );
}
