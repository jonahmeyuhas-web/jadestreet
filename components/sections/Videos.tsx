"use client";
import { useState } from "react";
import { videos } from "@/lib/data/videos";
import { site } from "@/lib/data/site";
import { SectionHead } from "@/components/chrome/Section";

function Player({ id, title, thumb }: { id: string; title: string; thumb: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="torn relative aspect-video w-full overflow-hidden bg-navy">
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
            src={thumb}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition-[transform,opacity] duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <span className="btn absolute bottom-4 left-4 !px-4 !py-2 text-sm text-white transition-colors group-hover:bg-white group-hover:text-ink md:bottom-6 md:left-6 md:px-5 md:py-[10px] md:text-base">
            Play
          </span>
        </button>
      )}
    </div>
  );
}

export default function Videos() {
  const [lead, ...others] = videos;
  return (
    <section id="videos" className="scroll-mt-20 px-5 pt-24 md:px-8 md:pt-36">
      <SectionHead
        title="Videos"
        aside={
          <a href={site.socials.find((s) => s.icon === "youtube")!.href} target="_blank" rel="noreferrer" className="display text-sm text-ice hover:text-white md:text-base">
            YouTube
          </a>
        }
      />
      <div className="reveal">
        <Player id={lead.id} title={lead.title} thumb={lead.thumb} />
        <div className="mt-3 flex items-baseline justify-between">
          <span className="display text-2xl md:text-4xl">{lead.title}</span>
          <span className="display text-xs text-white/50 md:text-sm">{lead.kind}</span>
        </div>
      </div>
      <ul className="reveal mt-10 grid gap-8 md:grid-cols-2">
        {others.map((v) => (
          <li key={v.id}>
            <Player id={v.id} title={v.title} thumb={v.thumb} />
            <div className="mt-3 flex items-baseline justify-between">
              <span className="display text-xl md:text-2xl">{v.title}</span>
              <span className="display text-xs text-white/50">{v.kind}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
