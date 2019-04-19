
// module.exporst = {
//   login: (client) => {
//     client
//         .url('http://192.168.189.70/wordpress/wp-admin/')
//         .maximizeWindow()

//         .setValue('//input[@id="user_login"]', 'admin')
//         .setValue('//input[@id="user_pass"]','123456789')
//         .click('//input[@id="wp-submit"]')
//         .assert.title('Dashboard ‹ Store Front Website — WordPress')

//         .waitForElementVisible('//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]', 1000) 
//         .moveToElement('//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]', 0, 0)

//         .waitForElementVisible('//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"] ', 1000)
//         .click('//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"]')
//         .assert.title('Log In ‹ Store Front Website — WordPress')
//   }
// };

module.exports = {
     login : function (client) {
      client
        .url('http://192.168.189.70/wordpress/wp-admin/')
        .maximizeWindow()

        .setValue('//input[@id="user_login"]', 'admin')
        .setValue('//input[@id="user_pass"]','123456789')
        .click('//input[@id="wp-submit"]')
        .assert.title('Dashboard ‹ Store Front Website — WordPress')

        .waitForElementVisible('//div[@class="wp-menu-name" and text()= "Posts"]', 1000)
        .moveToElement('//div[@class="wp-menu-name" and text()= "Posts"]', 0, 0)

        .waitForElementVisible('//li[@id="menu-posts"]//a[text()="Categories"] ', 1000)
        .click('//li[@id="menu-posts"]//a[text()="Categories"]')

        .moveToElement('//tbody[@id="the-list"]/tr[1]/td[1]', 0, 0)

        .click('//span[@class="delete"]/a[@class="delete-tag aria-button-if-js"]')

        .assert.visible('//span[@class="delete"]/a[@class="delete-tag aria-button-if-js"]')
  }
}


// .waitForElementVisible('//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]', 1000) 
// .moveToElement('//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]', 0, 0)

// .waitForElementVisible('//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"] ', 1000)
// .click('//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"]')
// .assert.title('Log In ‹ Store Front Website — WordPress')