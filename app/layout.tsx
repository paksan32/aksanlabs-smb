import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://smb.aksanlabs.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'AksanLabs — Websites & Apps for Small Business',
  description: 'Simple, affordable websites and mobile apps built for small business owners. No tech knowledge required. Book a free call today.',
  keywords: 'small business website, affordable website for small business, mobile app for small business, website builder for entrepreneurs',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'AksanLabs — Websites & Apps for Small Business',
    description: 'Simple, affordable websites and mobile apps built for small business owners. No tech knowledge required. Book a free call today.',
    url: SITE_URL,
    siteName: 'AksanLabs',
    type: 'website',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AksanLabs',
  url: SITE_URL,
  description:
    'AksanLabs builds simple, affordable websites and mobile apps for small business owners across the United States — no tech background required, with a free first consultation.',
  areaServed: { '@type': 'Country', name: 'United States' },
  knowsAbout: ['Small business websites', 'Business mobile apps', 'Website design for entrepreneurs'],
  sameAs: ['https://aksanlabs.com'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AksanLabs',
  url: SITE_URL,
  description:
    'Simple, affordable websites and mobile apps built for small business owners. No tech knowledge required.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
