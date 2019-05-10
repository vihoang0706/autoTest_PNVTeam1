module.exports = {
    commands: [{
        login(username, password) {
            this
                .waitForElementVisible('@inputUsername')
                .setValue('@inputUsername', username)
                .waitForElementVisible('@inputPassword')
                .setValue('@inputPassword', password)
                .click('@inputLogin');
        },
        getErrorMessage(callback) {
            this
                .waitForElementVisible('@labelErrorMessage')
                .getContainsText('@labelErrorMessage', callback);
        }
    }],
    elements: {
        inputUsername: 'input[id=user_login]',
        inputPassword: 'input[id=user_pass]',
        inputLogin: 'input[id=wp-submit]',
        labelErrorMessage: 'div[id=login_error]'
    }
}