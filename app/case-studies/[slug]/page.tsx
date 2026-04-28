import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/cta-section";
import { getCategoryName } from "@/lib/content";
import {
  getCaseStudies,
  getCaseStudyBySlug
} from "@/lib/sanity/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found | AG Creative" };
  }

  return {
    title: caseStudy.seo?.title || caseStudy.title,
    description: caseStudy.seo?.description || caseStudy.summary
  };
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug
  }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="container-section space-y-10 py-12 md:space-y-14 md:py-16">
      <header className="space-y-6 rounded-3xl border border-white/10 bg-hero-gradient bg-[#0A0E18] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
          {caseStudy.client} • {getCategoryName(caseStudy.categoryIds[0])}
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          {caseStudy.title}
        </h1>

        <p className="max-w-3xl text-base text-white/75 md:text-lg">
          {caseStudy.summary}
        </p>

        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
            Key result
          </p>
          <p className="mt-2 text-lg font-medium text-white">
            {caseStudy.keyResult}
          </p>
        </div>
      </header>

      <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 md:h-[32rem]">
        <Image
          src={caseStudy.featuredImage}
          alt={caseStudy.title}
          fill
          className="object-cover"
        />
      </div>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-300">
            Problem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            {caseStudy.problem}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-300">
            Services used
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
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
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Strategy</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {caseStudy.strategy.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Execution</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {caseStudy.execution.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-indigo-300/20 bg-indigo-300/5 p-6">
        <h2 className="text-xl font-semibold text-white">Results</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/85">
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>• {outcome}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h2 className="text-xl font-semibold text-white">
          What made it work
        </h2>
        <ul className="mt-4 space-y-3 text-sm text-white/80">
          {caseStudy.whatMadeItWork.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <CTASection
        title="Want outcomes like this for your brand?"
        description="We design growth marketing and content systems that move from reach to revenue with clear execution discipline."
        primaryLabel="Start your project"
        primaryHref="/contact"
        secondaryLabel="View all case studies"
        secondaryHref="/case-studies"
      />
    </article>
  );
}