'use client'
import { motion } from 'framer-motion'

const industries = [
  'Day Care', 'Landscaping', 'Auto Repair', 'Photography', 'Yoga Studio',
  'Hair Salon', 'Tutoring', 'Restaurant', 'Real Estate', 'Cleaning Service',
  'Personal Training', 'Event Planning', 'Dog Grooming', 'Tax Preparation',
  'Catering', 'Music School', 'Nail Salon', 'Bakery', 'Massage Therapy', 'Home Repair',
  'Plumbing', 'Electrician', 'Pet Grooming', 'Food Truck', 'Boutique',
  'Gym', 'Dental Office', 'Accounting', 'Insurance Agency', 'Florist',
  'Childcare', 'Tattoo Studio', 'Barber Shop', 'Law Office', 'HVAC',
  'Painting', 'Wedding Planning', 'Interior Design', 'Personal Chef', 'Life Coaching',
]

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Any Business. Any Idea.</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">If You Have a Business,<br />We Can Put It Online</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We&apos;ve helped businesses across every industry get found, get customers, and grow.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((item) => (
            <span
              key={item}
              className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-slate-600 text-sm font-medium shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm text-center mt-10">
          Don&apos;t see your industry?{' '}
          <a href="#contact" className="text-blue-600 font-semibold hover:underline">
            Tell us about your business →
          </a>
        </p>
      </div>
    </section>
  )
}
