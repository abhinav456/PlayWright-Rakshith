const{test,chromium,expect}= require('@playwright/test');
const{Api} = require('../pages/api');
const{apiData} = require('../resources/API');

test('api', async({page})=>{
    
   await test.step('login', async()=>{
     const Apirun = new Api();
     await Apirun.init();
     const token = await Apirun.apiLoginToken();

     // ✅ Browser context (NOT API context)
  const browser = await chromium.launch();
  const context = await browser.newContext();

  await context.addInitScript(value => {
 window.localStorage.setItem('token',value);
  },token);

  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/client');

  // ✅ Save browser storage
  await context.storageState({ path: 'state.json' });

  await browser.close();
    });


});


