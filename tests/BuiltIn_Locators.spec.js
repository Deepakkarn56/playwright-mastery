import { test, expect } from "@playwright/test";

test("Built-In Locators-SauceDemo", async ({ page }) => {
  //   getbyplaceholder  open sauce demo website
  await page.goto("https://www.saucedemo.com/");

  //   getbyplaceholder enter user name
  await page.getByPlaceholder("Username").fill("standard_user");

  //    enter password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  //    click on login
  await page.getByRole("button", { name: "Login" }).click();

  //    Assertion
  await expect(page).toHaveURL(/inventory.html/);

  //   get by text verify product visbility on inventry page
  await expect(page.getByText("Products")).toBeVisible();

  //    getByRole() add product  sauce lab backpack to cart
  await page.getByRole("button", { name: "Add to cart" }).first.click;

  // get by all text = click on sauce lab backpack product to view decription
  await page.getByAltText("Sauce Labs Backpack").click();
});
