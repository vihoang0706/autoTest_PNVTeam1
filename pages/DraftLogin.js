
var loginCommands = {

	fillInForm: function(username, password) {
		return this
			.setValue('@inputEmail', username)
			.setValue('@inputPassword', password)
	},
	submit: function() {
		return this
			.click('@buttonlogin')
	},

};

module.exports = {
    commands: [loginCommands],
    url: 'http://127.0.0.1:8000/layouts/login',

    elements: {
        inputEmail: {
            selector: '//input[@id="email"]',
            locateStrategy: 'xpath'
        },
        inputPassword: {
            selector: '//input[@id="password"]',
            locateStrategy: 'xpath'
        },
        buttonlogin: {
            selector: '//button[@name="Đăng Nhập"]',
            locateStrategy: 'xpath'
        }

    }
}