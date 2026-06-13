'use client'
import { motion } from 'framer-motion'

const row1 = [
  'Day Care', 'Landscaping', 'Auto Repair', 'Photography', 'Yoga Studio',
  'Hair Salon', 'Tutoring', 'Restaurant', 'Real Estate', 'Cleaning Service',
  'Personal Training', 'Event Planning', 'Dog Grooming', 'Tax Preparation',
  'Catering', 'Music School', 'Nail Salon', 'Bakery', 'Massage Therapy', 'Home Repair',
]

const row2 = [
  'Plumbing', 'Electrician', 'Pet Grooming', 'Food Truck', 'Boutique',
  'Gym', 'Dental Office', 'Accounting', 'Insurance Agency', 'Florist',
  'Childcare', 'Tattoo Studio', 'Barber Shop', 'Law Office', 'HVAC',
  'Painting', 'Wedding Planning', 'Interior Design', 'Personal Chef', 'Life Coaching',
]

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-4 w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Industries() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">Any Business. Any Idea.</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">If You Have a Business,<br />We Can Put It Online</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We&apos;ve helped businesses across every industry get found, get customers, and grow.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12 text-center">
        <p className="text-slate-400 text-sm">
          Don&apos;t see your industry?{' '}
          <a href="#contact" className="text-blue-600 font-semibold hover:underline">
            Tell us about your business →
          </a>
        </p>
      </div>
    </section>
  )
}
