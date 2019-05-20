load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");

testOnAllDevices(devices, "/wp-login.php", function (driver, device) {
    var loginPage = null;
    var dashboardPage = null;
    
    logged("Basic layout dashboard check", function(){
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.login('admin', '123456789');
        dashboardPage = new DashboardPage(driver);
        checkLayout(driver, "specs/dashboard/dashboardPage.gspec", device.tags);
        dashboardPage.goToNavigation();
        dashboardPage.goToPage('Tag');
    })
});