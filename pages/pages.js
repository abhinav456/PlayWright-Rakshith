const {test, expect, request} = require('@playwright/test');
const {locators, dashBoard, helpSupport,practicePage,ecommerce,calendar} = require('../resources/locators');
const {data,validate,asset, calendardata} = require('../resources/data');
const{apiData} = require('../resources/API');
const path = require('path');
class HomePage{
    constructor(page){
     this.page = page;
    }

    async navigatetoHomePage(url){
    await this.page.goto(url);
    await expect(this.page).toHaveTitle('Inspektra');
    }    
}

class Login{
    constructor(page){
       this.page = page; 
    }
 async logiasuser(){
    await this.page.fill(locators.email, data.email);
    const value = this.page.locator(locators.email).inputValue();
    console.log(value);
 }   

 async password(){
    await this.page.fill(locators.password, data.password);
 }

 async loginbutton(){
    await this.page.click(locators.login);
 }

 async loginas(){
    await this.logiasuser();
    await this.password();
    await this.loginbutton();
 }

  async loginasSP(email,password){
    await this.page.fill(locators.email, email);
    await this.page.fill(locators.password, password);
    await this.page.click(locators.login);
 }

}

class DashBoard {
   constructor(page){
      this.page = page;
   }
  async validatedashboard(){
   await this.page.click(dashBoard.dashboard);
   console.log("After login result is :  " + await this.page.locator(dashBoard.dashboard).textContent());
   await expect(this.page.locator(dashBoard.dashboard)).toContainText(validate.dashboard);
   await this.page.waitForLoadState('networkidle');
   const menuoptions = this.page.locator(dashBoard.menuoptions);
   console.log("Menu Options are : "+ await menuoptions.nth(2).textContent());
   console.log("All menu options are : "+ await menuoptions.allTextContents());
  } 

  async clickStart(){
   await this.page.locator(dashBoard.startAsset).scrollIntoViewIfNeeded();
   await this.page.click(dashBoard.startAsset);
  }

  async AddAsset(){
   await this.page.click(dashBoard.assetId);
   await this.page.fill(dashBoard.assetId, asset.assetId);
   await this.page.click(dashBoard.designation);
   await this.page.fill(dashBoard.designation, asset.designation);
   await this.page.locator(dashBoard.selectmudlist).hover();
   await this.page.locator(dashBoard.selectmudlist).dblclick();
   //select Mnaufacturer
   await this.page.click(dashBoard.manufacturer);
   await this.page.fill(dashBoard.manufacturer, asset.manufacturerdata);
   await this.page.locator(dashBoard.selectmudlist).hover();
   await this.page.locator(dashBoard.selectmudlist).dblclick();
   //select City
   await this.page.click(dashBoard.city);
   await this.page.fill(dashBoard.city, asset.city);
   await this.page.locator(dashBoard.selectmudlist).hover();
   await this.page.locator(dashBoard.selectmudlist).dblclick();
   //select inspection
   await this.page.click(dashBoard.inspection);
   await this.page.fill(dashBoard.inspection, 'a');
   await this.page.locator(dashBoard.selectmudlist).hover();
   await this.page.locator(dashBoard.selectmudlist).dblclick();
   //click on Next
   await this.page.click(dashBoard.nextbutton);

   await this.page.click(dashBoard.nextbutton);

   await this.page.click(dashBoard.nextbutton);

   //click on save
   await this.page.click(dashBoard.save);
}

}

class HelpSupport{
  constructor(page){
   this.page = page;
  }
  async clickHelp(){
   await this.page.click(helpSupport.help);
   await this.page.waitForLoadState('networkidle');
   const releasenote = this.page.locator(helpSupport.releasenote);
   await releasenote.waitFor({state: 'visible'});
   const[newPage] = await Promise.all([this.page.context().waitForEvent('page'),
      this.page.click(helpSupport.releasenote)
   ]);
   await newPage.waitForLoadState();
   //await newPage.close();
   await newPage.bringToFront();

   return newPage;
  
  }

}

class PracticePlay {
  constructor(page){
   this.page = page;
  }

