const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const website = 'http://pnvteam1.com';
const messageProfileUpdated = 'Profile updated.';
var editUserProfile, dashboard, login, username, password;
module.exports = {
    '@tags': 'edit-user-profile',
    'Step 1: Login with valid account and Unchecked all checkboxs': function (browser) {
        login = browser.page.adminUserLoginPage();
        editUserProfile = browser.page.adminUserEditProfilePage();
        dashboard = browser.page.adminBasePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToActionUser('linkEditProfile');
        editUserProfile.uncheckedCheckbox();
    },
    'Step 2: Go to Edit Profile page': function () {
        dashboard.goToActionUser('linkEditProfile');
    },
    'Step 3: Edit user profile with valid data': function () {
        editUserProfile
            .updateUserProfile(firstName, lastName, nickName, website, description)
            .checkContainsText('strongMessProfileUpdated', messageProfileUpdated);
        dashboard.goToActionUser('linkViewUserInfor');
        editUserProfile
            .checkSelectedOption('checkboxRichEditing')
            .checkSelectedOption('checkboxSyntaxHightlight')
            .checkSelectedOption('radioAdminColor')
            .checkSelectedOption('checkboxCommentShortcut')
            .checkSelectedOption('checkboxShowToolBar')
            .checkContainsText('comboboxDisplayName', 'admin')
            .checkContainsValue('inputEditFirstName', firstName)
            .checkContainsValue('inputEditLastName', lastName)
            .checkContainsValue('inputEditNickName', nickName)
            .checkContainsValue('inputEditWebsite', website)
            .checkContainsValue('inputEditDescription', description);
    },
};