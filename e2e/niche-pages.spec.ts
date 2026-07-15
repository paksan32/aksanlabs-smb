import { test, expect } from '@playwright/test'

const NICHES = [
  { slug: 'landscaping-website-design', h1: 'Website Design for Landscaping Companies', caseStudy: 'Root & Crown Landscape' },
  { slug: 'daycare-website-design', h1: 'Website Design for Daycares, Preschools & Montessori Schools', caseStudy: 'Little Learners Montessori' },
  { slug: 'insurance-agent-website-design', h1: 'Website Design for Insurance Agents', caseStudy: 'Medicare Michael' },
  { slug: 'gift-and-event-website-design', h1: 'Website Design for Gift, Event & Custom Order Businesses', caseStudy: 'Congratuleitionsaz' },
]

for (const niche of NICHES) {
  test.describe(`Niche page: ${niche.slug}`, () => {
    test('renders unique H1, case study, FAQ, and CTA', async ({ page }) => {
      await page.goto(`/${niche.slug}`)
      await expect(page.getByRole('heading', { name: niche.h1, exact: true }).first()).toBeVisible()
      await expect(page.getByText(niche.caseStudy).first()).toBeVisible()
      await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible()
      const ctas = page.getByRole('link', { name: 'Get My Free Demo' })
      await expect(ctas.first()).toHaveAttribute('href', '/?service=website#contact')
    })

    test('has valid JSON-LD with no null entries', async ({ page }) => {
      await page.goto(`/${niche.slug}`)
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
      expect(blocks.length).toBeGreaterThanOrEqual(2)

      const allTypes: string[] = []
      for (const block of blocks) {
        const parsed = JSON.parse(block)
        const items = Array.isArray(parsed) ? parsed : [parsed]
        for (const item of items) {
          expect(item).not.toBeNull()
          allTypes.push(item['@type'])
        }
      }
      expect(allTypes).toContain('Service')
      expect(allTypes).toContain('FAQPage')
      expect(allTypes).toContain('BreadcrumbList')
    })

    test('has a unique meta title and description', async ({ page }) => {
      await page.goto(`/${niche.slug}`)
      const title = await page.title()
      expect(title).not.toBe('AksanLabs — Websites & Apps for Small Business')
      const description = await page.locator('meta[name="description"]').getAttribute('content')
      expect(description).toBeTruthy()
    })
  })
}
