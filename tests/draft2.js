const loginPage = require("../pages/draft");

// module.exports = {
//   before: function (browser) {
//     loginPage.login(browser);
//   }
// };


const nameCategory = 'clothes';
const slugCategory = 'shopping';
const parentCategory = 'None';
const descriptionCategory = 'Clothes on the store';
module.exports = {
    '@tags': ['addcategory'],
    before: function (browser) {
      browser
      .url('http://192.168.189.70/wordpress/wp-admin/')
              .maximizeWindow()
      
              .setValue('//input[@id="user_login"]', 'admin')
              .setValue('//input[@id="user_pass"]','123456789')
              .click('//input[@id="wp-submit"]')
              .assert.title('Dashboard ‹ Store Front Website — WordPress')
    },
    'Step 1: Go to Category page': function (browser) {
        var dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkCategories');
    },
    'Step 2: Add a new category': function (browser){
        var category = browser.page.adminCategoryAddPage();
        category.addCategory(nameCategory, slugCategory, parentCategory, descriptionCategory);
        category
            .assert.containsText('@columnActualName', nameCategory)
            .assert.containsText('@columnActualDescription', descriptionCategory)
            .assert.containsText('@columnActualSlug', slugCategory);
    },
    after: function (browser) {
        var category = browser.page.adminCategoryAddPage();
        category.deleteCategory(); 
        browser.end()
    },
}