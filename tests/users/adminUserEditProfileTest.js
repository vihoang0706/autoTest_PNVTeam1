const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const linkWebsite = 'http://pnvteam1.com';
const messageProfileUpdated = 'Profile updated.';
var userProfile, dashboard;
module.exports = {
    '@tags': 'edit-user-profile',
    'Verify that Admin can edit user profile successfully': function (browser) {
        dashboard = browser.page.adminBasePage();
        userProfile = browser.page.adminUserEditProfilePage();
        dashboard.goToPage('Edit User Profile');
        userProfile.setDefaultValue();
        dashboard.goToPage('Edit User Profile');
        userProfile.updateUserProfile(firstName, lastName, nickName, linkWebsite, description);
        userProfile.IsElementSelected(function (result) {
            browser.assert.equal(result, true);
        });
        userProfile.getValueActual('Success Message', function (actualMessage) {
            browser.assert.equal(actualMessage, messageProfileUpdated);
        });
        dashboard.goToPage('Edit User Profile');
        userProfile.getValueActual('Actual First Name', function (actualFirstName) {
            browser.assert.equal(actualFirstName, firstName);
        });
        userProfile.getValueActual('Actual Last Name', function (actualLastName) {
            browser.assert.equal(actualLastName, lastName);
        });
        userProfile.getValueActual('Actual Nick Name', function (actualNickName) {
            browser.assert.equal(actualNickName, nickName);
        });
        userProfile.getValueActual('Actual Website', function (actualLinkWebsite) {
            browser.assert.equal(actualLinkWebsite, linkWebsite);
        });
        userProfile.getValueActual('Actual Description', function (actualDescription) {
            browser.assert.equal(actualDescription, description);
        });
    },
};