import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | AG Creative",
  description:
    "Insights on growth marketing, creative systems, and portfolio building."
};

export default function BlogPage() {
  return (
    <section className="container-section space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Insights"
        title="Blog"
        description="Thoughts on growth marketing, content systems, and building high-performing brands."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}