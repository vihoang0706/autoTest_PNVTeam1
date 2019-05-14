const util = require("util");
var linkHidden = "//span[@class='%s']/a[ancestor::td//a[text()='%s']]";
var columnActualTitle = "//td[@class='name column-name has-row-actions column-primary']/strong/a[text()='%s']";
var columnActualDescription = "//td[@class='description column-description']/p[ancestor::tr//a[text()='%s']]";
var columnActualSlug = "//td[@class='slug column-slug' and ancestor::tr//a[text()='%s']]";
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
        getColumnValueActual(type, categoryName, callback) {
            var formatColumnActualTitle = util.format(columnActualTitle, categoryName);
            var formatColumnActualSlug = util.format(columnActualSlug, categoryName);
            var formatColumnActualDescription = util.format(columnActualDescription, categoryName);
            switch (type) {
                case "Actual Title":
                    this
                        .useXpath()
                        .waitForElementVisible(formatColumnActualTitle)
                        .getContainText(formatColumnActualTitle, callback);
                    break;
                case "Actual Slug":
                    this
                        .useXpath()
                        .waitForElementVisible(formatColumnActualSlug)
                        .getContainText(formatColumnActualSlug, callback);
                    break;
                case "Actual Description":
                    this
                        .useXpath()
                        .waitForElementVisible(formatColumnActualDescription)
                        .getContainText(formatColumnActualDescription, callback);
                    break;
            }
        },
        clickLink(elementContainHideLink, linkHidden, action, categoryName) {
            this
                .useXpath()
                .waitForElementVisible(util.format(elementContainHideLink, categoryName))
                .moveToElement(util.format(elementContainHideLink, categoryName), 0, 0)
                .waitForElementVisible(util.format(linkHidden, action, categoryName))
                .click(util.format(linkHidden, action, categoryName));
        },
        goToAction(action, categoryName) {
            switch (action) {
                case 'Edit':
                    this.clickLink(columnActualTitle, linkHidden, 'edit', categoryName);
                    break;
                case 'Delete':
                    this.clickLink(columnActualTitle, linkHidden, 'delete', categoryName);
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
    }
};