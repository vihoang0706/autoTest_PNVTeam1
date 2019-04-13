var utils = require('../pages/utils/setUp.js');
const nameTags = 'automation testing';
const slugName = 'automation-test';
const description = 'To learn Automation testing';
module.exports = {
    '@tags': ['crud-tags'],
    before: function (browser) {
        utils.openBrowser(browser);
        const login = browser.page.adminLoginPage();
        login.fillInLoginForm('admin', '123456789');
    },
    'Go to Create a tag page': function (browser) {
        const page = browser.page.adminTagPage();
        page.gotoTagPage();
        browser.getTitle(function(title) {
            this.assert.equal(typeof title, 'string');
            this.assert.equal(title, 'Tags ‹ Store Website — WordPress');
          });
    },
    'Fill tags form': function(browser) {
        const page = browser.page.adminTagPage();
        page.fillInTagsForm(nameTags,slugName,description);
        browser.pause(2000);
        browser.assert.containsText('@rowTitle',nameTags);
        // browser.assert.containsText('@rowSlug', slugName);
        // browser.assert.containsText('@rowDescription', description);
    },
    after: function(browser){
        // browser.pause(5000);
        browser.end();
    }
};