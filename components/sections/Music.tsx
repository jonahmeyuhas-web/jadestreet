"use client";
import { releases } from "@/lib/data/releases";
import { asset } from "@/lib/base";
import { SectionHead } from "@/components/chrome/Section";
import Carousel from "@/components/chrome/Carousel";

const year = (iso: string) => iso.slice(0, 4);
const shown = releases.filter((r) => r.show);

export default function Music() {
  return (
    <section id="music" className="scroll-mt-20 px-5 pt-24 md:px-8 md:pt-36">
      <SectionHead title="Listen" />
      <Carousel
        items={shown}
        label="Releases"
        className="reveal"
        mediaMaxWidth={520}
        render={(r) => (
          <div className="flex flex-col items-center text-center">
            <a
              data-carousel-media
              href={r.spotify}
              target="_blank"
              rel="noreferrer"
              className="group block w-full max-w-[520px]"
            >
              <img
                src={asset(r.art)}
                alt={`${r.title} artwork`}
                className="torn aspect-square w-full max-w-[520px] object-cover transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </a>
            <h3 className="display mt-6 text-2xl md:text-3xl">{r.title}</h3>
            <p className="display mt-2 text-sm text-ice">
              {r.kind} · {year(r.date)}
            </p>
            <a href={r.spotify} target="_blank" rel="noreferrer" className="btn mt-6">
              Listen on Spotify
            </a>
          </div>
        )}
      />
    </section>
  );
}
