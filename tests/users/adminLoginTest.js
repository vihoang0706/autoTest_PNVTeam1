const utils = require('../utils/config.js');
var login;
var dashboard;
module.exports = {
    '@tags': ['logintest'],
    before: function (browser) {
        utils(browser).openBrowser();
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
    },
    'Step1: Login with valid information': function (browser) {
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step2: Observe information of user on dashboard page': function (browser) {
        dashboard.assert.visible('@linkYourAccount');
    },
    'Step3: LogOut account': function (browser) {
        dashboard.logOut('@linkLogOut');
    },
    after: function (browser) {
        browser
            .pause(2000)
            .end();
    }
};
