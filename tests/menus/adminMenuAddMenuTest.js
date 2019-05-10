const nameMenu = 'Comments';
var dashboard, login, username, password, menu;
module.exports = {
    '@tags': ['add-menu'],
    before: function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        menu = browser.page.adminMenuAddMenuPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that admin can add new Menu with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Menu');
            menu.addNewMenu(nameMenu);
            menu.getNameMenu(function (actualNameMenu) {
                browser.assert.equal(actualNameMenu, nameMenu);
            });
            menu.deleteMenu();
            done();
        });
    }
};