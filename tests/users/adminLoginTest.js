module.exports = {
    '@tags': ['logintest'],
    'Login with valid information': browser => {
        var login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    }
};
