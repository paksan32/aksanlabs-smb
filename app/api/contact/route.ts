import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, business, service, message } = body

  const res = await fetch(process.env.ADMIN_LEADS_URL!, {
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
  })

  if (!res.ok) {
    console.error(`Leads ingest returned ${res.status}`)
    return NextResponse.json({ error: 'Failed to submit' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
