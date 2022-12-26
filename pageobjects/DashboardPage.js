const {expect} = require('@playwright/test');
class DashboardPage {

constructor(page) {
    this.page=page;
    this.products = page.locator('.card-body');
    this.productsText = page.locator('.card-body b');
    // don't declare chaining locators
    this.cart = page.locator("[routerlink*='cart']");

 }

 async searchProductsAndAddToCart(productName){
     //await expect(this.page.locator(.card-body h5 b)).nth(3).toBeVisible();
     //await expect(this.productsText).toBeVisible();
     await expect(this.products.first()).toBeVisible();
     const titles = await this.productsText.allTextContents();
     console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
     console.log(titles);
     await expect(this.products.first()).toBeVisible();  // https://playwright.dev/docs/locators#strictness
     const count = await this.products.count();
     for (let i= 0; i<count; i++){
       // console.log('Pname:',productName);
        const text = await this.products.nth(i).locator('b').textContent()
        // console.log('text:',text);
          if (await this.products.nth(i).locator('b').textContent() === productName){
               //add to card
          console.log('1111111')
               await this.products.nth(i).locator('text= Add To Cart').click();
               break;
          }
       }
    }
    
    async navigateToCart(){
        await expect(this.cart.first()).toBeVisible();  
        await this.cart.click();
    }    

 }
 module.exports= {DashboardPage}