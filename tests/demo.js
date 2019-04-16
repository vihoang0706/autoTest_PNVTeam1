<<<<<<< HEAD
const login1 = require('../pages/utils/setUp');
module.exports = {
    '@tags': ['login1'],
    'Demo': function(browser){
        login1.openBrowser(browser);
        browser.useXpath();
        login1.selectMainMenu(browser,'//li/a[contains(text(),"Tiếng Anh")]');
    }
}
=======
// tests.js
var utils = require('../pages/utils/setUp.js')
module.exports = {
  '@tags': ['sampletest'],

  'Open the website': function (browser) {
    utils.openBrowser(browser);
    // login(browser).goToSite();
  },
};
>>>>>>> 349c4495e12ee112c6d905f9e21f738448219ea8
