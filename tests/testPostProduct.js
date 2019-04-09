
module.exports = {
    '@tags':['postproduct'],
    'post with valid information': function(browser) {
      var login = browser.page.DraftLogin();
      login.navigate()
        .fillInForm('binh.nguyen@gmail.com', '123123123a')
        .submit()
            
      var postProducts = browser.page.PostProduct();
      postProducts.navigate()
        .validateForm()
        .fillInForm('fan', 'I have used two years ago', 'Quang Nam', '250', '1')
        .submit()
        .redirectManagePostPage()

      var userManageProducts = browser.page.UserManagePost();
      userManageProducts.checkValueNameProduct()
        .CheckValueDescriptionProduct()
        .CheckValueAddress()
        .CheckValuePrice()
        .CheckValueQuality()
        .checkImageProduct()
      browser.end();
    }
  
  };

  