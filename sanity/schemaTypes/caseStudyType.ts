import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required()
    }),
    defineField({ name: "client", title: "Client", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required() }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })]
    }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 4 }),
    defineField({ name: "keyResult", title: "Key Result", type: "string" }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "strategy",
      title: "Strategy",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "execution",
      title: "Execution",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "whatMadeItWork",
      title: "What Made It Work",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", title: "SEO Title", type: "string" }),
        defineField({ name: "description", title: "SEO Description", type: "text", rows: 3 })
      ]
    }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime", initialValue: () => new Date().toISOString() })
  ]
});
