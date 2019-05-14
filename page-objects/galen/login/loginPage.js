this.LoginPage = $page('Login page',{
    username: "input[id='user_login']",
    password: "input[id='user_pass']",
    loginButton: "input[id='wp-submit']",
    loginAs: function (userName, password) {
        this.username.typeText(userName);
        this.password.typeText(password);
        this.loginButton.click();
      } 
});