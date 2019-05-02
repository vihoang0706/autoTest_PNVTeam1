const nameMenu = 'Comments';
var dashboard, login, username, password, addNewMenu;
const assert = require('assert');
module.exports = {
    '@tags': ['add-newMenu'],
    'Pre-condition: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addNewMenu = browser.page.adminMenuAddMenuPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step 1: Go to add new Menu': function () {
        dashboard.goToPage('linkAppearance', 'linkMenus');
    },
    'Step 2: Go to link create Menu': function(){
        addNewMenu.gotoCreateNewMenu();
    },
    'Step 3: Add new Menu with valid data': function (browser) {
        addNewMenu
            .addNewMenuStruct(nameMenu)
            .addMenuSetting()
            .selectMenu()
            .getContainValue('inputNameMenu',function(value)
            {
                browser.assert.equal(value, nameMenu);
            });
        addNewMenu
            .checkSelectedOption('inputAutoAddPages')
            .checkSelectedOption('inputLocationPrimary')
            .checkSelectedOption('inputLocationFooter')
            .checkSelectedOption('inputLocationSocialLink')
            .deleteMenu();
        browser.acceptAlert();
    }
};