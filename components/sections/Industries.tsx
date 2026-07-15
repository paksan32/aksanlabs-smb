'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const industries: { name: string; href?: string }[] = [
  { name: 'Day Care', href: '/daycare-website-design' },
  { name: 'Landscaping', href: '/landscaping-website-design' },
  { name: 'Auto Repair' }, { name: 'Photography' }, { name: 'Yoga Studio' },
  { name: 'Hair Salon' }, { name: 'Tutoring' }, { name: 'Restaurant' }, { name: 'Real Estate' }, { name: 'Cleaning Service' },
  { name: 'Personal Training' }, { name: 'Event Planning' }, { name: 'Dog Grooming' }, { name: 'Tax Preparation' },
  { name: 'Catering' }, { name: 'Music School' }, { name: 'Nail Salon' }, { name: 'Bakery' }, { name: 'Massage Therapy' }, { name: 'Home Repair' },
  { name: 'Plumbing' }, { name: 'Electrician' }, { name: 'Pet Grooming' }, { name: 'Food Truck' }, { name: 'Boutique' },
  { name: 'Gym' }, { name: 'Dental Office' }, { name: 'Accounting' },
  { name: 'Insurance Agency', href: '/insurance-agent-website-design' },
  { name: 'Florist' },
  { name: 'Childcare', href: '/daycare-website-design' },
  { name: 'Tattoo Studio' }, { name: 'Barber Shop' }, { name: 'Law Office' }, { name: 'HVAC' },
  { name: 'Painting' }, { name: 'Wedding Planning' }, { name: 'Interior Design' }, { name: 'Personal Chef' }, { name: 'Life Coaching' },
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">If You Have a Business,<br />We Can Put It Online</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            We&apos;ve helped businesses across every industry get found, get customers, and grow.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((item) =>
            item.href ? (
              <Link
                key={item.name}
                href={item.href}
                className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-slate-600 text-sm font-medium shadow-sm hover:border-brand-red hover:text-brand-red transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span
                key={item.name}
                className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-slate-600 text-sm font-medium shadow-sm"
              >
                {item.name}
              </span>
            )
          )}
        </div>

        <p className="text-slate-600 text-sm text-center mt-10">
          Don&apos;t see your industry?{' '}
          <a href="#contact" className="text-brand-red font-semibold hover:underline text-sm">
            Tell us about your business →
          </a>
        </p>
      </div>
    </section>
  )
}
