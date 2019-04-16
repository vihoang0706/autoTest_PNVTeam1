const url = require('../pages/utils/setUp');
require('./adminNewPostTest');
const randomNumber = Math.floor(Math.random()*10);
const titleName = 'Post: '+randomNumber+'Thien Trieu Quoc';
const content = 'vui long nhap noi dung ban muon chinh sua';

module.exports = {
    tags :['editPost'],
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
    'Edit Information in post': function(browser) {
        const editPost = browser.page.adminPostPage();
        editPost
            .clickEditPost()
            .assert.title('Edit Post ‹ Auto — WordPress')
            .cancleTip()
            .fillInDataEditPost('',content)
            .clickUpdatePost()
            .clickViewPost()
            .assert.containsText('@paragraphContentCheck',content)
    }
    
}