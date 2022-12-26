const {POManager} = require('../pageobjects/POManager');
const {test} = require('@playwright/test')

test('POManager and page objects :', async ({page}) => {
    const poManager =new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.gotoLoginPage();
    await loginPage.validLogin('sushantthe2@gmail.com', 'Sush@123456');
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductsAndAddToCart('zara coat 3');
    await dashboardPage.navigateToCart();
});