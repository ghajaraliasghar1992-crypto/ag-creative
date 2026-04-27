type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="text-base text-white/70 md:text-lg">{description}</p> : null}
    </div>
  );
}
