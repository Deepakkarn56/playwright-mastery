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

  //   Assertion / validation
  // 1 verify dropdown is multiple select
  await expect(multiSelect).toHaveAttribute("multiple");

  // 2 verify total number of options present in dropdown
  const options = multiSelect.locator("option");
  await expect(options).toHaveCount(4);

  //  3 verify  if items are selected or not
  await expect(multiSelect.locator("option:checked")).toContainText([
    'Selection Item 2',
    'Selection Item 4',
  ]);

  await expect(multiSelect.locator("option:checked")).not.toContainText([
    'Selection Item 3',
    'Selection Item 1',
  ]);

  await expect(options).toHaveCount(4);
});
