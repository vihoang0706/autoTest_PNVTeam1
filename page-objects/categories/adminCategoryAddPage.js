const util = require("util");
module.exports = {
    commands: [{
        addNewCategory(name, slug, parent, description) {
            this
                .setValue('@inputName', name)
                .setValue('@inputSlug', slug)
                .setValue('@selectParent', parent)
                .setValue('@textareaDescription', description)
                .click('@inputAddCategory');
        },


        formatElement(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },

        
        getColumnValueActual(type, categoryName, callback) {
            var formatColumnActualTitle = this.formatElement('@columnActualTitle', categoryName);
            var formatColumnActualSlug = this.formatElement('@columnActualSlug', categoryName);
            var formatColumnActualDescription = this.formatElement('@columnActualDescription', categoryName);
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
        clickLink(elementContainHideLink, hideLink, categoryName) {
            this
                .waitForElementVisible(this.formatElement(elementContainHideLink, categoryName))
                .moveToElement(this.formatElement(elementContainHideLink, categoryName), 0, 0)
                .waitForElementVisible(this.formatElement(hideLink, categoryName))
                .click(this.formatElement(hideLink, categoryName));
        },
        goToAction(action, categoryName) {
            switch (action) {
                case 'Edit':
                    this.clickLink('@columnActualTitle', '@linkEdit', categoryName);
                    break;
                case 'Delete':
                    this.clickLink('@columnActualTitle', '@linkDelete', categoryName);
                    this.api.acceptAlert();
                    break;
            }
        }
    }],
    elements: {
        inputName: 'input[id=tag-name]',
        inputSlug: 'input[id=tag-slug]',
        selectParent: 'select[id=parent]',
        textareaDescription: 'textarea[id=tag-description]',
        inputAddCategory: 'input[id=submit]',

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