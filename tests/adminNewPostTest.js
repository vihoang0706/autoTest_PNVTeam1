const url = require('../pages/utils/setUp');
module.exports = {
    tags :['addPostFunction'],

    before: function (browser) {
        url.openBrowser(browser);
        const login = browser.page.adminLoginPage();
        login
            .fillInLoginForm('TaoNguyen','thientrieuquoc01247')
            .assert.title('Dashboard ‹ Auto — WordPress')
    },

    
};

