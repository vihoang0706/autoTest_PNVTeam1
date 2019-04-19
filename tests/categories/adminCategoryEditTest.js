const utils = require('../../page-objects/utils/setUp');
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
const nameEditCategory = 'clothes store';
const slugEditCategory = 'shopping-store';
const parentEditCategory = 'None';
const descriptionEditCategory = 'Clothes on the Team 1 store';
const editMessageSuccessful = 'Category updated.';
module.exports = {
    '@tags': ['editcategory'],
    before: function (browser) {
        var login = browser.page.adminUserLoginPage();
        var category = browser.page.adminCategoryAddPage();
        var dashboard = browser.page.adminBasePage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        utils.openBrowser(browser);
        login.login(username, password);
        dashboard.goToPage('@linkPosts', '@linkCategories');
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category
            .assert.containsText('@columnActualName', nameCategory)
            .assert.containsText('@columnActualDescription', descriptionCategory)
            .assert.containsText('@columnActualSlug', slugCategory);
    },

    'Verify that user can edit category with valid information': function (browser) {
        var category = browser.page.adminCategoryPage();
        browser.execute(function () {
            document.querySelector('div.row-actions > span.edit > a').click();
        });
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category
            .assert.containsText('@strongMessageEditSuccessful', editMessageSuccessful)
            .goBackToCategory()
            .assert.containsText('@columnActualName', nameEditCategory)
            .assert.containsText('@columnActualDescription', descriptionEditCategory)
            .assert.containsText('@columnActualSlug', slugEditCategory);
    },
    
    after: function (browser) {
        browser.execute(function () {
            document.querySelector('div.row-actions > span.delete > a').click();
        });
        browser.acceptAlert();
        browser
            .assert.elementNotPresent('@columnActualName')
            .assert.elementNotPresent('@columnActualDescription')
            .assert.elementNotPresent('@columnActualSlug');
        browser
            .pause(1000)
            .end()
    },
}