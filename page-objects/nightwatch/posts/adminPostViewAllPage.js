const util = require('util');
module.exports = {
    commands: [{
        formatElement(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        goToDetailPost(idPost) {
            this.click(this.formatElement('@columnActualTitle', idPost));
        },
        clickLink(elementContainHideLink, hideLink, idPost) {
            this
                .waitForElementVisible(this.formatElement(elementContainHideLink, idPost))
                .moveToElement(this.formatElement(elementContainHideLink, idPost), 0, 0)
                .waitForElementVisible(this.formatElement(hideLink, idPost))
                .click(this.formatElement(hideLink, idPost));
        },
        goToAction(action, idPost) {
            switch (action) {
                case 'Edit':
                    this.clickLink('@columnActualTitle', '@linkEditPost', idPost);
                    break;
                case 'Delete':
                    this.clickLink('@columnActualTitle', '@linkDeletePost', idPost);
                    break;
            }
        }
    }],
    elements: {
        columnActualTitle: {
            selector: '//strong/a[ancestor::tr[@id="post-' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        linkEditPost: {
            selector: '//span[@class="edit"]/a[ancestor::tr[@id="post-' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        linkDeletePost: {
            selector: '//span[@class="trash"]/a[ancestor::tr[@id="post-' + '%s' + '"]]',
            locateStrategy: 'xpath'
        }
    }
};