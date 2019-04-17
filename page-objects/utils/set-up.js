module.exports = {
    
    openBrowser: (browser)=>{
        browser
        .maximizeWindow()
        .url(browser.globals.url.siteURL);
    },
}