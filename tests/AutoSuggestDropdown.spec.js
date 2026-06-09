import { test, expect } from "@playwright/test";

test("AutoSuggestDropdown", async ({ page }) => {
  // Open URL
  await page.goto("https://www.cleartrip.com/");

  // pop handdling
  // locate a login popup using its unique data-tested attribute

  const loginpop = page.locator('[data-testid="loginPopup"]');

  // locate the close icon
  const closeIcon = page.locator('[data-testid="closeIcon"]');

  // check if the login popup is visible on the screen
  if (await loginpop.isVisible()) {
    // if the popup is visible click on close icon
    await closeIcon.click();
  }

  // Auto suggest dropdown handling
  // locate the where from? input box
  const fromInput = page.locator('input[placeholder="Where from?"]');

  // click inside the input box to activate it
  await fromInput.click();

  // type partial text into the  input box

  await fromInput.fill("Del"); //del trigger the auto suggest dropdown

  // wait for 2 second so that auto suggesstions can load
  await page.waitForTimeout(2000); //2 sec

  // locate all auto sugesstions
  const suggestions = page.locator("//div[@class='mr-1 o-hidden']");

  // count and print  total number of suggestions
  const count = await suggestions.count();
  console.log("Total suggestions: ", count);

  // get text of all the suggestions and store in the array
  const texts = await suggestions.allTextContents();
  console.log("Auto suggest values:");

  texts.forEach((text) => console.log(text));

  await page.waitForTimeout(5000);
});
