const{data} = require('../../resources/data');
const{HomePage, Login,DashBoard} = require('../../pages/pages');
const {Given,When,Then} = require('@cucumber/cucumber');
const{test} = require('@playwright/test');
         Given('Navigate to url {string}', async function (url) {
          this.HomePage = new HomePage(this.page);
          await this.HomePage.navigatetoHomePage(url);
         });
         When('Enter the login details {string} and {string}', async function(email,password){
         this.Login  = new Login(this.page);
         await this.Login.loginasSP(email,password);
         });
         Then('Validate dashbaord', async function(){
         this.DashBoard = new DashBoard(this.page);
         await this.DashBoard.validatedashboard();
         });