import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | AG Creative",
  description:
    "Explore growth marketing, content strategy, and brand case studies from AG Creative."
};

export default function CaseStudiesPage() {
  return (
    <section className="container-section space-y-10 py-12 md:py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Case Studies"
        description="Real projects. Real outcomes. A closer look at how strategy turns into growth."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}