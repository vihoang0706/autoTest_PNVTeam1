var using = require('jasmine-data-provider');
// var mocha = require('mocha')
// describe('login with valid account', function () {
//     function dataLogin() {
//         return [
//             {email: 'hiennguyen', password: 'hiennguyen'},
//             {email: 'hiennguyen1', password: 'hiennguyen1'},
//         ];
//     }
//     it('uses BDD to run the Google simple test', function(browser) {
//         var login = browser.page.loginPage();
//         using(dataLogin, function (data) {
//             login.navigate().gotoPage().fillInLoginForm(data.email,data.password);
//         });
//     });
// });
describe('test addition with data provider - provider function', function () {
    function plusProvider() {
        return [
            {a: 2, b: 3},
            {a: '14', b: 15},
            {a: 12, b: '13'},
            {a: '22', b: '13'},
        ];
    }
 
    using(plusProvider, function (data) {
        it('should calc with operator +', function () {
            console.log('hien nguyen')
        });
    });
});