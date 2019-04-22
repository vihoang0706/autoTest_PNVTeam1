module.exports = {
    commands: [
        {
            updateUserProfile(firstName, lastName, nickName, website, userInfor) {
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
                    .setValue('@inputEditWebsite', website)
                    .clearValue('@inputEditDescription')
                    .setValue('@inputEditDescription', userInfor)
                    .click('@buttonUpdateProfile');
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
                    .click('@buttonUpdateProfile');
            }
        }
    ],
    elements: {
        checkboxRichEditing: '#rich_editing',
        checkboxSyntaxHightlight: '#syntax_highlighting',
        radioAdminColor: {
            selector: '//div[@class="color-option selected"]/input[@id="admin_color_fresh"]',
            locateStrategy: 'xpath'
        },
        checkboxCommentShortcut: '#comment_shortcuts',
        checkboxShowToolBar: '#admin_bar_front',
        inputEditFirstName: 'input[name="first_name"]',
        inputEditLastName: 'input[name="last_name"]',
        inputEditNickName: '#nickname',
        comboboxDisplayName: '#display_name',
        inputEditEmail: '#email',
        inputEditWebsite: '#url',
        inputEditDescription: '#description',
        buttonGeneratePassword: {
            selector: '//tr[@id="password"] //td/button',
            locateStrategy: 'xpath'
        },
        inputNewPassword: '#pass1-text',
        buttonHidePassword: {
            selector: '//tr[@id="password"]//td//div//button[@class="button wp-hide-pw hide-if-no-js"]',
            locateStrategy: 'xpath'
        },
        buttonCancelGeneratePass: {
            selector: '//tr[@id="password"]//td//div//button[@class="button wp-cancel-pw hide-if-no-js"]',
            locateStrategy: 'xpath'
        },
        buttonUpdateProfile: '#submit',
        messageProfileUpdated: {
            selector: '//div[@id="message"] // strong',
            locateStrategy: 'xpath'
        }
    }
}