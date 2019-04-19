

module.exports = {
  commands: [{
      addCategory(name, slug, parent, description) {
          this
              .setValue('@inputName', name)
              .setValue('@inputSlug', slug)
              .setValue('@selectParent', parent)
              .setValue('@textareaDescription', description)
              .click('@inputSubmit')
          return this.api
      },
      editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory) {
          this
              .getLocationInView('@inputSubmitUpdateCategory')
              .clearValue('@inputEditName')
              .clearValue('@inputEditSlug')
              .clearValue('@textareaEditDescription')
              .setValue('@inputEditName', nameEditCategory)
              .setValue('@inputEditSlug', slugEditCategory)
              .setValue('@selectEditParent', parentEditCategory)
              .setValue('@textareaEditDescription', descriptionEditCategory)
              .click('@inputSubmitUpdateCategory')
          return this.api
      },
      goBackToCategory() {
          return this
              .click('@linkBackToCategories');
      },
      deleteCategory() {
          this
          .moveToElement('rowFirstTable', 0, 0) 
          .click('linkDelete') 
          return this.api
      }
  }],
  elements: {
      inputName: {
          selector: 'input[id=tag-name]',
      },
      inputSlug: {
          selector: 'input[id=tag-slug]',
      },
      selectParent: {
          selector: 'select[id=parent]',
      },
      textareaDescription: {
          selector: 'textarea[id=tag-description]',
      },
      inputSubmit: {
          selector: 'input[id=submit]',
      },
      columnActualName: {
          selector: '(//table//tbody/tr//td[@data-colname="Name"]/strong/a)[1]',
          locateStrategy: 'xpath'
      },
      columnActualDescription: {
          selector: '(//table//tr/td[@class="description column-description"]/p)[1]',
          locateStrategy: 'xpath'
      },
      columnActualSlug: {
          selector: '(//table//tr/td[@class="slug column-slug"])[1]',
          locateStrategy: 'xpath'
      },
      // Edit category
      inputEditName: {
          selector: 'input[id=name]'
      },
      inputEditSlug: {
          selector: 'input[id=slug]'
      },
      selectEditParent: {
          selector: 'select[id=parent]'
      },
      textareaEditDescription: {
          selector: 'textarea[id=description]'
      },
      inputSubmitUpdateCategory: {
          selector: 'input[type=submit]'
      },
      strongMessageEditSuccessful: {
          selector: '//div[@id="message"]//strong',
          locateStrategy: 'xpath'
      },
      linkBackToCategories: {
          selector: '//div[@id="message"]//a',
          locateStrategy: 'xpath'
      },
      rowFirstTable: {
          selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
          locateStrategy: 'xpath'
      },
      linkDelete: {
          selector: '//span[@class="delete"]/a[@class="delete-tag aria-button-if-js"]',
          locateStrategy: 'xpath'
      }

  }
};


// module.exports = {
//      login : function (client) {
//       client
//         .url('http://192.168.189.70/wordpress/wp-admin/')
//         .maximizeWindow()

//         .setValue('//input[@id="user_login"]', 'admin')
//         .setValue('//input[@id="user_pass"]','123456789')
//         .click('//input[@id="wp-submit"]')
//         .assert.title('Dashboard ‹ Store Front Website — WordPress')

//         .waitForElementVisible('//div[@class="wp-menu-name" and text()= "Posts"]', 1000)
//         .moveToElement('//div[@class="wp-menu-name" and text()= "Posts"]', 0, 0)

//         .waitForElementVisible('//li[@id="menu-posts"]//a[text()="Categories"] ', 1000)
//         .click('//li[@id="menu-posts"]//a[text()="Categories"]')

//         .moveToElement('//tbody[@id="the-list"]/tr[1]/td[1]', 0, 0)

//         .click('//span[@class="delete"]/a[@class="delete-tag aria-button-if-js"]')

//         .assert.visible('//span[@class="delete"]/a[@class="delete-tag aria-button-if-js"]')
//   }
// }


