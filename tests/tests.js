module.exports = {
    'my test': function (browser) {
        login = browser.page.adminUserLoginPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        var dashboard = browser.page.adminBasePage();
        dashboard.goToPage('demo','demo1');
        // dashboard.goToPage(dashboard.el('@linkMainMenu', 'Posts'),dashboard.el('@linkSubMenuPosts', 'All Posts'));
        
    }
}