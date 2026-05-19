const  {test,expect}=require('@playwright/test'); // importing two things , test fnc to create test and expect  for assertion

test('Open Google page and check title', async({page})=>
    {

    // test code will go here
    await page.goto("https://www.google.com/");
    const pagetitle = await  page.title()
    console.log('Page title is:', pagetitle)

    const  pageUrl = page.url()
    console.log("Page URL is :",  pageUrl)
    await expect(page).toHaveTitle(/Google/);

}

)
