const utils = require('../utils/config.js');
module.exports = {
    '@tags': ['logintest'],
    before: function (browser) {
        utils(browser).openBrowser();
    },
    'Login with valid information': function (browser) {
        var login = browser.page.adminUserLoginPage();
        const dashboard = browser.page.adminBasePage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard
            .pause(1000)
            .assert.visible('@link');
        browser.execute(function () {
            document.querySelector('#wp-admin-bar-logout > a').click();
        });
    },
    after: function (browser) {
        browser
            .pause(2000)
            .end();
    }
};
