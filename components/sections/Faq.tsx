'use client'
import { motion } from 'framer-motion'

export const FAQS = [
  {
    q: 'How much does a website cost for a small business?',
    a: 'AksanLabs builds personal websites starting from $499 and full business websites starting from $799. Pricing depends on the features you need, like booking, online ordering, or a customer login area. You get an exact quote after your free consultation call.',
  },
  {
    q: 'Do I need any tech knowledge to get a website or app built?',
    a: 'No. AksanLabs is built specifically for small business owners with no tech background. We handle the technical work — you just tell us about your business and what you want it to do.',
  },
  {
    q: 'Can a small business get a mobile app, not just a website?',
    a: 'Yes. AksanLabs builds mobile apps for small businesses starting from $2,499, available on both iOS and Android. This is popular for gyms, food trucks, studios, and service providers who want booking, ordering, or loyalty features in their customers\' pockets.',
  },
  {
    q: 'What is included in a small business website?',
    a: 'A typical AksanLabs business website includes pages describing your services, a way for customers to contact or book you, and a design that works on phones and desktops. Because every business is different, exact features are confirmed on your free call.',
  },
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. AksanLabs offers a free first consultation call for every small business owner, with no obligation and no sales pressure. You describe your business and goals, and we recommend the simplest solution that fits.',
  },
  {
    q: 'What if my idea is not a standard website or app?',
    a: 'AksanLabs also builds custom technology solutions — AI tools, booking systems, dashboards, and other custom platforms — for business owners who have a specific idea but do not know how to build it themselves.',
  },
]

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Faq() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500 text-lg">Straight answers, no jargon.</p>
        </motion.div>

        <div className="space-y-8">
          {FAQS.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900 mb-2">{q}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
