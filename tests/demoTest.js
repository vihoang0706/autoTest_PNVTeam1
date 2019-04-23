var demo = require('../pages/adminLoginPage');
const utils = require('../pages/utils/setUp');
module.exports = {
    '@tags': ['demo'],
    before: function (browser) {
        utils.openBrowser(browser);
    },
    'Login with valid information': function (browser) {
        const dashboard = browser.page.adminDashboardPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        demo.login(username, password);
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
}