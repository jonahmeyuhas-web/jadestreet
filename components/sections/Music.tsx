import { releases } from "@/lib/data/releases";
import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";
import { SectionHead } from "@/components/chrome/Section";

function year(iso: string) { return iso.slice(0, 4); }

export default function Music() {
  const featured = releases.find((r) => r.featured) ?? releases[0];
  const rest = releases.filter((r) => r !== featured);

  return (
    <section id="music" className="scroll-mt-16 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="Music"
          title="Releases"
          aside={
            <a href={site.presave} target="_blank" rel="noreferrer" className="btn btn-paper">Presave the next one</a>
          }
        />

        {/* Featured */}
        <div className="reveal grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
          <a href={featured.apple} target="_blank" rel="noreferrer" className="group block">
            <img
              src={asset(featured.art)}
              alt={`${featured.title} artwork`}
              className="aspect-square w-full object-cover shadow-[12px_12px_0_var(--star)] transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
          </a>
          <div>
            <p className="eyebrow mb-4">Latest {featured.kind} · {year(featured.date)}</p>
            <h3 className="display text-[clamp(3.5rem,10vw,9rem)] text-paper">{featured.title}</h3>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={featured.spotify} target="_blank" rel="noreferrer" className="btn btn-ghost">Spotify</a>
              <a href={featured.apple} target="_blank" rel="noreferrer" className="btn btn-ghost">Apple Music</a>
            </div>
          </div>
        </div>

        {/* Back catalogue */}
        <ul className="reveal mt-20 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {rest.map((r) => (
            <li key={r.slug} className="group">
              <a href={r.apple} target="_blank" rel="noreferrer" className="block">
                <img
                  src={asset(r.art)}
                  alt={`${r.title} artwork`}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:-translate-y-1"
                />
              </a>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <span className="display text-2xl text-paper">{r.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper-dim">{r.kind} · {year(r.date)}</span>
              </div>
              <div className="mt-1 flex gap-4 font-mono text-[11px] uppercase tracking-widest text-paper-dim">
                <a href={r.spotify} target="_blank" rel="noreferrer" className="hover:text-jade">Spotify</a>
                <a href={r.apple} target="_blank" rel="noreferrer" className="hover:text-jade">Apple</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
