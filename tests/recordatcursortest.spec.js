await page.getByRole('button', { name: 'Sign in', exact: true }).click();
await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/Deepakkarn56');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('dvjhdfkv');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('12345');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByText('Incorrect username or').click();
  await page.getByText('Incorrect username or').click();
  await page.getByText('Incorrect username or').click();
  await page.getByText('Incorrect username or').click();
  await page.locator('div').filter({ hasText: 'Incorrect username or' }).nth(5).click();
  await page.getByText('Incorrect username or').click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  await page.locator('div').filter({ hasText: 'Incorrect username or' }).nth(5).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});