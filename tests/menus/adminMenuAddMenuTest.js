var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
const nameMenu = 'Comments' + Math.floor(Math.random() * charactersLength);
var dashboard, login, username, password, menu;
module.exports = {
    '@tags': ['add-menu'],
    'Verify that admin can add new Menu with valid data': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        menu = browser.page.adminMenuAddMenuPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('Menu');
        menu.addNewMenu(nameMenu);
        menu.getNameMenu(function (actualNameMenu) {
            browser.assert.equal(actualNameMenu, nameMenu);
        });
        menu.deleteMenu();
    }
};