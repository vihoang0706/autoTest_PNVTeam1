const nameTag = 'automation testing';
const slugTag = 'automation-test';
var assert = require('assert');
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
        dashboard.goToPage(dashboard.el('@linkMainMenu', 'Posts'), dashboard.el('@linkSubMenuPosts', 'Tags'));
        tagPage = browser.page.adminTagAddPage();
        tagPage.deleteAllTags();
    },
    'Step 1: Go to tag page': function () {
        dashboard.goToPage(dashboard.el('@linkMainMenu', 'Posts'), dashboard.el('@linkSubMenuPosts', 'Tags'));
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