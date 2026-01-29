const{test, expect, request} = require('@playwright/test');
const{apiData} = require('../resources/API');
const fs = require('fs');
const path = require('path');

class Api{
    constructor(){
       this.apiContext = null; 
    }
    async init(){
        this.apiContext = await request.newContext();
    }
    async apiLoginToken(){
     const body = {userEmail: "abhinavpicsupload@gmail.com", userPassword: "Abhinav@2025"};///we can use this in data also and call in this.body
     const response = await this.apiContext.post(apiData.url, {
     data : body
     })
     expect(response.ok()).toBeTruthy();
     const loginResponseBody =await response.json();
     const token = loginResponseBody.token;
     apiData.token = token;
     console.log("TOKEN"+apiData.token);
     return token;
    }
}
module.exports = {Api}