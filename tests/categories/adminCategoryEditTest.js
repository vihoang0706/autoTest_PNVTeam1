var dashboard, category, login;
const assert = require('assert');
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
    '@tags': ['edit-category'],
    'Pre-condition: Login to the admin page, delete all category and add a new category ': function (browser) {
        login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
        dashboard.goToPage('linkPosts', 'linkCategories');
        category.deleteAllCategories();
        category.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
    },
    'Step 1: Go to the Edit Category page': function () {
        category
            .pause(500)
            .goToHideLink('linkEditCategory');
    },
    'Step 2: Edit category': function (browser) {
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category.getContainValue('strongMessageEditSuccessful',function(actualMessage) {
            browser.assert.equal(actualMessage, editMessageSuccessful);
        });
        category.goBackToCategory('linkBackToCategories')
        category.getContainValue('columnActualName',function(actualName) {
            browser.assert.equal(actualName, nameEditCategory);
        });
        category.getContainValue('columnActualDescription',function(actualDescription) {
            browser.assert.equal(actualDescription, descriptionEditCategory);
        });
        category.getContainValue('columnActualSlug',function(actualSlug) {
            browser.assert.equal(actualSlug, slugEditCategory);
        });
    },
}