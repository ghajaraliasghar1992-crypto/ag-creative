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
    services: ["Content Strategy", "Short-Form Creative", "Social Growth"],
    strategy: [
      "Reframed social from posting calendar to growth system.",
      "Built a hook-and-angle matrix.",
      "Connected organic to paid testing."
    ],
    execution: [
      "Weekly sprint cycles.",
      "Modular content templates.",
      "Win/loss tracking."
    ],
    outcomes: [
      "3.2x organic reach",
      "42% higher CTR",
      "Lower CAC"
    ],
    whatMadeItWork: [
      "Fast iteration",
      "Clear messaging",
      "Strong feedback loop"
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "short-form-content",
    slug: "short-form-content",
    title: "How short-form content drives growth",
    excerpt: "Short-form isn't just reach — it's conversion.",
    body: [
      "Short-form content works because it matches attention.",
      "The goal is consistency, not virality.",
      "It becomes a growth engine when structured properly."
    ],
    featuredImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    categoryIds: ["marketing-insights"],
    publishedAt: "2026-02-05",
    seo: {
      title: "Short-form content growth",
      description: "Turn content into growth engine."
    }
  }
];

export const getCategoryName = (id: string) =>
  categories.find((c) => c.id === id)?.name || "General";

export const getPrimaryCategory = (ids: string[]) =>
  getCategoryName(ids[0]);