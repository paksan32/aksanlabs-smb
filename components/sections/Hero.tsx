'use client'
import { motion } from 'framer-motion'
import HowItWorksAnimation from '@/components/HowItWorksAnimation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-400 text-sm font-semibold mb-5 tracking-wide">
            Built for small business owners — not tech people
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Business Deserves
            <br />
            <span className="text-blue-400">to Be Online</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build simple, beautiful websites and apps for small business owners —
            no tech knowledge needed, no confusing jargon, just results.
          </p>
          <HowItWorksAnimation />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full text-lg transition-colors duration-200 shadow-lg shadow-blue-950"
            >
              Book a Free Call
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent hover:bg-slate-800 text-white font-semibold rounded-full text-lg border border-slate-600 transition-colors duration-200"
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
            <div key={stat.label} className="bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-700 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
