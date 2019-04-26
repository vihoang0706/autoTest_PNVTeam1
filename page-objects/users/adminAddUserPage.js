module.exports = {
    commands: [{
        addUser(username, email, firstName, lastName, website, password, role) {
            this
                .setValue('@inputUsername', username)
                .setValue('@inputEmail', email)
                .setValue('@inputFirstName', firstName)
                .setValue('@inputLastName', lastName)
                .setValue('@inputWebsite', website)
                .click('@buttonShowPassword')
                .clearValue('@inputPassword')
                .setValue('@inputPassword', password)
                .click('@inputConfirmPassword')
                .setValue('@selectRole', role)
                .click('@inputAddNewUser')
            return this.api;
        }
    }],
    elements: {
        inputUsername: {
            selector: 'input[id=user_login]',
        },
        inputEmail: {
            selector: 'input[id=email]',
        },
        inputFirstName: {
            selector: 'input[id=first_name]',
        },
        inputLastName: {
            selector: 'input[id=last_name]',
        },
        inputWebsite: {
            selector: 'input[id=url]',
        },
        buttonShowPassword: {
            selector: '//button[@type="button" and text()="Show password"]',
            locateStrategy: 'xpath'
        },
        inputPassword: {
            selector: '//input[@id="pass1-text"]',
            locateStrategy: 'xpath'
        },
        inputConfirmPassword: {
            selector: '//input[@class="pw-checkbox"]',
            locateStrategy: 'xpath'
        },
        inputSendNotification: {
            selector: 'input[id=send_user_notification]',
        },
        selectRole: {
            selector: 'select[id=role]',
        },
        inputAddNewUser: {
            selector: 'input[id=createusersub]',
        },
    }
}