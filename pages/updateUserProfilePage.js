module.exports = {
    url:'http://127.0.0.1:8000/home',
    commands: [{
        // action for login
        gotoLoginPage() {
            this
                .click('@accountLink')
                .click('@loginLink')   
            return this.api           
        }, 
        login(email, password)  {
            this
                .setValue('@email', email )
                .setValue('@password', password)
                .pause(500)
                .click('@loginButton')  
            return this.api            
        },
        checkloginsuccess() {
            this
                .assert.attributeContains('@linkCheckLoginSuccess', 'text', 'Đăng xuất') 
            return this.api  
        }, 
        goToUserProfilePage() {
            this
                .click('@accountLink')
                .click('@linkUserProfile')
                .click('@linkUpdateUserProfile')    
            return this.api
        },
        // action fo update user profile
        updateUserProfile(image, name, email, password, confirm_password, account, gender, address, phone_number) {
            this
                .clearValue('@inputEmail')
                .clearValue('@inputName')
                .setValue('@inputUploadImage', require('path').resolve(image))  
                .setValue('@inputName',name )
                .setValue('@inputEmail',email )
                .setValue('@inputPassword',password )
                .setValue('@inputConfirmPassword',confirm_password )
                .setValue('@inputAccount',account )
                .setValue('@selectGender',gender )
                .setValue('@inputAddress',address )
                .setValue('@inputPhone',phone_number )
                .click('@buttonSaveProfile')
            return this.api
        }         
    }],
    elements: {
        // elementor of login function
        email: {
            selector: '//input[@id="email"]',
            locateStrategy: 'xpath'
        },
        password: {
            selector: '//input[@id="password"]',
            locateStrategy: 'xpath'
        },
        loginButton: {
            selector: '//button[@name="Đăng nhập"]',
            locateStrategy: 'xpath'
        },
        accountLink: {
            selector: '//div[@class="first-menu"]//a[@id="dropdown-category"]',
            locateStrategy: 'xpath'
        },
        loginLink: {
            selector: '//div[@class="first-menu"]//a[contains(text(),"Đăng nhập")]',
            locateStrategy: 'xpath'
        },
        linkCheckLoginSuccess: {
            selector: '//div[@class="first-menu"]//div[@id="dropdown-category-group"]/a[2]',
            locateStrategy: 'xpath'
        },
        linkUserProfile: {
            selector: '//div[@class="first-menu"]//a[contains(text(),"Xem tài khoản")]',
            locateStrategy: 'xpath'
        },
        linkSignOut: {
            selector: '//div[@class="first-menu"]//a[contains(text(),"Đăng xuất")]',
            locateStrategy: 'xpath'
        },
        linkUpdateUserProfile: {
            selector: '//a[@id="update_account"]',
            locateStrategy: 'xpath'
        },
        // elementor of Update User Profile
        inputUploadImage: {
            selector: '//input[@id="profile-img"]',
            locateStrategy: 'xpath'
        },
        inputName: {
            selector: '//input[@name="name"]',
            locateStrategy: 'xpath'
        },
        inputEmail: {
            selector: '//input[@name="email"]',
            locateStrategy: 'xpath'
        },
        inputPassword: {
            selector: '//input[@name="password"]',
            locateStrategy: 'xpath'
        },
        inputConfirmPassword: {
            selector: '//input[@name="confirm_password"]',
            locateStrategy: 'xpath'
        },
        inputAccount: {
            selector: '//input[@name="account"]',
            locateStrategy: 'xpath'
        },
        selectGender: {
            selector: '//select[@name="gender"]',
            locateStrategy: 'xpath'
        },
        inputAddress: {
            selector: '//input[@name="address"]',
            locateStrategy: 'xpath'
        },
        inputPhone: {
            selector: '//input[@name="phone"]',
            locateStrategy: 'xpath'
        },
        buttonSaveProfile: {
            selector: '//button[@name="save_profile"]',
            locateStrategy: 'xpath'
        },
    }
};