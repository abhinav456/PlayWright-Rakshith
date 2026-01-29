const { test } = require('@playwright/test');
const {HomePage,Login,DashBoard,HelpSupport,PracticePlay,EcommercePlay} = require('../pages/pages');
const {data,validate,asset} = require('../resources/data');

test('login', async({page})=> {

await test.step('Open URL', async()=>{
    const loginurl = new HomePage(page);
    await loginurl.navigatetoHomePage();

});


await test.step('login as SP', async()=>{
    const loginsp = new Login(page);
    await loginsp.loginas();
});

await test.step('Dashboard', async()=>{
    const dashboard = new DashBoard(page);
    await dashboard.validatedashboard();
});

// await test.step('Start Asset', async()=>{
//     const addAsset = new DashBoard(page);
//     await addAsset.clickStart();
//     await addAsset.AddAsset();

// });

await test.step('help Support', async()=>{
 const help  = new HelpSupport(page);
 await help.clickHelp();

});

});

test.only('Practice-PlayWright', async({browser,page})=>{
      
    await test.step('Buttons', async()=>{
    const practiceb = new PracticePlay(page);
    await practiceb.allOptionsPractice();
    await practiceb.goBackPopup();
    });
   
    // await test.step('new window', async()=>{
    //  const newWindow = new PracticePlay(page);
    //  await newWindow.childWindow();  
    //  await newWindow.newWindow();

    // });

});    

test('E-commerce', async({page})=>{

     await test.step('Login to ecommerce', async()=>{
        const Ecommerce = new EcommercePlay(page);
        await Ecommerce.login();
        
        await Ecommerce.addtoCart();
        //await Ecommerce.dateCalendar();

     });

});





