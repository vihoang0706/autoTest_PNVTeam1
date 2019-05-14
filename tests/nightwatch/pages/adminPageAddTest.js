const nameTitle = 'Hello summer';
const expectedMessage = 'Page published.\nView Page';
const description = 'I like swimming on the beach.';
var dashboardPage, viewAllPage, addPage, loginPage, username, password, pageID;
module.exports = {
    '@tags': ['add-page'],
    before: (browser) => {
        loginPage = browser.page.adminUserLoginPage();
        addPage = browser.page.adminPageAddPage();
        dashboardPage = browser.page.adminBasePage();
        viewAllPage = browser.page.adminPageViewAllPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        loginPage.login(username, password);
    },
    'Verify that admin can add new page with valid data successfully': (browser) => {
        browser.perform(function (browser, done) {
            dashboardPage.goToPage('Add New Page');
            addPage.addNewPage(nameTitle, description);
            addPage.getActualAddPageMessage(function (actualMessage) {
                browser.assert.equal(actualMessage, expectedMessage);
            });
            browser.getID(function (id) {
                pageID = id;
            }).perform(function (browser, done) {
                dashboardPage.goToPage('Manage Page');
                viewAllPage.goToDetailPage(pageID);
                console.log("Test globals:" + pageID);
                addPage.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                addPage.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, description);
                });
                dashboardPage.goToPage('Manage Page');
                viewAllPage.deletePage(pageID);
                done();
            });
            done();
        });
    }
};