const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var dashboard, tagPage;
module.exports = {
    '@tags': ['add-tag'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkTags');
        tagPage = browser.page.adminTagAddPage();
        tagPage.deleteAllTags();
    },
    'Step 1: Go to tag page': function () {
        dashboard.goToPage('@linkPosts', '@linkTags');
    },
    'Step 2: Add new tag with valid data': function () {
        tagPage.addNewTag(nameTag, slugTag, descriptionTag);
        tagPage
            .waitForElementVisible('@columnActualTitle')
            .checkContainsText('columnActualTitle', nameTag)
            .checkContainsText('columnActualSlug', slugTag)
            .checkContainsText('columnActualDescription', descriptionTag);
    },
};