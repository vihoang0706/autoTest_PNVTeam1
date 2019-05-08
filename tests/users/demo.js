// import DataDrivenTest from 'nightwatch-data-driven';
const abc = require('nightwatch-data-driven');
 
module.exports = {
    'Valid credentials => successfull login': function (browser) {
        // . Initialize DataDrivenTest with browser and AAA function
        //   and call it for a set of test cases
        new abc(browser, function(data){
            browser.page.adminUserLoginPage().login(data.email, data.pass);
            // . Assert
            // browser.page.workspace().assertIsCurrentPage(name);
        })
        .forCases({
            "Valid credentials": {email: authConfig.username, pass: authConfig.password},
            "Ignore leading space in email": {email: ' ' + authConfig.username, pass: authConfig.password},
            "Email in upper case": {
                email: authConfig.username.toUpperCase(),
                pass: authConfig.password,
                disabled: true
            }
        });
    },
};