const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
const messageTagUpdated = 'Tag updated.';
var login, dashboard, tag, username, password;
module.exports = {
    '@tags': ['edit-tag'],
    'Pre-condition: Delete all tags and Create a new tag': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tag = browser.page.adminTagAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
        tag
            .deleteAllTags()
            .addNewTag(nameTag, slugTag, descriptionTag);
    },
    'Step 1: Go to edit tag': function () {
        tag.goToHideLink('linkEdit');
    },
    'Step 2: Edit Tag': function (browser) {
        tag.editTag(editNameTag, editSlugTag, editDescriptionTag)
        tag.getContainsText('strongMessageSuccess', function (actualMessage) {
            browser.assert.equal(actualMessage, messageTagUpdated);
        });
        tag.goBackToTagPage();
        tag.getContainsText('columnActualTitle', function (actualTitle) {
            browser.assert.equal(actualTitle, editNameTag);
        });
        tag.getContainsText('columnActualSlug', function (actualSlug) {
            browser.assert.equal(actualSlug, editSlugTag);
        });
        tag.getContainsText('columnActualDescription', function (actualDescription) {
            browser.assert.equal(actualDescription, editDescriptionTag);
        });
    },
};