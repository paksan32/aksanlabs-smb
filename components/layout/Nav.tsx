'use client'
import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi'

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center text-xl font-bold text-brand-navy tracking-tight">
          Aksan Labs
          <HiChevronRight className="text-brand-red w-5 h-5" />
        </Link>
        <a
          href="#contact"
          className="px-5 py-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white text-sm font-semibold rounded-full transition-colors duration-200"
        >
          Book a Free Call
        </a>
      </div>
    </header>
  )
}
