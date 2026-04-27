import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts, caseStudies } from "@/lib/content";

export default function HomePage() {
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const featuredBlogPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-24 pb-24 pt-10 md:space-y-32 md:pt-16">
      <section className="container-section">
        <div className="rounded-3xl border border-white/10 bg-hero-gradient bg-[#0A0E18] p-8 shadow-glow md:p-14">
          <p className="text-sm uppercase tracking-[0.22em] text-indigo-300">Growth marketing + creative</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            We build content systems that turn attention into brand growth.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            AG Creative helps ambitious brands scale awareness, trust, and revenue through strategy-led creative execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
              Book a strategy call
            </Link>
            <Link href="/case-studies" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Explore case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="container-section">
        <SectionHeading
          eyebrow="Positioning"
          title="Your creative partner for measurable growth"
          description="We combine strategic marketing thinking with modern content production to help brands grow faster without sacrificing quality."
        />
      </section>

      <section className="container-section space-y-8">
        <SectionHeading
          eyebrow="Services"
          title="What we do"
          description="Designed for founders and teams that need performance and polish in the same engine."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Growth Strategy", "Positioning, channel planning, and campaign architecture that map to business outcomes."],
            ["Creative Production", "Platform-native short-form, brand storytelling, and high-converting paid creative assets."],
            ["Performance Optimization", "Weekly testing loops, creative analytics, and iterative scaling frameworks."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/70">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-section space-y-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Case studies" title="Proof of execution" />
          <Link href="/case-studies" className="text-sm font-medium text-indigo-300">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <section className="container-section space-y-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="Blog" title="Ideas for modern marketers" />
          <Link href="/blog" className="text-sm font-medium text-indigo-300">
            View all
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredBlogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="container-section">
        <div className="rounded-3xl border border-indigo-300/25 bg-indigo-400/10 p-8 md:flex md:items-center md:justify-between md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Ready to grow your brand?</h2>
            <p className="mt-2 text-white/75">Let’s build a creative growth engine tailored to your goals.</p>
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-black md:mt-0">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
