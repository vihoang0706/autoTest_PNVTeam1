var category, login, dashboard, username, password;
var util = require("util");
var nameCategory = 'clothes';
var slugCategory = 'shopping';
var parentCategory = 'None';
var descriptionCategory = 'Clothes on the store';
var nameEditCategory = 'clothes store';
var nameAfterEditCategory = '— clothes store';
var slugEditCategory = 'shoppingstore';
var parentEditCategory = 'Uncategory';
var descriptionEditCategory = 'Clothes on the Team 1 store';
var editMessageSuccessful = 'Category updated.';
module.exports = {
    '@tags': ['category'],
    before: function(browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        category = browser.page.adminCategoryPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that user can create a new category with valid information': function (browser) {
        dashboard.goToPage('Category');
        category.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category.waitUntilCategoryVisible(nameCategory);
        category.getCollumnValue(nameCategory,'Actual Name',function(actualName) {
            browser.assert.equal(actualName, nameCategory);
        });
        category.getCollumnValue(nameCategory,'Actual Description',function(actualDescription) {
            browser.assert.equal(actualDescription, descriptionCategory);
        });
        category.getCollumnValue(nameCategory,'Actual Slug',function(actualSlug) {
            browser.assert.equal(actualSlug, slugCategory);
        });
        category.goToActionHiddenLink(nameCategory, 'Delete');
    },
    'Verify that user can edit category with valid data information': function (browser) {
        dashboard.goToPage('Category');
        category.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category.goToActionHiddenLink(nameCategory, 'Edit');
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category.getActualMessageValue(function(actualMessage) {
            browser.assert.equal(actualMessage, editMessageSuccessful);
        });
        category.goBackToCategory();
        category.getCollumnValue(nameAfterEditCategory,'Actual Name',function(actualName) {
            browser.assert.equal(actualName, nameAfterEditCategory);
        });
        category.getCollumnValue(nameAfterEditCategory,'Actual Description',function(actualDescription) {
            browser.assert.equal(actualDescription, descriptionEditCategory);
        });
        category.getCollumnValue(nameAfterEditCategory,'Actual Slug',function(actualSlug) {
            browser.assert.equal(actualSlug, slugEditCategory);
        });
        category.goToActionHiddenLink(nameAfterEditCategory, 'Delete');
    }
}