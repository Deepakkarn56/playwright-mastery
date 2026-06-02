import { test, expect } from "@playwright/test";

test("Dropdown", async ({ page }) => {
  // open url
  await page.goto("https://practice.expandtesting.com/dropdown");
  // locate dropdown

  const countryDropdown = page.locator("#country");
  //    ways to select dropwdown
  // 1. by using label
  await countryDropdown.selectOption({ label: "India" });

  await page.waitForTimeout(5000); //pause for demo purpose
});
