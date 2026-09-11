"use client";
import { useState } from "react";
import { videos } from "@/lib/data/videos";
import { site } from "@/lib/data/site";
import { SectionHead } from "@/components/chrome/Section";
import Carousel from "@/components/chrome/Carousel";

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
      <Carousel
        items={videos}
        label="Videos"
        className="reveal"
        mediaMaxWidth={1000}
        render={(v) => (
          <div className="mx-auto w-full max-w-[1000px] text-center">
            {/* Only the active slide is rendered, so this remounts on change
                and a playing iframe is torn down with it. */}
            <div data-carousel-media>
              <Player key={v.id} id={v.id} title={v.title} thumb={v.thumb} />
            </div>
            <h3 className="display mt-5 text-2xl md:text-3xl">{v.title}</h3>
            <p className="display mt-2 text-xs text-white/50">{v.kind}</p>
          </div>
        )}
      />
    </section>
  );
}
