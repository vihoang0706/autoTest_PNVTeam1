var category, login, dashboard;
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['addcategory'],
    'Pre-condition: Login to the admin page and delete all category': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        category = browser.page.adminCategoryPage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
        dashboard.goToPage('linkPosts', 'linkCategories');
        category.deleteAllCategory();
    },
    'Step 1: Go to Category page': function () {
        dashboard.goToPage('linkPosts', 'linkCategories');
    },
    'Step 2: Add a new category': function () {
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category
            .checkContainsText('columnActualName', nameCategory)
            .checkContainsText('columnActualDescription', descriptionCategory)
            .checkContainsText('columnActualSlug', slugCategory);
    },
}