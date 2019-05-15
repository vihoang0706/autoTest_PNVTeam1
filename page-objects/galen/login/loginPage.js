
this.LoginPage = $page("Login page", {
    username: "input[name='log']",
    password: "input[name='pwd']",
    loginButton: "input[name='wp-submit']"
}, {
    loginAs: loginFunction ( "Login as username ${_1.username} and password ${_1.password}", function (user) {
        this.username.typeText(user.username),
        this.password.typeText(user.password),
        this.loginButton.click()
    })
});