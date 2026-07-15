'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  {
    name: 'Congratuleitionsaz',
    logo: '/logos/congratuleitionsaz.webp',
    url: 'https://congratuleitionsaz.com',
    width: 96,
    height: 96,
  },
  {
    name: 'Root & Crown Landscape',
    logo: '/logos/root-and-crown.png',
    url: 'https://rnclandscape.com',
    width: 160,
    height: 96,
  },
  {
    name: 'Medicare Michael',
    logo: '/logos/medicare-mike.png',
    url: 'https://www.medicaremichaelinsuranceagent.com',
    width: 88,
    height: 88,
  },
  {
    name: 'Little Learners Montessori',
    logo: '/logos/little-learners.svg',
    url: 'https://littlelearnersmontessori.academy',
    width: 88,
    height: 88,
  },
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-semibold text-slate-400 tracking-wide uppercase mb-10"
        >
          Trusted by small businesses we&apos;ve already built for
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8"
        >
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              title={client.name}
            >
              <Image
                src={client.logo}
                alt={`${client.name} — a website built by AksanLabs`}
                width={client.width}
                height={client.height}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
