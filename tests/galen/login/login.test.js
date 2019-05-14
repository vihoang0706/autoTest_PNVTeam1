load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
testOnAllDevices("Login Page", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    loginPage = new LoginPage(driver).waitForIt();
    loginPage.loginAs(TEST_USER.username, TEST_USER.password);
    checkLayout(driver, "specs/login/loginPage.gspec", device.tags);
});