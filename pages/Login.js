var loginCommands = {
    validateForm: function() {
		this
			.verify.visible('@linkAccount')
			.click('@linkAccount')
			.verify.visible('@linkLogin')
			.click('@linkLogin')
			.verify.visible('@email')
			.verify.visible('@password')
			.verify.visible('@submit')
			.verify.visible('@linkForgotPass')
			.verify.visible('@linkRegister')
			.verify.elementNotPresent('@errorMessage')
			return this;
	},
	fillInForm: function(username, password) {
		return this.waitForElementVisible('body', 1000)
			.setValue('@username', username)
			.setValue('@password', password)
	},
	submit: function() {
		return this.verify.value('@submit', 'Log In')
			.click('@submit')
	},
	validateError: function(errorMessage) {
		return this.verify.visible('@error')
			.verify.containsText('@error', errorMessage)
			.verify.valueContains('@username', '')
			.verify.valueContains('@password', '')
	}
};

module.exports = {
    commands: [loginCommands],
    url:'http://127.0.0.1:8000/home',
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
		linkRegister:{
			selector: '//div[@align="right"]/a[@class="btn btn-link"]',
			locateStrategy: 'xpath'
		},
		email: {
			selector: '//input[@id="email"]',
			locateStrategy: 'xpath'
		},
		password: {
			selector: '//input[@id="password"]',
			locateStrategy: 'xpath'
		},
		submit: {
			selector: '//button[@name="Đăng nhập"]',
			locateStrategy: 'xpath'
		},
		errorEmailValidationMess: {
			selector: '//span[@id="error_email" and text()="Vui lòng nhập email"]',
			locateStrategy:'xpath'
		},
		errorPasswordValidationMess: {
			selector: '//span[@id="error_email" and text()="Vui lòng nhập mật khẩu"]',
			locateStrategy:'xpath'
		},
		errorMessage: {
			selector: '//div[@class="alert alert-danger"]/p',
			locateStrategy: 'xpath'
		},
	}

}