const url = require('../pages/utils/setUp');
require('./adminNewPostTest');

module.exports = {
    tags :['editPost'],
    before: function (browser) {
        url.openBrowser(browser);
        const login = browser.page.adminLoginPage();
        login
            .fillInLoginForm('TaoNguyen','thientrieuquoc01247')
            .assert.title('Dashboard ‹ Auto — WordPress')
    },
    'Navigate link post': function (browser)  {
        const post = browser.page.adminPostPage();
        post 
            .navigateMenuItem()
    },
    
}