import {test,expect} from '@playwright/test' ;

test('AssertionTest',async({page})=>{

    //  oepn url
   await  page.goto('https://www.saucedemo.com/')

    //  page level assertion 
    // verify page title
   await  expect(page).toHaveTitle('Swag Labs')

    // verify page url
    await expect (page).toHaveURL('https://www.saucedemo.com/')
})