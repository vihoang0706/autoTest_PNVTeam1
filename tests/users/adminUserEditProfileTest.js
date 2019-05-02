const firstName = 'Hoàng';
const lastName = 'Vi';
const nickName = 'administrator';
const description = 'I am final year student at Passerellesnumeriques Viet Nam, with major is Testing and Software Development';
const linkWebsite = 'http://pnvteam1.com';
const messageProfileUpdated = 'Profile updated.';
var userProfile, dashboard, login, username, password;
module.exports = {
    '@tags': 'edit-user-profile',
    'Step 1: Login with valid account and Unchecked all checkboxs': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        userProfile = browser.page.adminUserEditProfilePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToActionUser('linkEditProfile');
        userProfile.uncheckedCheckbox();
    },
    'Step 2: Go to Edit Profile page': function () {
        dashboard.goToActionUser('linkEditProfile');
    },
    'Step 3: Edit user profile with valid data': function (browser) {
        userProfile.updateUserProfile(firstName, lastName, nickName, linkWebsite, description);
        userProfile.getElementIsSelected('checkboxRichEditing',function(result){
            browser.assert.equal(result,'true');
        });
        userProfile.getElementIsSelected('checkboxSyntaxHightlight',function(result){
            browser.assert.equal(result,'true');
        });
        userProfile.getElementIsSelected('radioAdminColor',function(result){
            browser.assert.equal(result,'true');
        });
        userProfile.getElementIsSelected('checkboxCommentShortcut',function(result){
            browser.assert.equal(result,'true');
        });
        userProfile.getElementIsSelected('checkboxShowToolBar',function(result){
            browser.assert.equal(result,'true');
        });
        userProfile.getContainsText('strongMessProfileUpdated',function(actualMessage){
            browser.assert.equal(actualMessage,messageProfileUpdated);
        });
        dashboard.goToActionUser('linkViewUserInfor');
        userProfile.getContainsValue('inputEditFirstName',function(actualFirstName){
            browser.assert.equal(actualFirstName,firstName);
        });
        userProfile.getContainsValue('inputEditLastName',function(actualLastName){
            browser.assert.equal(actualLastName,lastName);
        });
        userProfile.getContainsValue('inputEditNickName',function(actualNickName){
            browser.assert.equal(actualNickName,nickName);
        });
        userProfile.getContainsValue('inputEditWebsite',function(actualLinkWebsite){
            browser.assert.equal(actualLinkWebsite,linkWebsite);
        });
        userProfile.getContainsValue('inputEditDescription',function(actualDescription){
            browser.assert.equal(actualDescription,description);
        });
    },
};