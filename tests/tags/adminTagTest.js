var characters = 'abcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;
const nameTag = 'automation testing'+ Math.random().toString(36).substr(2, charactersLength);
const slugTag = 'automation-test'+ Math.random().toString(36).substr(2, charactersLength);
const descriptionTag = 'To learn Automation testing';
const editNameTag = 'automation'+ Math.random().toString(36).substr(2, charactersLength);
const editSlugTag = 'automation-testing'+Math.random().toString(36).substr(2, charactersLength);
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
            addTag.goToAction('Delete', nameTag);
            done();
        });
    },
    'Verify that Admin can edit tag ': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Tag');
            addTag.addNewTag(nameTag, slugTag, descriptionTag);
            addTag.goToAction('Edit', nameTag);
            editTag.editTag(editNameTag, editSlugTag, editDescriptionTag)
            editTag.getActualUpdatedTagMessage(function (actualMessage) {
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
            addTag.goToAction('Delete', editNameTag);
            done();
        });
    }
};