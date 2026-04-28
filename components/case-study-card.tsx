import Image from "next/image";
import Link from "next/link";
import { type CaseStudy, getPrimaryCategory } from "@/lib/content";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
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
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-indigo-300/30 bg-indigo-300/10 px-3 py-1 text-xs text-indigo-200">
            {getPrimaryCategory(caseStudy.categoryIds)}
          </span>
          <span className="text-xs text-white/50">{caseStudy.client}</span>
        </div>

        <h3 className="text-xl font-semibold text-white">
          {caseStudy.title}
        </h3>

        <p className="text-sm text-white/70">
          {caseStudy.summary}
        </p>

        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="inline-block text-sm font-medium text-indigo-300 hover:text-indigo-200"
        >
          View case study →
        </Link>
      </div>
    </article>
  );
}