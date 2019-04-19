const utils = require('../../page-objects/utils/setUp');
const randomNumber = Math.floor(Math.random() * 50);
const number = randomNumber;
const titleName = 'Post: ' + number + ' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
module.exports = {
    tags: ['addPostFunction'],
    before: function (browser) {
        var login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        utils.openBrowser(browser);
        login.login(username, password);
    },
    'Step 1: Go to post page ': function (browser) {
        var dashboard = browser.page.adminBasePage();
        dashboard.goToPage('@linkPosts', '@linkNewPost');
    },
    'Step 2: Post information': function (browser) {
        const post = browser.page.adminPostAddPage();
        post
            .addNewPost(titleName, content)
            .goToViewPost()
            .assert.containsText('@titlePostCheck', titleName)
            .assert.containsText('@paragraphContentCheck', content)
    },
    after: function (browser) {
        const post = browser.page.adminPostAddPage();
        post 
            .comeBackYourPost()
            .trashPost()
        browser
            .pause(1000)
            .end();
    }
};
