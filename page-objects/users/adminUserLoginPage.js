module.exports = {
    commands: [{
        login(username, password) {
            this
                .setValue('@inputUsername', username)
                .setValue('@inputPassword', password)
                .click('@inputLogin')
            return this;
        },
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@'+element, expectedContain);
        }
    }],
    elements: {
       
        inputUsername: {
            selector: '//input[@id="user_login"]',
            locateStrategy: 'xpath'
        },
        inputPassword: {
            selector: '//input[@id="user_pass"]',
            locateStrategy: 'xpath'
        },
        inputLogin: {
            selector: '//input[@id="wp-submit"]',
            locateStrategy: 'xpath'
        },
        lableErrorMessage: {
            selector: '//div[@id="login_error"]',
            locateStrategy: 'xpath'
        },
        formLogin: {
            selector: '//form[@name="loginform"]',
            locateStrategy: 'xpath'
        }
    }
}