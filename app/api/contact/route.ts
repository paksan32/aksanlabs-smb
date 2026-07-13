import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, business, service, message } = body

  const results = await Promise.allSettled([
    fetch('https://formspree.io/f/mrevbrdr', {
      method: 'POST',
      body: JSON.stringify({ name, email, business, service, message }),
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    }),
    fetch(process.env.ADMIN_LEADS_URL!, {
      method: 'POST',
      body: JSON.stringify({
        source: 'smb',
        name,
        email,
        business_type: business,
        service,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-leads-key': process.env.LEADS_INGEST_SECRET!,
      },
    }),
  ])

  const anyOk = results.some(r => r.status === 'fulfilled' && r.value.ok)
  results.forEach((r, i) => {
    if (r.status === 'rejected') console.error(`Contact fan-out ${i} failed:`, r.reason)
    else if (!r.value.ok) console.error(`Contact fan-out ${i} returned ${r.value.status}`)
  })

  if (!anyOk) return NextResponse.json({ error: 'Failed to submit' }, { status: 502 })
  return NextResponse.json({ ok: true })
}
