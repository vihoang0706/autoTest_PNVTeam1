const utils = require('../../page-objects/utils/set-up');
module.exports = {
    '@tags': ['logintest'],
    before: function (browser) {
        utils.openBrowser(browser);
    },
    'Login with valid information': function (browser) {
        var login = browser.page.adminLoginPage();
        const dashboard = browser.page.adminDashboardPage();
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