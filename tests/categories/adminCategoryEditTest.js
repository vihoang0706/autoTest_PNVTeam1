const utils = require('../../page-objects/utils/setUp');
var dashboard, category, login;
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
const nameEditCategory = 'clothes store';
const slugEditCategory = 'shoppingstore';
const parentEditCategory = 'None';
const descriptionEditCategory = 'Clothes on the Team 1 store';
const editMessageSuccessful = 'Category updated.';
module.exports = {
    '@tags': ['editcategory'],
    before: function (browser) {
        login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        utils.openBrowser(browser);
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Pre-condition: Add a new category': function (browser){
        dashboard.goToPage('@linkPosts', '@linkCategories');
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
    },
    'Step 1: Go to the Edit Category page': function (browser) {
        category
            .pause(500)
            .clickHideLink('@linkEditCategory');
    },
    'Step 2: Edit category': function (browser) {
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category
            .checkContainsText('strongMessageEditSuccessful', editMessageSuccessful)
            .goBackToCategory()
            .checkContainsText('columnActualName', nameEditCategory)
            .checkContainsText('columnActualDescription', descriptionEditCategory)
            .checkContainsText('columnActualSlug', slugEditCategory);
    },
    after: function (browser) {
        category.clickHideLink('@linkDeleteCategory'); 
        browser.acceptAlert();
        browser.end()
    }
}