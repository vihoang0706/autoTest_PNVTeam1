module.exports = { 
    tags: ['registerFunction'], 

    before: function(browser) {
        const register = browser.page.registerPage(); 
        register
        .navigate()
        .maximizeWindow()
        .captureRegisterForm() 
    },

    'TC1: User cannot register when user leave blank all fields': function (browser) {
        const register = browser.page.registerPage(); 
        register
            .fillInRegisterForm('','','','')
            .submitRegisterForm()
            .validationErrorMessage('@errorNameValidationMess','Bạn chưa nhập tên')
            .validationErrorMessage('@errorEmailValidationMess','Bạn chưa nhập email.')
            .validationErrorMessage('@errorPasswordValidationMess','Bạn chưa nhập mật khẩu.')
            .validationErrorMessage('@errorComfirmPasswordValidationMess','Bạn chưa xác nhận mật khẩu.')
    },

    'TC2: User cannot register when user enters confirm password field not match with password field': function (browser) {
        const register = browser.page.registerPage(); 
        let password = register.show_random_number();
        const username = password+"@ccnd.com";
        register
            .fillInRegisterForm('Van Tao', username, 123121, password)
            .submitRegisterForm()
            .validationErrorMessage('@errorComfirmPasswordValidationMess','Xác nhận mật khẩu sai.')
    },

    'TC3: user cannot register when user enters email existent': function (browser) {
        const register = browser.page.registerPage(); 
        let password = register.show_random_number();
        register
            .clearInput()
            .fillInRegisterForm('Van Tao', 'tao.nguyen@student.passerellesnumeriques.org', password, password)
            .submitRegisterForm()
            .validationErrorMessage('@errorEmailValidationMess','Email đã tồn tại.')
    },

    'TC4: User is able to register success with valid data': function (browser) { 
        const register = browser.page.registerPage(); 
        let password = register.show_random_number();
        const username = password+"@ccnd.com";
        register
            .clearInput()
            .fillInRegisterForm('Van Tao', username, password,password) 
            .submitRegisterForm() 
            .checkRegisterSuccessMessage()
            .login()
            .captureLoginForm()
            .fillInLoginForm(username, password)
            .submitLoginForm()
    },

    after: function (browser) {
        const register = browser.page.registerPage(); 
        register.end()
    }
}