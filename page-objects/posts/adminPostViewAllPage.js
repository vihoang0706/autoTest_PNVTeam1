const util = require('util');
var columnActualTitle = "//strong/a[ancestor::tr[@id='post-%s']]";
var linkHidden = "//span[@class='%s']/a[ancestor::tr[@id='post-%s']]";
module.exports = {
    commands: [{
        goToDetailPost(idPost) {
            this.click(util.format(columnActualTitle, idPost));
        },
        clickLink(elementContainHideLink, hideLink, action, idPost) {
            this
                .waitForElementVisible(util.format(elementContainHideLink, idPost))
                .moveToElement(util.format(elementContainHideLink, idPost), 0, 0)
                .waitForElementVisible(util.format(hideLink, action, idPost))
                .click(util.format(hideLink, action, idPost));
        },
        goToAction(action, idPost) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnActualTitle, linkHidden, 'edit',  idPost);
                    break;
                case 'Delete':
                    this.clickLink(columnActualTitle, linkHidden, 'trash', idPost);
                    break;
            }
        }
    }],
};