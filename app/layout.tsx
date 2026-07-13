import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AksanLabs — Websites & Apps for Small Business',
  description: 'Simple, affordable websites and mobile apps built for small business owners. No tech knowledge required. Book a free call today.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-800 antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
