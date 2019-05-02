const nameTag = 'automation testing';
const slugTag = 'automation-test';
const descriptionTag = 'To learn Automation testing';
var login, dashboard, tag, username, password;
module.exports = {
    '@tags': ['add-tag'],
    'Verify that admin can add new tag successfully': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        tag = browser.page.adminTagAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkTags');
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
        tag.goToHideLink('Delete');
        browser.acceptAlert();
    }
};