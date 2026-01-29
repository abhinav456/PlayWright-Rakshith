const{test,page, expect} = require("@playwright/test");

test("Test fixture check", async({page})=>{
     await page.goto("");
     expect (page.locator("")).toHaveAttribute();
     expect (page.locator()).toHaveText();
     const pt = await page.locator("");
     await pt.waitFor({state: 'visible'});
     const[newPage] = Promise.all([await page.context().waitForEvent("page"),
        await page.locator("").click("")

     ]);
     await newPage.waitForLoadState();
     page.on('dialog', dialog=>dialog.accept());



});    

class help{
  constructor(page){
   this.page = page
  }
 
  

}