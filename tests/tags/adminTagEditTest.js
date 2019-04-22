const utils = require('../utils/config.js');
const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
module.exports = {
    '@tags': ['edit-tag'],
    before: function (browser) {
        utils(browser).openBrowser();
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Pre-condition: Create a new tag': function (browser) {
        const dashboard = browser.page.adminBasePage();
        const page = browser.page.adminTagAddPage();
        dashboard.goToPage('@linkPosts', '@linkTags');
        page.addNewTag(nameTag, slugTag, descriptionTag);
    },
    'Step 1: Go to edit tag': function (browser) {
        const page = browser.page.adminTagAddPage();
        page.clickHiddenLink('@linkEdit');
    },
    'Step 2: Edit Tag': function (browser) {
        const page = browser.page.adminTagAddPage();
        page
            .editTag(editNameTag, editSlugTag, editDescriptionTag)
            .goBackToTagPage();
        page
            .assert.containsText('@columnActualTitle', editNameTag)
            .assert.containsText('@columnActualSlug', editSlugTag)
            .assert.containsText('@columnActualDescription', editDescriptionTag);
    },
    after: function (browser) {
        const page = browser.page.adminTagAddPage();
        page.clickHiddenLink('@linkDelete');
        browser
            .pause(1000)
            .acceptAlert()
            .end();
    }
};