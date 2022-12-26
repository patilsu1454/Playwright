const {request, expect} = require('@playwright/test');
var data;
class ApiUtils{

   async getHeaderddsOfRequest(page,url,callback) {

         data = await page.route(url, async (route) => {
         return await route.request().allHeaders();
       });
       console.log('warpper method', await data)
      callback(await data);
  };

}
module.exports = { ApiUtils };