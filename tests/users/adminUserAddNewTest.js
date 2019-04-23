var login, dashboard, user, addUser;
var username = 'nightwatch';
var email = 'nightwatch@gmail.com';
var firstName = 'NightWatch';
var lastName = 'Team 1';
var password = 'Team1234';
var website = 'Team1234';
var role = 'Administrator';
var name = 'NightWatch' + ' Team 1'
module.exports = {
    '@tags': ['adduser'],
    'Pre-condetion: Login to the admin page and delete all user': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        user = browser.page.adminUserManagementPage();
        addUser = browser.page.adminAddUserPage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
        dashboard.goToPage('linkUsers', 'linkAllUsers');
        user.deleteAllUser();
    },
    'Step 2: Go to the add new user page': function () {
        dashboard.goToPage('linkUsers', 'linkAddNewUser');
    },
    'Step 3: Add new user': function () {
        addUser.addUser(username, email, firstName, lastName, website, password, role);
        user
            .checkContainsText('collumnUsername', username)
            .checkContainsText('collumnName', name)
            .checkContainsText('collumnEmail', email)
            .checkContainsText('collumnRole', role)
        //Checkpoint: The new user account can login to Admin page
        dashboard.logOut('@linkLogOut');
        login.login(username, password);
        dashboard.assert.visible('@linkYourAccount');
        dashboard.logOut('@linkLogOut');
    },
}