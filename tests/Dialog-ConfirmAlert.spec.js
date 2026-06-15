import {test,expect} from '@playwright/test';

test ('ConfirmAlertHandling', async({page})=>{
     // step 1 open url
    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")

    //  step 2 :  we must register the dialog handler before clicking the button

    // once means this handler will run only one time
    // listen for the confirmation dialog

    page.once('dialog',async dialog=>{

        // check what type of  dialog it is(alert/confirm/prompt)
        expect(dialog.type()).toBe('confirm');

        // Read to message  shown inside the alert popup
        expect(dialog.message()).toContain('I am a confirm alert')

        // click  ok button on the alert
        await dialog.accept()

        // to click cancel instead, we would use 
        // await dialog.dismiss()
    })
    // step 3 click the button that opens the  confirmation alert alert popup
    await page.getByText('Show confirm box').click()

    // step 4 verify that alerts was  handled successfully
   await  expect (page.locator('#confirmreturn')).toHaveText('true')
    
})