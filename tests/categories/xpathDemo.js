var login, dashboard, username, password;
// var Q = require('q');
const assert = require('assert');
module.exports = {
    '@tags': ['demo'],
    'Pre-condition': function (browser) {
        dashboard = browser.page.adminBasePage();
        login = browser.page.adminUserLoginPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.click('@linkPosts');
        dashboard.getContainValue('linkNewPost',function(textFromPage) {
            console.log(textFromPage);
            assert.equal(textFromPage, "Add New123");
        })
        // dashboard.click(dashboard.el('@linkMainMenu',"Posts"));
        // console.log(dashboard.getContainValue());
        // browser.perform(function () {
        //     var value = dashboard.getContainValue()
        //     console.log(value.name);
        // });
        // console.log(dashboard.getContainValue());
        // console.log(dashboard.getText("@linkNewPost"));
        
        // console.log(dashboard.getTextPromise())
        // console.log(dashboard.getContainValue());
        // assert.equal(dashboard.getContainValue(),'Add New');
    },
}