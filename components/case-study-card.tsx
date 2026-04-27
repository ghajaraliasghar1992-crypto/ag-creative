import Image from "next/image";
import Link from "next/link";
import { type CaseStudy, getCategoryName } from "@/lib/content";

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={caseStudy.featuredImage}
          alt={caseStudy.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{caseStudy.client}</p>
        <h3 className="text-xl font-semibold text-white">{caseStudy.title}</h3>
        <p className="text-sm text-white/70">{caseStudy.summary}</p>
        <div className="flex flex-wrap gap-2">
          {caseStudy.categoryIds.map((id) => (
            <span key={id} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              {getCategoryName(id)}
            </span>
          ))}
        </div>
        <Link href={`/case-studies/${caseStudy.slug}`} className="inline-flex text-sm font-medium text-indigo-300">
          View case study →
        </Link>
      </div>
    </article>
  );
}
