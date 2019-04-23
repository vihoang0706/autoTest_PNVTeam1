const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
var dashboard, tagPage;
module.exports = {
    '@tags': ['edit-tag'],
    'Pre-condition: Login and Create a new tag': function (browser) {
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage('linkPosts', 'linkTags');
        tagPage = browser.page.adminTagAddPage();
        tagPage
            .deleteAllTags()
            .addNewTag(nameTag, slugTag, descriptionTag);
    },
    'Step 1: Go to edit tag': function () {
        tagPage.goToAction('linkEdit');
    },
    'Step 2: Edit Tag': function (browser) {
        tagPage
            .editTag(editNameTag, editSlugTag, editDescriptionTag)
            .goBackToTagPage();
        tagPage
            .checkContainsText('columnActualTitle', editNameTag)
            .checkContainsText('columnActualSlug', editSlugTag)
            .checkContainsText('columnActualDescription', editDescriptionTag);
    },
};