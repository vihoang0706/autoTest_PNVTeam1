const setup = require('../pages/utils/setUp');
const username = 'hiennguyenpnv1998';
const password = 'Hien@12345';

module.exports =  {
    '@tags' :['category'],
    before: function(browser){
        setup.openBrowser(browser);
        var login = browser.page.loginPage();
        login.navigate();
        login.gotoPage();
        login.fillInLoginForm(email,password);
    },
    
    'Step1: ' : function (browser) {
    },      
    'Step2: ': function (browser){
    },

    after: function(browser){
        browser
        .pause(1000)
        .end()
    },
}