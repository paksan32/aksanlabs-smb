'use client'
import { motion } from 'framer-motion'
import { FAQS } from './faqData'

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
