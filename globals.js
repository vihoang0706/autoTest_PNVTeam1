var userNames = {
    username:'admin',
    password:'123456789',
};
var urls = {
    siteURL: 'http://192.168.189.70/wordpress/wp-login.php',
}
module.exports = {
  userNames: userNames,
  url:urls,
  beforeEach: function(browser, done) { 
    browser
          .maximizeWindow()
          .url('http://192.168.189.70/wordpress/wp-login.php')
          .perform(function() {
                done();
          });
  },
  afterEach: function (browser) {
    browser
          .end()
          .perform(function() {
            done();
          });
  }
}
