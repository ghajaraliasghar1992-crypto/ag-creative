/**
 * CMS-READY CONTENT MODELS + SAMPLE CONTENT
 *
 * Replace or map this file to your future CMS provider (e.g. Sanity, Contentful)
 * when you are ready. All site pages read from these typed objects.
 */

export type SeoFields = {
  title: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  summary: string;
  featuredImage: string;
  categoryIds: string[];
  publishedAt: string;
  seo: SeoFields;
  challenge: string;
  approach: string;
  outcomes: string[];
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  featuredImage: string;
  categoryIds: string[];
  publishedAt: string;
  seo: SeoFields;
};

/**
 * EDIT CATEGORIES HERE:
 * Add or remove categories that can be reused by case studies and blog posts.
 */
export const categories: Category[] = [
  { id: "social-growth", name: "Social Growth", slug: "social-growth" },
  { id: "content-strategy", name: "Content Strategy", slug: "content-strategy" },
  { id: "brand-awareness", name: "Brand Awareness", slug: "brand-awareness" },
  { id: "marketing-insights", name: "Marketing Insights", slug: "marketing-insights" }
];

/**
 * EDIT CASE STUDIES HERE:
 * - title, summary, challenge, approach, outcomes
 * - featuredImage (URL or future CMS image object)
 * - categoryIds + SEO fields
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "kits-uk-social-growth",
    slug: "kits-uk-social-growth",
    title: "KITS UK Social Growth",
    client: "KITS UK",
    summary:
      "Scaled social-first acquisition by pairing rapid creative testing with weekly performance loops.",
    featuredImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["social-growth", "content-strategy"],
    publishedAt: "2026-01-12",
    seo: {
      title: "KITS UK Social Growth Case Study | AG Creative",
      description: "How AG Creative helped KITS UK grow social reach and pipeline with iterative short-form campaigns."
    },
    challenge:
      "KITS UK needed to convert consistent posting into measurable pipeline without increasing production overhead.",
    approach:
      "We built a content operating system: hypothesis-led hooks, a modular edit style, and weekly creative sprints aligned with channel KPIs.",
    outcomes: [
      "3.2x increase in organic reach in 90 days",
      "42% lift in profile-to-site click-through rate",
      "Improved paid social efficiency through top-performing organic concepts"
    ]
  },
  {
    id: "automotive-content-strategy",
    slug: "automotive-content-strategy",
    title: "Automotive Content Strategy",
    client: "Confidential Automotive Brand",
    summary:
      "Built a full-funnel content strategy that moved from product-led messaging to audience-led storytelling.",
    featuredImage:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["content-strategy"],
    publishedAt: "2025-11-02",
    seo: {
      title: "Automotive Content Strategy Case Study | AG Creative",
      description: "A portfolio case on scaling automotive engagement with audience-first creative strategy."
    },
    challenge:
      "The brand had strong assets but low consistency in narrative, causing fragmented campaign performance.",
    approach:
      "AG Creative introduced a 3-pillar framework (Education, Trust, Desire) and a quarterly production calendar tied to launch windows.",
    outcomes: [
      "67% increase in average watch time",
      "2.1x growth in qualified inbound leads from content",
      "Unified messaging across paid and organic channels"
    ]
  },
  {
    id: "bongereh-brand-awareness",
    slug: "bongereh-brand-awareness",
    title: "Bongereh Brand Awareness",
    client: "Bongereh",
    summary:
      "Elevated top-of-funnel visibility with creative-led campaigns designed for shareability and recall.",
    featuredImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["brand-awareness", "social-growth"],
    publishedAt: "2025-08-19",
    seo: {
      title: "Bongereh Brand Awareness Case Study | AG Creative",
      description: "How AG Creative designed creative concepts to increase reach, mentions, and brand recall for Bongereh."
    },
    challenge:
      "Bongereh needed to establish clear brand memory in a crowded category with similar value propositions.",
    approach:
      "We launched a creator-assisted campaign system with repeatable visual motifs and platform-native storytelling.",
    outcomes: [
      "5.4M cross-platform impressions in campaign period",
      "28% increase in branded search volume",
      "Significant uptick in creator UGC mentions"
    ]
  }
];

/**
 * EDIT BLOG POSTS HERE:
 * - title, excerpt, body
 * - featuredImage (URL or future CMS image object)
 * - categoryIds + SEO fields
 */
export const blogPosts: BlogPost[] = [
  {
    id: "how-short-form-content-drives-brand-growth",
    slug: "how-short-form-content-drives-brand-growth",
    title: "How short-form content drives brand growth",
    excerpt:
      "Short-form isn’t just for reach. Done right, it compresses trust-building and demand generation into every post.",
    body: [
      "Short-form content wins because it matches how people consume ideas: quickly, repeatedly, and socially.",
      "For brands, the goal is not virality alone. The goal is pattern recognition: consistent hooks, clear positioning, and repeat exposure.",
      "When short-form is mapped to business objectives, it becomes an engine for awareness, audience insight, and conversion pathways."
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["marketing-insights", "social-growth"],
    publishedAt: "2026-02-05",
    seo: {
      title: "How Short-Form Content Drives Brand Growth | AG Creative",
      description: "Practical insights for turning short-form creative into real growth outcomes."
    }
  },
  {
    id: "why-case-studies-matter-for-marketers",
    slug: "why-case-studies-matter-for-marketers",
    title: "Why case studies matter for marketers",
    excerpt:
      "Case studies are proof assets that reduce buyer uncertainty and increase decision confidence.",
    body: [
      "Marketing claims are easy to make and hard to trust. Case studies close that gap.",
      "A strong case study documents context, process, and measurable results so prospects can map your approach to their own challenges.",
      "Great portfolios use case studies not as trophies, but as teaching tools that show strategic thinking."
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["marketing-insights", "content-strategy"],
    publishedAt: "2026-01-18",
    seo: {
      title: "Why Case Studies Matter for Marketers | AG Creative",
      description: "Learn why case studies are one of the highest-leverage assets in a growth marketing portfolio."
    }
  },
  {
    id: "building-a-growth-marketing-portfolio",
    slug: "building-a-growth-marketing-portfolio",
    title: "Building a growth marketing portfolio",
    excerpt:
      "The best portfolios show how your decisions created outcomes, not just beautiful outputs.",
    body: [
      "A growth marketing portfolio should communicate range and repeatability.",
      "Structure each project with: objective, audience insight, creative strategy, execution system, and results.",
      "Over time, this creates a narrative of how you think, test, and scale — exactly what modern clients are buying."
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["marketing-insights"],
    publishedAt: "2025-12-09",
    seo: {
      title: "Building a Growth Marketing Portfolio | AG Creative",
      description: "A practical structure for creating a portfolio that attracts better clients and opportunities."
    }
  }
];

export const siteConfig = {
  name: "AG Creative",
  tagline: "Growth marketing and creative systems for modern brands.",
  email: "hello@agcreative.studio"
};

export const getCategoryName = (categoryId: string) =>
  categories.find((category) => category.id === categoryId)?.name ?? "General";
