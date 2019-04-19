const utils = require('../../page-objects/utils/setUp');
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['addcategory'],
    before: function (browser) {
        var login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        utils.openBrowser(browser);
        login.login(username, password);
    },
    'Step 1: Go to Category page': function (browser) {
        var dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkCategories');
    },
    'Step 2: Add a new category': function (browser){
        var category = browser.page.adminCategoryAddPage();
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category
            .assert.containsText('@columnActualName', nameCategory)
            .assert.containsText('@columnActualDescription', descriptionCategory)
            .assert.containsText('@columnActualSlug', slugCategory);
    },
    after: function (browser) {
        var category = browser.page.adminCategoryAddPage();
        category.deleteCategory(); 
        browser.end()
    },
}