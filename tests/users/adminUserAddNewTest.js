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
    before : function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        userManage = browser.page.adminUserManagementPage();
        user = browser.page.adminAddUserPage();
        userAdmin = browser.globals.userNames.username;
        passwordAdmin = browser.globals.userNames.password;
        login.login(userAdmin, passwordAdmin);
    },
    'Verify that user can add a new user with valid information': function (browser) {
        dashboard.goToPage('Add New User');
        user.addNewUser(username, email, firstName, lastName, website, password, role);
        userManage.getCollumnValue(username, 'Username', function (actualUserName) {
            browser.assert.equal(actualUserName, username);
        });
        userManage.getCollumnValue(username, 'Name', function (actualName) {
            browser.assert.equal(actualName, name);
        });
        userManage.getCollumnValue(username, 'Email', function (actualEmail) {
            browser.assert.equal(actualEmail, email);
        });
        userManage.getCollumnValue(username, 'Role', function (actualRole) {
            browser.assert.equal(actualRole, role);
        });
        // A new user can log in to admin page
        dashboard.logout();
        login.login(username, password);
        dashboard.logout();
        // delete user has just create 
        login.login(userAdmin, passwordAdmin);
        dashboard.goToPage('Manage User');
        userManage.deleteUser(username);
        dashboard.logout();
    },
}