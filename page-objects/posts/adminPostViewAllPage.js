const util = require('util');
module.exports = {
    commands: [{
        formatElement(elementName,data) {
            var element = this.elements[elementName.slice(1)];
              return util.format(element.selector, data);
        },
        goToDetailPost(idPost) {
            var self = this;
            this.click(self.formatElement('@columnActualTitle', idPost));
        },
        clickLink(elementContainHideLink, hideLink, idPost) {
            var self = this;
            this
                .waitForElementVisible(self.formatElement(elementContainHideLink, idPost))
                .moveToElement(self.formatElement(elementContainHideLink, idPost), 0, 0)
                .waitForElementVisible(self.formatElement(hideLink, idPost))
                .click(self.formatElement(hideLink, idPost));
        },
        goToActionHiddenLink(action, idPost) {
            switch(action) {
                case 'Edit' : 
                    this.clickLink('@columnActualTitle','@linkEditPost', idPost);
                break;
                case 'Delete' :
                    this.clickLink('@columnActualTitle', '@linkDeletePost', idPost);
                break;
            }
        }
    }],
    elements: {
        columnActualTitle: {
            selector: '//strong/a[ancestor::tr[@id="post-'+'%s'+'"]]',
            locateStrategy: 'xpath'
        },
        linkEditPost: {
            selector: '//span[@class="edit"]/a[ancestor::tr[@id="post-'+'%s'+'"]]',
            locateStrategy: 'xpath'
        },
        linkDeletePost: {
            selector: '//span[@class="trash"]/a[ancestor::tr[@id="post-'+'%s'+'"]]',
            locateStrategy: 'xpath'
        }
    }
};