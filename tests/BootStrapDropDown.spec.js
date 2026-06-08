import { test, expect } from '@playwright/test';

test('BootStrapDropDown', async ({ page }) => {

    // Open URL
    await page.goto('http://127.0.0.1:5500/DemoHtmlDosc/BootStrapDropdown.html');

    // Locate bootstrap dropdown and click to open it
    await page.locator(".multiselect").click();

    // Locate list items <li> inside the bootstrap menu
    const items = page.locator("ul.dropdown-menu>li");

    // Get the total number of dropdown options
    const total = await items.count();

    // Print total in terminal
    console.log("Total number of options in the dropdown is: " + total);

    // Verify dropdown contains exactly 10 options
    await expect(items).toHaveCount(10);

    // Options we want to select
    const valuesToSelect = ["Angular", "jQuery Tutorials","MYSQL"];

    // Options we want to deselect
    const valuesToDeselect = ["Angular", "jQuery Tutorials","MYSQL"];

    // Loop through each dropdown item
    for (let i = 0; i < total; i++) {

        // Get current item by index
        const item = items.nth(i);

        // Read visible text of current item
        const text = (await item.textContent()).trim();

        // If text matches our required values, check the checkbox
        if (valuesToSelect.includes(text)) {
            await item.locator('input[type="checkbox"]').check(); 
        }
         // If text matches our required values, check the checkbox
        if (valuesToDeselect.includes(text)) {
            await item.locator('input[type="checkbox"]').uncheck(); 
        }
    }

}); 