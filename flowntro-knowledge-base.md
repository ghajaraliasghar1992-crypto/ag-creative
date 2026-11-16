# Flowntro — Evidence-Based Knowledge Base

**Site reviewed:** https://flowntro.com/ (footer: "Updated 13 Nov 2026 · Build v0.4.87")
**Review date:** 16 November 2026
**Scope:** public, signed-out pages only. No account was created, no request/message was sent, nothing was purchased.

**Evidence labels** (used throughout)

| Label | Meaning |
|---|---|
| **[O] Observed** | I directly saw the page, control, or next screen. |
| **[S] Stated** | Flowntro's page describes a behaviour I could not test (pricing, FAQ, policy). |
| **[I] Inferred** | My interpretation of the evidence. |
| **[N] Needs confirmation** | Evidence is missing, ambiguous, behind login, or conflicts with another page. |

A button existing ([O]) does not prove a request is delivered, a paid feature works, or a seller replies.

---

# 1. Product overview

**What Flowntro is.** Flowntro (operated by Flowntro LLC, Seattle, Washington; NVIDIA Inception member — [S] /about, /faq "Who owns and operates Flowntro?", footer) is a B2B marketplace and business-development platform for physical robotics. Its stated mission is to be "a core commercial and information hub for the global robotics industry" (/faq, "What is Flowntro's mission?"). Public catalogue size on the homepage (13 Nov 2026 build): **23,877 robots · 9,808 services · 5,716 companies · 86 countries** [O].

**The product, in five modules** [O unless noted]

1. **Robot catalogue** — 18 top-level categories, structured per-category specs, availability/pricing labels, certifications, side-by-side comparison of up to four robots.
2. **Services directory** — 9,808 service listings in 20 categories organised by project stage (Plan / Build / Deploy / Operate / Retire), each linked to a provider profile.
3. **Company profiles** — manufacturer profiles and partner profiles (distributor, reseller, VAR, integrator, installer, maintenance, OEM, software, consultant, data/training/simulation, logistics, rental/leasing).
4. **Inquiries and projects** — buyers send one-to-one requests (information / quote / demo) and can post public-to-suppliers sourcing projects (RFI/RFQ/RFP) that Flowntro reviews first.
5. **Partnership Board** — company-to-company opportunities (manufacturer ↔ distributor/integrator/etc.), with an invitation → acceptance → conversation workflow ("Flowntro has no open messaging").
Plus **News** (company posts) and **Jobs** (5,872 roles).

**The three roles and what each pays** (all [S] from pricing pages unless stated)

| Role | Entry | What they get | Pays |
|---|---|---|---|
| **Buyer** (business or individual) | Free account, any email | Send requests, post projects, conversations | Free (5 requests + 2 projects/mo) → $4.99 / $9.99 per month for higher quotas |
| **Manufacturer** | Free claim of an existing profile, or create one; company-domain email | Publish robots, receive buyer requests, buyer projects (Gold+), partner tools (Gold+) | $199 / $299 / $499 / $999 per month by number of published robots; ad add-ons +$999 / +$1,999 per month |
| **Partner** (distributor, integrator, service provider, etc.) | Free profile; free to answer a manufacturer's invitation | Outbound outreach: express interest, partnership requests, manufacturer search | $99 / $199 / $399 per month |

**Observed state of the supply side [O]:** every one of 40 randomly sampled company pages and 50 randomly sampled robot pages showed an **"Unclaimed profile" / "has not claimed this profile"** banner. Profiles are built by Flowntro from public sources. I did not observe a single "Verified · Manufacturer" or "Verified · Partner" mark anywhere in the pass. **[I]** The catalogue is currently scraped/compiled supply, and the manufacturer "claim" is the main conversion event. **[N]** how many profiles are actually claimed or paying.

**What Flowntro says it is not [S]:** not a seller, not a party to contracts, no escrow/NDA, no endorsement by badges (/about "Our Role"; /terms §3, §6; /faq "Legal, risk & platform role").

---

# 2. Page-by-page knowledge base

Conventions: *Serves* = who the page is for. Sections are in page order. "CTA" = call to action.

## 2.1 Homepage and global navigation

### Homepage — "Global Robotics Marketplace — Flowntro"
URL: https://flowntro.com/ · Serves: all visitors.

**Global header (every page)** [O]: mega-menu **Robots** (All robots, "See all categories", 18 categories each with count) · **Services** (All services 9,808; grouped Plan / Build / Deploy / Operate / Retire, 20 categories) · **Partnership Board** (badge "New") · **Projects** · **Jobs** · **News** · **Sign in**.

**Footer (every page)** [O]: tagline "Proudly based in Seattle, Washington, USA", NVIDIA Inception badge, social links (X, Instagram, TikTok, Facebook). *Browse:* Robots, Services, Partnership Board, Projects, Jobs, News. *Join Flowntro:* List your robots (/for-manufacturers), Manufacturer pricing, Become a partner (/for-partners), Partner pricing, **Buyer pricing** (/for-buyers/pricing). *Company:* About, FAQ, Contact, Privacy policy, Terms, Refund policy. Also "Cookie settings".
**[O] There is no buyer landing page**: `/for-buyers` and `/buyers` return 404; the only buyer-specific pages are /for-buyers/pricing and the sign-up flow.

**Sections in order**
1. **Hero** — "Browse. Compare. Decide." with a catalogue search box ("Search by name, type, manufacturer, or task") and four filters (Robot type, Use case, Industry, Company country) + stats bar (23,877 / 9,808 / 5,716 / 86).
2. **Robots** — 18 category chips, then a carousel of humanoid cards (Walker, Linker Humanoid, X-Head 1, R-noid, Chappie, Luka…). Adds: first-glance spec cards.
3. **Services** — 20 category chips and a feed of "Consulting & feasibility" cards (country code + "By arrangement").
4. **Compare robots** — "same field · same unit · same scale"; the widget demo compares two Hiwonder hands and says "These two robots have no specs in common yet". → /compare.
5. **How Would You Like to Get Started?** — three cards: *I manufacture robots* → /for-manufacturers ("Free to get started · Premium plans available"); *I provide robotics solutions & services* → /for-partners (same line); *I'm looking for robotics solutions* → /robots ("Free to browse · Create an account to connect").
6. **Grow Your Robotics Partner Network** — "2,317 partners · 2 open opportunities"; 3-step explainer (Create profile / Discover / Connect); two live opportunity cards (Nepher Robotics, finyo) → /opportunities.
7. **News** (3 Flowntro posts), **Jobs** (5,872 open roles; SkySpecs examples).

**Caveats / discrepancies**
- **[N] D1** Section heading shows "2 open opportunities", but the caption under the cards reads "Three live public opportunities from the Partnership Board, newest first." Only two cards and two board entries exist.
- **[N] D19** "5,716 companies" on the homepage vs 5,899 URLs in the companies sitemap (and "2,317 partners"). Unclear whether sitemap includes non-public/partner-only records.
- Category counts overlap: the 18 category counts sum to 54,658 vs 23,877 robots (robots can sit in several categories) [I].

### Sitemap and robots.txt
- https://flowntro.com/sitemap.xml [O] is an index of: sitemap-pages (33 URLs), sitemap-robots-1/2/3 (10,000 + 10,000 + 3,877 = 23,877), sitemap-companies-1 (5,899), sitemap-categories (18), sitemap-jobs-1 (5,872), sitemap-news-articles (4), sitemap-opportunities (2), sitemap-services (9,808). Plus a Google-News sitemap.
- /robots.txt [O]: `Content-Signal: search=yes, ai-train=no, use=reference`; many AI crawlers (including ClaudeBot, anthropic-ai, Claude-Web, GPTBot) are disallowed. See Coverage Log note.
- Core pages in sitemap-pages: /, /robots, /for-manufacturers, /for-manufacturers/pricing, /for-partners, /verified, /about, /contact, /terms, /privacy, /refund-policy, /services, /services/browse, and the 20 service category pages. **[O] The sitemap omits** /for-partners/pricing, /for-buyers/pricing, /faq, /opportunities, /projects, /jobs, /news, /compare, /robots/browse — they are live but not listed.

