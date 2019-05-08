const nameTitle = 'Hello summer';
const expectedMessage = 'Page published.\nView Page';
const description = 'I like swimming on the beach.';
var dashboard, viewAllPage, page, login, username, password, pageID;
module.exports = {
    '@tags': ['add-page'],
    'Verify that admin can add new page with valid data successfully': function (browser) {
        login = browser.page.adminUserLoginPage();
        page = browser.page.adminPageAddPage();
        dashboard = browser.page.adminBasePage();
        viewAllPage = browser.page.adminPageViewAllPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('Add New Page');
        page.addNewPage(nameTitle, description);
        // browser.pause(2000);
        page.getActualMessageValue(function (actualMessage) {
            browser.assert.equal(actualMessage, expectedMessage);
        });
        browser.getID(function(id){
            pageID = id;
        }).perform(function(browser, done){
            dashboard.goToPage('Manage Page');
            viewAllPage.goToDetailPage(pageID);
            console.log("Test globals:"+pageID);
            page.getColumActual('Actual Title', function (actualTitle) {
                browser.assert.equal(actualTitle, nameTitle);
            });
            page.getColumActual('Actual Description', function (actualDescription) {
                browser.assert.equal(actualDescription, description);
            });
            dashboard.goToPage('Manage Page');
            viewAllPage.deletePage(pageID);
            done();
        });
    }
};