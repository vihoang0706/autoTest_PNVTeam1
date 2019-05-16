load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/post/postPage.js");
load("../../../page-objects/galen/dashboard/dashboard.js");
testOnDevice("desktop","Post Page", "/wp-login.php", function (driver, device) {
    var loginPage = null;
    var dashboardPage = null;
    var postPage = null;
    logged("Verify that post page displays all elements correctly ", function () {
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.loginAs(TEST_USER.username,TEST_USER.password);
        dashboardPage = new DashboardPage(driver).waitForIt();
        dashboardPage.goToPage('Add Post');
        postPage = new PostPage(driver).waitForIt();
        postPage.dissmissTip();
        checkLayout(driver, "specs/post/postPage.gspec", device.tags);
    });
});