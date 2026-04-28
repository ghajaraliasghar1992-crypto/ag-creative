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
   ```
2. (Optional) Add environment variables in `.env.local` if you want to override defaults:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=k28x57ex
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2026-01-01

   # Optional, but recommended if your dataset is private and pages should still read content server-side:
   SANITY_API_READ_TOKEN=your_read_token
   ```

   The project is already wired to Sanity project `k28x57ex` and dataset `production` by default.
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open:
   - Site: [http://localhost:3000](http://localhost:3000)
   - Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## How to log in to `/studio` (private admin panel)
1. Create a Sanity project (free tier is sufficient).
2. In Sanity project settings, invite only trusted editors/admins.
3. Keep your dataset private if you want strict access control.
4. Editors must authenticate with invited Sanity accounts to create/edit/publish content in `/studio`.

Public visitors can view published site content, but cannot create, edit, or delete content unless they are authenticated and invited in your Sanity project.

## Deploy on Vercel
1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Add the same Sanity environment variables in Vercel Project Settings.
4. Deploy.

## Where to edit quickly
- **Sanity schemas:** `sanity/schemaTypes/*`
- **Sanity client + queries:** `lib/sanity/*`
- **Fallback sample content:** `lib/content.ts`
- **Case studies UI:** `app/case-studies/*`, `components/case-study-card.tsx`
- **Blog UI:** `app/blog/*`

## Notes
- No paid services are required for this setup.
- No paid CMS add-ons are used.
- Sanity Studio is integrated in-app at `/studio` and can be expanded with custom desk structure later.
