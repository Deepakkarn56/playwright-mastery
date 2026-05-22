import {test,expect} from '@playwright/test';

test('Built-In Locators-SauceDemo', async({page})=>{

    // open sauce demo website
    await page.goto('https://www.saucedemo.com/')

    // enter user name
   await  page.getByPlaceholder('Username').fill('standard_user')

//    enter password
   await page.getByPlaceholder('Password').fill('secret_sauce')

//    click on login 
   await page.getByRole('button',{name: 'Login'}).click()

//    Assertion
  await expect(page).toHaveURL(/inventory.html/)


})