const username = 'admin';
const password = '123456789';
const url = require('../pages/utils/setUp');
const assertAccountUser = '//li[@class="menupop with-avatar"]';

module.exports = {
    '@tags': ['logintest'],
    before: function (browser) {
        url.openBrowser(browser);
    },
    'Login with valid information': function (browser) {
        var login = browser.page.adminLoginPage();
        login.fillInLoginForm(username, password);
        browser.useXpath()
            .pause(1000);
        browser.assert.visible(assertAccountUser);
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
