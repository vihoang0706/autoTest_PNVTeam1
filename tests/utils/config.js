module.exports = function (browser) {
    this.openBrowser = function () {
        return browser
            .maximizeWindow()
            .url(browser.globals.url.siteURL);
    };
    return this;
}