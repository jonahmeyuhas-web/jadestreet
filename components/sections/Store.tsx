import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";

const words = ["Official merch", "T-shirts", "Ships worldwide", "Jade Street", "North America 2026"];

export default function Store() {
  return (
    <section id="store" className="scroll-mt-16 border-t border-bone/10">
      {/* Marquee strip */}
      <div className="marquee border-b border-bone/10 py-3" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k}>
            {Array.from({ length: 3 }).flatMap(() => words).map((w, i) => (
              <span key={k + "-" + i} className="display mx-6 text-2xl text-paper-dim">
                <span className="mr-6 text-star">★</span>{w}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <div className="reveal">
          <p className="eyebrow mb-3">Store</p>
          <h2 className="display text-[clamp(3rem,9vw,7.5rem)]">Merch</h2>
          <p className="mt-6 max-w-md text-paper-dim">
            Shirts and tour goods from the official store. New pieces drop with each release.
          </p>
          <a href={site.store} target="_blank" rel="noreferrer" className="btn btn-paper mt-8">Shop the store</a>
        </div>
        <a href={site.store} target="_blank" rel="noreferrer" className="reveal paper-panel group relative block aspect-[4/5] overflow-hidden md:aspect-[5/4]">
          <img
            src={asset("/brand/wordmark-black.png")}
            alt=""
            className="absolute left-1/2 top-1/2 w-[80%] -translate-x-1/2 -translate-y-1/2 -rotate-6 opacity-90 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105"
          />
          <span className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-widest2 text-ink/60">Official merchandise →</span>
        </a>
      </div>
    </section>
  );
}
