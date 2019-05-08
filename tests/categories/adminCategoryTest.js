var addCategory, login, dashboard, username, password, editCategory;
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
    before: function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addCategory = browser.page.adminCategoryAddPage();
        editCategory = browser.page.adminCategoryEditPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that user can create a new category with valid information': function (browser) {
        dashboard.goToPage('Category');
        addCategory.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        addCategory.getColumnValueActual('Actual Title', nameCategory, function (actualName) {
            browser.assert.equal(actualName, nameCategory);
        });
        addCategory.getColumnValueActual('Actual Description', nameCategory, function (actualDescription) {
            browser.assert.equal(actualDescription, descriptionCategory);
        });
        addCategory.getColumnValueActual('Actual Slug', nameCategory, function (actualSlug) {
            browser.assert.equal(actualSlug, slugCategory);
        });
        addCategory.goToActionHiddenLink('Delete', nameCategory);
    },
    'Verify that user can edit category with valid data information': function (browser) {
        dashboard.goToPage('Category');
        addCategory.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        addCategory.goToActionHiddenLink('Edit', nameCategory);
        editCategory.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        editCategory.getActualUpdatedCategoryMessage(function (actualMessage) {
            browser.assert.equal(actualMessage, editMessageSuccessful);
        });
        editCategory.goBackToCategory();
        addCategory.getColumnValueActual('Actual Title', nameAfterEditCategory, function (actualName) {
            browser.assert.equal(actualName, nameAfterEditCategory);
        });
        addCategory.getColumnValueActual('Actual Description', nameAfterEditCategory, function (actualDescription) {
            browser.assert.equal(actualDescription, descriptionEditCategory);
        });
        addCategory.getColumnValueActual('Actual Slug', nameAfterEditCategory, function (actualSlug) {
            browser.assert.equal(actualSlug, slugEditCategory);
        });
        addCategory.goToActionHiddenLink('Delete', nameAfterEditCategory);
    }
}