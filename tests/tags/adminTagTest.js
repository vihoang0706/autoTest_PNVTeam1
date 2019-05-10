const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation';
const editSlugTag = 'automation-testing';
const editDescriptionTag = 'To learn Automation testing by using nightwatch';
const messageTagUpdated = 'Tag updated.';
var dashboard, addTag, username, password, login, editTag;
module.exports = {
    '@tags': ['tag'],
    before: (browser) => {
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addTag = browser.page.adminTagAddPage();
        editTag = browser.page.adminTagEditPage();
        login.login(username, password);
    },
    'Verify that admin can add new tag successfully': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Tag');
            addTag.addNewTag(nameTag, slugTag, descriptionTag);
            addTag.getColumnValueActual('Actual Title', nameTag, function (actualTitle) {
                browser.assert.equal(actualTitle, nameTag);
            });
            addTag.getColumnValueActual('Actual Slug', nameTag, function (actualSlug) {
                browser.assert.equal(actualSlug, slugTag);
            });
            addTag.getColumnValueActual('Actual Description', nameTag, function (actualDescription) {
                browser.assert.equal(actualDescription, descriptionTag);
            });
            addTag.goToActionHiddenLink('Delete', nameTag);
            done();
        });
    },
    'Verify that Admin can edit tag ': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Tag');
            addTag.addNewTag(nameTag, slugTag, descriptionTag);
            addTag.goToActionHiddenLink('Edit', nameTag);
            editTag.editTag(editNameTag, editSlugTag, editDescriptionTag)
            editTag.getActualUpdatedTagMessageValue(function (actualMessage) {
                browser.assert.equal(actualMessage, messageTagUpdated);
            });
            editTag.goBackToTagPage();
            addTag.getColumnValueActual('Actual Title', editNameTag, function (actualTitle) {
                browser.assert.equal(actualTitle, editNameTag);
            });
            addTag.getColumnValueActual('Actual Slug', editNameTag, function (actualSlug) {
                browser.assert.equal(actualSlug, editSlugTag);
            });
            addTag.getColumnValueActual('Actual Description', editNameTag, function (actualDescription) {
                browser.assert.equal(actualDescription, editDescriptionTag);
            });
            addTag.goToActionHiddenLink('Delete', editNameTag);
            done();
        });
    }
};