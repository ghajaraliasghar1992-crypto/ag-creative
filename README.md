# AG Creative Site

Premium, modern portfolio website for **AG Creative** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Stack
- Next.js 16 + App Router
- TypeScript
- Tailwind CSS
- CMS-ready structure (Sanity optional)

## Included pages
- `/` (Landing page)
- `/case-studies`
- `/case-studies/[slug]`
- `/blog`
- `/blog/[slug]`
- `/contact`

## Content system

All content is managed from:

lib/content.ts

Includes:
- Case studies
- Blog posts
- Categories
- SEO metadata

You can later connect a CMS (like Sanity) without changing the frontend structure.

## Local development

1. Install dependencies:
npm install

2. Run development server:
npm run dev

3. Open:
http://localhost:3000

## Production build

npm run build
npm run start

## Deploy on Vercel

1. Push repository to GitHub  
2. Import into Vercel  
3. Deploy (no extra config needed)

## Where to edit

- Content: lib/content.ts  
- Case studies UI: app/case-studies/*  
- Blog UI: app/blog/*  
- Layout & homepage: app/page.tsx  
- Components: components/*  
- Styles: app/globals.css  

## Notes

- No CMS required for now  
- Fast, stable, and easy to extend  
- Ready for future Sanity integration without breaking structure  