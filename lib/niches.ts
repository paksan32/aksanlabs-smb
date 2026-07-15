import type { Metadata } from 'next'
import { SITE_URL } from './site'

export interface NicheFaq {
  q: string
  a: string
}

export interface Niche {
  slug: string
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string
  intro: string
  features: string[]
  faqs: NicheFaq[]
  caseStudy: {
    name: string
    logoSrc: string
    logoWidth: number
    logoHeight: number
    externalUrl: string
    description: string
  }
}

export const NICHES: Niche[] = [
  {
    slug: 'landscaping-website-design',
    h1: 'Website Design for Landscaping Companies',
    metaTitle: 'Landscaping Company Website Design | AksanLabs',
    metaDescription:
      'AksanLabs builds websites for landscaping and lawn care companies — with customer portals, real-time job updates, and crew messaging. See a free working demo before you pay anything.',
    keywords: 'landscaping website design, lawn care website, landscaping company website, contractor website design',
    intro:
      "Landscaping and lawn care companies live and die by trust — customers want to see who's coming, when, and what's happening with their yard. We build websites and customer portals that show off your work and keep customers in the loop without a single phone call.",
    features: [
      'Photo-rich service pages that show off real project work',
      'Customer portal so clients can message you or your crew directly',
      'Real-time job status updates — no more "is someone coming today?" calls',
      'Quote request forms that capture the details you need upfront',
      'Mobile-friendly design your customers can use from their phone',
    ],
    faqs: [
      {
        q: 'Can customers request a quote directly from the website?',
        a: "Yes. We build a quote request form that captures the property details, service needed, and preferred timing upfront, so you're not playing phone tag to get the basics before you even give an estimate.",
      },
      {
        q: 'Can my customers message me or my crew through the site?',
        a: "Yes — for landscaping clients, we've built a full customer portal with owner-to-customer and field-tech-to-customer chat, so updates happen in one place instead of scattered texts and voicemails.",
      },
      {
        q: 'Will customers be able to see job status without calling me?',
        a: 'Yes. Real-time job updates show customers what\'s happening — scheduled, in progress, or completed — so "is someone coming today?" calls become a thing of the past.',
      },
      {
        q: 'Do you build this for other field-service businesses too, not just landscaping?',
        a: 'Yes. The same customer-portal approach — quote requests, real-time job updates, direct messaging — works for plumbing, HVAC, cleaning services, and other field-service businesses. Tell us about your business on your free call.',
      },
      {
        q: 'How much does a landscaping website cost?',
        a: "There's no fixed price upfront. We build a free working demo first so you can see exactly what you'd get, then you tell us what it's worth. After that, the only ongoing cost is a monthly fee for hosting, security, and updates.",
      },
      {
        q: 'Is a license number displayed on the site important?',
        a: "Yes — for licensed contractors, we display your license number clearly on the site, which builds trust with customers who are comparing you against other landscapers.",
      },
    ],
    caseStudy: {
      name: 'Root & Crown Landscape',
      logoSrc: '/logos/root-and-crown.png',
      logoWidth: 160,
      logoHeight: 96,
      externalUrl: 'https://rnclandscape.com',
      description:
        'Root & Crown Landscape is a licensed landscape contractor (Lic. #1097889). AksanLabs built them a live customer portal with owner-to-customer chat and a separate field-tech-to-customer chat, so both the business owner and the crew on-site can update customers directly — with real-time job status so customers always know what\'s happening with their property, without picking up the phone.',
    },
  },
  {
    slug: 'daycare-website-design',
    h1: 'Website Design for Daycares, Preschools & Montessori Schools',
    metaTitle: 'Daycare & Montessori Website Design | AksanLabs',
    metaDescription:
      'AksanLabs builds websites and parent portals for daycares, preschools, and Montessori schools — with secure messaging, photo sharing, and the licensing info parents look for. Free working demo first.',
    keywords: 'daycare website design, preschool website, montessori website, childcare website design',
    intro:
      "Parents choosing childcare want two things fast: proof you're licensed and trustworthy, and an easy way to reach you. We build websites and parent portals that show your licensing, your program, and keep communication with families secure and simple.",
    features: [
      'Clear licensing and safety information parents look for first',
      'Secure parent portal with private messaging and photo/file sharing',
      'Installable app-like experience with push notifications for updates and reminders',
      "Program and enrollment pages that answer parents' first questions",
      'Enrollment inquiry forms that route straight to you',
    ],
    faqs: [
      {
        q: "Can parents fill out enrollment forms online, and is their information kept private?",
        a: "Yes. We build secure enrollment and inquiry forms, and for childcare clients we've implemented parent portals with private messaging and file sharing that keep family information protected.",
      },
      {
        q: 'Can I show my state license information on the site?',
        a: 'Yes — and we recommend it. Displaying your license number and issuing authority (for example, a state Department of Social Services license) is one of the first things parents check, and we make it clearly visible.',
      },
      {
        q: 'Can parents get real-time updates from the site or an app?',
        a: "Yes. We can build an installable, app-like experience with push notifications, so parents get real-time updates — like pickup reminders or daily updates — without you needing a native app in an app store.",
      },
      {
        q: 'Can teachers or staff share photos and updates with individual families?',
        a: "Yes. We've built parent portals with chat and file/photo attachments so staff can share updates directly with the families who need them, not a public feed everyone sees.",
      },
      {
        q: 'How much does a daycare or preschool website cost?',
        a: "There's no fixed price upfront. We build a free working demo first so you can see exactly what you'd get, then you tell us what it's worth. After that, the only ongoing cost is a monthly fee for hosting, security, and updates.",
      },
      {
        q: 'Do you understand the compliance side of childcare websites, like licensing display requirements?',
        a: "Yes — we design with your licensing and safety information front and center, since that's typically the first thing a parent looks for when comparing childcare options.",
      },
    ],
    caseStudy: {
      name: 'Little Learners Montessori',
      logoSrc: '/logos/little-learners.svg',
      logoWidth: 88,
      logoHeight: 88,
      externalUrl: 'https://littlelearnersmontessori.academy',
      description:
        'Little Learners Montessori is licensed by the California Department of Social Services, Community Care Licensing Division. AksanLabs built them a secure parent portal with private messaging and file/photo attachments, plus an installable app with push notifications — so families get real-time updates without a public social feed or a native app-store app.',
    },
  },
  {
    slug: 'insurance-agent-website-design',
    h1: 'Website Design for Insurance Agents',
    metaTitle: 'Insurance Agent Website Design | AksanLabs',
    metaDescription:
      'AksanLabs builds secure, professional websites for insurance agents — with admin platforms, multi-factor authentication, and automated client communications. Free working demo before you pay anything.',
    keywords: 'insurance agent website design, insurance website, medicare agent website, insurance agency website',
    intro:
      "Insurance is a trust business, and your website is often a prospective client's first impression before they ever talk to you. We build professional, secure websites for insurance agents — with the backend tools to manage clients and communications safely.",
    features: [
      'Professional, trust-building design that positions you as the expert',
      'Secure admin platform with multi-factor authentication to protect client data',
      'Automated client communications like appointment confirmations and plan information',
      'Lead capture built for insurance shopping — plan interest, coverage needs, contact preference',
      'Content structured to help you show up when people search for coverage help',
    ],
    faqs: [
      {
        q: 'Can the site help me capture and organize leads, not just display information?',
        a: "Yes. We build lead capture forms designed around how people shop for insurance — the type of coverage they're interested in, their situation, and how they prefer to be contacted — and we can connect that to an admin platform so nothing falls through the cracks.",
      },
      {
        q: 'Is client data kept secure on the backend?',
        a: "Yes. For insurance agent clients, we've built secure admin platforms protected by multi-factor authentication (password plus a one-time code), not just a plain password login.",
      },
      {
        q: 'Can the site send automated emails, like appointment confirmations or plan documents?',
        a: 'Yes. We can set up automated, professional emails for things like appointment confirmations and plan information, sent from your own domain so they look and feel like they come directly from you.',
      },
      {
        q: 'Can I list the specific plans or carriers I work with?',
        a: 'Yes. We build pages that clearly present the plans, carriers, or coverage types you specialize in, which helps both prospective clients and search engines understand exactly what you offer.',
      },
      {
        q: 'How much does an insurance agent website cost?',
        a: "There's no fixed price upfront. We build a free working demo first so you can see exactly what you'd get, then you tell us what it's worth. After that, the only ongoing cost is a monthly fee for hosting, security, and updates.",
      },
      {
        q: 'Do you build sites specifically for Medicare agents?',
        a: "Yes — we've built for Medicare-focused agents specifically, including the kind of professional communication and security expectations that come with that space.",
      },
    ],
    caseStudy: {
      name: 'Medicare Michael',
      logoSrc: '/logos/medicare-mike.png',
      logoWidth: 88,
      logoHeight: 88,
      externalUrl: 'https://www.medicaremichaelinsuranceagent.com',
      description:
        'Medicare Michael is a Medicare insurance agent. AksanLabs built him a secure admin platform protected by password-plus-TOTP multi-factor authentication, along with automated compliance-related client communications — like Scope of Appointment confirmations and plan information — sent through transactional email so nothing depends on a manual follow-up.',
    },
  },
  {
    slug: 'gift-and-event-website-design',
    h1: 'Website Design for Gift, Event & Custom Order Businesses',
    metaTitle: 'Gift & Event Business Website Design | AksanLabs',
    metaDescription:
      'AksanLabs builds full online ordering and checkout experiences for gift, event, and custom-order businesses — with secure payments and order management. Free working demo before you pay anything.',
    keywords: 'gift shop website design, event business website, custom order website, online ordering website for small business',
    intro:
      "If your business sells custom or made-to-order items — gifts, event decor, personalized pieces — a generic storefront builder won't capture the actual ordering process customers need to walk through. We build custom online ordering experiences built around how your product actually works.",
    features: [
      'Multi-step order flow that walks customers through real customization choices',
      'Secure checkout with major payment methods, including Apple Pay and Google Pay',
      'Delivery and pickup options built into the order flow',
      'Admin dashboard to track and manage every order from payment to delivery',
      "Automated order confirmation and status emails so customers aren't left wondering",
    ],
    faqs: [
      {
        q: 'Can customers customize their order on the website, not just buy a fixed product?',
        a: 'Yes. We build multi-step order flows that walk customers through real choices — style, colors, personalization, event date — so what they order actually matches what they want.',
      },
      {
        q: 'Can I accept online payments securely, including Apple Pay and Google Pay?',
        a: 'Yes. We build secure checkout that supports major cards as well as Apple Pay and Google Pay, so customers can pay however is easiest for them.',
      },
      {
        q: 'Can customers choose pickup instead of shipping?',
        a: "Yes. We build delivery and pickup options directly into the order flow, so local customers aren't forced through an unnecessary shipping step.",
      },
      {
        q: 'Can I manage and track orders without digging through email?',
        a: 'Yes. We build an admin dashboard where you can see every order, its status, and update customers as it moves from received to ready to delivered.',
      },
      {
        q: 'How much does an online ordering website cost?',
        a: "There's no fixed price upfront. We build a free working demo first so you can see exactly what you'd get, then you tell us what it's worth. After that, the only ongoing cost is a monthly fee for hosting, security, and updates.",
      },
      {
        q: "I'm currently using Square Online or a similar builder — can you replace it with something custom?",
        a: 'Yes — that\'s exactly the kind of project we take on, moving a business off a generic storefront builder onto a custom ordering experience built around your specific product.',
      },
    ],
    caseStudy: {
      name: 'Congratuleitionsaz',
      logoSrc: '/logos/congratuleitionsaz.webp',
      logoWidth: 96,
      logoHeight: 96,
      externalUrl: 'https://congratuleitionsaz.com',
      description:
        'Congratuleitionsaz is a handcrafted ribbon lei business based in the Phoenix/Chandler, Arizona area. AksanLabs replaced their Square Online storefront with a fully custom ordering experience: a multi-step order wizard covering celebration type, event date, style, colors, and personalization, secure checkout with Apple Pay and Google Pay, and an admin dashboard for tracking every order from payment through delivery.',
    },
  },
]

export function getNicheMetadata(niche: Niche): Metadata {
  const canonical = `${SITE_URL}/${niche.slug}`
  return {
    title: niche.metaTitle,
    description: niche.metaDescription,
    keywords: niche.keywords,
    alternates: { canonical },
    openGraph: {
      title: niche.metaTitle,
      description: niche.metaDescription,
      url: canonical,
      siteName: 'AksanLabs',
      type: 'website',
    },
  }
}

export function getNicheSchemas(niche: Niche): object[] {
  const canonical = `${SITE_URL}/${niche.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: niche.h1,
    serviceType: 'Website design and development',
    description: niche.metaDescription,
    provider: { '@type': 'Organization', name: 'AksanLabs' },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free working demo — final price set after you see it',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: niche.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: niche.h1, item: canonical },
    ],
  }

  return [serviceSchema, faqSchema, breadcrumbSchema]
}
