const util = require('util');
var columnActualTitle = "//strong/a[ancestor::tr[@id='post-%s']]";
var linkHidden = "//span[@class='%s']/a[ancestor::tr[@id='post-%s']]";
module.exports = {
    commands: [{
        goToDetailPage(idPage) {
            this.click(util.format(columnActualTitle, idPage));
        },
        clickLink(elementContainHideLink, hideLink, action, idPage) {
            this
                .waitForElementVisible(util.format(elementContainHideLink, idPage))
                .moveToElement(util.format(elementContainHideLink, idPage), 0, 0)
                .waitForElementVisible(util.format(hideLink, action, idPage))
                .click(util.format(hideLink, action, idPage));
        },
        goToAction(action, idPage) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnActualTitle, linkHidden, 'edit', idPage);
                    break;
                case 'Delete':
                    this.clickLink(columnActualTitle, linkHidden, 'trash', idPage);
                    break;
            }
        },
    }],
};