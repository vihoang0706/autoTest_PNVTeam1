const url = require('../pages/utils/setUp');
const randomNumber = Math.floor(Math.random()*10);
const number = randomNumber;
const titleName = 'Post: '+number+' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';

module.exports = {
    tags :['addPostFunction'],
    
    before: function (browser) {
        url.openBrowser(browser);
        const login = browser.page.adminLoginPage();
        login
            .fillInLoginForm('TaoNguyen','thientrieuquoc01247')
            .assert.title('Dashboard ‹ Auto — WordPress')
    },
    'Navigate link post': function (browser)  {
        const post = browser.page.adminPostPage();
        post 
            .navigateMenuItem()
    },
    'Click sub menu item in post': function (browser) {
        const post = browser.page.adminPostPage();
        post
            .goToAddNewPost()
            .cancleTip()
    },
    'Post information': function (browser) {
        const post = browser.page.adminPostPage();
        post    
            .fillInData(titleName, content)
            .saveInfor()
            .clickViewPost()
            .assert.containsText('@h1TiltePostCheck',titleName)
            .assert.containsText('@paragraphContentCheck',content)
    },
   
};

