const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const website = 'http://pnvteam1.com';
var editUserProfile, dashboard;
module.exports = {
    '@tags': 'edit-user-profile',
    'Step 1: Login with valid account and Unchecked checkbox on edit user profile page': function (browser) {
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard = browser.page.adminBasePage();
        dashboard.goToActionUser('linkEditProfile');
        editUserProfile = browser.page.adminUserEditProfilePage();
        editUserProfile.uncheckedCheckbox();
    },
    'Step 2: Go to Edit Profile page': function () {
        dashboard.goToActionUser('linkEditProfile');
    },
    'Step 3: Edit user profile with valid data': function () {
        editUserProfile
            .updateUserProfile(firstName, lastName, nickName, website, description)
            .checkContainsText('messageProfileUpdated', 'Profile updated.');
    },
    'Step 4: Go to Admin page and Check information has just edited that displays correctly ': function () {
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