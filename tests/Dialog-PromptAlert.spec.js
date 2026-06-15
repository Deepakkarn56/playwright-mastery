import {test,expect} from '@playwright/test';

test ('PromptAlertHandling', async({page})=>{
     // step 1 open url
    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")

    //  step 2 :  we must register the dialog handler before clicking the button

    // once means this handler will run only one time
    // listen for the Prompt dialog

    page.once('dialog',async dialog=>{

        // check what type of  dialog it is(alert/confirm/prompt)
        expect(dialog.type()).toBe('prompt');

        // Read to message  shown inside the alert popup
        expect(dialog.message()).toContain('I prompt you')

        // verify default text inside prompt input box
        expect(dialog.defaultValue()).toBe('change me')

        // enter value : deepak kumar and click ok
        await dialog.accept('deepak')
        // click  ok button on the alert
        // await dialog.accept()

        // to click cancel instead, we would use 
        // await dialog.dismiss()
    })
    // step 3 click the button that opens the  prompt  alert alert popup
    await page.getByText('Show prompt box').click()

    // step 4 verify that alerts was  handled successfully
   await  expect (page.locator('#promptreturn')).toHaveText('deepak')
    
})