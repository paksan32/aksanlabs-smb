'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { HiChevronRight, HiCheck } from 'react-icons/hi'
import type { Niche } from '@/lib/niches'

export default function NicheLandingPage({ niche }: { niche: Niche }) {
  return (
    <main>
      <section className="min-h-[60vh] flex items-center pt-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-slate-400 mb-5">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-300">{niche.h1}</span>
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              {niche.h1}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              {niche.intro}
            </p>
            <a
              href="/?service=website#contact"
              className="inline-flex items-center gap-1 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full text-lg transition-colors duration-200 shadow-lg shadow-black/40"
            >
              Get My Free Demo
              <HiChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-100"
          >
            <p className="text-sm font-semibold text-brand-red tracking-wide uppercase mb-4">
              Real work we&apos;ve shipped
            </p>
            <a
              href={niche.caseStudy.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6"
            >
              <Image
                src={niche.caseStudy.logoSrc}
                alt={`${niche.caseStudy.name} — a website built by AksanLabs`}
                width={niche.caseStudy.logoWidth}
                height={niche.caseStudy.logoHeight}
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-slate-600 text-base leading-relaxed">{niche.caseStudy.description}</p>
            <a
              href={niche.caseStudy.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-brand-red font-semibold text-sm hover:underline"
            >
              Visit {niche.caseStudy.name} →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            What We Build
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {niche.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-slate-100 shadow-sm"
              >
                <span className="w-6 h-6 shrink-0 bg-red-100 text-brand-red rounded-full flex items-center justify-center mt-0.5">
                  <HiCheck className="w-4 h-4" />
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {niche.faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">See It Before You Pay for It</h2>
            <p className="text-slate-300 text-lg mb-8">
              We&apos;ll build a free working demo for your business. You decide what it&apos;s worth.
            </p>
            <a
              href="/?service=website#contact"
              className="inline-flex items-center gap-1 px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full text-lg transition-colors duration-200"
            >
              Get My Free Demo
              <HiChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
