var utils = require('../pages/utils/setUp.js');
const nameTags = 'automation testing';
const slugName = 'automation-test';
const description = 'To learn Automation testing';

const editNameTags = 'automation';
const editSlugName = 'automation-testing';
const editDescription = 'To learn Automation testing by using nightwatch';

const rowTitle = '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="name column-name has-row-actions column-primary"]/strong/a)[1]';
const rowDescription = '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="description column-description"]/p)[1]';
const rowSlug = '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="slug column-slug"])[1]';
const edit = '(//span[@class="edit"]/a)[1]';
const row = '(//div[@class="row-actions"])[1]';
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
    'Fill tag form': function(browser) {
        const page = browser.page.adminTagPage();
        page.fillInTagsForm(nameTags,slugName,description);
        browser.pause(2000);
        browser.useXpath();
        browser.assert.containsText(rowTitle,nameTags);
        browser.assert.containsText(rowSlug, slugName);
        browser.assert.containsText(rowDescription, description);
    },
    'Edit Tag': function(browser){
        const page = browser.page.adminTagPage();
        browser.useXpath();
        browser.execute(function() {
            document.querySelector('div.row-actions > span.edit > a').click();
        });
        page.editTagForm(editNameTags,editSlugName,editDescription);
        page.goBackToTag();
        browser.pause(2000);
        browser.useXpath();
        browser.assert.containsText(rowTitle,editNameTags);
        browser.assert.containsText(rowSlug, editSlugName);
        browser.assert.containsText(rowDescription, editDescription);
    },
    'Delete Tag': function(browser) {
        browser.execute(function() {
            document.querySelector('@linkDeleteTag').click();
        });
    },
    after: function(browser){
        browser.pause(1000);
        browser.end();
    }
};