const {test} = require('@playwright/test');

test.only('Get all requests header details:', async ({page})=> {    // anonymous function 
  
         page.on('request', async request => {
         // console.log('>>', request.method(), request.resourceType(), request.url());
         console.log(`>> : ${request.method()}   ${request.resourceType()}   ${request.url()}`);
          })
           
       await page.goto('https://applitools.com/platform/integrations/');
    });

    test('Get all response details:', async ({page})=> {    // anonymous function 
  
      page.on('response', response => {
       console.log('>>', response.status(), response.url());
       })
        
    await page.goto('https://applitools.com/platform/integrations/');
 });