module.exports = {
    commands: [{
        login(username, password) {
            this
                .setValue('@inputUsername', username)
                .setValue('@inputPassword', password)
                .click('@inputLogin')
            return this;
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
        }
    }
}