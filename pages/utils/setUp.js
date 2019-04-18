module.exports = {
    openBrowser: (browser)=>{
        browser
        .maximizeWindow()
        .url('http://192.168.189.70/wordpress/wp-login.php')
    },
}