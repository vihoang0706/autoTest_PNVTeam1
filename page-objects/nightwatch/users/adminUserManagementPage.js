const util = require("util");
var linkHidden = "//span[@class='delete']/a[ancestor::td//a[text()='%s']]";
var columnActualUsername = "//strong/a[text()='%s']";
var columnActualName = "//td[@class='name column-name' and ancestor::tr//a[text()='%s']]";
var columnActualEmail = "//td[@class='email column-email']/a[ancestor::tr//a[text()='%s']]";
var columnActualRole = "//td[@class='role column-role' and ancestor::tr//a[text()='%s']]";
module.exports = {
    commands: [{
        getColumnValueActual(type, username, callback) {
            var formatColumnActualUsername = util.format(columnActualUsername, username);
            var formatColumnActualName = util.format(columnActualName, username);
            var formatColumnActualEmail = util.format(columnActualEmail, username);
            var formatColumnActualRole = util.format(columnActualRole, username);
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
        clickLink(elementContainHideLink, linkHidden, nameTag) {
            this
                .waitForElementVisible(util.format(elementContainHideLink, nameTag))
                .moveToElement(util.format(elementContainHideLink, nameTag), 0, 0)
                .waitForElementVisible(util.format(linkHidden, nameTag))
                .click(util.format(linkHidden, nameTag));
        },
        deleteUser(username) {
            var self = this;
            this.clickLink(columnActualUsername, linkHidden, username);
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
    }
}