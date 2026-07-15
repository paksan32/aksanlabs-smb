import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders nav, hero, and CTA', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/AksanLabs/)
    await expect(page.getByRole('link', { name: 'AksanLabs', exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Book a Free Call' }).first()).toBeVisible()
    await expect(page.getByRole('heading', { name: /Your Business Deserves/ })).toBeVisible()
  })

  test('renders client logos linking to real client sites', async ({ page }) => {
    await page.goto('/')
    const logos = page.locator('a[href^="https://"] img[alt*="AksanLabs"]')
    await expect(logos).toHaveCount(4)
  })

  test('renders all 4 service cards', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Personal Website', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Business Website', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Mobile App', exact: true })).toBeVisible()
  })

  test('industries pills for landscaping, daycare, insurance link to niche pages', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Landscaping' })).toHaveAttribute('href', '/landscaping-website-design')
    await expect(page.getByRole('link', { name: 'Day Care' })).toHaveAttribute('href', '/daycare-website-design')
    await expect(page.getByRole('link', { name: 'Insurance Agency' })).toHaveAttribute('href', '/insurance-agent-website-design')
  })

  test('renders FAQ section with the free-demo pricing answer', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible()
    await expect(page.getByText(/free working demo first/i)).toBeVisible()
  })

  test('no console errors on load', async ({ page }) => {
    const errors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(errors).toEqual([])
  })
})

test.describe('SEO infrastructure', () => {
  test('sitemap.xml lists homepage and all 4 niche pages', async ({ request }) => {
    const res = await request.get('/sitemap.xml')
    expect(res.ok()).toBeTruthy()
    const body = await res.text()
    expect(body).toContain('https://smb.aksanlabs.com</loc>')
    expect(body).toContain('/landscaping-website-design</loc>')
    expect(body).toContain('/daycare-website-design</loc>')
    expect(body).toContain('/insurance-agent-website-design</loc>')
    expect(body).toContain('/gift-and-event-website-design</loc>')
  })

  test('robots.txt allows crawling and references sitemap', async ({ request }) => {
    const res = await request.get('/robots.txt')
    expect(res.ok()).toBeTruthy()
    const body = await res.text()
    expect(body).toContain('Allow: /')
    expect(body).toContain('sitemap.xml')
  })
})
