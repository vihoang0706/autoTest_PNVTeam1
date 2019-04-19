module.exports = {
    openBrowser: (browser)=>{
        browser
        .maximizeWindow()
<<<<<<< HEAD:pages/utils/setUp.js
        .url('http://192.168.189.70/wordpress/wp-login.php')
=======
        .url(browser.globals.url.siteURL);
>>>>>>> dev:page-objects/utils/setUp.js
    },
}