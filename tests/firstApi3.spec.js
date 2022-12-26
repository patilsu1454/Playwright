const {test, request, expect} = require('@playwright/test');

test('Get all requests header details:', async ({page})=> {    // anonymous function 
  
         page.on('request', async request => {
         // console.log('>>', request.method(), request.url());
              if (request.url().includes('https://geolocation.onetrust.com/cookieconsentpub/v1/geo')) {
                  var headers = await request.allHeaders().then(text => {
                  return text;
                  })
                console.log(request.url());  
                console.log('MMMMMMMM');
                console.log(JSON.stringify(headers));
                }
                      
           })
           
       await page.goto('https://applitools.com/platform/integrations/');
    });