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
            checkContainsText(element, expectedContain) {
                return this
                    .assert.containsText('@' + element, expectedContain)
            },
            checkSelectedOption(element) {
                return this
                    .assert.attributeEquals('@' + element, "checked", 'true');
            },
            checkContainsValue(element, expectedValue) {
                return this.useCss().getValue('@' + element, function (result) {
                    this.assert.equal(result.value, expectedValue);
                });
            },
            uncheckedCheckbox() {
                return this
                    .click('@checkboxRichEditing')
                    .click('@checkboxSyntaxHightlight')
                    .click('@checkboxCommentShortcut')
                    .click('@checkboxShowToolBar')
                    .click('@inputUpdateProfile');
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