import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";
import { upcoming, fmtDate } from "@/lib/data/tour";

export default function Hero() {
  const next = upcoming()[0];
  const d = next ? fmtDate(next.date) : null;

  return (
    <section id="top" className="relative flex h-[100svh] min-h-[600px] items-end overflow-hidden">
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={asset("/brand/hero-mobile.jpg")} />
        <img
          src={asset("/brand/hero.jpg")}
          alt=""
          className="h-full w-full object-cover object-[62%_center] md:object-center"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 via-45% to-transparent" aria-hidden />

      <div className="relative w-full px-5 pb-10 md:px-8 md:pb-12">
        <img
          src={asset("/brand/wordmark-white.png")}
          alt={site.name}
          className="hero-in w-full max-w-[1000px]"
        />

        <div className="hero-in-2 mt-10 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="display text-[clamp(1.55rem,4.2vw,3.6rem)] text-blue">North America 2026</h1>
            <p className="display mt-1 text-[clamp(1rem,1.6vw,1.35rem)] text-white/90">Tickets on sale now</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="#live" className="btn">Tour dates</a>
              <a href={site.presave} target="_blank" rel="noreferrer" className="btn">Presave</a>
            </div>
          </div>
          {next && d && (
            <a href="#live" className="display text-sm text-blue md:text-base">
              Next stop: {next.city} · {d.mon} {d.day}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
