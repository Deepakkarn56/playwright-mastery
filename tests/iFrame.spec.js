import { test, expect } from '@playwright/test';

test('iFrame', async ({ page }) => {

    // Open URL
    await page.goto('http://127.0.0.1:5500/DemoHtmlDosc/index.html');

    // Count total frames
    const allFrames = page.frames();
    console.log('Total number of frames:', allFrames.length);

    // Access first iframe (Form Practice)
    const leftFrame = page.frameLocator('iframe').first();

    // Fill form fields
    await leftFrame.getByLabel('Name:').fill('Deepak');
    await leftFrame.getByLabel('Email:').fill('deepak@example.com');

    // Click submit
    await leftFrame.getByRole('button', { name: 'Submit' }).click();

});