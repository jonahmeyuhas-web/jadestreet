import { site } from "@/lib/data/site";
import { upcoming, fmtDate, supportLabels } from "@/lib/data/tour";
import { SectionHead } from "@/components/chrome/Section";

export default function Live() {
  const shows = upcoming();
  return (
    <section id="live" className="paper-panel scroll-mt-16 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="Live"
          title="North America 2026"
          aside={
            <a href={site.tour} target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-widest2 underline decoration-star decoration-2 underline-offset-4 hover:text-star">
              All dates on Bandsintown
            </a>
          }
        />

        {shows.length === 0 ? (
          <p className="reveal font-mono text-sm uppercase tracking-widest2">No dates announced. Sign up below to hear first.</p>
        ) : (
          <ol className="reveal">
            {shows.map((s) => {
              const d = fmtDate(s.date);
              return (
                <li key={s.date + s.city} className="group">
                  <div className="rule" />
                  <div className="grid grid-cols-[72px_1fr_auto] items-center gap-4 py-4 md:grid-cols-[120px_1fr_1fr_auto] md:gap-8 md:py-5">
                    <div className="font-mono leading-none">
                      <span className="block text-[10px] tracking-widest2 text-ink/50">{d.dow}</span>
                      <span className="display block text-3xl md:text-4xl">{d.mon} {d.day}</span>
                    </div>
                    <div>
                      <span className="display block text-2xl md:text-3xl">{s.city}</span>
                      {s.venue && <span className="block font-mono text-xs uppercase tracking-widest text-ink/60 md:hidden">{s.venue}</span>}
                    </div>
                    <div className="hidden font-mono text-xs uppercase tracking-widest text-ink/60 md:block">
                      {s.venue ?? "Venue TBA"}
                      {s.with && <span className="ml-3 text-star">{supportLabels[s.with]}</span>}
                    </div>
                    <div className="justify-self-end">
                      {s.tickets ? (
                        <a href={s.tickets} target="_blank" rel="noreferrer" className="btn btn-star !px-4 !py-2 !text-[13px]">Tickets</a>
                      ) : (
                        <span className="font-mono text-[11px] uppercase tracking-widest2 text-ink/40">Past</span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="rule" />
          </ol>
        )}

        <p className="reveal mt-8 font-mono text-[11px] uppercase tracking-widest text-ink/50">
          ★ Headline &nbsp; · &nbsp; support slots marked in red
        </p>
      </div>
    </section>
  );
}
