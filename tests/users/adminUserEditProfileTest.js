const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const linkWebsite = 'http://pnvteam1.com';
const messageProfileUpdated = 'Profile updated.';
var editUserProfile, dashboard, login, username, password;
module.exports = {
    '@tags': 'edit-user-profile',
    'Step 1: Login with valid account and Unchecked all checkboxs': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        editUserProfile = browser.page.adminUserEditProfilePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToActionUser('linkEditProfile');
        editUserProfile.uncheckedCheckbox();
    },
    'Step 2: Go to Edit Profile page': function () {
        dashboard.goToActionUser('linkEditProfile');
    },
    'Step 3: Edit user profile with valid data': function (browser) {
        editUserProfile.updateUserProfile(firstName, lastName, nickName, linkWebsite, description);
        editUserProfile.optionIsSelected('checkboxRichEditing',function(result){
            browser.assert.equal(result,'true');
        });
        editUserProfile.optionIsSelected('checkboxSyntaxHightlight',function(result){
            browser.assert.equal(result,'true');
        });
        editUserProfile.optionIsSelected('radioAdminColor',function(result){
            browser.assert.equal(result,'true');
        });
        editUserProfile.optionIsSelected('checkboxCommentShortcut',function(result){
            browser.assert.equal(result,'true');
        });
        editUserProfile.optionIsSelected('checkboxShowToolBar',function(result){
            browser.assert.equal(result,'true');
        });
        editUserProfile.getContainsText('strongMessProfileUpdated',function(result){
            browser.assert.equal(result,messageProfileUpdated);
        });
        dashboard.goToActionUser('linkViewUserInfor');
        editUserProfile.getContainsValue('inputEditFirstName',function(result){
            browser.assert.equal(result,firstName);
        });
        editUserProfile.getContainsValue('inputEditLastName',function(result){
            browser.assert.equal(result,lastName);
        });
        editUserProfile.getContainsValue('inputEditNickName',function(result){
            browser.assert.equal(result,nickName);
        });
        editUserProfile.getContainsValue('inputEditWebsite',function(result){
            browser.assert.equal(result,linkWebsite);
        });
        editUserProfile.getContainsValue('inputEditDescription',function(result){
            browser.assert.equal(result,description);
        });
    },
};