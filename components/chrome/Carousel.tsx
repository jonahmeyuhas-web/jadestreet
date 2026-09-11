"use client";
import { ReactNode, useEffect, useId, useRef, useState } from "react";

const SWIPE = 40;

function Arrow({ dir }: { dir: "left" | "right" }) {
  const fid = useId().replace(/:/g, "");
  // Triangle drawn as an open outline, then displaced by noise so the edge
  // reads as hand-cut rather than vector-perfect.
  const d = dir === "left" ? "M19 6 L19 22 L8 14 Z" : "M9 6 L9 22 L20 14 Z";
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7 md:h-10 md:w-10" aria-hidden focusable="false">
      <filter id={fid} x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves={2} seed={7} result="n" />
        <feDisplacementMap in="SourceGraphic" in2="n" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <path
        d={d}
        fill="none"
        strokeWidth={3}
        strokeLinejoin="round"
        strokeLinecap="round"
        filter={`url(#${fid})`}
        className="stroke-white transition-colors duration-200 group-hover:stroke-ice"
      />
    </svg>
  );
}

export default function Carousel<T>({
  items,
  render,
  label,
  className,
  mediaMaxWidth,
}: {
  items: T[];
  render: (item: T, i: number) => ReactNode;
  label: string;
  className?: string;
  /** Width of the media the arrows hug, in px. The arrows sit just outside it. */
  mediaMaxWidth?: number;
}) {
  const [i, setI] = useState(0);
  const [slide, setSlide] = useState<HTMLDivElement | null>(null);
  const [mid, setMid] = useState<number | null>(null);
  const box = useRef<HTMLDivElement>(null);
  const dir = useRef(1);
  const first = useRef(true);
  const down = useRef<number | null>(null);

  const n = items.length;
  const go = (d: number) => {
    dir.current = d;
    setI((p) => (p + d + n) % n);
  };

  // Centre the arrows on the media, not on the slide as a whole (the caption
  // and button below it would otherwise drag them down).
  useEffect(() => {
    if (!slide || !box.current) return;
    const media = (slide.querySelector("[data-carousel-media]") as HTMLElement | null) ?? slide;
    const measure = () => {
      const c = box.current;
      if (!c) return;
      const m = media.getBoundingClientRect();
      setMid(m.top + m.height / 2 - c.getBoundingClientRect().top);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(media);
    ro.observe(box.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [slide, i]);

  // Enter animation, driven by WAAPI so there is no first-paint flash.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (!slide) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    slide.animate(
      [
        { opacity: 0, transform: `translateX(${dir.current * 24}px)` },
        { opacity: 1, transform: "translateX(0)" },
      ],
      { duration: 350, easing: "cubic-bezier(.2,.7,.2,1)" }
    );
  }, [slide, i]);

  if (!n) return null;

  // Arrow centres sit 28px (mobile) / 44px (desktop) outside the media edge.
  // The gutters below reserve exactly that much room, so nothing overflows.
  const arrow =
    "group absolute z-10 -translate-y-1/2 p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-ice";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
      className={`focus:outline-none focus-visible:ring-1 focus-visible:ring-ice/50 ${className ?? ""}`}
    >
      <div className="px-[30px] md:px-[68px]">
        <div ref={box} className="relative mx-auto w-full" style={{ maxWidth: mediaMaxWidth }}>
          <div
            onPointerDown={(e) => {
              down.current = e.clientX;
            }}
            onPointerUp={(e) => {
              const x = down.current;
              down.current = null;
              if (x === null) return;
              const dx = e.clientX - x;
              if (Math.abs(dx) > SWIPE) go(dx < 0 ? 1 : -1);
            }}
            onPointerCancel={() => {
              down.current = null;
            }}
          >
            <div key={i} ref={setSlide}>
              {render(items[i], i)}
            </div>
          </div>

          {n > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={() => go(-1)}
                className={`${arrow} left-[-28px] -translate-x-1/2 md:left-[-44px]`}
                style={{ top: mid ?? "50%" }}
              >
                <Arrow dir="left" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => go(1)}
                className={`${arrow} right-[-28px] translate-x-1/2 md:right-[-44px]`}
                style={{ top: mid ?? "50%" }}
              >
                <Arrow dir="right" />
              </button>
            </>
          )}
        </div>
      </div>

      {n > 1 && (
        <p className="display mt-5 text-center text-xs text-white/50">
          {i + 1} / {n}
        </p>
      )}
    </div>
  );
}
