import { test, expect } from "@playwright/test";

test("AssertionTest", async ({ page }) => {
  //  oepn url
  await page.goto("https://www.saucedemo.com/");

  //  page level assertion
  // verify page title
  await expect(page).toHaveTitle("Swag Labs");

  // verify page url
  await expect(page).toHaveURL("https://www.saucedemo.com/");

  // elememt state Assertions
  // locate username and password
  const usernameInput = page.locator("#user-name");
  const passwordInput = page.locator("#password");
  const loginButton = page.locator("#login-button");
  const errorMessage = page.locator('[data-test="error"]');

  //    verify input filed username and password are visible
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  // verify if web elements are enabled and editable
  await expect(usernameInput).toBeEnabled();
  await expect(passwordInput).toBeEnabled();
  await expect(loginButton).toBeEnabled();

  await expect(usernameInput).toBeEditable();
  await expect(passwordInput).toBeEditable();

  // 3  Text & Value Assertions

  await usernameInput.fill("standard_user");

  await expect(usernameInput).toHaveValue("standard_user");

  //   password
  await passwordInput.fill("secret_sauce");

  await expect(passwordInput).toHaveValue("secret_sauce");

  // verify error message to be hidden before login attempt

  await expect(errorMessage).toBeHidden();

  await loginButton.click();

  //  Page and text Assertion  after login

  // verify user to naviaged page
  await expect(page).toHaveURL(/inventory/);

  // verify products page heading
  const productTitle = page.locator(".title");

  await expect(productTitle).toBeVisible();
  await expect(productTitle).toHaveText("Products");

  // partial test verify
  await expect(productTitle).toContainText("roduct");
});
