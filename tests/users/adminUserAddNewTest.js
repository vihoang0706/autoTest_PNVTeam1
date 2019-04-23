var login, dashboard, user, addUser, userAdmin, passwordAdmin;
var username = 'nightwatch.team1';
var email = 'nightwatch@gmail.com';
var firstName = 'NightWatch';
var lastName = 'Team 1';
var password = 'Team1234';
var website = 'Team1234';
var role = 'Subscriber';
var name = 'NightWatch' + ' Team 1'
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
    'Step 2: Add new user': function () {
        addUser.addUser(username, email, firstName, lastName, website, password, role);
        user
            .checkContainsText('collumnUsername', username)
            .checkContainsText('collumnName', name)
            .checkContainsText('collumnEmail', email)
            .checkContainsText('collumnRole', role)
        //Checkpoint: The new user account can login to Admin page
        dashboard.goToActionUser('linkLogOut');
        login.login(username, password);
        dashboard.checkElementVisible('linkYourAccount');
    },
    'Pre-condition: Clear data': function(browser) {
        const dash = browser.page.adminBasePage();
        dash.goToPage('linkUsers', 'linkAllUsers');
        user.deleteUser();
        dash.goToActionUser('linkLogOut');
    }
}