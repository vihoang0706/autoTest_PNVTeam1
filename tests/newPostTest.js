const url = require('../pages/utils/setUp');
module.exports = {
    tags: ['addPostFunction'],

    before: function (browser) {
        const login = browser.page.adminLoginPage();
        login
            .fillInLoginForm(TaoNguyen,'01247thientrieuquoc');
    },

}