module.exports = {
    commands: [{
        addNewUser(username, email, firstName, lastName, website, password, role) {
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
        inputUsername: 'input[id=user_login]',
        inputEmail: 'input[id=email]',
        inputFirstName: 'input[id=first_name]',
        inputLastName: 'input[id=last_name]',
        inputWebsite: 'input[id=url]',
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
        inputSendNotification: 'input[id=send_user_notification]',
        selectRole: 'select[id=role]',
        inputAddNewUser: 'input[id=createusersub]',
    }
}