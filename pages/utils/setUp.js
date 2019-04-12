module.exports = {
    openBrowser: (browser)=>{
        browser
        .maximizeWindow()
        .url('http://127.0.0.1:8000/home')
    },
    selectMainMenu: (browser,xpath)=>{
        browser
            .click(xpath);
    }
}