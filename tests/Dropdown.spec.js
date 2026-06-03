import { test, expect } from "@playwright/test";

test("Dropdown", async ({ page }) => {
  // open url
  await page.goto("https://practice.expandtesting.com/dropdown");
  // locate dropdown

  const countryDropdown = page.locator("#country");
  //    ways to select dropwdown
  // 1. by using label
  await countryDropdown.selectOption({ label: "India" });
  expect(countryDropdown).toHaveValue("IN");

  //   2. by using value
  await countryDropdown.selectOption({ value: "IN" });
  expect(countryDropdown).toHaveValue("IN");

  //   by using index
  await countryDropdown.selectOption({ index: 2 });
  const selectedValue = await countryDropdown.inputValue();

  expect(selectedValue).not.toBe("");

  //   expect(countryDropdown).toHaveValue("AX");

  // Assertions --1 validate number of opetions
  // locate  all options elements inside the country dropwdown
  const options = countryDropdown.locator("option");

  // count how many option are present inside the dropdown
  const optionsCount = await options.count();

  console.log(optionsCount);

  await page.waitForTimeout(5000); //pause for demo purpose
});
