const email = 'vi.hoang0706@gmail.com';
const password = 'a123456789';
module.exports = {
    '@tags':['postproduct'],
    'post with valid information': function(browser) {
      var login = browser.page.loginPage();
      login.navigate();
      login.gotoPage();
      login.fillInLoginForm(email,password);
            
      var postProducts = browser.page.postProductPage();
      postProducts.navigate()
        .validateForm()
        .fillInForm('fan', 'I have used two years ago', 'Quang Nam', '250', '1')
        .submit()
        .redirectManagePostPage()

      var userManageProducts = browser.page.userManagePostPage();
      userManageProducts.checkValueNameProduct()
        .CheckValueDescriptionProduct()
        .CheckValueAddress()
        .CheckValuePrice()
        .CheckValueQuality()
        .checkImageProduct()
      browser.end();
    }
  
  };

  