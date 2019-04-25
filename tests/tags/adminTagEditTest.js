const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
const messageTagUpdated = 'Tag updated.';
var login, dashboard, tagPage, username, password;
module.exports = {
    '@tags': ['edit-tag'],
    'Pre-condition: Delete all tags and Create a new tag': function (browser) {
        login = browser.page.adminUserLoginPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage(dashboard.el('@linkMainMenu', 'Posts'),dashboard.el('@linkSubMenuPosts', 'Tags'));
        tagPage = browser.page.adminTagAddPage();
        tagPage
            .deleteAllTags()
            .addNewTag(nameTag, slugTag, descriptionTag);
    },
    'Step 1: Go to edit tag': function () {
        tagPage.goToHiddenLink('linkEdit');
    },
    'Step 2: Edit Tag': function (browser) {
        tagPage.editTag(editNameTag, editSlugTag, editDescriptionTag)
        tagPage
            .getContainsText('strongMessageSuccess', function (result) {
                browser.assert.equal(result, messageTagUpdated);
        });
        tagPage.goBackToTagPage();
        tagPage
            .getContainsText('columnActualTitle', function (result) {
                browser.assert.equal(result, editNameTag);
        });
        tagPage
            .getContainsText('columnActualSlug', function (result) {
                browser.assert.equal(result, editSlugTag);
        });
        tagPage
            .getContainsText('columnActualDescription', function (result) {
                browser.assert.equal(result, editDescriptionTag);
        });
    },
};