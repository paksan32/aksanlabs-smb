'use client'
import { motion } from 'framer-motion'
import { HiUser, HiBriefcase, HiDeviceMobile, HiLightBulb } from 'react-icons/hi'

const services = [
  {
    icon: HiLightBulb,
    title: 'I Have an Idea for Something Special',
    tagline: 'From idea to reality',
    description:
      'Got a growing idea in your head but no idea how to build it? We take your vision and turn it into a real technology solution — in days, not months. No tech background needed.',
    examples: 'AI Tools · Booking Systems · Dashboards · Custom Platforms',
    color: 'violet',
    value: 'custom-app',
  },
  {
    icon: HiUser,
    title: 'Personal Website',
    tagline: 'Put yourself on the map',
    description:
      'Perfect for freelancers, consultants, coaches, teachers, and anyone who wants a professional online presence. Show the world what you do and make it easy for people to reach you.',
    examples: 'Freelancers · Coaches · Teachers · Artists · Consultants',
    color: 'red',
    value: 'website',
  },
  {
    icon: HiBriefcase,
    title: 'Business Website',
    tagline: 'Your storefront, open 24/7',
    description:
      'A professional website for your business that works while you sleep. Customers can find you, learn about your services, book appointments, and contact you — all in one place.',
    examples: 'Restaurants · Salons · Contractors · Retail · Clinics',
    color: 'emerald',
    value: 'website',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile App',
    tagline: 'Your business in their pocket',
    description:
      'Turn your business into an app your customers can download. iOS and Android. Great for booking, loyalty programs, ordering, or giving your customers a direct line to you.',
    examples: 'Gyms · Food Trucks · Studios · Service Providers',
    color: 'amber',
    value: 'mobile-app',
  },
]

const colorMap = {
  red: {
    bg: 'bg-red-50',
    icon: 'bg-red-100 text-brand-red',
    tag: 'text-brand-red',
    border: 'hover:border-red-200',
    btn: 'bg-brand-red hover:bg-brand-red-dark',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-600',
    tag: 'text-emerald-600',
    border: 'hover:border-emerald-200',
    btn: 'bg-emerald-600 hover:bg-emerald-700',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-100 text-amber-600',
    tag: 'text-amber-600',
    border: 'hover:border-amber-200',
    btn: 'bg-amber-500 hover:bg-amber-600',
  },
  violet: {
    bg: 'bg-violet-50',
    icon: 'bg-violet-100 text-violet-600',
    tag: 'text-violet-600',
    border: 'hover:border-violet-200',
    btn: 'bg-violet-600 hover:bg-violet-700',
  },
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple Solutions, Real Results</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No complicated packages. No hidden fees. Just pick what your business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((service, i) => {
            const colors = colorMap[service.color as keyof typeof colorMap]
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`bg-white rounded-2xl p-6 border border-slate-100 ${colors.border} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}
              >
                <div className={`w-14 h-14 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className={`text-sm font-semibold ${colors.tag} mb-1`}>{service.tagline}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
                <div className={`${colors.bg} rounded-xl px-4 py-3 mb-6`}>
                  <p className="text-sm text-slate-600 font-medium">{service.examples}</p>
                </div>
                <a
                  href={`/?service=${service.value}#contact`}
                  className={`block text-center ${colors.btn} text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors`}
                >
                  Get More Info
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
