import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, getCategoryName } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found | AG Creative" };
  }

  return {
    title: caseStudy.seo.title,
    description: caseStudy.seo.description
  };
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="container-section space-y-8 py-12 md:py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">{caseStudy.client}</p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">{caseStudy.title}</h1>
      <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 md:h-[30rem]">
        <Image src={caseStudy.featuredImage} alt={caseStudy.title} fill className="object-cover" />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Challenge</h2>
          <p className="mt-3 text-sm text-white/80">{caseStudy.challenge}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Approach</h2>
          <p className="mt-3 text-sm text-white/80">{caseStudy.approach}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Categories</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {caseStudy.categoryIds.map((id) => (
              <li key={id}>{getCategoryName(id)}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="rounded-2xl border border-indigo-300/20 bg-indigo-300/5 p-6">
        <h2 className="text-xl font-semibold text-white">Outcomes</h2>
        <ul className="mt-4 space-y-2 text-white/80">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>• {outcome}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
