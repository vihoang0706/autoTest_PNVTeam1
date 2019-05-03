import {config} from '../configs/config';
import  DataDrivenTest from 'nightwatch-data-driven';
module.exports = {
    'Valid credentials => successfull login': function (browser) {
        // . Initialize DataDrivenTest with browser and AAA function
        //   and call it for a set of test cases
        new DataDrivenTest(browser, function(data, name){
            // . Arrange
            // . Act
            var login = browser.page.adminUserLoginPage();
            login.login(data.email, data.pass);
        })
        .forCases({
            "Valid credentials": {email: config.EMAIL, pass: config.PASS},
            "Ignore leading space in email": {email: ' ' + config.EMAIL, pass: config.PASS},
            "Email in upper case": {
                email: config.EMAIL.toUpperCase(),
                pass: config.PASS,
                disabled: true
            }
        });
    },
};