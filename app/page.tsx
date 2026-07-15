import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Faq, { faqSchema } from '@/components/sections/Faq'
import Contact from '@/components/sections/Contact'

const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Website',
    serviceType: 'Website design and development',
    description: 'A professional personal website for freelancers, consultants, coaches, and teachers who want an online presence.',
    provider: { '@type': 'Organization', name: 'AksanLabs' },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '499' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Website',
    serviceType: 'Website design and development',
    description: 'A professional business website that lets customers find, learn about, and contact or book a small business.',
    provider: { '@type': 'Organization', name: 'AksanLabs' },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '799' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile App',
    serviceType: 'Mobile app design and development',
    description: 'A custom iOS and Android mobile app for a small business, built for booking, ordering, or loyalty programs.',
    provider: { '@type': 'Organization', name: 'AksanLabs' },
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: '2499' },
  },
]

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([...serviceSchemas, faqSchema]) }}
      />
      <Hero />
      <Services />
      <Industries />
      <Faq />
      <Contact />
    </main>
  )
}
