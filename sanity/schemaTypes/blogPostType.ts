import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPostType = defineType({
  name: "blogPost",
  title: "Blog Post",
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
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [defineArrayMember({ type: "block" })]
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })]
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
