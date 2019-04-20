const utils = require('../../page-objects/utils/setUp');
var category;
var dashboard;
const assert = require('assert');
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['addcategory'],
    before: function (browser) {
        var login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        utils.openBrowser(browser);
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Step 1: Go to Category page': function (browser) {
        dashboard.goToPage('@linkPosts', '@linkCategories');
    },
    'Step 2: Add a new category': function (browser){
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category.ckeckContainsText('columnActualName', nameCategory);
        assert.equal(category.getElementTextFromPage('columnActualName',function(textFromPage){}), nameCategory);
            // .assert.containsText('@columnActualName', nameCategory)
            // .assert.containsText('@columnActualDescription', descriptionCategory)
            // .assert.containsText('@columnActualSlug', slugCategory);
    },
    after: function (browser) {
        category.clickHideLink('@linkDeleteCategory'); 
        browser.acceptAlert();
        browser.end()
    },
}