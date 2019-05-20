let addCategoryPage, loginPage, dashboardPage, username, password, editCategoryPage;
let nameCategory = 'clothes';
let slugCategory = 'shopping';
let parentCategory = 'None';
let descriptionCategory = 'Clothes on the store';
let nameEditCategory = 'clothes s tore';
let nameAfterEditCategory = '— clothes store';
let slugEditCategory = 'shoppingstore';
let parentEditCategory = 'Uncategory';
let descriptionEditCategory = 'Clothes on the Team 1 store';
let editMessageSuccessful = 'Category updated.';
module.exports = {
    '@tags': ['category'],
    before: function (browser) {
        loginPage = browser.page.adminUserLoginPage();
        dashboardPage = browser.page.adminBasePage();
        addCategoryPage = browser.page.adminCategoryAddPage();
        editCategoryPage = browser.page.adminCategoryEditPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage.login(username, password);
    },
    'Verify that user can create a new category with valid information': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Category');
            addCategoryPage.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
            addCategoryPage.getColumnValueActual('Actual Title', nameCategory, function (actualName) {
                browser.assert.equal(actualName, nameCategory);
            });
            addCategoryPage.getColumnValueActual('Actual Description', nameCategory, function (actualDescription) {
                browser.assert.equal(actualDescription, descriptionCategory);
            });
            addCategoryPage.getColumnValueActual('Actual Slug', nameCategory, function (actualSlug) {
                browser.assert.equal(actualSlug, slugCategory);
            });
            addCategoryPage.goToAction('Delete', nameCategory);
            done();
        });
    },
    'Verify that user can edit category with valid data information': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Category');
            addCategoryPage.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
            addCategoryPage.goToAction('Edit', nameCategory);
            editCategoryPage.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
            editCategoryPage.getMessageSuccessfully(function (actualMessage) {
                browser.assert.equal(actualMessage, editMessageSuccessful);
            });
            editCategoryPage.goBackToCategory();
            addCategoryPage.getColumnValueActual('Actual Title', nameAfterEditCategory, function (actualName) {
                browser.assert.equal(actualName, nameAfterEditCategory);
            });
            addCategoryPage.getColumnValueActual('Actual Description', nameAfterEditCategory, function (actualDescription) {
                browser.assert.equal(actualDescription, descriptionEditCategory);
            });
            addCategoryPage.getColumnValueActual('Actual Slug', nameAfterEditCategory, function (actualSlug) {
                browser.assert.equal(actualSlug, slugEditCategory);
            });
            addCategoryPage.goToAction('Delete', nameAfterEditCategory);
            done();
        });
    }
}