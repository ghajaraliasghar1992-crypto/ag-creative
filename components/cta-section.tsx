import Link from "next/link";

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="rounded-3xl border border-indigo-300/20 bg-indigo-300/10 p-8 md:p-10">
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-white/75">{description}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href={primaryHref} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link href={secondaryHref} className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
