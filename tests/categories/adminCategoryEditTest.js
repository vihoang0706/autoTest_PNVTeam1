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
    'Pre-condition: Login to the admin page, delete all category and add a new category ': function (browser) {
        login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
        dashboard.goToPage('linkPosts', 'linkCategories');
        category.deleteAllCategories();
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
    },
    'Step 1: Go to the Edit Category page': function () {
        category.goToHideLink('linkEditCategory');
    },
    'Step 2: Edit category': function () {
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category
            .checkContainsText('strongMessageEditSuccessful', editMessageSuccessful)
            .goBackToCategory('linkBackToCategories')
            .checkContainsText('columnActualName', nameEditCategory)
            .checkContainsText('columnActualDescription', descriptionEditCategory)
            .checkContainsText('columnActualSlug', slugEditCategory);
    },
}