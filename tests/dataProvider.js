var using = require('../libraries/nightwatch/node_modules/jasmine-data-provider');
describe('Login with invalid account using data provider', function () {
    function plusProvider() {
        return [
            {username:"", password:"",errorEmailValidationMess:"Vui lòng nhập email",errorPassValidationMess:"Vui lòng nhập mật khẩu"},
            {username:"team@gmail.com", password:"",errorPassValidationMess:"Vui lòng nhập mật khẩu"},
            {username:"", password:"",errorEmailValidationMess:"Vui lòng nhập email"},
            {username:"team@gmail.com", password:"test",errorPassValidationMess:"Mật khẩu phải chứa ít nhất 8 ký tự"},
            {username:"team@gmail.com", password:"test123456789",errorMessage:"Đăng nhập không thành công!"},
        ];
    }
    it('Login function by using Data Driven', function (browser) {
        var login = browser.page.loginPage();
        login.navigate().gotoPage();
        using(plusProvider, function (data) {
           login.fillInLoginForm(data.username,data.password);
            browser.end();
        });
    });
});