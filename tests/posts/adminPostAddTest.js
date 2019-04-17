const utils = require('../../page-objects/utils/set-up');
const randomNumber = Math.floor(Math.random() * 10);
const number = randomNumber;
const titleName = 'Post: ' + number + ' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
module.exports = {
    tags: ['addPostFunction'],
    before: function (browser) {
        utils.openBrowser(browser);
        const login = browser.page.adminLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Go to post page ': function (browser) {
        var dashboard = browser.page.adminDashboardPage();
        dashboard.goToPage('@linkPosts', '@linkNewPost');
    },
    'Post information': function (browser) {
        const post = browser.page.adminPostPage();
        post
            .cancelTip()
            .addNewPost(titleName, content)
            .goToViewPost()
        assert.containsText(post.getPostTile(), titleName)
            .assert.containsText('@paragraphContentCheck', content)
    },
    after: function (browser) {
        browser
            .pause(1000)
            .end();
    }
};

