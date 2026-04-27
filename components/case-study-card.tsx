import Image from "next/image";
import Link from "next/link";
import { type CaseStudy, getPrimaryCategory } from "@/lib/content";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  variant?: "compact" | "detailed";
};

export function CaseStudyCard({
  caseStudy,
  variant = "compact"
}: CaseStudyCardProps) {
  const isDetailed = variant === "detailed";

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={caseStudy.featuredImage}
          alt={caseStudy.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-indigo-300/30 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-200">
            {getPrimaryCategory(caseStudy.categoryIds)}
          </span>

          <span className="text-xs uppercase tracking-[0.18em] text-white/55">
            {caseStudy.client}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {caseStudy.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/75">
          {caseStudy.problem}
        </p>

        {isDetailed ? (
          <>
            <div className="rounded-2xl border border-emerald-200/20 bg-emerald-200/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                Key result
              </p>
              <p className="mt-2 text-sm font-medium text-white">
                {caseStudy.keyResult}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                Services used
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {caseStudy.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="text-sm text-white/75">{caseStudy.summary}</p>
        )}

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-flex text-sm font-semibold text-indigo-300 transition group-hover:text-indigo-200"
        >
          Read full case study →
        </Link>
      </div>
    </article>
  );
}