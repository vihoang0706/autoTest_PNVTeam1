var category, login, dashboard, username, password;
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['add-category'],
    before: function(browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        category = browser.page.adminCategoryPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that user can create a new category with valid data': function (browser) {
        dashboard.goToPage('Category');
        category.deleteAllCategories();
        category.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category.pause(500);
        category.getCollumnValue('Actual Name',function(actualName) {
            browser.assert.equal(actualName, nameCategory);
        });
        category.getCollumnValue('Actual Description',function(actualDescription) {
            browser.assert.equal(actualDescription, descriptionCategory);
        });
        category.getCollumnValue('Actual Slug',function(actualSlug) {
            browser.assert.equal(actualSlug, slugCategory);
        });
    },
    // 'Verify that user can edit category with valid data': function (browser) {
    //     dashboard.goToPage('linkPosts', 'linkCategories');
    //     category.deleteAllCategories();
    //     category.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
    //     category
    //         .pause(500)
    //         .goToEditCategoryPage('Category');
    //     category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
    //     category.getActualMessageValue(function(actualMessage) {
    //         browser.assert.equal(actualMessage, editMessageSuccessful);
    //     });
    //     category.goBackToCategory();
    //     category.getCollumnValue('Actual Name',function(actualName) {
    //         browser.assert.equal(actualName, nameEditCategory);
    //     });
    //     category.getCollumnValue('Actual Description',function(actualDescription) {
    //         browser.assert.equal(actualDescription, descriptionEditCategory);
    //     });
    //     category.getCollumnValue('Actual Slug',function(actualSlug) {
    //         browser.assert.equal(actualSlug, slugEditCategory);
    //     });
    // }
}