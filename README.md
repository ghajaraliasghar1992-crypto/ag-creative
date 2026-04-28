# AG Creative Site

Premium, minimal portfolio website for **AG Creative** built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Sanity CMS**.

## Stack
- Next.js 16 + App Router
- TypeScript
- Tailwind CSS
- Sanity Studio (embedded at `/studio`)

## Included pages
- `/` (Landing page)
- `/case-studies`
- `/case-studies/[slug]`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/studio` (Sanity admin panel)

## CMS model (Sanity)
Sanity schemas are in `sanity/schemaTypes/`:
- `caseStudy`
- `blogPost`
- `category`

The frontend keeps typed contracts in `lib/content.ts` and fetches Sanity content via `lib/sanity/content.ts`.

> If Sanity is not configured yet, the site automatically falls back to local sample content.

## Local development

1. Install dependencies:
```bash
npm install