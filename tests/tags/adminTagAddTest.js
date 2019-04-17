const utils = require('../../page-objects/utils/setUp');
const titleWebsite = 'Tags ‹ Store Front Website — WordPress';
const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
module.exports = {
    '@tags': ['crud-tags'],
    before: function (browser) {
        utils.openBrowser(browser);
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Go to tag page': function (browser) {
        const dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkTags');
        browser.getTitle(function (title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal(title, titleWebsite);
        });
    },
    'Add new tag': function (browser) {
        const page = browser.page.adminTagAddPage();
        page.addNewTag(nameTag, slugTag, descriptionTag);
        page
            .pause(2000)
            .assert.containsText('@columnActualTitle', nameTag)
            .assert.containsText('@columnActualSlug', slugTag)
            .assert.containsText('@columnActualDescription', descriptionTag);
    },
    'Edit Tag': function (browser) {
        const page = browser.page.adminTagAddPage();
        browser.execute(function () {
            document.querySelector('div.row-actions > span.edit > a').click();
        });
        page
            .editTag(editNameTag, editSlugTag, editDescriptionTag)
            .goBackToTagPage();
        page
            .assert.containsText('@columnActualTitle', editNameTag)
            .assert.containsText('@columnActualSlug', editSlugTag)
            .assert.containsText('@columnActualDescription', editDescriptionTag);
    },
    'Quick Edit Tag': function (browser) {
        const page = browser.page.adminTagAddPage();
        browser.execute(function () {
            document.querySelector('div.row-actions > span.inline.hide-if-no-js > button').click();
        });
        page.quickEditTag(nameTag, slugTag);
        page
            .assert.containsText('@columnActualTitle', nameTag)
            .assert.containsText('@columnActualSlug', slugTag);
    },
    'Delete Tag': function (browser) {
        const page = browser.page.adminTagAddPage();
        browser.execute(function () {
            document.querySelector('div.row-actions > span.delete > a').click();
        });
        browser
            .pause(1000)
            .acceptAlert();
        page
            .assert.elementNotPresent('@columnActualTitle')
            .assert.elementNotPresent('@columnActualSlug')
            .assert.elementNotPresent('@columnActualDescription');
    },
    after: function (browser) {
        browser
            .pause(1000)
            .end();
    }
};