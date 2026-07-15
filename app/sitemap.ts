import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { NICHES } from '@/lib/niches'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...NICHES.map((niche) => ({
      url: `${SITE_URL}/${niche.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
