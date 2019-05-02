var login, dashboard, userManage, user, userAdmin, passwordAdmin;
var username = 'nightwatch.team1';
var email = 'nightwatch@gmail.com';
var firstName = 'NightWatch';
var lastName = 'Team 1';
var password = 'Team1234';
var website = 'Team1234';
var role = 'Subscriber';
var name = 'NightWatch' + ' Team 1';
module.exports = {
    '@tags': ['add-user'],
    'Pre-condition: Login to the admin page and delete all user': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        userManage = browser.page.adminUserManagementPage();
        user = browser.page.adminAddUserPage();
        userAdmin = browser.globals.userNames.username;
        passwordAdmin = browser.globals.userNames.password;
        login.login(userAdmin, passwordAdmin);
    },
    'Step 1: Go to the add new user page': function () {
        dashboard.goToPage('linkUsers', 'linkAddNewUser');
    },
    'Step 2: Add new user': function (browser) {
        user.addNewUser(username, email, firstName, lastName, website, password, role);
        userManage.getContainText('collumnUsername', function (actualUserName) {
            browser.assert.equal(actualUserName, username, 'Pass');
        });
        userManage.getContainText('collumnName', function (actualName) {
            browser.assert.equal(actualName, name);
        });
        userManage.getContainText('collumnEmail', function (actualEmail) {
            browser.assert.equal(actualEmail, email);
        });
        userManage.getContainText('collumnRole', function (actualRole) {
            browser.assert.equal(actualRole, role);
        });
        dashboard.goToActionUser('linkLogOut');
        login.login(username, password);
        dashboard.getElementIsVisible('linkYourAccount', function (result) {
            browser.assert.equal(result, true);
        });
        dashboard.goToActionUser('linkLogOut');
    },
    'Pre-condition: Clear data': function (browser) {
        login.login(userAdmin, passwordAdmin);
        dashboard.goToPage('linkUsers', 'linkAllUsers');
        userManage.deleteUser();
        dashboard.goToActionUser('linkLogOut');
    }
}