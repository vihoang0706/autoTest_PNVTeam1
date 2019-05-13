const util = require("util");
var linkHidden = "//span[@class='%s']/a[ancestor::td//a[text()='%s']]";
var linkHidden = "";
var linkHidden = "";
var linkHidden = "";
var linkHidden = "";
module.exports = {
    commands: [{
        addNewTag(tagName, slugName, description) {
            this
                .setValue('@inputTagName', tagName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@inputAddNewTag');
        },
        formatElement(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        getColumnValueActual(type, nameTag, callback) {
            var formatColumnActualTitle = this.formatElement('@columnActualTitle', nameTag);
            var formatColumnActualSlug = this.formatElement('@columnActualSlug', nameTag);
            var formatColumnActualDescription = this.formatElement('@columnActualDescription', nameTag);
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
        clickLink(elementContainHideLink, hideLink, nameTag) {
            this
                .waitForElementVisible(this.formatElement(elementContainHideLink, nameTag))
                .moveToElement(this.formatElement(elementContainHideLink, nameTag), 0, 0)
                .waitForElementVisible(this.formatElement(hideLink, nameTag))
                .click(this.formatElement(hideLink, nameTag));
        },
        goToAction(action, nameTag) {
            switch (action) {
                case 'Edit':
                    this.clickLink('@columnActualTitle', '@linkEdit', nameTag);
                    break;
                case 'Delete':
                    this.clickLink('@columnActualTitle', '@linkDelete', nameTag);
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
        linkDelete: {
            selector: '//span[@class="delete"]/a[ancestor::td//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        linkEdit: {
            selector: '//span[@class="edit"]/a[ancestor::td//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        columnActualTitle: {
            selector: '//td[@class="name column-name has-row-actions column-primary"]/strong/a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        columnActualDescription: {
            selector: '//td[@class="description column-description"]/p[ancestor::tr//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        columnActualSlug: {
            selector: '//td[@class="slug column-slug" and ancestor::tr//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        }
    }
};