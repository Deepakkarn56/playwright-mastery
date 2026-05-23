import { test, expect } from "@playwright/test";

test("Built-In Locators-Pratice", async ({ page }) => {
  //   getbyplaceholder  open sauce demo website
  await page.goto("https://practice.expandtesting.com/login");

  //   getByLabel - username

  await page.getByLabel("username").fill("pratice");

  // getByLable by password
  await page.getByLabel("password").fill("SuperSecretPassword!");

  // getbyrole - login
  await page.getByRole("button", { name: "Login" }).click();

  // getBytext - verify Assertion
  await expect(page.getByText("You logged into a secure area!")).toBeVisible();

  // getByRole -homelink
  await page.getByRole("link", { name: "Home" }).click();
});
