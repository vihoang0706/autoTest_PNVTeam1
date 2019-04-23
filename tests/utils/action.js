module.exports = function (browser) {
    this.checkContainsText = function (element, expectedContain) {
        return browser
            .useXpath()
            .assert.containsText(element, expectedContain);
    };
    return this;
}
