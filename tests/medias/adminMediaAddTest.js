let addMedia, dashboard, login, username, password,
    imageName = 'tung-son';
let image = '../../../images/tung-son.jpg';
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
    },
    'Step 1: Go to media page ': function () {
        dashboard.goToPage('linkMedia', 'linkAddNewMedia');
    },
    'Step 2: Add media': function () {
        addMedia
            .addNewMedia(image)
            .checkImageExist('image', imageName);
    },
    'Pre-condition: Clear image': function(browser) {
        addMedia.deleteAllImages();
        browser.acceptAlert();
    }
}