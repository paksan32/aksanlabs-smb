import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, business, service, message, landing_page } = body

  const emailValid = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const phoneDigits = typeof phone === 'string' ? phone.replace(/\D/g, '') : ''
  const phoneValid = phoneDigits.length >= 10 && phoneDigits.length <= 15

  if (!name || !emailValid || !phoneValid) {
    return NextResponse.json({ error: 'Please provide a valid name, email, and phone number.' }, { status: 400 })
  }

  const res = await fetch(process.env.ADMIN_LEADS_URL!, {
    method: 'POST',
    body: JSON.stringify({
      source: 'smb',
      name,
      email,
      phone,
      business_type: business,
      service,
      message,
      landing_page,
    }),
    headers: {
      'Content-Type': 'application/json',
      'x-leads-key': process.env.LEADS_INGEST_SECRET!,
    },
  })

  if (!res.ok) {
    console.error(`Leads ingest returned ${res.status}`)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
