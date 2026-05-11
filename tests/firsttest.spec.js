const { test, expect } = require('@playwright/test');

test('validate Youtube title', async ({ page }) => {

  // go to URL
  await page.goto('https://www.youtube.com/');

  // Search with keywords
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('cypress by testers talk');

  // Search button visible hone ka wait karo, phir click
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  await page.waitForLoadState('networkidle');


  await page.getByRole('link', { name: 'Cypress by Testers Talk', exact: false })
            .first()  
            .click();

  // Page load 
  await page.waitForLoadState('domcontentloaded');

  await expect(page).toHaveTitle(/Cypress by Testers Talk/i, { timeout: 15000 });

});