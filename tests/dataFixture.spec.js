const {customtest} = require('../testdata/testDataFixture');

customtest(`Read data from fixtures/customTest:`, async ({page, testUserDataFixture}) => {
    console.log('JS Object for test data is  >>  ', data);
    const poManager =new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.gotoLoginPage();
    await loginPage.validLogin(testUserDataFixture.username, testUserDataFixture.password);
    console.log(testUserDataFixture.productName);
   });