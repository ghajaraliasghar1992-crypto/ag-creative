import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { MetricCard } from "@/components/metric-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies, caseStudyMetrics, categories, getPrimaryCategory } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | AG Creative",
  description:
    "Explore AG Creative case studies across growth marketing, content systems, social growth, SEO, and revenue performance."
};

export default function CaseStudiesPage() {
  const featuredStudy = caseStudies[0];
  const remainingStudies = caseStudies.slice(1);

  return (
    <div className="container-section space-y-12 py-12 md:space-y-16 md:py-16">
      <section className="rounded-3xl border border-white/10 bg-hero-gradient bg-[#0B0F18] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.22em] text-indigo-300">Case studies</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Real growth systems. Measurable business outcomes.
        </h1>
        <p className="mt-5 max-w-3xl text-base text-white/75 md:text-lg">
          We help brands turn content into a predictable growth channel by connecting strategy, creative execution, SEO,
          and conversion architecture.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudyMetrics.map((metric) => (
          <MetricCard key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </section>

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/55">Filter by category</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-indigo-300/40 bg-indigo-300/10 px-4 py-2 text-xs font-medium text-indigo-200">
            All
          </span>
          {categories
            .filter((category) => category.id !== "marketing-insights")
            .map((category) => (
              <span key={category.id} className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/75">
                {category.name}
              </span>
            ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured engagement"
          title={featuredStudy.title}
          description={`${featuredStudy.problem} Key win: ${featuredStudy.keyResult}`}
        />
        <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
          <CaseStudyCard caseStudy={featuredStudy} variant="detailed" />
          <div className="mt-5 flex flex-wrap gap-2">
            {featuredStudy.services.map((service) => (
              <span key={service} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                {service}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="All projects"
          title="Selected growth marketing case studies"
          description="Each project combines strategy, production, distribution, and optimization to drive measurable outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {remainingStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} variant="detailed" />
          ))}
        </div>
      </section>

      <CTASection
        title="Want this level of performance in your content engine?"
        description="If you're serious about compounding social, search, and revenue outcomes, let’s build the system behind your next growth phase."
        primaryLabel="Book a strategy call"
        primaryHref="/contact"
        secondaryLabel={`Read ${getPrimaryCategory(featuredStudy.categoryIds)} case study`}
        secondaryHref={`/case-studies/${featuredStudy.slug}`}
      />
    </div>
  );
}
