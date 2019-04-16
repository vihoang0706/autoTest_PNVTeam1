const username = 'team1_theme2';
const password = 'team1_theme2';
const assertAccountUser = '//li[@class="menupop with-avatar"]';

const url = require('../pages/utils/setUp');

module.exports = {
    '@tags':['login1'],
    'Login with valid information': function(browser) {
        url.openBrowser(browser);
        var login = browser.page.adminLoginPage();
        login.fillInLoginForm(username,password);
        browser.useXpath()
                .pause(1000);
        browser.assert.visible(assertAccountUser);
        browser.execute(function() {
            document.querySelector('#wp-admin-bar-logout > a').click();
        });
        browser.pause(5000); 
        browser.end();
    }
};