const setup = require('../pages/utils/setUp');
const username = 'hiennguyenpnv1998';
const password = 'Hien@12345';
const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
const nameEditCategory = 'clothes store';
const slugEditCategory = 'shopping-store';
const parentEditCategory = 'None';
const descriptionEditCategory = 'Clothes on the Team 1 store';
const editMessageSuccessful = 'Category updated.';

module.exports =  {
    '@tags' :['category'],
    before: function(browser){
        var login = browser.page.adminLoginPage();
        setup.openBrowser(browser);
        login.fillInLoginForm(username, password);
    },
    
    'Step1: Go to category page ' : function (browser) {
        var dashboard = browser.page.adminDashboardPage();
        dashboard.goToPage('@linkPosts', '@linkCategories');
    },      
    'Step2: Add new category': function (browser) {
        var category = browser.page.adminCategoryPage();
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        //check category exist
        category
            .assert.containsText('@columnActualName', nameCategory)
            .assert.containsText('@columnActualDescription', descriptionCategory)
            .assert.containsText('@columnActualSlug', slugCategory);
    },
    'Step3: Editing category just create': function (browser) {
        var category = browser.page.adminCategoryPage();
        browser.execute(function() {
            document.querySelector('div.row-actions > span.edit > a').click();
        });
        category.editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory);
        category
            .assert.containsText('@strongMessageEditSuccessful', editMessageSuccessful)
            .click('@linkBackToCategories')
            .assert.containsText('@columnActualName', nameEditCategory)
            .assert.containsText('@columnActualDescription', descriptionEditCategory)
            .assert.containsText('@columnActualSlug', slugEditCategory);
    },
    'Step4: Delete category': function(browser) {
        browser.execute(function() {
            document.querySelector('div.row-actions > span.delete > a').click();
        });
        browser.acceptAlert();
        browser
            .assert.elementNotPresent('@columnActualName')
            .assert.elementNotPresent('@columnActualDescription')
            .assert.elementNotPresent('@columnActualSlug');
    },
    after: function(browser){
        browser
        .pause(1000)
        .end()
    },
}