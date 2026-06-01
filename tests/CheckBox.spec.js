import { test, expect } from "@playwright/test";

test("CheckBox", async ({ page }) => {
  // open url
  await page.goto("https://testautomationpractice.blogspot.com/");

  // locate checkbox
  const sundayCheckbox = page.locator("#sunday");
  const mondayCheckbox = page.locator("#monday");
  const tuesdayCheckbox = page.locator("#tuesday");

  //   await sundayCheckbox.check(); //check / select sunday checkbox

  //    verify sunday checkbox is selected
  //   await expect(sundayCheckbox).toBeChecked();

  //  store allcheckbox in an array . This will help us use loops instead repeating code

  const checkboxes = [sundayCheckbox, mondayCheckbox, tuesdayCheckbox];

  // for loop-  select all checkbox

  for (const checkbox of checkboxes) {
    // check (select ) the checkbox
    await checkbox.check();

    // verify checkbox is checked
    expect(checkbox).toBeChecked();
  }

  //   for loop + if condition - uncheck checkboxes
  for (const checkbox of checkboxes) {
    const ischecked = await checkbox.isChecked(); // true or false
    // if condition
    // only uncheck if checkbox is already unchecked
    if (ischecked) {
      await checkbox.uncheck();
    }
  }
  
});
