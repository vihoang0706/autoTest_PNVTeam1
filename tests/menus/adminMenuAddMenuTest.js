const nameMenu = 'Comments';
var dashboard, login, username, password, menu;
module.exports = {
    '@tags': ['add-menu'],
    'Pre-condition: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        menu = browser.page.adminMenuAddMenuPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step 1: Go to add new Menu': function () {
        dashboard.goToPage('linkAppearance', 'linkMenus');
    },
    'Step 2: Go to link create Menu': function(){
        menu.goToMenuPage();
    },
    'Step 3: Add new Menu with valid data': function (browser) {
        menu
            .addNewMenu(nameMenu)
            .selectMenu()
            .getContainValue('inputNameMenu',function(value){
                browser.assert.equal(value, nameMenu);
            });
        menu.deleteMenu();
        browser.acceptAlert();
    }
};