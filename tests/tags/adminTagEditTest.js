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
        dashboard = browser.page.adminBasePage();
        tagPage = browser.page.adminTagAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
        tagPage
            .deleteAllTags()
            .addNewTag(nameTag, slugTag, descriptionTag);
    },
    'Step 1: Go to edit tag': function () {
        tagPage.goToHideLink('linkEdit');
    },
    'Step 2: Edit Tag': function () {
        tagPage.editTag(editNameTag, editSlugTag, editDescriptionTag)
        tagPage
            .checkContainsText('strongMessageSuccess', messageTagUpdated)
            .goBackToTagPage()
            .checkContainsText('columnActualTitle', editNameTag)
            .checkContainsText('columnActualSlug', editSlugTag)
            .checkContainsText('columnActualDescription', editDescriptionTag);
    },
};