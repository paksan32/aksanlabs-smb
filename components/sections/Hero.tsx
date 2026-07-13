'use client'
import { motion } from 'framer-motion'
import { HiChevronRight } from 'react-icons/hi'
import HowItWorksAnimation from '@/components/HowItWorksAnimation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-brand-navy">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="flex items-center justify-center gap-1 text-brand-red text-sm font-semibold mb-5 tracking-wide">
            <HiChevronRight className="w-4 h-4" />
            Built for small business owners — not tech people
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Business Deserves
            <br />
            <span className="text-brand-red">to Be Online</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build simple, beautiful websites and apps for small business owners —
            no tech knowledge needed, no confusing jargon, just results.
          </p>
          <HowItWorksAnimation />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-full text-lg transition-colors duration-200 shadow-lg shadow-black/40"
            >
              Book a Free Call
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-full text-lg border border-white/25 transition-colors duration-200"
            >
              See What We Build
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { value: '25+', label: 'Years in Tech' },
            { value: 'US-Based', label: 'Local Support' },
            { value: 'Free', label: 'First Consultation' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
              <p className="text-3xl font-bold text-brand-red mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
