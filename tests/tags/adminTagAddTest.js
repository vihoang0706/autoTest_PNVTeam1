const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var login, dashboard, tag, username, password;
module.exports = {
    '@tags': ['add-tag'],
    'Pre-condition: Login with valid account and Delete all tags': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tag = browser.page.adminTagAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
        tag.deleteAllTags();
    },
    'Step 1: Go to tag page': function () {
        dashboard.goToPage('linkPosts', 'linkTags');
    },
    'Step 2: Add new tag with valid data': function (browser) {
        tag.addNewTag(nameTag, slugTag, descriptionTag);
        tag.waitUntilElementVisible('columnActualTitle');
        tag.getContainsText('columnActualTitle', function (actualTitle) {
            browser.assert.equal(actualTitle, nameTag);
        });
        tag.getContainsText('columnActualSlug', function (actualSlug) {
            browser.assert.equal(actualSlug, slugTag);
        });
        tag.getContainsText('columnActualDescription', function (actualDescription) {
            browser.assert.equal(actualDescription, descriptionTag);
        });
    },
};