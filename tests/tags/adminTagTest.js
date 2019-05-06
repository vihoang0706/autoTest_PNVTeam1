const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
const messageTagUpdated = 'Tag updated.';
var dashboard, tag, username, password;
module.exports = {
    '@tags': ['tag'],
    before: function (browser) {
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        var login = browser.page.adminUserLoginPage();
        login.login(username, password);
    },
    'Verify that admin can add new tag successfully': function (browser) {
        dashboard = browser.page.adminBasePage();
        tag = browser.page.adminTagAddPage();
        dashboard.goToPage('Tag');
        tag.addNewTag(nameTag, slugTag, descriptionTag);
        tag.getColumnValueActual('Actual Title', function (actualTitle) {
            browser.assert.equal(actualTitle, nameTag);
        });
        tag.getColumnValueActual('Actual Slug', function (actualSlug) {
            browser.assert.equal(actualSlug, slugTag);
        });
        tag.getColumnValueActual('Actual Description', function (actualDescription) {
            browser.assert.equal(actualDescription, descriptionTag);
        });
        tag.goToActionHiddenLink(nameTag, 'Delete');
    },
    'Verify that Admin can edit tag ': function (browser) {
        dashboard = browser.page.adminBasePage();
        tag = browser.page.adminTagAddPage();
        dashboard.goToPage('Tag');
        tag.addNewTag(nameTag, slugTag, descriptionTag);
        tag.goToActionHiddenLink(nameTag, 'Edit');
        tag.editTag(editNameTag, editSlugTag, editDescriptionTag)
        tag.getColumnValueActual('Success Message', function (actualMessage) {
            browser.assert.equal(actualMessage, messageTagUpdated);
        });
        tag.goBackToTagPage();
        tag.getColumnValueActual('Actual Title', function (actualTitle) {
            browser.assert.equal(actualTitle, editNameTag);
        });
        tag.getColumnValueActual('Actual Slug', function (actualSlug) {
            browser.assert.equal(actualSlug, editSlugTag);
        });
        tag.getColumnValueActual('Actual Description', function (actualDescription) {
            browser.assert.equal(actualDescription, editDescriptionTag);
        });
        tag.goToActionHiddenLink(editNameTag, 'Delete');
    },
    after: function (browser) {
        browser.end();
    }
};