## 2.2 Robot catalogue

### /robots — "Every robot in the catalog"
Serves: buyers. [O] Search box ("Search by name, model or series"), filters **Robot type / Use case / Industry / Company country**, then a 23,877-card listing (card: name, manufacturer, an availability tag such as *Prototype*, a certification tag such as *FCC Authorized*, up to three spec figures).
- **[N]** The "Filters" button did not open a drawer in my headless-browser test, so facet contents (e.g., availability, certifications) were **not inspected**. URL parameters seen on links: `?company=…`, `?robotFamilySlug=…`, `?applicationSlug=…`, `?page=`.
- Card quirk [O]: Digit's card shows "15.88kg15.9kg" (duplicate rounded figure).

### /robots/browse — "Robots grouped the way buyers search"
[O] Lists 18 categories with counts and descriptions. **[N] D7** Intro text says "**Ten** curated categories that span robot families…", but 18 are listed (and the homepage says "18 categories").
Sampled category: /robots/browse/humanoid-robots — "1,435 robots from 496 manufacturers" + long description.

### Families and applications (taxonomy pages)
- /robots/families/humanoid-robots [O]: sub-families **Social humanoids 890 · Full-body 172 · Wheeled 148 · Upper-body 68 · Telepresence/avatar 58 · Industrial humanoids 25**. **[I]** The "Humanoid Robots 1,435" headline is dominated by social/companion robots (Luka, SwitchBot KATA etc.), not industrial humanoids.
- /robots/applications/palletizing [O]: "1,296 robots from 244 manufacturers", with "Filter these robots" → /robots?applicationSlug=palletizing. Industry pages exist at /robots/industries/…

### Robot detail pages (sampled; see Coverage Log for URLs)
Template [O], in page order: breadcrumb (Robots › family › name) → title + "series · model · family" → **status chips** (availability, price label, certification count) → **three CTAs: Request a quote / Ask a question / Request a demo** (+ "Watch video") → share URL → gallery → tab bar (Overview, Specifications N, Certifications N, Applications, Gallery, Similar robots) → manufacturer block (name, location) → availability/certifications summary → **provenance banner** → About → Applications & Industries → Video (YouTube, "Watch on the manufacturer's site") → Specifications (grouped by category, "Nothing is behind a separate tab") → **Data provenance** (source notes, "Specification source type") → Certifications (status, applies-to, issue date, "Verify with the issuer" link) → sticky "Contact [Manufacturer]" panel (Availability, Pricing, **Sold in**, Updated) with **Add to compare** → "Your message goes straight to [X]. Flowntro isn't a party to the sale." → Similar robots.

**Sample differences (availability / pricing / profile state)**

| Robot (URL slug) | Availability label | Pricing label | Sold in | Profile state | Notes |
|---|---|---|---|---|---|
| digit | Available | Price on request | US, CA, MX, DE | Unclaimed | 35 specs; 2 certifications (FCC Compliant; OSHA-recognized NRTL field evaluation "Tested"); provenance note says Agility's "full Digit spec sheet is gated behind a lead form", so height/mass/reach/speed/DOF are not published |
| eno | Prototype | Price on request | — | Unclaimed | 4 specs; still shows all three CTAs |
| morphi-kino | Prototype | Price on request | — | Unclaimed | 12 specs; 1 photo |
| luka | Available | Available to purchase | CN | Unclaimed | Homepage card shows "Price cny 799" |
| switchbot-kata-friends | Available | Available to purchase | 9 countries | Unclaimed | USD 699/unit in description |
| walker | Available | Price on request | 9 countries | Unclaimed | |
| agibot-a2-ultra | Available | Price on request | CN | Unclaimed | 4 certifications |
| scythe-m-52 | Available | **Available to lease** | US | Unclaimed | 38 specs; linked from a lease service page |
| hiwonder-aihand-open-source-robot-hand | Available | Available to purchase | — | Unclaimed | 2 specs only |
| xtand-capricorn-ai-powered-knee-exoskeleton | **Prototype** | **Available to purchase** | — | Unclaimed | **[N]** contradictory pair (a prototype "available to purchase") |
| qkm-pg6x-scara-robot | Available | (none shown) | — | Unclaimed | no pricing label |

Random sample of 50 robots [O]: Availability = Available 44, Prototype 4, no label 2; Pricing = Price on request 39, Available to purchase 8, Robot as a service 1, none 2; **50/50 unclaimed**. No "Discontinued" or "Coming soon" label appeared in the sample (the FAQ says discontinued/upcoming products can be labelled — [S]).

**Important caveats**
- **[S]** Unclaimed notice: "[X] has not claimed this profile. The specs below come from the manufacturer's published material. [X] hasn't confirmed them."
- **[N] D6** Every page says the message "goes straight to [Manufacturer]", yet manufacturers must hold a paid membership to read requests (§2.4 below; manufacturer pricing FAQ "How do buyer inquiries reach me?"), and 50/50 sampled robots are unclaimed. See founder checklist Q1.
- Cert FAQ [S]: Flowntro "may review documents" but does not guarantee certification validity.

### Robot inquiry — traced to the first public gate
Action: **Request a quote** (Digit, signed out). [O] opens a modal "**STEP 1 OF 3 — Request a quote — Ask Agility Robotics about Digit**" with fields Quantity, Timeline, Budget range (optional), "Where you'd use it", Message (required) and note: "Agility Robotics will see your name, company and country, but never your email or phone. If they accept, a conversation with you opens on Flowntro." → **Continue** → **STEP 2 OF 3 — "Create a free buyer account"** ("Any email address works… We'll send a code to confirm it's yours"), choose *business* or *individual*, Email, Full name, Company name, Country. I stopped here. Step 3 is **not observed** (presumably email-code confirmation then send — [N]). Only analytics POSTs were issued by the page during the test.
"Ask a question" and "Request a demo" are sibling modals on the same page (not opened separately). The modal is the same one used from company pages ("Send a request") and service pages ("Request a quote / Ask a question").

### /compare — "Compare robots"
[O] Empty state: "Add up to four robots… We show first how many of them you can actually compare." Deep-link works: `/compare?robots=digit,agibot-a2-ultra` → "69 specifications across both robots. **Five are specified by both**", with Digit-only 30, A2 Ultra-only 34; filters "Differences only / Only specifications both publish", metric/imperial toggle, and a "Request a quote" button per robot. **[I]** Comparison usefulness is bounded by spec completeness: two flagship humanoids shared only 5 rows (Wi-Fi, arms, legs…). The FAQ says as much ("Comparison functionality may vary by category and by the completeness of available product data").

## 2.3 Services directory and providers

### /services — "Find Robotics Services & Automation Experts Worldwide"
[O] 9,808 services in 20 categories. Search ("What do you need done? e.g. palletizing cell, UR programming"), filters Category, **On site at my location / Remote** toggles, Country, Robot family, Price, Lead time, Sort. Cards: image, category, title, provider · city, summary, **country code(s) + lead-time** (almost all "By arrangement"), optional price chip.
### /services/browse — "Services by project stage"
[O] 20 categories grouped Plan (1,600) / Build (4,144) / Deploy (1,696) / Operate / Retire (29). Category counts sum to 9,808.
### Category page — /services/rental-raas (read in full; other 19 not individually read)
[O] "263 services from 224 providers in 55 countries, and remote anywhere." Explanatory copy ("Compare rental and robots-as-a-service offers… the manufacturers it is authorized for"), same filters, cards with prices only when provided (e.g. "From US$1,800 / month").
### Service detail pages (5 sampled across regions)
Template [O]: breadcrumb → title → "Leasing · [Provider]" → summary → **Service details** (Delivery: Remote / On-site / both; **Where**; Price; Robot families; Industries & applications; Languages) → About → "Robots this service covers" (link to robot page) → provider card ("Partner" or "Manufacturer · city · country" → View company profile) → **Request a quote / Ask a question** + "You send this from a free buyer account, straight to [Provider]."

