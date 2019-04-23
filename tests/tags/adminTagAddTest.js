const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var login, dashboard, tagPage, username, password;
module.exports = {
    '@tags': ['add-tag'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage('linkPosts', 'linkTags');
        tagPage = browser.page.adminTagAddPage();
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