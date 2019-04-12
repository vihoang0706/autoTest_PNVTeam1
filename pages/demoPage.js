module.exports = function (browser) {
    
    this.goToSite = function () {
      browser
        .windowMaximize()
        .url('http://localhost/team1_theme2/wordpress/wp-login.php')
        .assert.title("Dashboard ‹ Store Front Website — WordPress")
      return browser;
    };
    this.logout = function () {
      browser
      .useXpath()
      .click("//div[@id='logged-account']/a")
      .click("//div[@class='dropdown-menu p-0 show']/a[contains(text(),'Đăng xuất')]")
      return browser;
    };
    return this;
  };
  