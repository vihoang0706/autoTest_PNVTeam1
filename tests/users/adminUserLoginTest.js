var login, dashboard;
module.exports = {
    '@tags': ['login'],
    'Step 1: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard
            .checkElementVisible('linkYourAccount')
            .logOut('linkLogOut');
    }
};
