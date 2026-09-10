export function SectionHead({ title, aside }: { title: string; aside?: React.ReactNode }) {
  return (
    <div className="reveal mb-6 md:mb-8">
      <div className="flex items-end justify-between gap-6">
        <h2 className="display text-[clamp(1.25rem,2vw,1.75rem)]">{title}</h2>
        {aside && <div className="pb-2 md:pb-4">{aside}</div>}
      </div>
      <div className="rule mt-1" aria-hidden />
    </div>
  );
}
