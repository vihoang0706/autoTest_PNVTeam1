const nameTitle = 'Hello summer';
const description = 'I like swimming on the beach.';
var dashboard, viewAllPage, page, login, username, password;
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
        dashboard.goToPage('Manage Page');
        viewAllPage.getColumActual('Actual Title', function (actualTitle) {
                browser.assert.equal(actualTitle, nameTitle);
            });
        viewAllPage.goToDetailPage();
        page.getColumActual('Actual Title', function (actualTitle) {
                browser.assert.equal(actualTitle, nameTitle);
            });
        page.getColumActual('Actual Description', function (actualDescription) {
                browser.assert.equal(actualDescription, description);
            });
        dashboard.goToPage('Manage Page');
        viewAllPage.goToActionHideLink('Delete');
        
    }
};