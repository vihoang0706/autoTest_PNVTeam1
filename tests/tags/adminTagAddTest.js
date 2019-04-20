const utils = require('../utils/config.js');
const titleWebsite = 'Tags ‹ Store Front Website — WordPress';
const nameTag = 'automation testing';
const slugTag = 'automation-test';
const assert = require('assert');
const descriptionTag = 'To learn Automation testing';
module.exports = {
    '@tags': ['add-tag'],
    before: function (browser) {
        utils(browser).openBrowser();
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step 1: Go to tag page': function (browser) {
        const dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkTags');
        browser.getTitle(function (title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal(title, titleWebsite);
        });
    },
    'Step 2: Add new tag with data': function (browser) {
        const page = browser.page.adminTagAddPage();
        page.addNewTag(nameTag, slugTag, descriptionTag);
        page
            .pause(2000)
            .assert.containsText('@columnActualTitle', nameTag)
            .assert.containsText('@columnActualSlug', slugTag)
            .assert.containsText('@columnActualDescription', descriptionTag);
            page.assert.isVisible();
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