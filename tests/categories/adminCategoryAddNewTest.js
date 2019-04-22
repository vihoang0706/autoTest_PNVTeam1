var category, login, dashboard;
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['addcategory'],
    'Step 1: Login to the admin page' :  function (browser) {
        login = browser.page.adminUserLoginPage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Step 2: Go to Category page': function (browser) {
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage('linkPosts', 'linkCategories');
    },
    'Step 3: Add a new category': function (browser){
        category = browser.page.adminCategoryPage();
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category
            .checkContainsText('columnActualName', nameCategory)
            .checkContainsText('columnActualDescription', descriptionCategory)
            .checkContainsText('columnActualSlug', slugCategory);
    },
    'Delete the category just created': function (browser) {
        category = browser.page.adminCategoryPage();
        category.goToHideLink('linkDeleteCategory');
        browser.acceptAlert();
    }
}