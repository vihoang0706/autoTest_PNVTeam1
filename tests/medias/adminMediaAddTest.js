var addMedia, dashboard, login, username, password,imageName = 'girl';
var image = '../../../images/girl.jpg';
module.exports = {
    tags: ['add-media'],
    'Pre-condition: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addMedia = browser.page.adminMediaAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkMedia', 'linkLibrary');
    },
    'Step 1: Go to media page ': function () {
        dashboard.goToPage('linkMedia', 'linkAddNewMedia');
    },
    'Step 2: Add media': function (browser) {
        addMedia
            .addNewMedia(image)
            .getContainText('image', function(actualImageName){
                browser.assert.equal(actualImageName, imageName)
            });
    },
    'Pre-condition: Delete image': function (browser) {
        addMedia.goToHideLink('linkDeleteImage');
        browser.acceptAlert();
    }
}