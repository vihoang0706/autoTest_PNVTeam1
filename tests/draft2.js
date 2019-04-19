const loginPage = require("../pages/draft");

module.exports = {
  before: function (browser) {
    loginPage.login(browser);
  }
};