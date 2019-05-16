const util = require("util");
module.exports = {
    commands: [{
        formatElement(elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        getColumnValueActual(type, username, callback) {
            var formatColumnActualUsername = this.formatElement('@columnActualUsername', username);
            var formatColumnActualName = this.formatElement('@columnActualName', username);
            var formatColumnActualEmail = this.formatElement('@columnActualEmail', username);
            var formatColumnActualRole = this.formatElement('@columnActualRole', username);
            switch (type) {
                case "Actual Username":
                    this
                        .waitForElementVisible(formatColumnActualUsername)
                        .getContainText(formatColumnActualUsername, callback);
                    break;
                case "Actual Name":
                    this
                        .waitForElementVisible(formatColumnActualName)
                        .getContainText(formatColumnActualName, callback);
                    break;
                case "Actual Email":
                    this
                        .waitForElementVisible(formatColumnActualEmail)
                        .getContainText(formatColumnActualEmail, callback);
                    break;
                case "Actual Role":
                    this
                        .waitForElementVisible(formatColumnActualRole)
                        .getContainText(formatColumnActualRole, callback);
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
        deleteUser(username) {
            var self = this;
            this.clickLink('@columnActualUsername', '@linkDelete', username);
            self.getAttribute('@inputConfirmDeletion', 'disabled', function (result) {
                if (result.value == "true") {
                    self
                        .click('inputDeleteAllContent')
                        .click('@inputConfirmDeletion');
                } else {
                    self.click('@inputConfirmDeletion');
                }
            })
        }
    }],
    elements: {
        inputConfirmDeletion: 'input[id=submit]',
        inputDeleteAllContent: 'input[id=delete_option0]',
        linkDelete: {
            selector: '//span[@class="delete"]/a[ancestor::td//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        linkEdit: {
            selector: '//span[@class="edit"]/a[ancestor::td//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        columnActualUsername: {
            selector: '//strong/a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        columnActualName: {
            selector: '//td[@class="name column-name" and ancestor::tr//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        columnActualEmail: {
            selector: '//td[@class="email column-email"]/a[ancestor::tr//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        },
        columnActualRole: {
            selector: '//td[@class="role column-role" and ancestor::tr//a[text()="' + '%s' + '"]]',
            locateStrategy: 'xpath'
        }
    }
}