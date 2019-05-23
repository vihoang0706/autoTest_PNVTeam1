load("../init.js");
load("../../../page-objects/galen/login/loginPage.js");
load("../../../page-objects/galen/dashboard/dashboardPage.js");
load("../../../page-objects/galen/category/categoryPage.js");

testOnAllDevices("Category", "/wp-login.php", function (driver, device) {
    var loginPage  = null;
    var dashboardPage = null;

    logged("Verify that the category page have enough elements", function () {
        loginPage = new LoginPage(driver).waitForIt();
        loginPage.login('admin', '123456789');
        dashboardPage = new DashboardPage(driver).waitForIt();
        dashboardPage.goToPage("Category");
        checkLayout(driver, "specs/category/categoryPage.gspec", device.tags);
    });
    
    dumpPage({
        driver: driver,
        name: "Category page",
        spec: "specs/category/categoryPage.gspec",
        exportPath: "dumps/category",
        maxWidth: 200,
        maxHeight: 200,
        onlyImages: false,
        excludedObjects: ["header", "footer"]
    });
});