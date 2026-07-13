'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const service = params.get('service')
    if (service) setSelectedService(service)
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        business: data.get('business'),
        service: data.get('service'),
        message: data.get('message'),
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-500 text-lg">
            Tell us a little about your business and what you need.
            We&apos;ll reach out within one business day to schedule your free call.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-slate-500">We&apos;ll be in touch within one business day.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="jane@yourbusiness.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-base"
                />
              </div>
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-slate-700 mb-2">What type of business do you have?</label>
              <input
                id="business"
                type="text"
                name="business"
                placeholder="e.g. Hair salon, landscaping, yoga studio..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-base"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">What are you looking for?</label>
              <select
                id="service"
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-base"
              >
                <option value="">Select a service...</option>
                <option value="website">Website</option>
                <option value="mobile-app">Mobile App</option>
                <option value="company-solution">Company Solution</option>
                <option value="custom-app">Custom App</option>
                <option value="ai-chatbot">AI Chatbot</option>
                <option value="live-chat">Live Chat</option>
                <option value="lead-gen">Lead Gen</option>
                <option value="customer-crm">Customer CRM</option>
                <option value="online-store">Online Store</option>
                <option value="booking">Booking</option>
                <option value="ai-workflow">AI Workflow</option>
                <option value="inventory">Inventory</option>
                <option value="not-sure">Not sure yet — I need advice</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Anything else you&apos;d like us to know?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your business, what you need, or any questions you have..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent text-base resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-xl transition-colors duration-200 text-base shadow-sm"
            >
              Send My Message
            </button>
            <p className="text-center text-sm text-slate-500">
              No spam. No sales calls. Just a friendly conversation about your business.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
