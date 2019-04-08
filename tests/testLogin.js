const email = 'vi.hoang0706@gmail.com';
const password= 'a123456789';
module.exports = {
  '@tags': ['login'],

  'Login Page Initial Render': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
         .validateForm()
  },

  'Try to login with no username or password': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
      .gotoPage()
      .fillInLoginForm('','')
      .pause(1000)
      .checkValidationErrorMess('@errorEmailValidationMess','Vui lòng nhập email')
      .checkValidationErrorMess('@errorPasswordValidationMess','Vui lòng nhập mật khẩu')
      .checkValueContainInput('','')
  },

  'Try to login with a username and no password': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
      .gotoPage()
      .fillInLoginForm(email,'')
      .pause(1000)
      .checkValidationErrorMess('@errorPasswordValidationMess','Vui lòng nhập mật khẩu')
      .checkValueContainInput('','')
  },
'Try to login with a password and no username': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
      .gotoPage()
      .fillInLoginForm('',password)
      .pause(1000)
      .checkValidationErrorMess('@errorEmailValidationMess','Vui lòng nhập email')
      .checkValueContainInput('','')
  },
  'Enter password less than 8 characters': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
      .gotoPage()
      .fillInLoginForm(email,'test')
      .pause(1000)
      .checkValidationErrorMess('@errorPasswordValidationMess','Mật khẩu phải chứa ít nhất 8 ký tự')
      .checkValueContainInput('','')
  },
'Enter wrong username and password': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
      .gotoPage()
      .fillInLoginForm(email,'test123459')
      .pause(1000)
      .checkErrorMessage('Đăng nhập không thành công!')
      .checkValueContainInput('','')
  },
  'Login with valid account': function(browser) {
    var login = browser.page.Login();
    browser.maximizeWindow()
    login.navigate()
      .gotoPage()
      .fillInLoginForm(email,password)
      .pause(1000)
      .checkLoginSucessfully()
  },

    after: (browser, done) => {
        browser.end(); 
        done();
    },
};