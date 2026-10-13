import { site } from "@/lib/data/site";
import { asset } from "@/lib/base";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-5 pb-10 pt-16 md:px-8">
      <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <img src={asset("/brand/wordmark-white.png")} alt={site.name} className="h-5 w-auto self-start md:self-auto" />
        <div className="flex items-center gap-5">
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-white/70 hover:text-ice">
              <Icon name={s.icon} className="h-5 w-5" />
            </a>
          ))}
        </div>
        <p className="display text-xs text-white/40">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
