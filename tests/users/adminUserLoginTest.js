var login, dashboard, username, password;
module.exports = {
    '@tags': ['login'],
    'Step 1: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard
            .checkElementVisible('linkYourAccount')
            .goToActionUser('linkLogOut');
    }
};
