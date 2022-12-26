const {test, expect} = require('@playwright/test');

test('Browser context - My first test case name :', async ({browser})=> {    // anonymous function 

 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
 console.log(await page.title());
 await page.locator('#username').type('rahulshetty');
 await page.locator('#password').type('learning');
 await page.locator('#signInBtn').click();
 //const text= await page.locator("[style*='block']").textContent();  // step 1
 //expect(text).toEqual('Incorrect username/password.');   // step 2
 await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.')  // step 1+2
 await page.locator('#username').fill('');  // to clear the populated text from field

});

test.only('page context - My first test case name :', async ({page})=> {    // anonymous function 

    await page.goto('https://www.google.co.in/');
    await expect(page).toHaveTitle('Google');   
   });
