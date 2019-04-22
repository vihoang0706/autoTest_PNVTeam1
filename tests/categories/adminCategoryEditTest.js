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
    'Pre-condition: Login to the admin page ': function (browser){
        login = browser.page.adminUserLoginPage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Pre-condition: Add a new category': function (browser){
        login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
        dashboard.goToPage('linkPosts', 'linkCategories');
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
    },
    'Step 1: Go to the Edit Category page': function (browser) {
        category = browser.page.adminCategoryPage();
        category
            .pause(500)
            .goToHideLink('linkEditCategory');
    },
    'Step 2: Edit category': function (browser) {
        category = browser.page.adminCategoryPage();
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category
            .checkContainsText('strongMessageEditSuccessful', editMessageSuccessful)
            .goBackToCategory('linkBackToCategories')
            .checkContainsText('columnActualName', nameEditCategory)
            .checkContainsText('columnActualDescription', descriptionEditCategory)
            .checkContainsText('columnActualSlug', slugEditCategory);
    },
    'Delete the category just created': function (browser) {
        category = browser.page.adminCategoryPage();
        category.goToHideLink('linkDeleteCategory');
        browser.acceptAlert();
    }
}