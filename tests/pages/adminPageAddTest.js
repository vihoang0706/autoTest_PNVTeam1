const nameTitle = 'Hello summer';
const description = 'I like swimming.';
var dashboard, viewAllPage, addNewPage, login, username, password;
module.exports = {
    '@tags': ['add-newPage'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage('linkPages', 'linkAllPages');
        viewAllPage = browser.page.adminPageViewAllPage();
        viewAllPage.deleteAllPages();
    },
    'Step 1: Go to add new page': function () {
        dashboard.goToPage('linkPages', 'linkAddNewPages');
    },
    'Step 2: Add new Page with valid data': function (browser) {
        addNewPage = browser.page.adminPageAddPage();
        addNewPage
            .dismissTip()
            .addNewPage(nameTitle, description)
            .waitForElementVisible('@lableCommentNotice');
    },
    'Step 3: Go to view all page': function () {
        dashboard.goToPage('linkPages', 'linkAllPages');
    },
    'Step 4: Check page has just created that display corectly': function () {
        viewAllPage
            .waitForElementVisible('@columnActualTitle')
            .checkContainsText('columnActualTitle', nameTitle);
    }
};