module.exports = {
    '@tags':['demotest'],
    'Demo test Google' : function (client) {
      client
        .maximizeWindow()
        .url('http://www.google.com')
        .assert.title('Google')
        .end();
    }
  };