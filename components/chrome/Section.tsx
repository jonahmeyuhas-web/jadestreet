export function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className="reveal mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="display text-[clamp(3rem,9vw,7.5rem)]">{title}</h2>
      </div>
      {aside && <div className="md:pb-3">{aside}</div>}
    </div>
  );
}
