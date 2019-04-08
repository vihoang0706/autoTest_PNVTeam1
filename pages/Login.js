var loginCommands = {
	validateForm: function () {
		this
			.verify.visible('@linkAccount')
			.click('@linkAccount')
			.verify.visible('@linkLogin')
			.click('@linkLogin')
			.verify.visible('@inputEmail')
			.verify.visible('@inputPassword')
			.verify.visible('@buttonSubmit')
			.verify.containsText('@buttonSubmit', 'Đăng nhập')
			.verify.visible('@linkForgotPass')
			.verify.visible('@linkRegister')
			.verify.elementNotPresent('@errorMessage')
		return this;
	},
	gotoPage: function () {
		this
			.click('@linkAccount')
			.click('@linkLogin')
		return this;
	},

	fillInLoginForm: function (username, password) {
		this
			.setValue('@inputEmail', username)
			.setValue('@inputPassword', password)
			.verify.containsText('@buttonSubmit', 'Đăng nhập')
			.click('@buttonSubmit')
		return this;
	},
	checkLoginSucessfully() {
		this
			.waitForElementVisible('@logged_account', 1000)
			.assert.containsText('@logged_account', 'Chào bạn')
			.pause(1000);
		return this;
	},
	checkErrorMessage: function (errorMessage) {
		this
			.waitForElementVisible('@errorMessage', 1000)
			.verify.visible('@errorMessage')
			.assert.containsText('@errorMessage', errorMessage)
		return this;
	},
	checkValidationErrorMess: function(xpath,errorValidationError){
		this.waitForElementVisible(xpath,1000)
				.verify.visible(xpath)
				.assert.containsText(xpath,errorValidationError)
		return this;
	},
	checkValueContainInput: function (email, password) {
		this
			.verify.valueContains('@inputEmail', email)
			.verify.valueContains('@inputPassword', password)
		return this;
	}
};

module.exports = {
	commands: [loginCommands],
	url: 'http://127.0.0.1:8000/home',
	elements: {
		linkAccount: {
			selector: '//li/a[@id="dropdown-category"]/i[contains(text(),"Tài khoản")]',
			locateStrategy: 'xpath'
		},
		linkLogin: {
			selector: '//div/a[contains(text(),"Đăng nhập")]',
			locateStrategy: 'xpath'
		},
		linkForgotPass: {
			selector: '//div[@align="center"]/a[@class="btn btn-link"]',
			locateStrategy: 'xpath'
		},
		linkRegister: {
			selector: '//div[@align="right"]/a[@class="btn btn-link"]',
			locateStrategy: 'xpath'
		},
		inputEmail: {
			selector: '//input[@id="email"]',
			locateStrategy: 'xpath'
		},
		inputPassword: {
			selector: '//input[@id="password"]',
			locateStrategy: 'xpath'
		},
		buttonSubmit: {
			selector: '//button[@name="Đăng nhập"]',
			locateStrategy: 'xpath'
		},
		errorEmailValidationMess: {
			selector: '//span[@id="error_email"]',
			locateStrategy: 'xpath'
		},
		errorPasswordValidationMess: {
			selector: '//span[@id="error_password"]',
			locateStrategy: 'xpath'
		},
		logged_account: {
			selector: '//a[@id="dropdown-category"]/i[@class="fa fa-user"]',
			locateStrategy: 'xpath'
		},
		errorMessage: {
			selector: '//div[@class="alert alert-danger"]/p',
			locateStrategy: 'xpath'
		},
	}
}