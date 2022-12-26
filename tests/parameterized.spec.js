// First go through datadriver.spec.js
//Run same test for multiple test data set inpts
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../testdata/userDataSet.json'))); // make sure dataSet is not in {}
const {test} = require('@playwright/test');
for (const data of dataset){
test(`Parameterized from external JSON file for ${data.username} , ${data.password} and ${data.productName}:`, async ({page}) => {
    console.log('JS Object for test data is  >>  ', data);
    const poManager =new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.gotoLoginPage();
    await loginPage.validLogin(data.username, data.password);
   })
};