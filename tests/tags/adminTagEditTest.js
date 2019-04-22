const utils = require('../utils/config.js');
var dashboard, tagPage;
const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
module.exports = {
    '@tags': ['edit-tag'],
    before: function (browser) {
        const login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tagPage = browser.page.adminTagAddPage();
        utils(browser).openBrowser();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Pre-condition: Create a new tag': function () {
        dashboard.goToPage('@linkPosts', '@linkTags');
        tagPage.addNewTag(nameTag, slugTag, descriptionTag);
    },
    'Step 1: Go to edit tag': function () {
        tagPage.clickHiddenLink('@linkEdit');
    },
    'Step 2: Edit Tag': function () {
        tagPage
            .editTag(editNameTag, editSlugTag, editDescriptionTag)
            .goBackToTagPage();
        tagPage
            .checkContainsText('columnActualTitle', editNameTag)
            .checkContainsText('columnActualSlug', editSlugTag)
            .checkContainsText('columnActualDescription', editDescriptionTag);
    },
    after: function (browser) {
        tagPage.clickHiddenLink('@linkDelete');
        browser
            .pause(1000)
            .acceptAlert()
            .end();
    }
};