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
    beforeEach: function (browser) {
        login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        // utils(browser).openBrowser();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Pre-condition: Add a new category': function (browser){
        dashboard.goToPage('@linkPosts', '@linkCategories');
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
    },
    'Step 1: Go to the Edit Category page': function (browser) {
        category
            .pause(500)
            .clickHideLink('@linkEditCategory');
    },
    'Step 2: Edit category': function (browser) {
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category
            .checkContainsText('strongMessageEditSuccessful', editMessageSuccessful)
            .goBackToCategory()
            .checkContainsText('columnActualName', nameEditCategory)
            .checkContainsText('columnActualDescription', descriptionEditCategory)
            .checkContainsText('columnActualSlug', slugEditCategory);
            category.clickHideLink('@linkDeleteCategory'); 
            browser.acceptAlert();
    },
    // after: function (browser) {
    //     browser.end()
    // }
}