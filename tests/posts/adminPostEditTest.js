const utils = require('../../page-objects/utils/setUp');
const randomNumber = Math.floor(Math.random() * 50);
const number = randomNumber;
const titleName = 'Post: ' + number + ' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
module.exports =  {
    tags :['editPostFunction'],
    before: function (browser) {
        const login = browser.page.adminUserLoginPage();
        const username = browser.globals.userNames.username;
        const password = browser.globals.userNames.password;
        utils.openBrowser(browser);
        login.login(username, password);
    },
    'Precondition: Create a new post': function (browser){
        const dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkNewPost');
        const post = browser.page.adminPostAddPage();
              post.addNewPost(titleName, content);
    },
    'Step 1: Go to edit post': function (browser)  {
        const post = browser.page.adminPostAddPage();
        dashboard.goToPage('@linkPosts', '@linkAllPosts');
    },
    // 'Edit Information in post': function(browser) {
    //     // const editPost = browser.page.adminPostPage();
    //     // editPost
    //     //     .clickEditPost()
    //     //     .assert.title('Edit Post ‹ Auto — WordPress')
    //     //     .cancleTip()
    //     //     .fillInDataEditPost('',content)
    //     //     .clickUpdatePost()
    //     //     .clickViewPost()
    //     //     .assert.containsText('@paragraphContentCheck',content)
    // }
    
}