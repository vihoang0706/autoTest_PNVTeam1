let addMedia, dashboard, login, username, password, imageName = 1234, extension = '.jpg';
let image = 'C:/Users/InternDN19.01.05/'+imageName+extension;
module.exports = {
    tags: ['addMediaFunction'],
    'Pre-condition: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        addPost = browser.page.adminPostAddPage();
        dashboard = browser.page.adminBasePage();
        addMedia = browser.page.adminMediaAddPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkMedia', 'linkLibrary');
        addMedia.deleteImage()
        browser.acceptAlert()
    },
    'Step 1: Go to media page ': function () {
        dashboard.goToPage('linkMedia', 'linkAddNewMedia')
    },
    'Step 2: Add media': function () {
        addMedia
            .addNewMedia(image)
            .checkImageExist('image', imageName)
    },
}