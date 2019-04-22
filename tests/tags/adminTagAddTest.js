const utils = require('../utils/config.js');
const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var dashboard, tagPage;
module.exports = {
    '@tags': ['add-tag'],
    before: function (browser) {
        utils(browser).openBrowser();
        const login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tagPage = browser.page.adminTagAddPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step 1: Go to tag page': function () {
        dashboard.goToPage('@linkPosts', '@linkTags');
    },
    'Step 2: Add new tag with data': function () {
        tagPage.addNewTag(nameTag, slugTag, descriptionTag);
        tagPage
            .waitForElementVisible('@columnActualTitle')
            .checkContainsText('columnActualTitle', nameTag)
            .checkContainsText('columnActualSlug', slugTag)
            .checkContainsText('columnActualDescription', descriptionTag);
    },
    after: function (browser) {
        tagPage.clickHiddenLink('@linkDelete');
        browser
            .pause(1000)
            .acceptAlert()
            .end();
    }
};