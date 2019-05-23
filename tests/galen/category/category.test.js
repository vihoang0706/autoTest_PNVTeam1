load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");

testOnAllDevices("Category", "/wp-login.php", function (driver, device) {
    var loginPage  = null;
    var dashboardPage = null;

    logged("Verify that the category page have enough elements", function () {
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.login('admin', '123456789');
        dashboardPage = new DashboardPage(driver);
        dashboardPage.goToNavigation();
        dashboardPage.goToPage("Category");
        checkLayout(driver, "specs/category/categoryPage.gspec", device.tags);
    });
});