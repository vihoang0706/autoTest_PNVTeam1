const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const linkWebsite = 'http://pnvteam1.com';
const messageProfileUpdated = 'Profile updated.';
var userProfile, dashboard;
module.exports = {
    '@tags': 'edit-admin-profile',
    before: (browser) => {
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        userProfile = browser.page.adminUserEditProfilePage();
        login.login(username, password);
    },
    'Verify that Admin can edit the profile of admin successfully': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Edit User Profile');
            userProfile.setDefaultCheckboxes();
            dashboard.goToPage('Edit User Profile');
            userProfile.updateUserProfile(firstName, lastName, nickName, linkWebsite, description);
            userProfile.IsCheckboxesSelected(function (result) {
                browser.assert.equal(result, true);
            });
            userProfile.getActualUpdatedUserProfileMessage(function (actualMessage) {
                browser.assert.equal(actualMessage, messageProfileUpdated);
            });
            dashboard.goToPage('Edit User Profile');
            userProfile.getActualValue('Actual First Name', function (actualFirstName) {
                browser.assert.equal(actualFirstName, firstName);
            });
            userProfile.getActualValue('Actual Last Name', function (actualLastName) {
                browser.assert.equal(actualLastName, lastName);
            });
            userProfile.getActualValue('Actual Nick Name', function (actualNickName) {
                browser.assert.equal(actualNickName, nickName);
            });
            userProfile.getActualValue('Actual Website', function (actualLinkWebsite) {
                browser.assert.equal(actualLinkWebsite, linkWebsite);
            });
            userProfile.getActualValue('Actual Description', function (actualDescription) {
                browser.assert.equal(actualDescription, description);
            });
            done();
        });
    }
};