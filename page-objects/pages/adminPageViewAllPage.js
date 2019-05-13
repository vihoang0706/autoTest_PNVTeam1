const util = require('util');
var columnActualTitle = "//strong/a[ancestor::tr[@id='post-%s']]";
var linkDelete = "//span[@class='trash']/a[ancestor::tr[@id='post-%s']]";
module.exports = {
    commands: [{
        goToDetailPage(idPage) {
            this.click(util.format(columnActualTitle, idPage));
        },
        deletePage(idPage) {
            var formatColumnActualTitle = util.format(columnActualTitle, idPage);
            var formatLinkDelete = util.format(linkDelete, idPage);
            this
                .waitForElementVisible(formatColumnActualTitle)
                .moveToElement(formatColumnActualTitle, 0, 0)
                .waitForElementVisible(formatLinkDelete)
                .click(formatLinkDelete);
        }
    }],
};