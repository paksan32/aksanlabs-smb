import { test, expect } from '@playwright/test'

test.describe('Contact form', () => {
  test('renders all required fields', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#email')).toBeVisible()
    await expect(page.locator('#business')).toBeVisible()
    await expect(page.locator('#service')).toBeVisible()
    await expect(page.locator('#message')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Send My Message' })).toBeVisible()
  })

  test('?service= query param preselects the matching dropdown option', async ({ page }) => {
    await page.goto('/?service=mobile-app#contact')
    await expect(page.locator('#service')).toHaveValue('mobile-app')
  })

  test('service dropdown defaults to blank with no query param', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#service')).toHaveValue('')
  })

  test('required fields block submission via native validation', async ({ page }) => {
    // Intentionally does not submit a real lead to production — this project
    // has no dedicated test account/isolated data path (it's a public lead
    // form, not an authenticated app), so we verify client-side validation
    // instead of a full submit-and-check-inbox flow.
    await page.goto('/#contact')
    const nameInput = page.locator('#name')
    const isRequired = await nameInput.evaluate((el: HTMLInputElement) => el.required)
    expect(isRequired).toBe(true)
    const isValid = await nameInput.evaluate((el: HTMLInputElement) => el.checkValidity())
    expect(isValid).toBe(false)
  })
})
