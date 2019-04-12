const username = 'admin';
const password = '123456789';
var untils = require('../pages/setUp.js');
module.exports = {
  '@tags': ['login'],
 
  before: function(browser){
    untils(browser).openBrowser();
  },

  after: (browser, done) => {
    browser.end();
    done();
  }
};