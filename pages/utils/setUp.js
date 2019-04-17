module.exports = {
    
    openBrowser: (browser)=>{
        browser
        .maximizeWindow()
        .url('http://localhost/team1_theme2/wordpress/wp-login.php')
    },
}