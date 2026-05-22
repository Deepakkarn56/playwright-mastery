import {test,expect } from '@playwright/test';

test('Locaters',async({page})=>{
    // open url 
    await page.goto('https://www.saucedemo.com/')

    // enter username
    await page.fill('#user-name','standard_user');

    // enter password 
    await page.locater('password').fill('secret_sauce');

    // locate login button and perform click action  by using XPATH
    await page.locator("//input[@id='login-button']").click();

    // verify successful login
    await expect (page).ttoHaveURL('/inventory.html'); // verify url 

    // ---------First Approch 

    // // find list of all products
 
    // const products =  await page.$$ ('.inventory_item_name ')

    // // count products  and print
    //   console.log ('Total no of products:', productNames.length);

    // //   loog through each element and print the product name

    // for (const product of productsNames){
    //     const name = await product.textContent();  //each element is an element handle
    //     // textContent() is an async fnc,that queries the element in the browser so you must await it 
    //     console.log (name)

    // }

    
      // ---------Second Approch    RECOMMENDED APPROCH  
      
    //   locate all product names 
    const productNames = page.locator('.inventory_item_name');

    // get total count 
    const count = await productNames.count ()
    console.log ('Total no of products:', count)

    // print each product name
    for (let i =0; i<count ; i++){
       const name = await productNames.nth(i).textContent();
       console.log(name)
    } 
})