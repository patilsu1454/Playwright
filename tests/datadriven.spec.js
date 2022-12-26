const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require('../testdata/userData.json'))); // make sure dataSet is not in {}
const {test} = require('@playwright/test');

test('Data driven from external JSON file:', async ({page}) => {
    console.log('JS Object for test data is  >>  ', dataset);
    const poManager =new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.gotoLoginPage();
    await loginPage.validLogin(dataset.username, dataset.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductsAndAddToCart(dataset.productName);
    await dashboardPage.navigateToCart();
});