
var login = {
	fillInLoginForm: function (username, password) {
		this
			.setValue('@inputUsername', username)
			.setValue('@inputPassword', password)
			.click('@inputLogin')
		return this;
	}
};

module.exports = {
    commands: [login],
    // url: 'http://localhost:8080/team1_theme2/wordpress/wp-login.php',
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