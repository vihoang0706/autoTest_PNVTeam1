module.exports = { 
    tags: ['registerFunction'], 
    'Register': function (browser) { 
        let register = browser.page.register(); 
        let password = register.show_random_number();
        const username = password+"@ccnd.com";
        register
            .navigate() 
            .captureRegisterForm() 
            .fillInRegisterForm('VanTao', username, password,password) 
            .submitRegisterForm() 
            .checkRegisterSuccess()
            .captureLoginForm()
            .fillInLoginForm(username, password)
            .submitLoginForm()
            .end()
    }
}