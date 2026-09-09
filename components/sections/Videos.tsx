"use client";
import { useState } from "react";
import { videos } from "@/lib/data/videos";
import { site } from "@/lib/data/site";
import { SectionHead } from "@/components/chrome/Section";

function Player({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-dusk">
      {on ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button onClick={() => setOn(true)} className="group absolute inset-0 block h-full w-full" aria-label={`Play ${title}`}>
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center bg-paper text-ink shadow-[5px_5px_0_var(--star)] transition-transform group-hover:-translate-x-[calc(50%+2px)] group-hover:-translate-y-[calc(50%+2px)]">
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function Videos() {
  const [lead, ...others] = videos;
  return (
    <section id="videos" className="scroll-mt-16 border-t border-bone/10 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow="Videos"
          title="Watch"
          aside={
            <a href={site.socials.find((s) => s.icon === "youtube")!.href} target="_blank" rel="noreferrer" className="font-mono text-xs uppercase tracking-widest2 text-paper-dim underline decoration-star decoration-2 underline-offset-4 hover:text-paper">
              YouTube channel
            </a>
          }
        />
        <div className="reveal">
          <Player id={lead.id} title={lead.title} />
          <div className="mt-3 flex items-baseline justify-between">
            <span className="display text-3xl text-paper md:text-4xl">{lead.title}</span>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper-dim">{lead.kind}</span>
          </div>
        </div>
        <ul className="reveal mt-12 grid gap-8 md:grid-cols-2">
          {others.map((v) => (
            <li key={v.id}>
              <Player id={v.id} title={v.title} />
              <div className="mt-3 flex items-baseline justify-between">
                <span className="display text-2xl text-paper md:text-3xl">{v.title}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest2 text-paper-dim">{v.kind}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
