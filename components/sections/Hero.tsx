import { asset } from "@/lib/base";

export default function Hero() {
  return (
    <section id="top" className="hero-h relative min-h-[560px] overflow-hidden">
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={asset("/brand/hero-portrait.jpg")} />
        <img
          src={asset("/brand/hero.jpg")}
          alt=""
          className="hero-in h-full w-full object-cover"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" aria-hidden />
    </section>
  );
}
