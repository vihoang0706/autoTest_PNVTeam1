// tests.js
var login = require('../pages/demoPage.js');
var utils = require('../pages/utils/setUp.js')
module.exports = {
  '@tags': ['sampletest'],

  'Open the website': function (browser) {
    utils.openBrowser(browser);
    // login(browser).goToSite();
  },
};