  async allOptionsPractice(){
   await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await expect(this.page).toHaveTitle('Practice Page');
   await this.page.locator(practicePage.Allradio).nth(2).click();
   const radiobutton = this.page.locator(practicePage.Allradio);
   await radiobutton.nth(0).check();
   console.log(await radiobutton.nth(0).textContent());
   await expect(radiobutton.nth(0)).toBeChecked();
   //select Dropdown
   const drpdwn = this.page.locator(practicePage.dropdown);
   await drpdwn.selectOption("Option2");
   //select checkbox
   await this.page.locator(practicePage.checkbox1).click();
   await expect(this.page.locator(practicePage.checkbox1)).toBeChecked();
   await this.page.locator(practicePage.checkbox1).uncheck();
   await expect(this.page.locator(practicePage.checkbox1)).not.toBeChecked();
   const documentLink = this.page.locator(practicePage.link);
   await expect(documentLink).toHaveAttribute('class','blinkingText');
}

async childWindow(){
   const newTab = await this.page.locator(practicePage.newTab);
   const[newPage] = await Promise.all([
   this.page.context().waitForEvent('page'),
   newTab.click()]);
   const text = await newPage.locator(practicePage.newPagecontent).textContent();
   console.log(text);
   await newPage.close();
   await expect(newPage.isClosed()).toBeTruthy();
}

async newWindow(){
  const Window = await this.page.locator(practicePage.newWindow);
  
  const[newWindow] = await Promise.all([
  this.page.context().waitForEvent('page'),
  Window.click()
  ]);
 const text = await newWindow.locator(practicePage.newPagecontent).textContent();
 console.log(text);
 await newWindow.close();
 expect(newWindow.isClosed()).toBeTruthy();  
}

async goBackPopup(){
   await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await this.page.goto("https://www.google.com");
   await this.page.goBack();
   await this.page.goForward();
   await this.page.goBack();
   await expect(this.page.locator(practicePage.visibleHidden)).toBeVisible();
   await this.page.locator(practicePage.hideElement).click();
   await expect(this.page.locator(practicePage.visibleHidden)).toBeHidden();
   this.page.on('dialog',dialog => dialog.accept());
   await this.page.locator(practicePage.alert).click();
   await this.page.locator(practicePage.newalert).click();
   await this.page.locator(practicePage.mouseHover).hover();
   const mouseHoverdata = await this.page.locator(practicePage.mouseHoverContext);
   await mouseHoverdata.locator('a').nth(0).click();

   const newPageFrame = await this.page.frameLocator(practicePage.iframe);
   await newPageFrame.locator(practicePage.joinButton).waitFor({ state: 'visible' });
   await newPageFrame.locator(practicePage.joinButton).click();
   await this.page.pause();
}
}

class EcommercePlay{
 constructor (page){
   this.page = page;
 }
async login(){
   await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await this.page.locator(ecommerce.email).fill("abhinavpicsupload@gmail.com");
   const email = await this.page.locator(ecommerce.email).inputValue();
   console.log(email);
   await this.page.locator(ecommerce.password).fill("Abhinav@2025");
   await this.page.locator(ecommerce.login).click();

   await this.page.waitForLoadState('networkidle');
   await this.page.locator(ecommerce.cartbody).first().waitFor();
   const products = await this.page.locator(ecommerce.cartbody);
   await this.page.locator(ecommerce.cartbody).first().screenshot({path: 'partialShot.png'});
   const titles = await products.allTextContents();
   console.log(titles);
   const cart = await products.count();
   const productName = "ADIDAS ORIGINAL"
   for(let i=0;i<cart;++i){
   if(await products.nth(i).locator("b").textContent()===productName){
    
      const prodresult = await products.nth(i).locator(ecommerce.addtocart).isVisible();
      await expect(prodresult).toBeTruthy();
      const prod = await expect(products.nth(i).locator(ecommerce.addtocart)).toContainText("Add To Cart");
      await products.nth(i).locator(ecommerce.addtocart).click();
   }
   }

}
async addtoCart(){
    await this.page.locator(ecommerce.cart).click();
    await this.page.waitForLoadState('networkidle');
    const checkoutName = "Checkout";
    const checkout = await this.page.locator(ecommerce.checkout,{hasText: 'Checkout'});
    const checkoutbuttondata = await this.page.locator(ecommerce.checkout,{hasText: 'Checkout'}).textContent();
    console.log(checkoutbuttondata);
    await expect(checkout).toBeVisible();
    await this.page.screenshot({path:'screenshot.png'});//capture the screenshot
    expect(await this.page.screenshot()).toMatchSnapshot('compare.png');
    await checkout.click();
    await expect(this.page.locator(ecommerce.country)).toBeVisible();
    await this.page.locator(ecommerce.country).click();
    await this.page.locator(ecommerce.country).type("ind", {delay:100});
    const dropdown = this.page.locator(ecommerce.countrydropdown, {hasText : ' India'});
    await expect(dropdown).toBeVisible();
    await dropdown.click();
    const fieldValue = await this.page.locator(ecommerce.country).textContent();
    console.log(fieldValue);
    if(fieldValue.toContainText('India')){
        await expect(fieldValue).toBeChecked();
    }
}

async dateCalendar(){
   await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
   await this.page.click(calendar.calendarfiled);
   for(let i=0;i<24;i++){
      const yearmonth = await this.page.locator(calendar.yearmonthNavigation).textContent();
      const [currentmonth, currentyear] = yearmonth.trim().split(" ");
      const currentYear = parseInt(currentyear);
      if(currentmonth=== calendardata.targetMonth && currentYear===calendardata.targetYear){
         break;
      }
      if(currentYear<calendardata.targetYear||(currentyear===calendardata.targetYear&&currentmonth!==calendardata.targetMonth)){
         await this.page.locator(calendar.nextMonth).click();
      }else{
         await this.page.locator(calendar.previousmonth).click();
      }
   }
    await this.page.locator(calendar.day(15)).click();
    const expectedList = [calendardata.expectMonth,calendardata.targetday,calendardata.targetYear];
    const givenDate = await this.page.locator(calendar.datePicker);
    for(let i=0;i<expectedList.length;i++){
         const monthexpected = await givenDate.nth(i).inputValue();
          expect(monthexpected).toEqual(expectedList[i]);
    }


}
       

}

module.exports = {HomePage, Login, DashBoard,HelpSupport, PracticePlay, EcommercePlay} 