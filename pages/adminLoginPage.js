
var login = {
	fillInLoginForm: function (username, password) {
        this
            .pause(2000)
			.setValue('@inputUsername', username)
			.setValue('@inputPassword', password)
			.click('@inputLogin')
		return this;
	}
};

module.exports = {
    commands: [login],
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