| Service | Provider (type) | Country coverage on service | Price | Provider profile state |
|---|---|---|---|---|
| b2b-robot-leasing-hire-purchase-dach | finyo (Partner, DE) | Germany, Austria, Switzerland — remote | Price on request | "As described by finyo" (no unclaimed banner; no Verified mark) |
| scythe-m-52-autonomous-mower-lease-plans-… | Scythe Robotics (Manufacturer, US) | United States — on site and remote | **From US$1,800/month** (Standard 40 acres; Unlimited from $2,200) | Unclaimed |
| stan-car-moving-robots-as-a-service-for-vehicle-compounds | Stanley Robotics (Manufacturer, FR) | France — on site and remote | Price on request | Unclaimed; profile "Robots available in Canada, France, Germany, Switzerland, UK"; "Sells worldwide: No" |
| beo-social-robot-rental-for-trade-shows-… | Qiron Robotics (Manufacturer, BR) | Brazil — on site | Price on request | Unclaimed |
| robosculptor-robotic-massage-system-rental-… | roboSculptor (Manufacturer, AE) | United Arab Emirates — on site; "ready in more than 4 weeks" | Price on request | Unclaimed; profile "Operates in UAE and US" |

**[I]** Service coverage is narrower than product availability for the same company (Stanley: service FR only; product CA/FR/DE/CH/GB). Not a conflict, but buyers could misread. **[N]** Service pages for unclaimed manufacturers also promise "straight to [Provider]" delivery (see D6).
Cross-check done: finyo's service ("DE · AT · +1") ↔ profile ("Sells in 3 countries: DE, AT, CH, strongest") ↔ Partnership Board listing (markets: Germany, Austria only) — see **D8**.

## 2.4 Company profiles (manufacturers and partners)

### Manufacturer / unclaimed profile — e.g. /companies/hiwonder, /agility-robotics, /skyspecs, /scythe-robotics
[O] Header (name, legal name, one-paragraph description, certifications such as ISO with "Verify" links on Comau/SkySpecs, location, role chips (Manufacturer, Maintenance & service partner…), founded, employees) → **Send a request** (modal as above) → KPIs (Robots listed, Open jobs, Certified models) → tabs (Overview, Robots, Jobs, Certifications, Contact) → **"Unclaimed profile" banner** ("Flowntro built this profile from public sources… Our Privacy Policy §3 explains") with "Not yet on this profile: No logo / No product datasheets or manuals" → **Claim this profile** (/signup?claim=<id>) and **How claiming works** (/for-manufacturers) → About → At a glance (robot families, industries, applications, "Operates in", "Robots available in") → Markets, sales & support (primary markets, sells worldwide, sells through, purchase options, demonstrations, pilot projects, support) → documents/videos → robots grid → jobs → certifications ("Held by individual robots, not by the company") → Contact ("Replies come to your Flowntro inbox").
- **Claim flow** [O]: /signup?claim=… → "**Claiming Hiwonder — Step 1 of 2**: Use an email at hiwonder.com — it is how we confirm you work there"; fields Work email, Full name, Password (≥10 chars). Step 2 not seen.
- Hiwonder: 68 robots listed; many with "No photo yet". The /for-manufacturers page presents Hiwonder as "the live profile" example of a manufacturer profile — but it is itself unclaimed (see D5).
- Espretto (/companies/espretto) [O] shows **no** unclaimed banner, no "As described by…" banner, and no Verified mark — a third, unexplained state. **[N]**

### Partner profile — e.g. /companies/nepher-robotics, /finyo-gmbh, /etha-ms, /c-e-l-d-i
[O] Header with partner roles (e.g., "Rental / leasing partner", "Data, training & simulation partner") → **"As described by [X] — Everything on this profile… is [X]'s own account of itself. Flowntro has not checked it."** (Nepher, finyo) or the Unclaimed banner (ETHA-MS, C.E.L.D.I. — Flowntro-built) → About → At a glance (roles, years in robotics, "Sells in N countries", languages) → **Services** (cards that link to /services/…) → Capabilities → **Territory** (Sells in / On-site service in, with "strongest" markers) → Robotics expertise (robot categories, industries, applications).
- Verified mark: **not observed on any profile**. [S] /verified defines it (see §2.8).

### Manufacturer/partner profile limits to remember
[S] One profile per company; no separate brand/division profiles yet (/faq "Can a manufacturer have more than one brand or division?"); "Claimed Profile" ≠ verified content (/faq).

## 2.5 For manufacturers

### /for-manufacturers — "List your robots & connect with robotics buyers"
Serves: robot makers. [O] sections in order:
1. **Hero** — "List your robots. Connect with buyers worldwide." CTAs: **Create your manufacturer account** → /signup?as=manufacturer; **Compare manufacturer plans** → /for-manufacturers/pricing. Copy: "We'll find your company's existing profile, or you can create one." "Explore 23,877 robotics products and 5,716 companies across 86 countries."
2. **01 Claiming** — "Your company may already be listed"; 3 steps: sign up with company email → find/create profile → manage profile, publish catalogue, "Choose a manufacturer membership to manage and publish your listings."
3. **02 Listings** — structured specs; images/videos/datasheets; discovery by application/industry; integrated catalogue. A "live listing" example (Hiwonder AiHand).
4. **03 Your profile** — buyer inquiries/quote/demo requests arrive "through your Flowntro dashboard"; analytics (extra analytics by plan). Example profile card: Hiwonder (68 robots, 8 categories) → /companies/hiwonder.
5. **04 Beyond listings** — Partnership Board (marked New), Projects ("on the memberships that include them"), News, Services marketplace.
6. **05 Membership** — four plan cards (Silver $199 / Gold $299 [Recommended] / Platinum $499 / Enterprise $999). Quote: "**Under the current pricing, Flowntro takes no commission on sales you make through the platform.**" Footnote: "Claiming your profile is free. You need a membership to publish your catalog and to keep managing your profile **after the introductory period**… no free publishing plan for manufacturers."
7. **06 FAQ** (8 Qs) — notable: Verified mark definition; "With a Gold membership you can browse distributor, reseller, and system-integrator profiles… You can also post a partner opportunity"; extra robots stay as drafts.
8. Closing CTAs (create account / compare plans / sign in).
Next steps: /signup?as=manufacturer → "Step 1 of 3 — What brings you here?" (three radio options: manufacturers / partners / buyers; each marked "Open"; buyers "Any email address works. Free to start.").
**Caveats:** [N D3] "introductory period" is never defined on this page (the pricing FAQ says 14 days; see below).

### /for-manufacturers/pricing — "Membership pricing"
Full matrix in §4. Page-order notes [O/S]: plan cards (Silver–Enterprise; Gold "Recommended") → "What changes between the plans" table (only differing rows) → "In every plan" list (verified mark, enhanced profile, detailed specs, product media, **SEO-optimized product pages**, **Buyer inquiry and RFQ forms**, basic analytics) → Advertising add-ons → "Before you decide" FAQ (4 Qs) → CTA.
**Fine print that changes the headline:**
- Claiming is free; "**for 14 days after the claim you can correct what is already there at no cost.** Publishing robots, editing after those 14 days and reading the requests buyers send are what a membership is for… Nothing is unpublished when the 14 days end: the profile stays exactly as it is." [S]
- "**We do not email you when one lands yet, so the dashboard is the only place leads appear today.**" [S]
- Over-quota: nothing deleted; extras become drafts "on the date the change takes effect". [S]
- Add-ons "need an active … membership"; Featured positions "limited within each category". CTAs → /portal/advertising, which redirects signed-out users to /signin?redirect=/portal/advertising [O].
- Verified mark requires paid membership; "Silver" plan card lists "The verified mark". [S]
- Inconsistency to note: pricing says "Four plans, each with one flat monthly price"; landing/FAQ/Refund say monthly **and annual** may exist (D4).

