module.exports = function (browser) {
    this.openBrowser = function(){
        browser
            .maximizeWindow()
            .url('http://localhost/PNVTeam1/team1_theme2/wordpress/wp-admin/')
            .waitForElementNotPresent('body',1000);
        return browser;
    };
    this.selectMainMenu= function(xpath){
        browser
            .click(xpath)
            .waitForElementNotPresent('body',1000);
    };
    this.backhome = function() {
      browser
      .click('#wp-admin-bar-site-name > a')
      .waitForElementVisible('body', 1000)
      return browser;
    };
    this.windowHandle= function() {
      browser
      .window_handles(function(result) {
        var temp = result.value.length;
        console.log("Number of window handles is now " + temp);         // Since two windows are open we need to get the window ids
        this.switchWindow(result.value[temp - 1]);               // and switch focus to the new window so that the next command is run against it
      });
      return browser;
    };
    return this;
  };