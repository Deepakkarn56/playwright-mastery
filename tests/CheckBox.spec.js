import { test, expect } from "@playwright/test";

test("CheckBox", async ({ page }) => {
  // open url
  await page.goto("https://testautomationpractice.blogspot.com/");

  // locate checkbox
  const sundayCheckbox = page.locator("#sunday");
  const mondayCheckbox = page.locator("#monday");
  const tuesdayCheckbox = page.locator("#tuesday");

  await sundayCheckbox.check(); //check / select sunday checkbox

  //    verify sunday checkbox is selected
  await expect(sundayCheckbox).toBeChecked();
});
