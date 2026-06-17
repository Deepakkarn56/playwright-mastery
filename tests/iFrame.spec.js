import {test,expect} from '@playwright/test'

test('iFrame', async({page})=>{
    
    // open url 
    await page.goto("http://127.0.0.1:5500/DemoHtmlDosc/index.html")

    // count total iframe

    const allFrame =  page.frames()

    console.log("Total number of frames:", allFrame.length)


})