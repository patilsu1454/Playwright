const {base} = require('@playwright/test');

exports.customtest = base.test.extend(
{
    testUserDataFixture : {
        
            "username":"sushantthe2@gmail.com",
            "password":"Sush@123456",
            "productName":"zara coat 3"
           }
    }
)