export function SectionHead({ title, aside }: { title: string; aside?: React.ReactNode }) {
  return (
    <div className="reveal mb-8 md:mb-12">
      <div className="flex items-end justify-between gap-6">
        <h2 className="display text-[clamp(3.5rem,11vw,9rem)]">{title}</h2>
        {aside && <div className="pb-2 md:pb-4">{aside}</div>}
      </div>
      <div className="rule mt-2" aria-hidden />
    </div>
  );
}
