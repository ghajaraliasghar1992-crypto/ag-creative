import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies | AG Creative",
  description: "Explore AG Creative growth marketing and creative case studies."
};

export default function CaseStudiesPage() {
  return (
    <section className="container-section space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Case Studies"
        description="Browse selected AG Creative projects. Update /lib/content.ts to add or edit case studies."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
