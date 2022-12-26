const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');

test('First Test using page objects :', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.validLogin('anshika@gmail.com', 'IamKing@000');
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchProductsAndAddToCart('Zara Coat 4');
    await dashboardPage.navigateToCart();
});