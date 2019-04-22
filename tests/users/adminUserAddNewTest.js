var username = 'nightwatch';
var email = 'nightwatch@gmail.com';
var firstName = 'NightWatch';
var lastName = 'Team 1';
var password = 'Team1234';
var website = 'Team1234';
var role = 'Administrator';
var name = 'NightWatch' + ' Team 1'
module.exports = {
    '@tags' : ['adduser'],
    'Step 1: Login to the admin page': function (browser) {
        login = browser.page.adminUserLoginPage();
        login.login(browser.globals.userNames.username, browser.globals.userNames.password);
    },
    'Step 2: Go to the add new user page': function (browser) {
        dashboard = browser.page.adminBasePage();
        dashboard.goToPage('linkUsers', 'linkAddNewUser');
    },
    'Step 3: Add new user': function (browser) {
        addUser = browser.page.adminAddUserPage();
        user = browser.page.adminUserManagementPage();
        addUser.addUser(username, email, firstName, lastName, website, password, role);
        user
            .checkContainsText('collumnUsername', username)
            .checkContainsText('collumnName', name)
            .checkContainsText('collumnEmail', email)
            .checkContainsText('collumnRole', role)
    },

}