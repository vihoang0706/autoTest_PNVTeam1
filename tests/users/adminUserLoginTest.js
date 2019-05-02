const linkAccount = '//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]';
var login, dashboard, username, password;
module.exports = {
    '@tags': ['login'],
    'Verify that admin can login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        browser.assert.visible(linkAccount);
        dashboard.goToActionUser('linkLogOut');
    }
};
