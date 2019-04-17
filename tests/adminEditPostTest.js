const url = require('../pages/utils/setUp');
const randomNumber = Math.floor(Math.random()*10);
const titleName = 'Post: '+randomNumber+'Thien Trieu Quoc';
const content = 'vui long nhap noi dung ban muon chinh sua';

module.exports = {
    tags :['editPost'],
    before: function (browser) {
        url.openBrowser(browser);
        const login = browser.page.adminLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Navigate link post': function (browser)  {
        var dashboard = browser.page.adminDashboardPage();
        dashboard.goToPage('@linkPosts', '@linkAllPosts');
    },
    'Edit Information in post': function(browser) {
        // const editPost = browser.page.adminPostPage();
        // editPost
        //     .clickEditPost()
        //     .assert.title('Edit Post ‹ Auto — WordPress')
        //     .cancleTip()
        //     .fillInDataEditPost('',content)
        //     .clickUpdatePost()
        //     .clickViewPost()
        //     .assert.containsText('@paragraphContentCheck',content)
    }
    
}