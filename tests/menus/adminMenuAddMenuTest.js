const nameMenu = 'Comments';
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
        menu.goToMenuPage();
        menu
            .addNewMenu(nameMenu)
            .selectMenu();
        menu.getColumActual('Actual Name Menu',function(actualNameMenu){
                browser.assert.equal(actualNameMenu, nameMenu);
            });
        menu.deleteMenu();
        browser.acceptAlert();
    }
};