# CLAUDE.md — Aksan Labs SMB Site

## Project Overview
Standalone landing page targeting **small business owners and entrepreneurs** who find the main aksanlabs.com too enterprise/technical. Friendly, welcoming tone — no jargon.

- **Target domain**: https://smb.aksanlabs.com (subdomain of aksanlabs.com)
- **Main site**: https://aksanlabs.com (separate project at `C:\IT\Claude Projects\Aksanlabs`)
- **GitHub repo**: Not yet created — needs `git init` + new repo
- **Vercel project**: Not yet created — needs new project + custom domain setup

## Tech Stack
- Next.js 15 (App Router, static generation)
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- react-icons (hi, hi2 subsets)

## Design Decisions
- **Theme**: Light — white/slate-50 backgrounds, blue-600 accents, soft shadows. NOT dark like the main site.
- **Layout**: Single-scroll page, no navigation links — sticky top bar with logo + "Book a Free Call" button only
- **Tone**: Plain language, zero tech terms, welcoming and approachable
- **Voice**: "We" throughout — not "I"

## Key Integrations
- **Contact form**: Formspree `https://formspree.io/f/mrevbrdr` — same endpoint as main site, email: paksan32@gmail.com
- **No Calendly** on this site — contact form only

## Site Structure
```
app/
  layout.tsx       — Inter font, metadata, Nav + Footer wrappers
  page.tsx         — Hero > Services > Industries > Contact
  globals.css      — Tailwind directives + marquee CSS keyframes

components/
  layout/
    Nav.tsx        — Sticky white bar: logo left, "Book a Free Call" button right
    Footer.tsx     — copyright, link to aksanlabs.com and LinkedIn
  sections/
    Hero.tsx       — Blue-to-white gradient, headline, 2 CTAs, 3 stat pills
    Services.tsx   — 3 cards with pricing (see below)
    Industries.tsx — Two-row infinite CSS marquee, 40 industries
    Contact.tsx    — Formspree form, business type + service dropdown, success state
```

## Services & Pricing
| Service | Tagline | Price |
|---|---|---|
| Personal Website | Put yourself on the map | From $499 |
| Business Website | Your storefront, open 24/7 | From $799 |
| Mobile App | Your business in their pocket | From $2,499 |

## Next Steps — Deploy (NOT YET DONE)
Do these in order when starting the next session:
1. `git init` in this folder
2. Create `.gitignore`
3. Initial commit
4. Create new GitHub repo named `aksanlabs-smb`
5. Push to GitHub
6. Create new Vercel project linked to `aksanlabs-smb` repo
7. In Vercel → Domains → add `smb.aksanlabs.com`
8. Add the DNS CNAME record Vercel gives you to the aksanlabs.com registrar

## Rules
- Keep all copy SMB-friendly — no Azure/AWS/enterprise jargon
- Single scroll only — do not add multi-page routing without asking
- Do not modify the main aksanlabs.com project from this window
