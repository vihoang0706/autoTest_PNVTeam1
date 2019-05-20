var loginPage;
let dashboardPage;
module.exports = {
    '@tags': ['login'],
    'Verify that admin can login with valid account': (browser) => {
        browser.perform(function (browser, done) {
            loginPage = browser.page.adminUserLoginPage();
            dashboardPage = browser.page.adminBasePage();
            var username = browser.globals.userNames.username;
            let password = browser.globals.userNames.password;
            loginPage.login(username, password);
            dashboardPage.isLogOutVisible(function (result) {
                browser.assert.equal(result, true);
            });
            dashboardPage.logout();
            done();
        });
    },
    'Verify that admin cannot login with valid account': (browser) => {
        
        browser.perform(function (browser, done) {
            loginPage.login(username, password);
            dashboardPage.isLogOutVisible(function (result) {
                browser.assert.equal(result, true);
            });
            dashboardPage.logout();
            done();
        });
    }
};