## 2.6 For partners

### /for-partners — "Robotics companies are looking for partners"
Serves: distributors, resellers, VARs, reps, integrators, installers, maintainers, OEMs, software/tech, consultants, data/training/simulation, logistics, rental/leasing (13 roles listed with definitions). [O] sections: hero ("Create a free Flowntro partner profile") → **01 Who can join** (13 roles; choose every role) → **02 Three ways**: (1) *Receive a manufacturer invitation* (claiming/answering free), (2) *Express interest in a posted opportunity* ("A paid partner plan lets you express interest"), (3) *Propose a new partnership* ("You need an eligible paid partner plan") + "Both companies agree before you talk — **Flowntro has no open messaging.** A conversation starts only when an invitation, expression of interest, or partnership request is accepted. Until then, contact details stay private." → **03 Your profile** (capability groups: Sales & commercial, Inventory & logistics, Engineering & programming, Integration, Safety & compliance, Installation & commissioning, Service & support, Lifecycle & modernization, Training, Robot-operated services; support hours; on-site response time; training delivery) → **04 Membership** (Silver $99 [Recommended] / Gold $199 / Platinum $399) → FAQ (5 Qs) → CTA → /signup?as=partner.
Observation: the landing says Platinum includes "Invite-only opportunities your company is invited to", while the pricing table gives Gold a "Limited" version (see D16).

### /for-partners/pricing — "Partner membership pricing"
Full matrix in §4. Page-order notes: three plan cards (+ "Eligibility is not selection…being put forward for a private opportunity depends on fit… and the verified mark… not on payment alone") → comparison table with **"Coming"** rows → "Coming: what each is waiting on" → "Free, with or without a plan" → FAQ (6 Qs) → CTA.
**Fine print:**
- "Every feature, including ones not available yet. Those are marked **Coming**." Eight Coming items: authorization review, saved searches, curated manufacturer introductions (5/month on Platinum), managed sourcing eligibility, joint bidding, CRM/data export, market intelligence, dedicated success manager. "If your plan includes one of these, you won't pay extra when it arrives." [S]
- **Coming-note for managed sourcing: "the buyer side of Flowntro, which is still being built — buyers cannot post projects yet."** [S] — conflicts with buyer pricing and news (D2).
- Membership end: "Nothing is unpublished… everything else locks… **Conversations… become read-only for both companies — the other company is told that your membership is not active — and they open again the moment you renew.**" [S]
- Cancel "any time, from Membership… keeps everything until the end of the month you paid for"; **moving up applies at once** (pay difference); **moving down applies when the paid month ends; nothing removed; interest/requests already sent stand**. [S]

## 2.7 Buyers

### /for-buyers/pricing — "Plans for buyers"
Full matrix in §4. [O] Free / Plus $4.99 [Recommended] / Premium $9.99. Table "The plans differ in three numbers": requests/month (5/15/50), projects/month (2/5/15), people in each conversation (5/15/50). Fine print: Free month = calendar month (UTC); paid month = billing period; "Upgrades apply right away; downgrades and cancellations apply when your paid period ends." FAQ: what counts (a request counts when sent, even if declined/withdrawn/expired; same request twice same day counts once; drafts never); cancel → falls to Free numbers, nothing deleted, conversations stay open and writable; suppliers never see your plan, email or phone; payments processed by **Stripe**. CTA → /signup?as=buyer.
**[O]** Plus and Premium both list a "**Verified buyer mark**" (defined at /verified).
**[N]** Buyer page is not in the sitemap and has no landing page; the only discoverability is the footer link.

### /projects — "Robotics projects" (public project board)
[O] "See what buyers on Flowntro want to automate. Flowntro reviews every project. Manufacturers and partners that fit are invited, and others can ask to be considered." CTA **Post a project** → /projects/new. Filters (All/RFP, Task, Robot, Country). **One project listed** at review time: "RFP — Counting items in the racks of the warehouse — mavdrones, India — Inspection · Drone/aerial — Responses by 21 Nov 2026 — **0 companies invited**".
- Detail page [O]: brief "Written from the buyer's answers and reviewed by Flowntro staff", buyer's answers (task, robot type, industry, process details), "Only invited companies can see the buyer's files." Gate: "Manufacturers and partners answer projects. **Sign in with your company account to ask to be considered.**" → /signin?redirect=…
- **[N]** The brief reads as a template ("The customer operates a facility and wants to automate inspection"); the poster name "mavdrones" is a company-style name — whether it is a real buyer is unverifiable. One project in total = very thin demand evidence.

### /projects/new — "Post a Robotics Project"
[O] **8-step** form; Step 1 ("What to automate") is public: task (Material transport, Palletizing, Welding, Inspection, Cleaning, Delivery, Agriculture, Security, Healthcare, Construction, Research, Other), robot type (AMR/AGV, industrial/collaborative arm, humanoid/legged, drone, "Not sure yet — I need advice"), industry, working title. Footer: "**Next: create a free buyer account, then answer the rest of the questions.**" Steps 2–8 not seen (account required).

## 2.8 Trust marks

### /verified — "What 'Verified' means"
[O] Two checks, both required: (1) controls an email address at the company's own website domain ("Where the domains could not match, the Flowntro team confirmed the claim instead"); (2) **active paid membership — "A free trial does not count"**; mark removed when membership ends (not at first failed payment). Does **not** mean endorsement, quality, credentials/authorizations, ranking, or accuracy of self-description. "Manufacturers and partners are verified the same way and carry the same mark." "Unclaimed profiles… never carry the mark." **Verified buyer**: active Plus/Premium + confirmed email; "not an identity check". Mark is automatic; "Nobody turns it on by hand."
**[N D12]** The partner pricing page does not list the verified mark as a plan feature (the manufacturer page does); /verified says partners get it the same way.

## 2.9 Partnership Board

### /opportunities — "Partnership Board"
[O] Search + type tabs: All (2) · Manufacturer seeking partners (0) · Partner seeking manufacturers (1) · Partner seeking partners (1); filters Market, Role sought, Partnership structure, Industry. Notice: "Some opportunities are visible only to signed-in organizations."
Cards: Nepher Robotics (posted 9 Nov 2026; seeking Manufacturer; Worldwide; Nonexclusive) and finyo (posted 5 Nov 2026; seeking Distributor, Reseller, System integrator, Installation partner, Regional sales representative, OEM partner; markets Germany, Austria; Nonexclusive).
**Detail pages** [O]: About → Markets → Who they are looking for (roles, structure) → What they need → Industries and applications → Requirements → Posted by → "[X] wrote this opportunity, and it is published as written. **Flowntro hasn't reviewed its terms.**" → "**Interested? Sign in with your company account to express interest. You only need to write a short note — [X] reads your profile and decides whether to take it further.**" → Sign in.
**Caveats:** only 2 public opportunities and **0 posted by manufacturers** — the manufacturer-side flow can't be seen; [S] Terms §8: publishing an opportunity "does not constitute an offer" and "Applications, match scores, introductions… do not create a partnership."
Discrepancies: D1 (count), D8 (finyo markets), D9 (Nepher role/category mismatch: the board tags it "Partner seeking manufacturers" and the homepage card tags it "Manufacturer", the text says it seeks "industrial robot manufacturers… robotic arms", but the robot categories it lists are aerial drones, humanoids and legged robots; the text also contains a truncated "Priority Use Cases: 1…"), D10 (gate says "company account"; partner pricing says expressing interest needs a paid plan).

## 2.10 News and Jobs

