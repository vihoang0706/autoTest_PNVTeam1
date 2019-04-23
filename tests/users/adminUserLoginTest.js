module.exports = {
    '@tags': ['logintest'],
    'Step1: Login with valid information': function (browser) {
        const login= browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step2: Observe information of user on dashboard page': function (browser) {
        const dashboard = browser.page.adminBasePage();
        dashboard.assert.visible('@linkYourAccount');
    },
    'Step3: LogOut account': function (browser) {
        const dashboard = browser.page.adminBasePage();
        dashboard.logOut('@linkLogOut');
    },
};
