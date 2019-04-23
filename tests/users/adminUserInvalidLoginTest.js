var using = require('jasmine-data-provider');
describe('Data for login with invalid information', function () {
    function dataLogin() {
        return [
            { username: 'admin', password: '', errorMessage: 'ERROR: The password field is empty.' },
            { username: '', password: '123456789', errorMessage: 'ERROR: The username field is empty.' },
            { username: 'admin123', password: '123456789', errorMessage: 'ERROR: Invalid username. Lost your password?' },
            { username: 'admin', password: '12345678910', errorMessage: 'ERROR: The password you entered for the username admin is incorrect. Lost your password?' },
            { username: 'admin123', password: 'admin123', errorMessage: 'ERROR: Invalid username. Lost your password?' },
        ];
    }
    it('Login with invalid data', function (browser) {
        using(dataLogin, function (data) {
            browser
                .url('http://192.168.189.70/wordpress/wp-login.php');
            var login = browser.page.adminUserLoginPage();
            login
                .login(data.username, data.password)
                .checkContainsText('labelErrorMessage', data.errorMessage)
        });
    });
});
// "test_runner" : {
//     "type" : "mocha",
//     "options" : {
//       "ui" : "bdd",
//       "reporter" : "list"
//     }
//   },