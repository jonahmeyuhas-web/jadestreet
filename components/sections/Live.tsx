import { upcoming, fmtDate, supportLabels } from "@/lib/data/tour";
import { SectionHead } from "@/components/chrome/Section";

export default function Live() {
  const shows = upcoming();
  return (
    <section id="live" className="scroll-mt-20 px-5 pt-24 md:px-8 md:pt-36">
      <SectionHead title="Live" />

      {shows.length === 0 ? (
        <p className="reveal display text-xl text-white/60 md:text-2xl">No upcoming concerts or festivals</p>
      ) : (
        <ol className="reveal border-t border-white/10">
          {shows.map((s) => {
            const d = fmtDate(s.date);
            return (
              <li key={s.date + s.city} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/10 py-4 md:grid-cols-[140px_1fr_1fr_auto] md:gap-8 md:py-5">
                <div className="min-w-0 md:contents">
                  <span className="display block text-base text-ice md:text-3xl">{d.mon} {d.day}</span>
                  <span className="min-w-0 block">
                    <span className="display block text-2xl md:text-3xl">{s.city}</span>
                    {s.venue && <span className="display block text-xs text-white/50 md:hidden">{s.venue}</span>}
                  </span>
                  <span className="display hidden text-sm text-white/50 md:block">
                    {s.venue ?? "Venue TBA"}
                    {s.with && s.with !== "headline" && <span className="ml-3">{supportLabels[s.with]}</span>}
                  </span>
                </div>
                <span className="justify-self-end">
                  {s.tickets ? (
                    <a href={s.tickets} target="_blank" rel="noreferrer" className="btn !px-4 !py-2 !text-[13px] md:!px-5 md:!py-[10px] md:!text-sm">Tickets</a>
                  ) : (
                    <span className="display text-xs text-white/40">Past</span>
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
