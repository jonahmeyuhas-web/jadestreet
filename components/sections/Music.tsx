import { releases } from "@/lib/data/releases";
import { asset } from "@/lib/base";
import { SectionHead } from "@/components/chrome/Section";

const year = (iso: string) => iso.slice(0, 4);

export default function Music() {
  const featured = releases.find((r) => r.featured) ?? releases[0];
  const rest = releases.filter((r) => r !== featured);

  return (
    <section id="music" className="scroll-mt-20 px-5 pt-24 md:px-8 md:pt-36">
      <SectionHead title="Music" />

      {/* Featured, centered like a record on a wall */}
      <div className="reveal mx-auto flex max-w-[560px] flex-col items-center text-center">
        <a href={featured.apple} target="_blank" rel="noreferrer" className="group block w-full">
          <img
            src={asset(featured.art)}
            alt={`${featured.title} artwork`}
            className="torn aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </a>
        <h3 className="display mt-8 text-[clamp(2.5rem,6vw,4.5rem)]">{featured.title}</h3>
        <p className="display mt-1 text-sm text-ice md:text-base">{featured.kind} · Out now</p>
        <div className="mt-6 flex gap-2">
          <a href={featured.spotify} target="_blank" rel="noreferrer" className="btn">Spotify</a>
          <a href={featured.apple} target="_blank" rel="noreferrer" className="btn">Apple Music</a>
        </div>
      </div>

      <ul className="reveal mt-20 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-28 md:grid-cols-4 md:gap-x-6">
        {rest.map((r) => (
          <li key={r.slug} className="group">
            <a href={r.apple} target="_blank" rel="noreferrer" className="block">
              <img
                src={asset(r.art)}
                alt={`${r.title} artwork`}
                loading="lazy"
                className="torn aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
            <div className="mt-3 flex items-baseline justify-between gap-3">
              <span className="display text-xl md:text-2xl">{r.title}</span>
              <span className="display text-xs text-white/50">{year(r.date)}</span>
            </div>
            <div className="display mt-1 flex gap-3 text-xs text-ice">
              <a href={r.spotify} target="_blank" rel="noreferrer" className="hover:text-white">Spotify</a>
              <a href={r.apple} target="_blank" rel="noreferrer" className="hover:text-white">Apple</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
