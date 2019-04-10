var registerCommands = {
    captureRegisterForm: function () {
        this 
        .verify.visible('@inputName')
        .verify.visible('@inputEmail')
        .verify.visible('@inputPassword')
        .verify.visible('@inputComfirmPassword')
        .verify.visible('@buttonRegister')
        .verify.visible('@buttonRegisterWGoogle')
        .verify.visible('@buttonRegisterWFacebook')
        .verify.visible('@linkAccount')
        return this;
    },
    fillInRegisterForm: function(name, email, password, comfirmPassword) {
        return this
        .setValue('@inputName', name)
        .setValue('@inputEmail', email)
        .setValue('@inputPassword', password)
        .setValue('@inputComfirmPassword', comfirmPassword)
    },
    submitRegisterForm: function() {
        return this
        // .verify.value('@buttonRegister', 'Đăng ký')
        .click('@buttonRegister');
    },
    validationErrorMessage: function(xpath,validationErrorMessage) {
       if(xpath){
        this
        .assert.visible(xpath) 
        .assert.containsText(xpath,validationErrorMessage)
       }
       else{
           console.log("Ko tìm thấy");
       }
        return this;
    },
    checkRegisterSuccessMessage: function() {
        return this
        .waitForElementVisible('@successMess',1000)
        .verify.containsText('@successMess', 'Tài khoản người dùng được tạo thành công.')
    },
    login: function(){
        return this.verify.visible('@linkAccount')
        .click('@linkAccount')
        .verify.visible('@linkLogin')
        .click('@linkLogin')
    },

    captureLoginForm: function () {
        this 
        .verify.visible('@inputUsernameLogin')
        .verify.visible('@inputPasswordLogin')
        .verify.visible('@buttonLogin')
        return this;
    },
    fillInLoginForm: function(username, password) {
        return this
        .setValue('@inputUsernameLogin', username)
        .setValue('@inputPasswordLogin', password)
    },
    submitLoginForm: function() {
        return this.verify.visible('@buttonLogin')
        .click('@buttonLogin')
    },
    show_random_number: function() {
        return random_number= Math.random().toString(36).substring(2, 15);
    },
    clearInput: function() {
        return this
        .clearValue('@inputName')
        .clearValue('@inputEmail')
        .clearValue('@inputPassword')
        .clearValue('@inputComfirmPassword');

    }
    
};


module.exports = {
    commands: [registerCommands],
    url: 'http://127.0.0.1:8000/layouts/register',
    elements: {
        inputName: {
            selector: '//form[@id="form-register"]/div/input[@id="name"]',
            locateStrategy: 'xpath'
        },
        inputEmail: {
            selector: '//form[@id="form-register"]/div/input[@id="email"]',
            locateStrategy: 'xpath'
        },
        inputPassword: {
            selector: '//form[@id="form-register"]/div/input[@id="password"]',
            locateStrategy: 'xpath'
        },
        inputComfirmPassword: {
            selector: '//form[@id="form-register"]/div/input[@id="password_confirmation"]',
            locateStrategy: 'xpath'
        },
        buttonRegisterWGoogle: {
            selector: '//form[@id="form-register"]/div[7]/div[1]/button',
            locateStrategy: 'xpath'
        },
        buttonRegisterWFacebook: {
            selector: '//form[@id="form-register"]/div[7]/div[2]/button',
            locateStrategy: 'xpath'
        },
        buttonRegister: {
            selector: '//form[@id="form-register"]/div/input[@name="signup"]',
            locateStrategy: 'xpath'
        },
        errorNameValidationMess: {
          selector: '//span[@id="error_name" and text()="Bạn chưa nhập tên"]',
          locateStrategy: 'xpath'  
        },
        errorEmailValidationMess: {
            selector: '//span[@id="error_email"]',
            locateStrategy: 'xpath'
        },
        errorPasswordValidationMess: {          
            selector: '//span[@id="error_password" and text()="Bạn chưa nhập mật khẩu."]',
            locateStrategy: 'xpath'
        },
        errorComfirmPasswordValidationMess: {
            selector: '//span[@id="error_password_confirmation"]',
            locateStrategy: 'xpath'
        },
        successMess: {
            selector: '//div[@class="alert alert-success"]/p',
            locateStrategy: 'xpath'
        },
        linkAccount: {
            selector: '//div[@class="shop-menu pull-right"]/ul//a[@id="dropdown-category"]',
            locateStrategy: 'xpath'
        },
        linkLogin: {
            selector: '//li[@class="nav-item dropdown show"]/div[@id="dropdown-category-group"]/a[text()="Đăng nhập"]',
            locateStrategy: 'xpath'
        },
        inputUsernameLogin: {
            selector: '//form/div/input[@name="email"]',
            locateStrategy: 'xpath'
        },
        inputPasswordLogin: {
            selector: '//form/div/input[@name="password"]',
            locateStrategy: 'xpath'
        },
        buttonLogin: {
            selector: '//form/div[3]/button[text()="Đăng nhập"]',
            locateStrategy: 'xpath'
        }
    }
}