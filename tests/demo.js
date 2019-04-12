const login1 = require('../pages/utils/setUp');
module.exports = {
    '@tags': ['login1'],
    'Demo': function(browser){
        login1.openBrowser(browser);
        browser.useXpath();
        login1.selectMainMenu(browser,'//li/a[contains(text(),"Tiếng Anh")]');
    }
}