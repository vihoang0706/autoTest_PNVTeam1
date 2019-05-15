load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/post/postPage.js");
load("../../../page-objects/galen/dashboard/dashboard.js");
testOnAllDevices("Verify that post page displays correctly ", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    loginPage = new LoginPage(driver).waitForIt();
    loginPage.loginAs('admin', '123456789');
    dashboardPage = new DashboardPage(driver).waitForIt();
    dashboardPage.goToPage('Add Post');
    postPage = new PostPage(driver).waitForIt();
    postPage.dissmissTip();
    checkLayout(driver, "specs/post/postPage.gspec", device.tags);
});