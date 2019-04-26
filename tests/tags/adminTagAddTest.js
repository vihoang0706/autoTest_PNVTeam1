const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var login, dashboard, tagPage, username, password;
module.exports = {
    '@tags': ['add-tag'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tagPage = browser.page.adminTagAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
        tagPage.deleteAllTags();
    },
    'Step 1: Go to tag page': function () {
        dashboard.goToPage('linkPosts', 'linkTags');
    },
    'Step 2: Add new tag with valid data': function (browser) {
        tagPage.addNewTag(nameTag, slugTag, descriptionTag);
        tagPage.waitUntilElementVisible('columnActualTitle');
        tagPage
            .getContainsText('columnActualTitle', function (result) {
                browser.assert.equal(result, nameTag);
        });
        tagPage
            .getContainsText('columnActualSlug', function (result) {
                browser.assert.equal(result, slugTag);
        });
        tagPage
            .getContainsText('columnActualDescription', function (result) {
                browser.assert.equal(result, descriptionTag);
        });
    },
};