import {test,expect} from '@playwright/test';

test ('DailogsimpleAlert', async({page})=>{
    // open url
    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")

    //  we must  resgister the dialog  handler before clicking the button
    //  step 2 once means  this handler will run only one time

    page.once('dialog',async dialog=>{

        // check what type of  dialog it is(alert/confirm/prompt)
        expect(dialog.type()).toBe('alert');

        // Read to message  shown inside the alert popup
        expect(dialog.message()).toContain('I am an alert box!')

        // click  ok button on the alert
        await dialog.accept()
    })
    // step 3 click the button that opens the alert popup
    await page.getByText('Show alert box').click()

    // step 4 verify that alerts was  handled successfully
    await  expect(page.getByText('You triggered and handled the alert dialog')).toBeVisible()
    
})