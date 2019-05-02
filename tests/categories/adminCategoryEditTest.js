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
            .goToEditCategoryPage('Category');
    },
    'Step 2: Edit category': function (browser) {
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category.getActualMessageValue(function(actualMessage) {
            browser.assert.equal(actualMessage, editMessageSuccessful);
        });
        category.goBackToCategory();
        category.getCollumnValue('Actual Name',function(actualName) {
            browser.assert.equal(actualName, nameEditCategory);
        });
        category.getCollumnValue('Actual Description',function(actualDescription) {
            browser.assert.equal(actualDescription, descriptionEditCategory);
        });
        category.getCollumnValue('Actual Slug',function(actualSlug) {
            browser.assert.equal(actualSlug, slugEditCategory);
        });
    },
}