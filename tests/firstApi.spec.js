const {test, request, expect} = require('@playwright/test');
const { ApiUtils } = require('../tests-examples/utils/ApiUtils');

//const {expect} = require('../playwright.config');
var headersofReq, reqUrl;
var mydata;


test('Access request header details :', async ({page})=> {    // anonymous function 
  
  //  const [response] = await Promise.all([
    //    page.waitForResponse('**/aorta.clickagy.com/data'),
      //  page.goto('https://applitools.com/platform/integrations/')
      // ]);
 
  page.on('request', async request => {
    
    if(request.url().includes('aorta.clickagy.com/data')){
      
       let ObjHeaders= await request.allHeaders().then(b => {
        return b;
       });
       console.log('>>', request.method(), request.url());
       console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM-- check how obj is returned');
       console.log(ObjHeaders);
       // converting to JSON string from returned obj
       console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM-- check how JSON string appears');
       const objJsonString = JSON.stringify(ObjHeaders);
       console.log(objJsonString);

       // parse json 
       console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM-- check how Jascript object appears');
       var objJavascriptHeaders = JSON.parse(objJsonString);
       console.log(objJavascriptHeaders);

       console.log(await objJavascriptHeaders[":authority"]) // aorta.clickagy.com
       console.log(await objJavascriptHeaders[":method"])  // Post
       console.log(await objJavascriptHeaders["unknownProperty"])   // undefined
       console.log(await objJavascriptHeaders["origin"])  // https://applitools.com
       console.log(await jsonParsedData["accept-language"])  // en_US
       console.log(await objJavascriptHeaders.origin)  // https://applitools.com
       
     //console.log('XXXX' ,ObjHeadersJS, typeof ObjHeadersJS);
     //  console.log("Here is required data : ", ObjHeadersJS['sec-fetch-mode']);  // 
      // expect(ObjHeadersJS['sec-fetch-mode']).toEqual('cors'); 
      }    
    });
  
  /*page.on('response', (response) =>
    console.log('<<', response.status(), response.url())
  )*/
  await page.goto('https://applitools.com/platform/integrations/');
});

test('Accessss request header details :', async ({page})=> {    // anonymous function 
   
 const utilsb = new ApiUtils();
  
  const data = await utilsb.getHeaderddsOfRequest(page,"https://aorta.clickagy.com/data", async returncb => {
    console.log('within block >>', await returncb)       
  return returncb;
    
  });
  console.log('Outside block >>', data)
  await page.goto('https://applitools.com/platform/integrations/');
  
 });

 test.only('Accessss request header detailssss :', async ({page})=> {    // anonymous function 
   
  await page.route('https://aorta.clickagy.com/data', route => {
    const headers = route.request().headers();
    console.log('>>>>>>>> headers',headers);
    console.log('>>>>>>>>');
    const jsonStr=JSON.stringify(headers);
    console.log('>>>>>>>>-jsonStr',jsonStr);
    console.log('>>>>>>>>@@@@@@');
    const parsedAsObj =JSON.parse(jsonStr); //Converts a JavaScript Object Notation (JSON) string into an object.
    console.log("....",JSON.parse(jsonStr));
    console.log("Header infor extracted : ", parsedAsObj['user-agent'])
    route.continue({headers});
  });
    await Promise.all([
    page.waitForRequest('https://aorta.clickagy.com/data'),
    await page.goto('https://applitools.com/platform/integrations/'),
  ]);

  

  });