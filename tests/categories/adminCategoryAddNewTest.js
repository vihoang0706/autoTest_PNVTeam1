const config = require('../utils/config.js');
var category;
var dashboard;
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['addcategory'],
    before: function (browser) {
        var login = browser.page.adminUserLoginPage();
        category = browser.page.adminCategoryPage();
        dashboard = browser.page.adminBasePage();
        config(browser).openBrowser();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Step 1: Go to Category page': function () {
        dashboard.goToPage('@linkPosts', '@linkCategories');
    },
    'Step 2: Add a new category': function (){
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category
            .checkContainsText('columnActualName', nameCategory)
            .checkContainsText('columnActualDescription', descriptionCategory)
            .checkContainsText('columnActualSlug', slugCategory);
    },
    after: function (browser) {
        category.clickHideLink('@linkDeleteCategory'); 
        browser.acceptAlert();
        browser.end()
    },
}