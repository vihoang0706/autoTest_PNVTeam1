var login, dashboard, username, password;
module.exports = {
    '@tags': ['login'],
    'Verify that admin can login with valid account': (browser) => {
        browser.perform(function (browser, done) {
            login = browser.page.adminUserLoginPage();
            dashboard = browser.page.adminBasePage();
            username = browser.globals.userNames.username;
            password = browser.globals.userNames.password;
            login.login(username, password);
            dashboard.isLogOutVisible(function (result) {
                browser.assert.equal(result, true);
            });
            dashboard.logout();
            done();
        });
    }
};