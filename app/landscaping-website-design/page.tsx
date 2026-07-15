import type { Metadata } from 'next'
import { NICHES, getNicheMetadata, getNicheSchemas } from '@/lib/niches'
import NicheLandingPage from '@/components/niche/NicheLandingPage'

const niche = NICHES.find((n) => n.slug === 'landscaping-website-design')!

export const metadata: Metadata = getNicheMetadata(niche)

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getNicheSchemas(niche)) }}
      />
      <NicheLandingPage niche={niche} />
    </>
  )
}
