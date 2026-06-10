import { test, expect } from "@playwright/test";

test("HiddenDropdown", async ({ page }) => {
  // open url
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );

  // locate username input box  and type username
  await page.locator("[name='username']").fill("Admin");

  // locate password input box and enter password
  await page.locator("[name='password']").fill("admin123");

  // locate login button and perform click action
  await page.getByRole("button", { name: "Login" }).click();
});
