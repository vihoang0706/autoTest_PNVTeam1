load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/post/postPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");
testOnAllDevices("Login page", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    var dashboardPage = null;
    logged("Basic layout Login check", function(){
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.login('admin', '123456789');
        dashboardPage = new DashboardPage(driver);
        dashboardPage.goToNavigation();
        dashboardPage.goToPage('Add New Post');
    });
});