### /news — "Robotics news & company updates"
[O] Search, type filters (Latest/Company/Other), 4 posts, all by **Flowntro itself**: 11 Oct "What Is Flowntro?"; 16 Oct "Flowntro Joins the NVIDIA Inception Program"; 29 Oct "How to Join Flowntro…"; 9 Nov "**Flowntro Launches Free Buyer Accounts and Robotics Project Marketplace**". Banner: "**Only verified companies with an active plan can publish.** Every post is labeled with the company that wrote it." No third-party posts exist at review time [O].
Articles read: 9 Nov and 29 Oct (summarised in §3). Not read: 16 Oct and 11 Oct posts.
**Key content (9 Nov, [S])**: free buyer accounts; RFI/RFQ/RFP; buyer dashboard; "The free plan includes a monthly allowance for requests and projects, with optional paid plans"; "Flowntro reviews submitted projects before they are shown to suppliers"; "Flowntro does not guarantee a quotation, supplier response, sale, or partnership."
**29 Oct [S]**: describes sign-up options ("We manufacture robots" / partner / "I want to buy robots"), buyer business vs individual, partner services listings, and mentions "Customer-submitted reviews and company-shared video testimonials" and that individuals can "save or compare products" — **not observed on any sampled page** [N D24].

### /jobs — "Jobs in robotics & AI"
[O] 5,872 open roles, "Companies 100+", 47 countries, 288 remote roles; search; filters (On-site/Hybrid/Remote, Country, Job function, Experience, Salary). Job detail (SkySpecs "Sales Engineer – Solar"): **"Apply on SkySpecs's site (opens in a new tab)… You apply directly to the company. Flowntro doesn't see your application."** (external ATS). Roles are posted under company profiles that are **unclaimed** (SkySpecs: "unclaimed", 9 open jobs; Agility: 2).
**[N D18]** Manufacturer plans sell "5 / 15 / unlimited live jobs" and partner plans "2 / 6 / unlimited"; the observed job board looks imported/aggregated from company career sites. How imported jobs relate to plan quotas or any revenue is not stated. FAQ [S]: ATS integrations/employer feeds are "on the Jobs roadmap".

## 2.11 Company and legal pages

### /about
[O] Mission; list of participants (incl. "Investors and other industry participants"); four capability blocks (Discover; Connect Manufacturers With Global Partners; Post and Discover Robotics Projects; Build Industry Connections); **"Our Role"**: "We do not manufacture, sell, install, certify, warrant, or guarantee robots or robotics services… generally not a party to contracts." Vision: "global commercial infrastructure for physical robotics". No team, address, funding or founder information.

### /contact
[O] Form: Name, Email, Topic (General question; Account or sign-in; A robot listing; Manufacturer or company profile; Billing; Privacy or data request; Terms; Report a problem), Message (4,000 chars). A hidden "Website" field (honeypot). Not submitted. No phone, no email address, no postal address on the page.

