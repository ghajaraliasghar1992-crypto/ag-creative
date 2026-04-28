import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { getBlogPosts } from "@/lib/sanity/content";

export const metadata: Metadata = {
  title: "Blog | AG Creative",
  description:
    "Insights on growth marketing, creative systems, and portfolio building."
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  return (
    <section className="container-section space-y-8 py-12 md:py-16">
      <SectionHeading
        eyebrow="Insights"
        title="Blog"
        description="Posts can now be managed in Sanity Studio. Local sample content is used as fallback when the CMS has no data."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}