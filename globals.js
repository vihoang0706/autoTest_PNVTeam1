const path = require('path');
var userNames = {
  username: 'admin',
  password: '123456789',
};
module.exports = {
  asyncHookTimeout: 10000,
  abortOnAssertionFailure : false,
  waitForConditionPollInterval : 300,
  waitForConditionTimeout : 10000,
  retryAssertionTimeout: 5000,
  userNames: userNames,
  paths: {
    data: path.resolve(__dirname, './data/data.csv')
  },
  beforeEach: function (browser, done) {
    browser
      .maximizeWindow()
      .url('http://192.168.189.70/wordpress/wp-login.php');
    browser.perform(function () {
      done();
    });
  },
  afterEach: function (browser, done) {
    browser.end(function () {
      done();
    });
  },
};
