load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");


testOnAllDevices("Login page", "/wp-login.php", function (driver, device) {

    var loginPage = null;

    logged("Basic layout check", function () {
        loginPage = new LoginPage(driver).load();
        loginPage.login('admin', '12345678');
        // checkLayout(driver, "specs/login/loginPage.gspec", device.tags);
    });
});