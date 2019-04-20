const utils = require('../../page-objects/utils/setUp');
const randomNumber = Math.floor(Math.random() * 50);
const number = randomNumber;
const titleName = 'Post: ' + number + ' My friend';
const content1 = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
const content2 = 'I have some best friends their names are: Delia and Sofia. They are all really nice we all get along very well I only fought with Laura once and with Delia none! But I’ve fought with Sofia a few times (she is my sister). Anyway we get along very well and we have a lot of fun tougher, we all like music, playing and so on, we really enjoy spending time with each other.';
module.exports =  {
    tags :['editPostFunction'],
    before: function (browser) {
        let login = browser.page.adminUserLoginPage();
        let username = browser.globals.userNames.username;
        let password = browser.globals.userNames.password;
        utils.openBrowser(browser);
        login.login(username, password);
    },
    'Precondition: Create a new post': function (browser){
        let dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkNewPost');
        let post = browser.page.adminPostAddPage();
              post.addNewPost(titleName, content1);
    },
    'Step 1: Go to edit post': function (browser)  {
        let post = browser.page.adminPostAddPage();
            post.goToEditPost()
    },
    'Step 2: Edit Information in post': function(browser) {
        let editPost = browser.page.adminPostAddPage();
        editPost
            .editPost('', content2)
            .viewPost()
            .assert.containsText('@titlePostCheck', titleName)
            .assert.containsText('@paragraphContentCheck', content2)
    },
    after: function (browser) {
        let editPost = browser.page.adminPostAddPage();
        editPost 
            .comeBackYourPost()
            .clickHideLine('@linkTrashPost')
        browser
            .pause(1000)
            .end();
    }
    
}