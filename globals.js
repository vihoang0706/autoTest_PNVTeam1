var userNames = {
  username: 'admin',
  password: '123456789',
};
module.exports = {
  //  default the done invocation timeout is 
  // set to 10 seconds (2 seconds for unit tests)
  //  controls the timeout value for async hooks.
  //  Expects the done() callback to be invoked within this time
  asyncHookTimeout: 10000,
  userNames: userNames,
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
