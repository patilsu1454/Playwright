
class LoginPage{

    constructor(page){
    this.page = page;
    this.userName = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.signInBtn = page.locator("input#login.btn.btn-block.login-btn");
    //this.userName = page.locator();
    //this.userName = page.locator();

    }

    async gotoLoginPage(){
        //await this.page.waitForLoadState('networkidle');
        await this.page.goto("https://rahulshettyacademy.com/client/");
      
    }

    async validLogin(username, password) {

        await this.userName.type(username);
        await this.password.type(password);
        await this.page.waitForLoadState('networkidle');
        await this.signInBtn.click();
        await this.page.waitForLoadState('networkidle');
         // imp
    }

}

module.exports = { LoginPage };