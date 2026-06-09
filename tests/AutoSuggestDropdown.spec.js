import {test,expect} from '@playwright/test';

test('AutoSuggestDropdown',async({page})=>{
    // Open URL
    await page.goto("https://www.cleartrip.com/")

    // pop handdling
    // locate a login popup using its unique data-tested attribute

    const loginpop = page.locator('[data-testid="loginPopup"]')

    // locate the close icon
    const closeIcon = page.locator('[data-testid="closeIcon"]')

    // check if the login popup is visible on the screen
    if(await loginpop.isVisible())
    {
        // if the popup is visible click on close icon
        await closeIcon.click()
    }
    await page.waitForTimeout(5000) 
})