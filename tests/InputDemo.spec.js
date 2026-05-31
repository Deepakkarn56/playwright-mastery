import { test, expect } from "@playwright/test";

test("InputDemo", async ({ page }) => {
  // open url
  await page.goto("https://testautomationpractice.blogspot.com/");

  // locate  firstname input box
  const firstNameInput = page.locator("//input[@id='name']");

  // input box is visible or not
  await expect(firstNameInput).toBeVisible();

  // input box is empty or not
  await expect(firstNameInput).toBeEmpty();

  // input box is enabled or not
  await expect(firstNameInput).toBeEnabled();

  // input box is editable or not
  await expect(firstNameInput).toBeEditable();

  // enter first name in input box
  await firstNameInput.fill("Deepak");

  await page.waitForTimeout(5000); //pause for 5 seconds for demo purpose only
});
