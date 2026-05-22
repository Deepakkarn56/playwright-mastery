import { test, expect } from "@playwright/test";

test("Locaters ", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // locate id web element & user id - used Id property
  await page.locator("#user-name").fill("standard_user");

  // locate password  web element & fill password - by using css selector
  await page.locator("#password").fill("secret_sauce");

  // locate login button & perform click action - by using XPATH
  await page.locator("//input[@id='login-button']").click();

  // verify successful login
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(page.locator(".title")).toHaveText("Products");
});
