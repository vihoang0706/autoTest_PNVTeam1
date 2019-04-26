const nameTitle = 'Hello summer';
const description = 'I like swimming.';
const assert = require('assert');
var dashboard, viewAllPage, addNewPage, login, username, password;
module.exports = {
    '@tags': ['add-newPage'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        addNewPage = browser.page.adminPageAddPage();
        dashboard = browser.page.adminBasePage();
        viewAllPage = browser.page.adminPageViewAllPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPages', 'linkAllPages');
        viewAllPage.deleteAllPages();
    },
    'Step 1: Go to add new page': function () {
        dashboard.goToPage('linkPages', 'linkAddNewPages');
    },
    'Step 2: Add new Page with valid data': function (browser) {
        addNewPage
            .addNewPage(nameTitle, description)
            .waitUtilForElementVisible('labelMessageSuccess');
        dashboard.goToPage('linkPages', 'linkAllPages');
        viewAllPage
            .waitUtilForElementVisible('columnActualTitle')
            .getContainValue('columnActualTitle',function(value)
                {
                    browser.assert.equal(value, nameTitle);
                });
        viewAllPage.gotoAddPages();
        addNewPage
            .waitUtilForElementVisible('inputTitle')
            .waitUtilForElementVisible('inputDescription')
            .getContainValue('inputTitle',function(value)
                {
                    browser.assert.equal(value, nameTitle);
                });
        addNewPage
            .getContainValue('inputDescription',function(value)
                {
                    browser.assert.equal(value, description);
                });
    }
};