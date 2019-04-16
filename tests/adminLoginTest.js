const username = 'team1_theme2';
const password = 'team1_theme2';
const url = require('../pages/utils/setUp');

module.exports = {
    '@tags':['login1'],
    'Login with valid information': function(browser) {
        url.openBrowser(browser);
        var login = browser.page.adminLoginPage();
        login.fillInLoginForm(username,password);
        browser.end();
    }
};
