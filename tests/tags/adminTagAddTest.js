const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var login, dashboard, tagPage, username, password;
module.exports = {
    '@tags': ['add-tag'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        tagPage = browser.page.adminTagAddPage();
        dashboard = browser.page.adminBasePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
        tagPage.deleteAllTags();
    },
    'Step 1: Go to tag page': function () {
        dashboard.goToPage('linkPosts', 'linkTags');
    },
    'Step 2: Add new tag with valid data': function () {
        tagPage.addNewTag(nameTag, slugTag, descriptionTag);
        tagPage
            .waitUntilElementVisible('columnActualTitle')
            .checkContainsText('columnActualTitle', nameTag)
            .checkContainsText('columnActualSlug', slugTag)
            .checkContainsText('columnActualDescription', descriptionTag);
    },
};