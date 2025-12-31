import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('should display login form', async ({ page }) => {
    await page.goto('/login')
    const emailInput = page.getByLabel(/email/i)
    const passwordInput = page.getByLabel(/password|mot de passe/i)

    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
  })

  test('should show error on invalid credentials', async ({ page }) => {
    await page.goto('/login')

    await page.getByLabel(/email/i).fill('invalid@example.com')
    await page.getByLabel(/password|mot de passe/i).fill('wrongpassword')
    await page.getByRole('button', { name: /connexion|login|submit/i }).click()

    const errorMessage = page.getByText(/erreur|error|invalid/i)
    await expect(errorMessage).toBeVisible({ timeout: 5000 })
  })

  test('should redirect to dashboard after login', async ({ page }) => {
    await page.goto('/login')

    await page.getByLabel(/email/i).fill(process.env.TEST_USER_EMAIL || 'test@example.com')
    await page.getByLabel(/password|mot de passe/i).fill(process.env.TEST_USER_PASSWORD || 'testpassword')
    await page.getByRole('button', { name: /connexion|login|submit/i }).click()

    await expect(page).toHaveURL(/hunting|dashboard/, { timeout: 10000 })
  })
})
