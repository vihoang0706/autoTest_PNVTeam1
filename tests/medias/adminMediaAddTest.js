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

        dashboard.goToPage('linkMedia', 'linkAddNewMedia');

        addMedia
            .addNewMedia(image)
            .getContainText('image', function(actualImageName){
                browser.assert.equal(actualImageName, imageName)
            });

        addMedia.goToHideLink('linkDeleteImage');
        browser.acceptAlert();
    }
}