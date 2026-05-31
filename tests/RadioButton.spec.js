import { test, expect } from "@playwright/test";

test("RadioButtonDemo", async ({ page }) => {
  // open url
  await page.goto("https://testautomationpractice.blogspot.com/");

  // locate  radio button

  const maleRadioButton = page.locator("//input[@id='male']");
  const femaleRadioButton = page.locator("//input[@id='female']");

  //
  // await maleRadioButton.check();
  await femaleRadioButton.check();

  // checked radio button
  // await expect(maleRadioButton).toBeChecked()

  //   verify radio button is checked
  await expect(femaleRadioButton).toBeChecked();

  //   verify if radio button is checked
  await expect(femaleRadioButton.isChecked()).toBeTruthy;
});
