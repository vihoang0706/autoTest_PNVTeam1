const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
const messageTagUpdated = 'Tag updated.';
var login, dashboard, tag, username, password;
module.exports = {
    '@tags': ['edit-tag'],
    'Verify that Admin can edit tag ': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tag = browser.page.adminTagAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
        tag.addNewTag(nameTag, slugTag, descriptionTag);
        tag.goToHideLink('Edit');
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
        tag.goToHideLink('Delete');
        browser.acceptAlert();
    },
};