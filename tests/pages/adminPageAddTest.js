const nameTitle = 'Hello summer';
const description = 'I like swimming.';
var dashboard, viewAllPage, page, login, username, password;
module.exports = {
    '@tags': ['add-page'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        page = browser.page.adminPageAddPage();
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
        page
            .addNewPage(nameTitle, description)
            .waitUntilForElementVisible('labelMessageSuccess');
        dashboard.goToPage('linkPages', 'linkAllPages');
        viewAllPage
            .waitUntilForElementVisible('columnActualTitle')
            .getContainText('columnActualTitle', function (value) {
                browser.assert.equal(value, nameTitle);
            });
        viewAllPage.goToDetailPage();
        page
            .waitUntilForElementVisible('inputTitle')
            .waitUntilForElementVisible('inputDescription')
            .getContainText('inputTitle', function (value) {
                browser.assert.equal(value, nameTitle);
            });
        page
            .getContainText('inputDescription', function (value) {
                browser.assert.equal(value, description);
            });
    }
};