# AG Creative Site

Premium, minimal portfolio website for **AG Creative** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Stack
- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- Static content layer designed to be CMS-ready

## Included pages
- `/` (Landing page)
- `/case-studies`
- `/case-studies/[slug]`
- `/blog`
- `/blog/[slug]`
- `/contact`

## Content model (CMS-ready)
All placeholder content lives in `lib/content.ts` with typed models for:
- Case studies
- Blog posts
- Categories
- Featured images
- SEO title + meta description fields

> When you decide to connect a CMS (like Sanity later), keep the same TypeScript types and swap data-fetching logic.

## Placeholder content included
### Case studies
- KITS UK Social Growth
- Automotive Content Strategy
- Bongereh Brand Awareness

### Blog posts
- How short-form content drives brand growth
- Why case studies matter for marketers
- Building a growth marketing portfolio

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Visit [http://localhost:3000](http://localhost:3000)

## Production build
```bash
npm run build
npm run start
```

## Deploy on Vercel
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the `agcreative-site` repository.
4. Keep defaults (Framework Preset: Next.js).
5. Click **Deploy**.

No paid services or CMS integrations are required for the current version.

## Where to edit content quickly
- **Brand text / email / global labels:** `lib/content.ts`
- **Landing page section copy/layout:** `app/page.tsx`
- **Services cards:** `app/page.tsx`
- **Case study list/detail layouts:** `app/case-studies/*`
- **Blog list/detail layouts:** `app/blog/*`
- **Contact page copy:** `app/contact/page.tsx`
- **Navigation links:** `components/navbar.tsx`
- **Design system / styles:** `app/globals.css`, `tailwind.config.ts`

## Notes for future CMS integration
- Keep `CaseStudy`, `BlogPost`, and `Category` types as your frontend contract.
- Replace exported arrays in `lib/content.ts` with API/CMS fetch functions.
- Reuse existing slug-based routes; they are already ready for dynamic content.
