import { groq } from "next-sanity";
import { blogPosts as fallbackBlogPosts, caseStudies as fallbackCaseStudies, type BlogPost, type CaseStudy } from "@/lib/content";
import { isSanityConfigured, sanityClient, urlFor } from "@/lib/sanity/client";

type SanityCategory = {
  title?: string;
  slug?: { current?: string };
};

type SanityCaseStudy = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  client?: string;
  summary?: string;
  featuredImage?: unknown;
  categories?: SanityCategory[];
  publishedAt?: string;
  seo?: { title?: string; description?: string };
  problem?: string;
  keyResult?: string;
  services?: string[];
  strategy?: string[];
  execution?: string[];
  outcomes?: string[];
  whatMadeItWork?: string[];
};

type PortableTextBlock = {
  _type?: string;
  children?: Array<{ text?: string }>;
};

type SanityBlogPost = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  excerpt?: string;
  featuredImage?: unknown;
  body?: PortableTextBlock[];
  categories?: SanityCategory[];
  publishedAt?: string;
  seo?: { title?: string; description?: string };
};

const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  client,
  summary,
  featuredImage,
  categories[]-> { title, slug },
  publishedAt,
  seo,
  problem,
  keyResult,
  services,
  strategy,
  execution,
  outcomes,
  whatMadeItWork
}`;

const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  body,
  categories[]-> { title, slug },
  publishedAt,
  seo
}`;

const mapCaseStudy = (item: SanityCaseStudy): CaseStudy => {
  const imageUrl = urlFor(item.featuredImage) || fallbackCaseStudies[0]?.featuredImage || "";
  const title = item.title || "Untitled Case Study";
  const summary = item.summary || "";

  return {
    id: item._id,
    slug: item.slug?.current || "",
    title,
    client: item.client || "AG Creative Client",
    summary,
    featuredImage: imageUrl,
    categoryIds: (item.categories || []).map((category) => category.slug?.current || category.title || "general"),
    publishedAt: item.publishedAt || new Date().toISOString(),
    seo: {
      title: item.seo?.title || `${title} | AG Creative`,
      description: item.seo?.description || summary
    },
    problem: item.problem || "",
    keyResult: item.keyResult || "",
    services: item.services || [],
    strategy: item.strategy || [],
    execution: item.execution || [],
    outcomes: item.outcomes || [],
    whatMadeItWork: item.whatMadeItWork || []
  };
};

const mapPortableTextToParagraphs = (blocks: PortableTextBlock[] = []) =>
  blocks
    .filter((block) => block._type === "block")
    .map((block) => (block.children || []).map((child) => child.text || "").join(""))
    .filter(Boolean);

const mapBlogPost = (item: SanityBlogPost): BlogPost => {
  const imageUrl = urlFor(item.featuredImage) || fallbackBlogPosts[0]?.featuredImage || "";
  const title = item.title || "Untitled Blog Post";
  const excerpt = item.excerpt || "";

  return {
    id: item._id,
    slug: item.slug?.current || "",
    title,
    excerpt,
    body: mapPortableTextToParagraphs(item.body),
    featuredImage: imageUrl,
    categoryIds: (item.categories || []).map((category) => category.slug?.current || category.title || "general"),
    publishedAt: item.publishedAt || new Date().toISOString(),
    seo: {
      title: item.seo?.title || `${title} | AG Creative`,
      description: item.seo?.description || excerpt
    }
  };
};

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!isSanityConfigured || !sanityClient) return fallbackCaseStudies;

  const data = await sanityClient.fetch<SanityCaseStudy[]>(caseStudiesQuery);
  if (!data?.length) return fallbackCaseStudies;

  return data.map(mapCaseStudy).filter((item) => item.slug);
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const studies = await getCaseStudies();
  return studies.find((item) => item.slug === slug) || null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured || !sanityClient) return fallbackBlogPosts;

  const data = await sanityClient.fetch<SanityBlogPost[]>(blogPostsQuery);
  if (!data?.length) return fallbackBlogPosts;

  return data.map(mapBlogPost).filter((item) => item.slug);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((item) => item.slug === slug) || null;
}
