const util = require("util");
var linkHidden = "//span[@class='%s']/a[ancestor::td//a[text()='%s']]";
var columnActualTitle = "//td[@class='name column-name has-row-actions column-primary']/strong/a[text()='%s']";
var columnActualDescription = "//td[@class='description column-description']/p[ancestor::tr//a[text()='%s']]";
var columnActualSlug = "//td[@class='slug column-slug' and ancestor::tr//a[text()='%s']]";
module.exports = {
    commands: [{
        addNewTag(tagName, slugName, description) {
            this
                .setValue('@inputTagName', tagName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@inputAddNewTag');
        },
        getColumnValueActual(type, nameTag, callback) {
            var formatColumnActualTitle = util.format(columnActualTitle, nameTag);
            var formatColumnActualSlug = util.format(columnActualSlug, nameTag);
            var formatColumnActualDescription = util.format(columnActualDescription, nameTag);
            switch (type) {
                case "Actual Title":
                    this
                        .waitForElementVisible(formatColumnActualTitle)
                        .getContainText(formatColumnActualTitle, callback);
                    break;
                case "Actual Slug":
                    this
                        .waitForElementVisible(formatColumnActualSlug)
                        .getContainText(formatColumnActualSlug, callback);
                    break;
                case "Actual Description":
                    this
                        .waitForElementVisible(formatColumnActualDescription)
                        .getContainText(formatColumnActualDescription, callback);
                    break;
            }
        },
        clickLink(elementContainHideLink, linkHidden, action, nameTag) {
            this
                .waitForElementVisible(util.format(elementContainHideLink, nameTag))
                .moveToElement(util.format(elementContainHideLink, nameTag), 0, 0)
                .waitForElementVisible(util.format(linkHidden, action, nameTag))
                .click(util.format(linkHidden, action, nameTag));
        },
        goToAction(action, nameTag) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnActualTitle, linkHidden, 'edit', nameTag);
                    break;
                case 'Delete':
                    this.clickLink(columnActualTitle, linkHidden, 'delete', nameTag);
                    this.api.acceptAlert();
                    break;
            }
        },
    }],
    elements: {
        inputTagName: 'input[id=tag-name]',
        inputSlugName: 'input[id=tag-slug]',
        inputDescription: 'textarea[id=tag-description]',
        inputAddNewTag: 'input[id=submit]',
    }
};