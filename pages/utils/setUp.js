module.exports = {
    openBrowser: (browser)=>{
        browser
        .maximizeWindow()
        .url('http://localhost:8080/team1_theme2/wordpress/wp-login.php')
    },
    selectMainMenu: (browser,xpath)=>{
        browser
            .click(xpath);
    }
}