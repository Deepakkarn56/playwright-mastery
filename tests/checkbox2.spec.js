import { test, expect } from "@playwright/test";

test("checkbox2", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");


    await page.locator("input[id='sunday']").first().check();

    await page.locator("input.form-check-input").nth(2).check();
  
}); 