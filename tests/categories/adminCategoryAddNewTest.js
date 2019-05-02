var category, login, dashboard, username, password;
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['add-category'],
    'Pre-condition: Login to the admin page and delete all categories': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        category = browser.page.adminCategoryPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkCategories');
        category.deleteAllCategories();
    },
    'Step 1: Go to Category page': function () {
        dashboard.goToPage('linkPosts', 'linkCategories');
    },
    'Step 2: Add a new category': function (browser) {
        category.addNewCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category.pause(500);
        category.getContainText('columnActualName', function (actualName) {
            browser.assert.equal(actualName, nameCategory);
        });
        category.getContainText('columnActualDescription', function (actualDescription) {
            browser.assert.equal(actualDescription, descriptionCategory);
        });
        category.getContainText('columnActualSlug', function (actualSlug) {
            browser.assert.equal(actualSlug, slugCategory);
        });
    }
}