import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";

export default function Store() {
  return (
    <section id="store" className="scroll-mt-20 px-5 pt-24 md:px-8 md:pt-36">
      <a
        href={site.store}
        target="_blank"
        rel="noreferrer"
        className="reveal rough group relative block overflow-hidden bg-blue"
      >
        <div className="flex aspect-[4/5] flex-col justify-between p-6 md:aspect-[21/8] md:p-10">
          <span className="display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] text-white">Store</span>
          <div className="flex items-end justify-between gap-6">
            <img
              src={asset("/brand/wordmark-white.png")}
              alt=""
              className="w-[55%] max-w-[520px] opacity-95 transition-transform duration-500 group-hover:translate-x-2"
            />
            <span className="btn shrink-0 !bg-white !text-ink group-hover:!bg-ink group-hover:!text-white">Shop</span>
          </div>
        </div>
      </a>
    </section>
  );
}
