const utils = require('../../page-objects/utils/setUp');
let addMedia;
 module.exports = {
     tags: ['addMediaFunction'],

     before: function (browser) {
         login = browser.page.adminUserLoginPage();
         dashboard = browser.page.adminBasePage();
        //  addMedia = browser.page.adminMediaAddPage();
         username = browser.globals.userNames.username;
         password = browser.globals.userNames.password;

         utils.openBrowser(browser);
         login.login(username, password);
     },

    'Step 1: Go to media page ': function () {
        dashboard.goToPage('@linkMedia', '@linkAddNewMedia');
    },

    // 'Step 2: Add media' : function (){

    // }

 }