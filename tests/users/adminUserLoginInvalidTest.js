const csvjson = require('csvtojson');
module.exports = {
    '@tags': 'invalid-login',
    'Verify that user can not login with invalid account': async browser => {
        const datas = await csvjson().fromFile(browser.globals.paths.data);
        const login = browser.page.adminUserLoginPage();
        browser.url('http://192.168.189.70/wordpress/wp-login.php');
        for (let [index, data] of datas.entries()) {
            login.login(data.username, data.password);
            login.getErrorMessage(function (atualErrorMessage) {
                browser.assert.equal(atualErrorMessage, data.errorMessage);
            });
        }
    }
}