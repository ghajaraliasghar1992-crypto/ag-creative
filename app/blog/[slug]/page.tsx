import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/content";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Post Not Found | AG Creative" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container-section space-y-8 py-12 md:py-16">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {post.title}
        </h1>
        <p className="text-white/70">{post.excerpt}</p>
      </header>

      <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 md:h-[30rem]">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 text-white/80">
        {post.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}