let addMedia, dashboard, login, username, password, imageName = 1234, extension = '.jpg';
let image = 'C:/Users/InternDN19.01.05/'+imageName+extension;
module.exports = {
    tags: ['addMediaFunction'],

    before: function (browser) {
        login = browser.page.adminUserLoginPage();
        dashboard = browser.page.adminBasePage();
        addMedia = browser.page.adminMediaAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;

        utils.openBrowser(browser);
        login.login(username, password);
    },

    'Step 1: Go to media page ': function () {
        dashboard.goToPage('@linkMedia', '@linkAddNewMedia')
    },

    'Step 2: Add media': function () {
        addMedia
            .addNewMedia(image)
            .checkCorrectImage('image', imageName)
    },

    after: function (browser) {
        addMedia
            .clickHideLine('@linkDeleteImage')
        browser
            .pause(1000)
            .acceptAlert()
            .end()
    }

}