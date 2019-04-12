// var using = require('jasmine-data-provider');
// var mocha = require('mocha')
// var describe = mocha.describe
// var it = mocha.it
   

// var mocha = require('mocha')
// var describe = mocha.describe
// var it = mocha.it
// var expect = require('chai').expect;
var using = require('jasmine-data-provider');
describe('Login with invalid account using data provider', function () {
    function plusProvider() {
        return [
            {username:"", password:"",errorEmailValidationMess:"Vui lòng nhập email",errorPassValidationMess:"Vui lòng nhập mật khẩu"},
            {username:"vi.hoang0706@gmail.com", password:"",errorPassValidationMess:"Vui lòng nhập mật khẩu"},
            {username:"", password:"",errorEmailValidationMess:"Vui lòng nhập email"},
            {username:"vi.hoang0706@gmail.com", password:"test",errorPassValidationMess:"Mật khẩu phải chứa ít nhất 8 ký tự"},
            {username:"vi.hoang0706@gmail.com", password:"test123456789",errorMessage:"Đăng nhập không thành công!"},
        ];
    }
    it('Login function by using Data Driven  +', function (browser) {
        var login = browser.page.loginPage();
        login.navigate().gotoPage();
        using(plusProvider, function (data) {
           login.fillInLoginForm(data.username,data.password);
            browser.assert.title('Login');
        });
    });
});