import { test, expect } from "@playwright/test";

test("MultipleSelectDropdown", async ({ page }) => {
  //   open url
  await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");

  // locate multi select dropdown

  const multiSelect = page.locator('select[name="multipleselect[]"]');

  // ways to select options from multi select dropdown

  // 1. by using value
  //   await multiSelect.selectOption([{value:'ms1'},{value:'ms3'}]);

  //   2. by using label/ visible text
  await multiSelect.selectOption([
    { label: "Selection Item 2" },
    { label: "Selection Item 4" },
  ]);

  //   verify if items are selected or not
  await expect(multiSelect.locator("option:checked")).toContainText([
    "Selection Item 2",
    "Selection Item 4",
  ]);

  await page.waitForTimeout(5000); //pause for demo purpose
});
