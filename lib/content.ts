/**
 * CMS-READY CONTENT MODELS + SAMPLE CONTENT
 *
 * Replace or map this file to your future CMS provider.
 * These local objects are used as fallback sample content.
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
  problem: string;
  keyResult: string;
  services: string[];
  strategy: string[];
  execution: string[];
  outcomes: string[];
  whatMadeItWork: string[];
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

export const categories: Category[] = [
  { id: "social-growth", name: "Social Growth", slug: "social-growth" },
  { id: "content-strategy", name: "Content Strategy", slug: "content-strategy" },
  { id: "brand-awareness", name: "Brand Awareness", slug: "brand-awareness" },
  { id: "seo-cro", name: "SEO & CRO", slug: "seo-cro" },
  { id: "marketing-insights", name: "Marketing Insights", slug: "marketing-insights" }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "kits-uk-social-growth",
    slug: "kits-uk-social-growth",
    title: "KITS UK Social Growth",
    client: "KITS UK",
    summary:
      "Scaled social-led demand by building a repeatable short-form content system that converted attention into pipeline.",
    featuredImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["social-growth", "content-strategy"],
    publishedAt: "2026-01-12",
    seo: {
      title: "KITS UK Social Growth Case Study | AG Creative",
      description:
        "How AG Creative built a social growth engine that increased reach, clicks, and pipeline quality for KITS UK."
    },
    problem:
      "KITS UK had consistent output but weak compounding performance: content reached audiences, yet too little of that attention moved into qualified site traffic and sales conversations.",
    keyResult: "3.2x organic reach in 90 days and 42% higher profile-to-site CTR.",
    services: ["Content Strategy", "Short-Form Creative", "Social Growth", "Performance Reporting"],
    strategy: [
      "Reframed social from posting calendar to growth system with clear weekly KPIs.",
      "Built a hook-and-angle matrix tied to audience pains across the funnel.",
      "Connected organic signals directly to paid creative testing priorities."
    ],
    execution: [
      "Launched weekly sprint cycles with rapid concept, edit, and publish workflows.",
      "Introduced modular templates to increase speed without lowering creative quality.",
      "Set up win/loss tracking to identify which creative patterns drove clicks and intent."
    ],
    outcomes: [
      "3.2x increase in organic reach in 90 days",
      "42% lift in profile-to-site click-through rate",
      "Lower paid CAC by recycling top-performing organic concepts",
      "Clearer content-to-pipeline reporting for leadership"
    ],
    whatMadeItWork: [
      "Relentless creative iteration, not one-off campaign bets",
      "Tight loop between strategy, production, and reporting",
      "Messaging architecture aligned with buyer objections"
    ]
  },
  {
    id: "automotive-content-strategy",
    slug: "automotive-content-strategy",
    title: "Automotive Content Strategy",
    client: "Confidential Automotive Brand",
    summary:
      "Shifted from product-heavy posts to audience-led storytelling that improved engagement quality and lead intent.",
    featuredImage:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["content-strategy", "social-growth"],
    publishedAt: "2025-11-02",
    seo: {
      title: "Automotive Content Strategy Case Study | AG Creative",
      description:
        "How AG Creative rebuilt an automotive content strategy to increase watch time and qualified lead flow."
    },
    problem:
      "The brand had strong visual assets but fragmented messaging across channels, which led to high output and low momentum.",
    keyResult: "67% increase in average watch time and 2.1x lift in content-sourced leads.",
    services: ["Audience Research", "Content Strategy", "Creative Direction", "Channel Planning"],
    strategy: [
      "Created a 3-pillar content narrative: Education, Trust, and Desire.",
      "Mapped each pillar to platform behaviour instead of cross-posting identical assets.",
      "Aligned publishing rhythms with launch windows and dealer demand moments."
    ],
    execution: [
      "Rolled out quarter-based content calendars with clear asset roles.",
      "Built a reusable shot list and storytelling structure for production teams.",
      "Implemented monthly performance reviews with clear keep/kill decisions."
    ],
    outcomes: [
      "67% increase in average watch time",
      "2.1x growth in qualified inbound leads from content",
      "More consistent message recall across paid and organic touchpoints"
    ],
    whatMadeItWork: [
      "Audience-first narrative instead of product-first publishing",
      "Disciplined channel roles and creative consistency",
      "Operational cadence that made quality repeatable"
    ]
  },
  {
    id: "bongereh-brand-awareness",
    slug: "bongereh-brand-awareness",
    title: "Bongereh Brand Awareness",
    client: "Bongereh",
    summary:
      "Built a memorable, social-native brand presence that increased category visibility and branded demand.",
    featuredImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["brand-awareness", "social-growth"],
    publishedAt: "2025-08-19",
    seo: {
      title: "Bongereh Brand Awareness Case Study | AG Creative",
      description:
        "How AG Creative increased reach, branded search demand, and creator mentions for Bongereh."
    },
    problem:
      "Bongereh operated in a saturated category where generic messaging made it difficult to build distinction or recall.",
    keyResult: "5.4M impressions and 28% increase in branded search volume.",
    services: ["Brand Positioning", "Campaign Creative", "Creator Strategy", "Social Distribution"],
    strategy: [
      "Defined a distinct narrative territory with repeatable visual cues.",
      "Built creator collaborations around concepts designed for shareability.",
      "Prioritised frequency and consistency to improve memory structure."
    ],
    execution: [
      "Produced a phased social campaign across short-form and creator placements.",
      "Developed modular creative kits for faster campaign rollout.",
      "Tracked sentiment, mention velocity, and branded search movement weekly."
    ],
    outcomes: [
      "5.4M cross-platform impressions in campaign period",
      "28% increase in branded search volume",
      "Strong uplift in creator UGC mentions and campaign saves"
    ],
    whatMadeItWork: [
      "Clear brand world with repeatable creative signals",
      "Creator partnerships tied to narrative, not random exposure",
      "Balanced broad reach with consistent message discipline"
    ]
  },
  {
    id: "seo-conversion-optimisation",
    slug: "seo-conversion-optimisation",
    title: "SEO & Conversion Optimisation",
    client: "Growth SaaS Portfolio",
    summary:
      "Combined SEO content architecture with CRO updates to grow qualified organic revenue, not just traffic.",
    featuredImage:
      "https://images.unsplash.com/photo-1551281044-8b7f8894d91b?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["seo-cro", "content-strategy"],
    publishedAt: "2025-06-14",
    seo: {
      title: "SEO & Conversion Optimisation Case Study | AG Creative",
      description:
        "How AG Creative linked SEO strategy with conversion optimisation to increase revenue from organic acquisition."
    },
    problem:
      "Organic traffic was growing, but revenue lagged because high-intent pages were under-optimised and content paths leaked demand.",
    keyResult: "+91% organic SQL volume and +38% organic revenue in 6 months.",
    services: ["SEO Strategy", "Content Systems", "CRO", "Landing Page Optimisation"],
    strategy: [
      "Segmented keyword universe by commercial intent, not just volume.",
      "Designed pillar/cluster content around buying-stage friction points.",
      "Prioritised page templates with direct conversion opportunities."
    ],
    execution: [
      "Rebuilt key landing pages with tighter messaging hierarchy and proof.",
      "Launched conversion-focused content briefs with embedded CTA strategy.",
      "Ran iterative CRO tests on forms, offers, and trust elements."
    ],
    outcomes: [
      "91% growth in organic SQL volume",
      "38% increase in organic-attributed revenue",
      "Higher conversion rate from high-intent blog-to-demo pathways"
    ],
    whatMadeItWork: [
      "SEO and CRO planned as one system instead of separate channels",
      "Intent-driven content prioritisation",
      "Consistent experimentation on page-level conversion bottlenecks"
    ]
  }
];

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
      description:
        "Practical insights for turning short-form creative into real growth outcomes."
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
      description:
        "Learn why case studies are one of the highest-leverage assets in a growth marketing portfolio."
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
      description:
        "A practical structure for creating a portfolio that attracts better clients and opportunities."
    }
  }
];

export const siteConfig = {
  name: "AG Creative",
  tagline: "Growth marketing and creative systems for modern brands.",
  email: "hello@agcreative.studio"
};

export const caseStudyMetrics = [
  { label: "Average reach growth", value: "3.4x" },
  { label: "Pipeline efficiency lift", value: "+42%" },
  { label: "Campaign velocity", value: "Weekly sprints" },
  { label: "Revenue outcomes", value: "Compounding" }
];

export const getCategoryName = (categoryId: string) =>
  categories.find((category) => category.id === categoryId)?.name ?? "General";

export const getPrimaryCategory = (categoryIds: string[]) =>
  getCategoryName(categoryIds[0]);