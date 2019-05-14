load("../init.js");
load("../../../page-objects/galen/post/postPage.js");
testOnAllDevices("Welcome page", "/", function (driver, device) {
    var loginPage = null;
    loginPage = new LoginPage(driver).waitForIt();
    loginPage.loginAs(TEST_USER.username, TEST_USER.password);
    checkLayout(driver, "specs/post/postPage.gspec", device.tags);
});