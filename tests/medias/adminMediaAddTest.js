var addMedia, dashboard, login, username, password,imageName = 'girl';
var image = '../../../images/girl.jpg';
module.exports = {
    tags: ['add-media'],
    before: function(browser){
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addMedia = browser.page.adminMediaAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that User Admin is able add new image': function (browser) {
        dashboard.goToPage('Media');
        addMedia
            .addNewMedia(image)
            .getTitleImage(function(actualImageName){
                browser.assert.equal(actualImageName, imageName);
            });
        addMedia.deleteImage();
    }
}