var addMedia, dashboard, login, username, password, imageName = 'girl';
var image = '../../../images/girl.jpg';
module.exports = {
    tags: ['add-media'],
    before:  function(browser){
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addMedia = browser.page.adminMediaAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that admin can add new image': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Media');
            addMedia.addNewMedia(image);
            addMedia.getTitleImage(function (actualImageName) {
                    browser.assert.equal(actualImageName, imageName);
                });
            addMedia.deleteImage();
            done();
        });
    }
}