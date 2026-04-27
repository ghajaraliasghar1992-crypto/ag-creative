import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getCategoryName } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Post Not Found | AG Creative" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container-section space-y-8 py-12 md:py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-indigo-300">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">{post.title}</h1>
      <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 md:h-[28rem]">
        <Image src={post.featuredImage} alt={post.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-2">
        {post.categoryIds.map((id) => (
          <span key={id} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
            {getCategoryName(id)}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-3xl text-white/85">
        {post.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
