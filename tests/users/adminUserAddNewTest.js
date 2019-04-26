var login, dashboard, user, addUser, userAdmin, passwordAdmin;
var username = 'nightwatch.team1';
var email = 'nightwatch@gmail.com';
var firstName = 'NightWatch';
var lastName = 'Team 1';
var password = 'Team1234';
var website = 'Team1234';
var role = 'Subscriber';
var name = 'NightWatch' + ' Team 1'
const assert = require('assert');
module.exports = {
    '@tags': ['add-user'],
    'Pre-condition: Login to the admin page and delete all user': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        user = browser.page.adminUserManagementPage();
        addUser = browser.page.adminAddUserPage();
        userAdmin = browser.globals.userNames.username;
        passwordAdmin = browser.globals.userNames.password;
        login.login(userAdmin,passwordAdmin);
    },
    'Step 1: Go to the add new user page': function () {
        dashboard.goToPage('linkUsers', 'linkAddNewUser');
    },
    'Step 2: Add new user': function (browser) {
        addUser.addNewUser(username, email, firstName, lastName, website, password, role);
        user.getContainValue('collumnUsername',function(actualUserName) {
            browser.assert.equal(actualUserName, username, 'Pass');
        })
        user.getContainValue('collumnName',function(actualName) {
            browser.assert.equal(actualName, name);
        })
        user.getContainValue('collumnEmail',function(actualEmail) {
            browser.assert.equal(actualEmail, email);
        })
        user.getContainValue('collumnRole',function(actualRole) {
            browser.assert.equal(actualRole, role);
        })
        dashboard.goToActionUser('linkLogOut');
        login.login(username, password);
        dashboard.checkElementVisible('linkYourAccount');
        dashboard.goToActionUser('linkLogOut');
    },
    'Pre-condition: Clear data': function(browser) {
        login.login(userAdmin,passwordAdmin);
        dashboard.goToPage('linkUsers', 'linkAllUsers');
        user.deleteUser();
        dashboard.goToActionUser('linkLogOut');
    }
}