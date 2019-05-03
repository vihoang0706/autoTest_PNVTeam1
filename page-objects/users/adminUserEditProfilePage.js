module.exports = {
    commands: [
        {
            updateUserProfile(firstName, lastName, nickName, linkWebsite, userInfor) {
                return this
                    .click('@checkboxRichEditing')
                    .click('@checkboxSyntaxHightlight')
                    .click('@radioAdminColor')
                    .click('@checkboxCommentShortcut')
                    .click('@checkboxShowToolBar')
                    .clearValue('@inputEditFirstName')
                    .setValue('@inputEditFirstName', firstName)
                    .clearValue('@inputEditLastName')
                    .setValue('@inputEditLastName', lastName)
                    .clearValue('@inputEditNickName')
                    .setValue('@inputEditNickName', nickName)
                    .click('@comboboxDisplayName')
                    .clearValue('@inputEditWebsite')
                    .setValue('@inputEditWebsite', linkWebsite)
                    .clearValue('@inputEditDescription')
                    .setValue('@inputEditDescription', userInfor)
                    .click('@inputUpdateProfile');
            },
            getContainsText(selector, callback) {
                this.getText(selector, function (result) {
                    callback(result.value);
                });
            },
            getValueActual(type, callback) {
                switch (type) {
                    case "Actual First Name":
                        this
                            .waitForElementVisible('@inputEditFirstName')
                            .getContainsValue('@inputEditFirstName', callback);
                        break;
                    case "Actual Last Name":
                        this
                            .waitForElementVisible('@inputEditLastName')
                            .getContainsValue('@inputEditLastName', callback);
                        break;
                    case "Actual Nick Name":
                        this
                            .waitForElementVisible('@inputEditNickName')
                            .getContainsValue('@inputEditNickName', callback);
                        break;
                    case "Actual Description":
                        this
                            .waitForElementVisible('@inputEditDescription')
                            .getContainsValue('@inputEditDescription', callback);
                        break;
                    case "Actual Website":
                        this
                            .waitForElementVisible('@inputEditWebsite')
                            .getContainsValue('@inputEditWebsite', callback);
                        break;
                    case "Success Message":
                        this
                            .waitForElementVisible('@strongMessProfileUpdated')
                            .getContainsText('@strongMessProfileUpdated', callback);
                        break;
                }
            },
            getContainsValue(selector, callback) {
                this.getValue(selector, function (result) {
                    callback(result.value);
                });
            },
            getElementIsSelected(type, selector, callback) {
                var self = this;
                self.api.element(type, selector, function (response) {
                    self.api.elementIdSelected(response.value.ELEMENT, function (result) {
                        if (result.value == true) {
                            callback(result.value);
                        }
                        else callback(result.value);
                    });
                });
            },
            IsElementSelected(callback) {
                this.getElementIsSelected('id', 'rich_editing', callback);
                this.getElementIsSelected('id', 'syntax_highlighting', callback);
                this.getElementIsSelected('id', 'admin_color_fresh', callback);
                this.getElementIsSelected('id', 'comment_shortcuts', callback);
                this.getElementIsSelected('id', 'admin_bar_front', callback);
            },
            setDefaultValue() {
                var self = this;
                self.getElementIsSelected('id', 'rich_editing', function (result) {
                    if (result == true) {
                        self.click('@checkboxRichEditing');
                    }
                });
                self.getElementIsSelected('id', 'syntax_highlighting', function (result) {
                    if (result == true) {
                        self.click('@checkboxSyntaxHightlight');
                    }
                });
                self.getElementIsSelected('id', 'comment_shortcuts', function (result) {
                    if (result == true) {
                        self.click('@checkboxCommentShortcut');
                    }
                });
                self.getElementIsSelected('id', 'admin_bar_front', function (result) {
                    if (result == true) {
                        self.click('@checkboxShowToolBar');
                    }
                });
                self.click('@inputUpdateProfile');
                return self;
            }
        }
    ],
    elements: {
        checkboxRichEditing: 'input[id=rich_editing]',
        checkboxSyntaxHightlight: 'input[id=syntax_highlighting]',
        radioAdminColor: 'input[id=admin_color_fresh]',
        checkboxCommentShortcut: 'input[id=comment_shortcuts]',
        checkboxShowToolBar: 'input[id=admin_bar_front]',
        inputEditFirstName: 'input[id=first_name]',
        inputEditLastName: 'input[id=last_name]',
        inputEditNickName: 'input[id=nickname]',
        inputEditEmail: 'input[id=email]',
        inputEditWebsite: 'input[id=url]',
        inputEditDescription: 'textarea[id=description]',
        inputNewPassword: 'input[id=pass1-text]',
        inputUpdateProfile: 'input[id=submit]',
        comboboxDisplayName: {
            selector: '//select[@id="display_name"]/option[text()="admin"]',
            locateStrategy: 'xpath'
        },
        buttonGeneratePassword: {
            selector: '//tr[@id="password"] //td/button',
            locateStrategy: 'xpath'
        },
        buttonHidePassword: {
            selector: '//tr[@id="password"]//td//div//button[@class="button wp-hide-pw hide-if-no-js"]',
            locateStrategy: 'xpath'
        },
        buttonCancelGeneratePass: {
            selector: '//tr[@id="password"]//td//div//button[@class="button wp-cancel-pw hide-if-no-js"]',
            locateStrategy: 'xpath'
        },
        strongMessProfileUpdated: {
            selector: '//div[@id="message"] // strong',
            locateStrategy: 'xpath'
        }
    }
}