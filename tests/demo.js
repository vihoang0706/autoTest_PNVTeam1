module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('body')
        .setValue('input[name=q]', 'nightwatch')
        .pause(1000)
        .assert.containsText('#main', 'Night Watch')
        .end();
    }
  };