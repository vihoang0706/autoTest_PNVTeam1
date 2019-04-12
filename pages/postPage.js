
module.exports = {
    url: 'http://localhost/wp/team1_theme2/wordpress/wp-admin/index.php',
    commands: [{
        login(username, password) {
            this
                .setValue('@usernameInput', username)
                .setValue('@passwordInput', password)
                .pause(500)
                .click('@loginButton')
        }
    }],
    elements: {
        usernameInput: {
            selector: '//form[@id="loginform"]/p/label/input[@id="user_login"]',
            locateStrategy: 'xpath'
        },
        passwordInput: {
            selector: '//form[@id="loginform"]/p//input[@id="user_pass"]',
            locateStrategy: 'xpath'
        },
        loginButton: {
            selector: '//form[@id="loginform"]/p/input[@id="wp-submit"]',
            locateStrategy: 'xpath'
        }

    }
    
}