import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
        <img src={asset("/brand/wordmark-white.png")} alt={site.name} className="h-8 w-auto opacity-90" />
        <div className="flex items-center gap-5">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-bone/70 hover:text-paper">
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-paper-dim">
          © {new Date().getFullYear()} {site.name}. Los Angeles.
        </p>
      </div>
    </footer>
  );
}
