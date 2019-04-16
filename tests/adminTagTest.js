var utils = require('../pages/utils/setUp.js');
const username = 'admin';
const password = '123456789';
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
        const login = browser.page.adminLoginPage();
        login.fillInLoginForm(username, password);
        const page = browser.page.adminTagPage();
        page.gotoTagPage()
            .deleteAllTags();
    },
    'Go to Create a tag page': function (browser) {
        const page = browser.page.adminTagPage();
        page.gotoTagPage();
        browser.getTitle(function(title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal(title,titleWebsite);
          });
    },
    'Fill tag form': function(browser) {
        const page = browser.page.adminTagPage();
        page.fillInTagForm(nameTag,slugTag,descriptionTag);
        browser.pause(2000);
        page.assert.containsText('@columnActualTitle',nameTag)
            .assert.containsText('@columnActualSlug', slugTag)
            .assert.containsText('@columnActualDescription', descriptionTag);
    },
    'Edit Tag': function(browser){
        const page = browser.page.adminTagPage();
        browser.execute(function() {
            document.querySelector('div.row-actions > span.edit > a').click();
        });
        page.editTagForm(editNameTag,editSlugTag,editDescriptionTag)
            .goBackToTagPage();
        page.assert.containsText('@columnActualTitle',editNameTag)
            .assert.containsText('@columnActualSlug', editSlugTag)
            .assert.containsText('@columnActualDescription', editDescriptionTag);
    },
    'Quick Edit':function(browser){
        const page = browser.page.adminTagPage();
        browser.execute(function() {
            document.querySelector('div.row-actions > span.inline.hide-if-no-js > button').click();
        });
        page.quickEditTagForm(nameTag,slugTag);
        page.assert.containsText('@columnActualTitle',nameTag)
            .assert.containsText('@columnActualSlug', slugTag);
    },
    'Delete Tag': function(browser) {
        browser.execute(function() {
            document.querySelector('div.row-actions > span.delete > a').click();
        });
        const page = browser.page.adminTagPage();
        browser.pause(1000)
               .acceptAlert();
        page.assert.elementNotPresent('@columnActualTitle')
            .assert.elementNotPresent('@columnActualSlug')
            .assert.elementNotPresent('@columnActualDescription');
        },
    after: function(browser){
        browser.pause(1000);
        browser.end();
    }
};