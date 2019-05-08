const util = require('util');
module.exports = {
    commands: [{
        formatElement(elementName,data) {
            var element = this.elements[elementName.slice(1)];
              return util.format(element.selector, data);
        },
        goToDetailPage(idPage) {
            var self = this;
            this.click(self.formatElement('@columnActualTitle', idPage));
        },
        deletePage(idPage) {
            var self = this;
            var formatColumnActualTitle = self.formatElement('@columnActualTitle', idPage);
            var formatLinkDelete = self.formatElement('@linkDelete', idPage);
            this
                .waitForElementVisible(formatColumnActualTitle)
                .moveToElement(formatColumnActualTitle, 0, 0)
                .waitForElementVisible(formatLinkDelete)
                .click(formatLinkDelete);
        }
    }],
    elements: {
        columnActualTitle: {
            selector: '//strong/a[ancestor::tr[@id="post-' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        linkDelete: {
            selector: '//span[@class="trash"]/a[ancestor::tr[@id="post-' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
    }
};