### /faq — 110 answers (read in full)
Categories: About Flowntro 10 · Accounts, claiming & verification 10 · Manufacturer onboarding 8 · Robots & specifications 12 · Product certifications 8 · Search & matching 7 · Manufacturer plans & advertising 9 · Billing, renewals, cancellation & refunds 9 · Data accuracy 8 · Privacy 8 · Legal 8 · Support 6 · Technical 7. Audience tags: General 64 · Manufacturer 64 · Buyer 27 · Partner 19 · **Investor 9**. Most business-relevant answers (all [S]):
- Browsing needs no account; account needed to send requests, publish, use partner tools, subscribe.
- **Planned manufacturer onboarding includes: Company; Products; Partner Network & Opportunities; Capital Raising/Investment; Terms & Conditions; Subscription Plan.**
- Ranking: "relevance, fit, how complete the data is, how recent it is, verification, your filters, and other signals. Sponsored placements are labeled separately." Match score: "your plan does not raise your match score." (note: /verified says the mark doesn't affect ranking, the FAQ lists "verification" as a ranking signal — **D25**).
- Plans: four manufacturer plans & two ad add-ons (Featured: "3 featured placements"; Premier: "5"). "Does a subscription guarantee sales? No."
- Billing: "monthly **and annual** billing depending on the plan. Annual plans may include discounted pricing" (no annual price shown anywhere).
- Refunds: generally nonrefundable; ad fees nonrefundable once campaign begins; no refund for lack of leads.
- API: "Not yet"; ATS integration: "Not yet"; exports "Selected plans may offer CSV, Excel, report, or API exports".
- Support: contact form only.

### /terms (effective 8 Nov 2026, 38 sections; read in full)
Business-relevant: §2 lists planned/possible services incl. "product referral links; affiliate links; consulting discovery; **investor networking**"; §3 platform only; §6 badges (Verified Manufacturer/Partner, Confirmed Partner, Nepher Verified); §7 unconfirmed partner relationships; §8 opportunities are not offers; §9 projects/RFx; §11 investors ("not a broker-dealer… placement agent, or crowdfunding portal"); §17 **Affiliate Links and Referral Compensation** ("We may receive affiliate fees, referral fees, commissions, advertising payments, or other compensation when users click certain links, submit inquiries, or complete eligible transactions"); §18 sponsored content; §19 match scores; §20 subscriptions auto-renew; §22 refunds; §30 liability cap = greater of 6 months' fees or $100; §33 **defense/dual-use policy** (no weaponized systems, autonomous weapons, munitions, fire-control; defense-adjacent makers may list non-weaponized products).
**[N D11]** §36 Dispute Resolution contains unfinished drafting text: "courts located in the Washington State, USA OR arbitration clause selected after legal review… **I recommend having U.S. counsel finalize this section before launch**."

### /privacy (effective 8 Nov 2026, 20 sections; read in full)
Notable: opening sentence reads "**Flwontro LLC**" (typo); §2 Google Analytics + Microsoft Clarity only after consent; §3 profiles built from "manufacturer websites; partner websites; publicly available business sources… data providers; and commercial partners"; §10 manufacturers can supply partner contact details so Flowntro can "create or reserve an unclaimed business record" and invite them; §8 "We do not sell personal information for money."

### /refund-policy (effective 8 Nov 2026, 15 sections; read in full)
Subscriptions nonrefundable once charged (monthly and annual); no proration; business results not guaranteed; §4 ad products named: "**Advertising, Featured Product, Featured Partner, Premier, Regional Spotlight, market-entry campaigns, sponsored placements**"; §5 invite-only/premium opportunity access; §6 "Where separately charged, **setup, onboarding, data-entry, consulting, profile optimization, campaign preparation, or custom professional-service fees**"; §7 billing errors within 30 days; §11 coupons, "introductory offers; founding-member pricing"; §12 "Free Partner accounts do not involve subscription refunds. If we offer paid trials or introductory periods **in the future**…"; §13 cancel path "Account → Billing → Subscription → Cancel Subscription" and a drafting note ("We recommend making cancellation at least as straightforward as enrollment, which also reduces regulatory and chargeback risk") that reads like internal guidance, not policy text.

## 2.12 Sign-in / sign-up
- /signin [O]: email + password, "Forgot password?", "Create account", note "Browsing robots needs no account". Supports `?redirect=`.
- /signup [O]: "Step 1 of 3 — What brings you here?" (Manufacturers: "Claim your company profile, list your robots, post jobs and receive buyer requests"; Partners: "Set up your company profile, post jobs and news, and build partner relationships and find opportunities"; Buyers: "Ask… for information, a quote or a demo, and post robotics projects. Any email address works."). Variants `?as=manufacturer|partner|buyer`, `?claim=<companyId>`. Steps 2–3 not observed for manufacturer/partner.
- /portal, /portal/advertising [O]: redirect to /signin. Dashboards, lead inbox, advertising console, billing (Stripe) are **behind login — not seen**.

---

# 3. User journeys

Each step: actor → action → destination → condition.

## J1. Buyer who knows the robot model
1. Visitor → homepage search box or /robots (search "name, model or series"; filters Robot type, Use case, Industry, Company country) [O].
2. Opens robot page (e.g. /robots/digit); reads specs, provenance banner, certifications [O]. **Condition:** unclaimed profile → specs are "not confirmed" by manufacturer [O]; some specs absent (Digit sheet gated behind a lead form [O]).
3. Optional: **Add to compare** (up to four) → /compare?robots=… — only rows both robots publish are comparable [O].
4. Click **Request a quote / Ask a question / Request a demo** → modal Step 1 of 3 (quantity, timeline, budget, location, message) [O] → Step 2 "Create a free buyer account" (code sent to email) [O] → Step 3 [N, unseen].
5. After submission [S]: manufacturer "sees your name, company and country, never your email or phone. If they accept, a conversation opens on Flowntro." Counts against the monthly request quota (Free 5/mo; counted when sent, even if declined/expired) [S].
6. Next observable outcome: reply "comes to your Flowntro inbox" (company page) [S]. **[N]** delivery/response for unclaimed manufacturers (D6); price is mostly "Price on request" (39 of 50 sampled) [O].
Conditions that change the path: availability *Prototype* (still shows Request a demo) [O]; "Sold in" list [O]; verified buyer mark only on Plus/Premium [S].

## J2. Buyer who knows the problem, not the robot
1. Discover by application/industry (/robots/applications/…, /robots/industries/…), category, or by service: /services (search "What do you need done?"; On-site/Remote toggle; Country; Price; Lead time) [O].
2. Open a service (e.g. Scythe lease, finyo leasing) → read Delivery/Where/Price/Robot families/Languages → provider card → provider profile [O].
3. Either (a) **Request a quote / Ask a question** to one provider ("from a free buyer account, straight to [Provider]") [O]; or (b) **Post a project**: /projects/new, step 1 public (task, robot type incl. "Not sure yet — I need advice", industry, title) → "create a free buyer account, then answer the rest" (8 steps) [O].
4. Project routing [S]: Flowntro staff review the project; matching manufacturers/partners are **invited**, others can "ask to be considered"; files visible only to invited companies; suppliers respond with proposals directly to the buyer (news 9 Nov; project page).
5. Observable outcome today: one project on the board, "0 companies invited" [O]. **[N]** invitation volume, review turnaround, who the invited suppliers are.
Conditions: Free 2 projects/mo (Plus 5, Premium 15); **only Gold+ manufacturers and Gold+ partners can ask to be considered / see public projects** [S].

## J3. Manufacturer
1. Discovery: finds profile unclaimed via site/search; or /for-manufacturers [O].
2. **Claim**: Claim this profile (/signup?claim=<id>) → Step 1 of 2 requires an email at the company's own domain + name + password [O]; step 2 unseen. Alternative: /signup?as=manufacturer → find or create profile [S].
3. Free period: "for 14 days after the claim you can correct what is already there at no cost" [S]; "introductory period" [S, undefined].
4. **Verification/mark** [S]: domain-email proof + active paid membership; automatic.
5. **Choose plan** ("You choose a plan last") → Silver–Enterprise [S]; publish catalogue up to 5/15/30/unlimited robots; extras remain drafts [S]. Optional Featured/Premier ad add-ons via /portal/advertising (login) [O gate].
6. **Handle incoming requests** — lead inbox in dashboard ("We do not email you when one lands yet") [S]; reply opens a conversation [S]. Needs membership to read requests [S].
7. **Buyer projects** (Gold+): get invited, see matching public projects, express interest, send priced proposals with documents, weekly email [S].
8. **Find distributors/partners** (Gold+: browse partner profiles, invite/propose from search, show distributor-seeking status and territories; Platinum: full filters, match scores, suggestions, "partners who viewed you") [S]; post an opportunity on the Board [S, FAQ — plan requirement not stated].
9. Observable on public site: 0 manufacturer-posted opportunities on the Board; 0 claimed/verified manufacturers observed [O].

## J4. Partner / distributor / integrator / service provider
1. Create profile: /for-partners → /signup?as=partner (choose all roles) [S]; or **claim from invitation** (a manufacturer declares you as a partner; you confirm/correct/decline free) [S]; or claim a Flowntro-built profile (e.g. ETHA-MS, C.E.L.D.I. unclaimed) [O].
2. Complete profile: roles, territory (sells-in vs on-site service countries), supported robots/industries, capabilities, support hours/response time, training [O/S]. Publish services (appear as /services/… listings) [O].
3. Find work: Partnership Board /opportunities [O] → detail → "Sign in with your company account to express interest… write a short note" [O]. **Condition [S]:** expressing interest requires a paid plan (Silver 15/mo, Gold/Platinum unlimited); proposing to a manufacturer from search needs a paid plan (5/20/unlimited per month).
4. Alternatively answer **projects** (Gold+ "Qualified buyer RFQs and proposals") [S].
5. Conversation: opens **only after acceptance**; contact details private before that [S]. If membership lapses: conversation read-only for both sides and the counterpart is told [S].
6. Observable outcome: none observable publicly (all stages behind login).

## Three separate workflows (do not conflate)
| | Direct inquiry | Public buyer project | Partnership request |
|---|---|---|---|
| Initiator | Buyer | Buyer | Manufacturer or partner (company ↔ company) |
| Entry | Robot/service/company page modal (/robots/…, /services/…, /companies/…) | /projects/new (8 steps) | Invitation; Board "express interest"; "propose" from search |
| Visibility | One recipient | Reviewed by Flowntro, then invited/asked-to-be-considered suppliers; files only to invited | Private; contact details hidden until accepted |
| Gate for sender | Free buyer account; quota 5/15/50 per month | Free buyer account; quota 2/5/15 per month | Paid partner plan to initiate (answering is free); manufacturer Gold+ |
| Gate for responder | Manufacturer membership to read requests [S] | Gold+ manufacturer / Gold+ partner [S] | Free to answer an invitation |
| Public page | none | /projects | /opportunities |

---

# 4. Revenue and access matrix

## 4.1 Plans side by side (all [S] unless noted [O])

| | **Buyer** Free | Plus | Premium | **Partner** Silver | Gold | Platinum | **Manufacturer** Silver | Gold | Platinum | Enterprise |
|---|---|---|---|---|---|---|---|---|---|---|
| Price | $0 | $4.99/mo | $9.99/mo | $99/mo | $199/mo | $399/mo | $199/mo | $299/mo | $499/mo | $999/mo |
| Billing | calendar month (UTC) | billing period | billing period | monthly | monthly | monthly | monthly | monthly | monthly | monthly |
| Cap | 5 requests, 2 projects | 15 / 5 | 50 / 15 | 15 interests, 5 requests | unlimited interests, 20 requests | unlimited (anti-spam limits) | 5 published robots | 15 | 30 | unlimited |
| People | 5 in each conversation | 15 | 50 | 3 team | 10 | 25 | — | — | — | — |
| Free/trial | Free tier | — | — | Free profile (no plan) | — | — | Claim free; 14-day free correction window; "introductory period" undefined | | | |
| Verified mark | no | **yes** (Verified buyer) | yes | not listed | not listed | not listed | yes (listed) | yes | yes | yes |
| Buyer requests | — | — | — | — | — | — | read & answer | + projects | + | + |
| Buyer projects / RFx | post | post | post | — | **Qualified buyer RFQs & proposals** | same | — | board, proposals, analytics, weekly email | same | same |
| Partner tools | — | — | — | outbound outreach, manufacturer search, match score + top 3 reasons | all reasons; invite-only (limited) | all invite-only | — | browse partners; invite/propose; distributor-seeking status | full filters, match scores, suggestions, viewers count | same |
| Analytics | — | — | — | "Advanced analytics" (all plans) | | | 30d by week | 365d by day | 730d by day, export, benchmark, demand index | 730d |
| Jobs / news | — | — | — | 2 jobs, 1 news/mo | 6 jobs (1 featured), 4 news | unlimited jobs (2 featured), unlimited news | 5 jobs, 2 news | 15 jobs (1 featured), 8 news | unlimited jobs (3 featured), unlimited news | same |
| Support | — | — | — | — | — | success manager *(Coming)* | — | — | — | priority support, named account manager |

## 4.2 Advertising add-ons (manufacturers only, [S] /for-manufacturers/pricing; [O] buy path login-gated)
| Add-on | Price | Includes |
|---|---|---|
| Featured | +$999/mo | Priority placement; "Featured" label; limited slots per category; reports on impressions, clicks, CTR, inquiries; (FAQ: 3 placements) |
| Premier | +$1,999/mo | Everything in Featured; 5 placements; homepage sponsor strip |
Maximum published manufacturer spend per month: $999 + $1,999 = **$2,998**. No advertising offer is shown for partners or buyers on the pricing pages [O].

## 4.3 Marked "Coming / not yet" ([S] partner pricing, except where noted)
Eligibility for authorization review (all plans); saved searches (all); curated manufacturer introductions (Platinum, 5/mo); eligibility for managed sourcing projects (Gold limited, Platinum); joint bidding (Platinum); CRM and data export (Gold, Platinum); market intelligence (Gold limited, Platinum); dedicated success manager (Platinum). FAQ [S]: API "Not yet"; ATS integration "Not yet". Manufacturer pages: no "Coming" labels, but "We do not email you when [a lead] lands yet" (no lead notification emails).

## 4.4 After cancel / downgrade / lapse ([S] unless noted)
| Role | Rule |
|---|---|
| Buyer | Plan runs to end of paid period, then Free numbers; **nothing deleted/closed**; requests, answers, conversations stay open and writable; downgrade applies at period end. |
| Partner | Nothing unpublished; public profile and confirmed relationships stay; can still edit and answer declarations; **all outreach locks; conversations read-only for both companies, other party notified**, reopen on renewal; downgrade at month end, nothing removed, previously sent interests/requests stand. |
| Manufacturer | Over-quota: nothing deleted; extras → drafts on effective date; Verified mark removed when membership ends (/verified). **Not explained:** effect on lead inbox, active conversations, project proposals, analytics history, ad campaigns if membership lapses [N]. Add-ons "need an active membership". |

## 4.5 What Flowntro charges for today (per public pages)

| Revenue line | Evidence | Status |
|---|---|---|
| **Subscription — Manufacturer** (4 tiers) | /for-manufacturers/pricing; /faq | **Stated (S), active offer** — checkout not seen |
| **Subscription — Partner** (3 tiers) | /for-partners/pricing | **Stated (S), active** (some included features "Coming") |
| **Subscription — Buyer** (Plus/Premium; Stripe) | /for-buyers/pricing | **Stated (S), active**; very low price |
| **Advertising — Featured / Premier** | /for-manufacturers/pricing; /faq; Refund §4 | **Stated (S), active** (portal not seen) |
| Transaction commission | /for-manufacturers landing: "Under the current pricing, Flowntro takes no commission on sales"; /faq "Flowntro does not sell robots directly" | **No transaction fee stated today** (the landing says "current pricing" — could change [I]) |
| Affiliate / referral / click fees | Terms §2, §17 ("fees… when users click certain links, submit inquiries, or complete eligible transactions") | **Possible revenue source — not verified**; no affiliate/"sponsored" outbound links observed (outbound links are `nofollow noopener` manufacturer media only) [O] |
| Featured Partner, Regional Spotlight, market-entry campaigns | Refund §4 only | **Possible — no public offer found** |
| Setup/onboarding/data-entry/consulting/profile-optimization fees | Refund §6 ("where separately charged") | **Possible — no public offer found** |
| Annual billing / discounts / coupons / founding-member pricing | /faq; Refund §1, §11 | **Possible — no annual price found** |
| API / institutional data / data exports / licensed data | /faq ("Not yet… will publish pricing") | **Planned, not active** |
| Curated introductions, managed sourcing, joint bidding | Partner pricing "Coming" (inside the Platinum fee) | **Not separately charged**; not available yet |
| Investor-related, jobs fees | Terms §2/§11, FAQ "Capital Raising/Investment" step; jobs plan quotas | **No public pricing; no investor pages/nav observed** [N] |

---

# 5. Discrepancies and founder walkthrough checklist

Quote both sides, then the exact question.

**D1 — Opportunity count.** Homepage heading "2 open opportunities" vs caption "Three live public opportunities from the Partnership Board" (/) and board shows 2. *Q: Is a third opportunity private/invite-only, or is the caption stale?*
**D2 — Can buyers post projects?** Partner pricing: managed sourcing is waiting on "the buyer side of Flowntro, which is still being built — **buyers cannot post projects yet**." vs /for-buyers/pricing (2/5/15 projects a month), /projects "Post a project" and news 9 Nov ("publish robotics projects… now"). *Q: Is the project marketplace live to buyers today? Show the 8-step form end-to-end, the staff review queue and how many projects have been published/invited.*
**D3 — Trial/introductory access.** /for-manufacturers: "keep managing your profile after the introductory period"; pricing FAQ: "for 14 days after the claim you can correct what is already there at no cost"; /verified: "A free trial does not count"; Refund §12: "If we offer paid trials or introductory periods in the future". *Q: Is there any trial? Exactly what can an unpaid claimed manufacturer do on day 1, day 15, day 60 (edit, read leads, see requests, keep the profile)?*
**D4 — Annual billing.** Pricing pages: "Monthly… renewing until you cancel"; FAQ: "monthly and annual billing depending on the plan"; Refund §1 "monthly and annual membership fees". *Q: Does annual exist, at what price?*
**D5 — Showcase vs reality.** /for-manufacturers presents the Hiwonder profile as "the live profile", but /companies/hiwonder says "Unclaimed profile… No logo / No product datasheets or manuals". *Q: Can you show a genuinely claimed, paying manufacturer profile?*
**D6 — Delivery to unclaimed companies.** Robot pages: "Your message goes straight to Agility Robotics"; service pages: "straight to Scythe Robotics"; vs manufacturer pricing: reading requests is part of the paid membership and "the dashboard is the only place leads appear today" and no email on arrival; profiles are 50/50 + 40/40 unclaimed. *Q: What happens to a request sent to an unclaimed company — who receives it, is it held, forwarded to a public email, or visible only after claim? What % of requests reach a human and get a reply?*
**D7 — Category count.** /robots/browse "Ten curated categories" vs 18 listed and homepage "18 categories".
**D8 — finyo markets.** Title "Germany, Austria & Switzerland", service page and profile include Switzerland; board listing markets: "Germany · High Priority, Austria · High Priority" only. *Q: Does the Board omit non-priority markets or truncate?*
**D9 — Nepher listing.** Tagged "Partner seeking manufacturers" (board) and "Manufacturer" (homepage); text seeks "industrial robot manufacturers… robotic arms"; categories listed = aerial drones, humanoid, legged; description truncated at "Priority Use Cases: 1". *Q: Is the category mapping a form constraint?*
**D10 — Who can express interest?** Opportunity page: "Sign in with your company account to express interest." vs Partner pricing: free partner profiles cannot express interest; paid plan required (and manufacturers are not described as able to express interest). *Q: What does a free account see after sign-in? Can manufacturers respond to opportunities?*
**D11 — Unfinished legal text.** Terms §36: "arbitration clause selected after legal review… I recommend having U.S. counsel finalize this section before launch"; Refund §13 advisory sentence; Privacy "Flwontro LLC". *Q: Are these the final signed-off terms in force for paying customers?*
**D12 — Partner verification.** /verified: partners verified "the same way" (domain email + paid plan); partner pricing doesn't list the mark; Platinum "private opportunity" eligibility depends on "the verified mark". *Q: Do paying partners show the mark? Show one.*
**D13 — Cancel path wording.** Partner pricing: "from Membership"; Refund §13: "Account → Billing → Subscription → Cancel Subscription". *Q: Screenshot the real path.*
**D14 — Manufacturer lapse rules.** No page explains what happens to the lead inbox, ongoing conversations, project proposals and ad campaigns when a manufacturer cancels/downgrades (partner and buyer rules are explicit). *Q: Walk through a cancellation.*
**D15 — Verified mark observed?** Zero Verified marks seen. *Q: How many manufacturers/partners/buyers currently carry a mark?*
**D16 — Invite-only access.** Partner landing lists "Invite-only opportunities your company is invited to" for Platinum only; pricing gives Gold a "Limited — from manufacturers you already work with" version.
**D17 — Gold project access (partners vs manufacturers).** Both need Gold for projects; manufacturers also need Gold to browse partners. Confirm that free partner accounts can't see any projects (the project page only shows "Sign in with your company account to ask to be considered").
**D18 — Jobs.** Plans advertise job-slot quotas; the board lists 5,872 jobs under mostly unclaimed profiles with external apply links ("Flowntro doesn't see your application"). *Q: Source of jobs; are imported jobs counted in quotas; any job revenue?*
**D19 — Company counts.** "5,716 companies" vs 5,899 company URLs in the sitemap vs "2,317 partners". *Q: Definitions.*
**D20 — Availability/price labels.** "Prototype + Available to purchase" (Xtand); robots without pricing label (QKM); *Request a demo* on prototypes. *Q: Label rules and who sets them?*
**D21 — Comparison coverage.** Two flagship humanoids shared 5 of 69 specs. *Q: What share of robots have ≥ N comparable specs?*
**D22 — Investor module.** FAQ has 9 "Investor" answers, onboarding step "Capital Raising/Investment", Terms §2/§11 "investor networking", About lists investors — but no nav, page, signup option or pricing. *Q: Roadmap? Any investor revenue?*
**D23 — Referral/affiliate revenue.** Terms §17 vs no observed affiliate links and the manufacturer page's "no commission". *Q: Is any affiliate/referral/transaction fee active?*
**D24 — Reviews and "save".** 29 Oct post mentions customer reviews, company video testimonials and saving products; none observed.
**D25 — Ranking and verification.** FAQ ranking includes "verification"; /verified: "The mark does not move a company or a robot up the results."
**D26 — Buyer-plan economics.** Buyer paid plans are $4.99/$9.99; both Plus and Premium list "Verified buyer mark". *Q: Is buyer revenue meaningful, or are paid buyer plans primarily a gate/quality signal?* (question only)

## Founder walkthrough — screens to see
1. A **lead inbox** with a real request to an unclaimed vs a claimed manufacturer (D6), and the notification gap ("no email yet").
2. **Claim flow steps 2+**, then the first 14 days and the "introductory period" (D3), the plan-selection screen and Stripe checkout.
3. **/portal/advertising**: purchase flow, slot inventory, labelled placement on the live site, report screens.
4. The **project intake** steps 2–8, Flowntro's review queue, the invitation list and what a supplier sees; any live project beyond the single RFP (D2).
5. **Manufacturer-posted opportunity** creation, and what a free vs paid partner sees at "express interest" (D10).
6. **Partner dashboard**: match scores, recommended opportunities, weekly digest, and a cancelled-membership conversation (read-only state).
7. Counts: claimed/verified manufacturers and partners; paying accounts by plan; requests sent per week; response rate; projects posted/invited/awarded; number of Gold+ manufacturers able to respond.
8. A cancelled manufacturer account (D14).
9. The **Terms/Privacy/Refund** production versions (D11).

---

# 6. Coverage log

**Date:** 16 Nov 2026. Method: signed-out HTTP fetches rendered to text (≈250 page fetches), a headless browser (Playwright/Chromium, cookie banner set to "Only necessary") for button flows. No account creation, form submission, message send, or purchase. In the quote modal I typed a placeholder message and clicked Continue to reach step 2; the only POSTs made were analytics beacons.

**Compliance note:** /robots.txt disallows several AI crawlers (including ClaudeBot/anthropic-ai/Claude-Web) and says `ai-train=no, use=reference`. This pass was a user-directed review of public pages with a generic fetch client, modest volume (about 250 page fetches), no bulk downloading; content is used here only as reference notes. Re-confirm that is acceptable to Flowntro if this KB will be shared externally.

**Core pages read in full (top to bottom):** /, /for-manufacturers, /for-manufacturers/pricing, /for-partners, /for-partners/pricing, /for-buyers/pricing, /verified, /about, /contact, /faq (all 110 answers), /terms, /privacy, /refund-policy, /opportunities, /projects, /projects/new (step 1 only), /news, /jobs, /compare, /robots, /robots/browse, /services, /services/browse, /signin, /signup (3 variants: base, as=manufacturer/partner/buyer — all return the same Step-1 role chooser), /signup?claim=<Hiwonder id>.

**Detail pages sampled (exact URLs, https://flowntro.com…)**
- Robots: /robots/digit · /robots/eno · /robots/morphi-kino · /robots/luka · /robots/switchbot-kata-friends · /robots/walker · /robots/agibot-a2-ultra · /robots/scythe-m-52 · /robots/hiwonder-aihand-open-source-robot-hand · /robots/xtand-capricorn-ai-powered-knee-exoskeleton · /robots/qkm-pg6x-scara-robot (+ 50 random robot URLs from the three robot sitemaps, checked only for availability/pricing/claim labels).
- Robot taxonomy: /robots/browse/humanoid-robots · /robots/families/humanoid-robots · /robots/applications/palletizing · /compare?robots=digit,agibot-a2-ultra.
- Companies: /companies/hiwonder · agility-robotics · skyspecs · scythe-robotics · stanley-robotics · qiron-robotics · robosculptor · nepher-robotics · finyo-gmbh · espretto · enigma · bellboy · richtech-robotics · comau · etha-ms · c-e-l-d-i (+ 40 random company URLs, labels only: 40/40 unclaimed).
- Services: /services/rental-raas (category) · /services/rental-raas/b2b-robot-leasing-hire-purchase-dach · …/scythe-m-52-autonomous-mower-lease-plans-with-account-management-training-and-field-service · …/stan-car-moving-robots-as-a-service-for-vehicle-compounds · …/beo-social-robot-rental-for-trade-shows-and-corporate-events-with-custom-script · …/robosculptor-robotic-massage-system-rental-for-spas-gyms-and-wellness-businesses-2-or-5-year-sla-contract.
- Opportunities: /opportunities/call-for-partners-funded-sim-to-real-pilots-for-ai-driven-ro-cfxxtsl4 · /opportunities/b2b-leasing-financing-partner-for-robotics-germany-austria-s-wf56wtl8.
- Project: /projects/cmvw8zgqv000a01n8e35co847.
- News: /news/flowntro/flowntro-launches-free-buyer-accounts-and-robotics-project-marketplace · /news/flowntro/how-to-join-flowntro-connect-robot-manufacturers-service-providers-and-buyers.
- Job: /jobs/skyspecs/sales-engineer-solar-5juaty4b.

**Inaccessible / behind login (not seen):** /portal and /portal/advertising (redirect to sign-in); dashboards, lead inbox, partner/manufacturer onboarding steps 2+, buyer sign-up step 3, project form steps 2–8, checkout/Stripe, conversation views, manufacturer-posted opportunities, signed-in-only opportunities, invitations. **404s:** /for-buyers, /buyers, /advertising, /investors, /llms.txt.

**Remaining gaps (not a complete audit)**
- Robot filter drawer facet lists (the Filters button didn't open in my test); search-result behaviour (`?q=`) not exercised; sort options not read.
- Only 1 of 20 service category pages (RaaS) read in full; the other 19 only via homepage/browse; service filters (Price/Lead time/Country) not exercised.
- Only 2 of 4 news articles read (not the 16 Oct and 11 Oct posts); only 1 job detail read.
- Partnership Board filter drawers not opened; "Manufacturer seeking partners" has zero listings so that workflow is unobserved.
- Not observed: any Verified mark, any claimed manufacturer with paid plan, any "Discontinued/Coming soon" robot, any non-Flowntro news post, customer reviews/testimonials, saved products.
- Only 5 service detail pages (of 9,808) and ~16 company pages (of ~5,900) were read in full; random samples were label-only.
- Counts are as of 13–16 Nov 2026 and move daily (jobs updated "2 days ago").
