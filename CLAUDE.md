# CLAUDE.md — Aksan Labs SMB Site

## Project Overview
Marketing site targeting **small business owners and entrepreneurs** who find the main aksanlabs.com too enterprise/technical. Friendly, welcoming tone — no jargon. Homepage is a single-scroll landing page; a small set of niche landing pages target specific industries for SEO/AEO (see below).

- **Live domain**: https://smb.aksanlabs.com (subdomain of aksanlabs.com)
- **Main site**: https://aksanlabs.com (separate project at `C:\IT\Claude Projects\Aksanlabs`)
- **GitHub repo**: `paksan32/aksanlabs-smb`
- **Vercel project**: `smb` — git-linked, auto-deploys on push to `main`

## Tech Stack
- Next.js 16.2.9 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (brand tokens via `@theme` in `app/globals.css`)
- Framer Motion (animations)
- react-icons (hi, hi2 subsets)

## Design Decisions
- **Theme**: Light — white/slate-50 backgrounds, `brand-navy` (#00253D) and `brand-red` (#CE242B) accents, soft shadows. NOT dark like the main site.
- **Layout**: Homepage is single-scroll, sticky top bar with logo + "Book a Free Call" button only, no nav links. Niche landing pages (see Site Structure) are separate routes, each self-contained — multi-page routing beyond the homepage is approved and in use as of 2026-07-15.
- **Tone**: Plain language, zero tech terms, welcoming and approachable
- **Voice**: "We" throughout — not "I"

## Pricing Model — No Fixed Prices
AksanLabs does not quote fixed prices ($499/$799/etc. are retired). The model: build a **free working demo first**, the customer decides what it's worth after seeing it, and the only recurring cost is a monthly fee covering hosting, security updates, and maintenance. This applies everywhere pricing is mentioned — FAQ copy, `Service` JSON-LD `offers` (use `price: '0'` with a description noting the free-demo model, not a real price), and any new landing page content.

## Key Integrations
- **Contact form**: `Contact.tsx` posts to `/api/contact`, which forwards to `admin.aksanlabs.com`'s `/api/public/leads` endpoint (env: `ADMIN_LEADS_URL`, `LEADS_INGEST_SECRET`). Not Formspree — that was retired.
- Lead payload includes `landing_page` (captured via `document.referrer` on the Contact form, since niche-page CTAs all funnel through `/?service=...#contact` on the homepage — `window.location.pathname` alone would always read `/`).
- **No Calendly** on this site — contact form only.

## Site Structure
```
app/
  layout.tsx                        — Inter font, metadata, Organization+WebSite JSON-LD, Nav + Footer wrappers
  page.tsx                          — Hero > ClientLogos > Services > Industries > Faq > Contact, + Service/FAQPage JSON-LD
  sitemap.ts                        — homepage + all lib/niches.ts routes
  robots.ts
  globals.css                       — Tailwind directives, brand color tokens, marquee keyframes
  api/contact/route.ts              — forwards leads to admin.aksanlabs.com
  landscaping-website-design/page.tsx
  daycare-website-design/page.tsx
  insurance-agent-website-design/page.tsx
  gift-and-event-website-design/page.tsx

lib/
  site.ts                           — single SITE_URL constant (used by layout/sitemap/robots/niches)
  niches.ts                         — plain (no 'use client') data module: NICHES array, getNicheMetadata(), getNicheSchemas() — single source of truth for the 4 niche pages

components/
  layout/
    Nav.tsx                         — Sticky white bar: logo left, "Book a Free Call" button right
    Footer.tsx                      — copyright, link to aksanlabs.com
  niche/
    NicheLandingPage.tsx            — shared 'use client' template rendered by each niche route (hero, case study, features, FAQ, CTA)
  sections/
    Hero.tsx                        — Navy hero, headline, 2 CTAs, 3 stat pills
    ClientLogos.tsx                 — "Trusted by" logo strip linking out to live client sites
    Services.tsx                    — 4 cards (custom idea, personal site, business site, mobile app)
    Industries.tsx                  — 40 industry pills; Day Care/Childcare, Landscaping, Insurance Agency pills link to their niche pages
    Faq.tsx / faqData.ts            — homepage FAQ; faqData.ts MUST stay a plain module (no 'use client') since app/page.tsx imports faqSchema for JSON.stringify — see gotcha below
    Contact.tsx                     — lead form, business type + service dropdown + landing_page attribution, success state
```

**Gotcha — do not export JSON-LD schema data from a `'use client'` file.** Hit and fixed once already (2026-07-15): `Faq.tsx` needs `'use client'` for Framer Motion, but used to also `export const faqSchema` directly from that file for `app/page.tsx` (a Server Component) to `JSON.stringify`. Under Turbopack that import silently resolved to `undefined`, and `JSON.stringify` turned it into `null` in the JSON-LD array — Google's Rich Results Test flagged it as "Invalid top level element 'null'" (a real parse error). Fix: schema-bearing data always lives in a plain module with no `'use client'` directive (`faqData.ts`, `lib/niches.ts`). Passing plain data as JSX props into a `'use client'` component is fine — only importing a value export from a client module for server-side `JSON.stringify` is the trap.

## Niche Landing Pages (AEO/SEO strategy)
Four dedicated routes target "[industry] website design" search intent, each backed by a real client case study already featured in `ClientLogos.tsx`: landscaping (Root & Crown), daycare/Montessori (Little Learners), insurance agents (Medicare Michael), gift/event/custom-order businesses (Congratuleitionsaz). Intentionally **not** geo-narrowed (e.g. no "...in Los Angeles") — AksanLabs serves nationwide/worldwide remotely with no physical office, so local-only targeting would cap real reach and would require asserting `LocalBusiness` schema signals that don't match reality anywhere else on the site. Each page has genuinely different FAQ/feature/case-study content (not template pages with the noun swapped — Google's helpful-content system targets exactly that pattern). Static folders, not a dynamic `[slug]` route — scoped to exactly these 4 for now; if a 5th niche gets greenlit later, converting to a dynamic route fed by `lib/niches.ts` is cheap.

## Next Steps
Site is live and deployed. No outstanding deploy setup — new features ship via the standard commit → push → Vercel auto-deploy flow.

## Rules
- Keep all copy SMB-friendly — no Azure/AWS/enterprise jargon
- No fixed pricing anywhere — see "Pricing Model" above
- Multi-page routing is approved (niche landing pages) — homepage itself stays single-scroll
- Do not modify the main aksanlabs.com project from this window
