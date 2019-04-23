const titleName = 'Post: ' + (Math.floor(Math.random() * 50)) + ' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
let dashboard, addPost, login, username, password;

module.exports = {
    tags: ['addPostFunction'],
    // before: function (browser) {
    //     login = browser.page.adminUserLoginPage();
    //     dashboard = browser.page.adminBasePage();
    //     addPost = browser.page.adminPostAddPage();
    //     username = browser.globals.userNames.username;
    //     password = browser.globals.userNames.password;
    //     utils.openBrowser(browser);
    //     login.login(username, password);
    // },

    'Pre-condition: Login with valid account': function (browser) {
        const login = browser.page.adminUserLoginPage();
        var username = browser.globals.userNames.username;
        var password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Step 1: Go to post page ': function () {
        dashboard.goToPage('@linkPosts', '@linkNewPost');
    },
    'Step 2: Post information': function () {
        addPost
            .addNewPost(titleName, content)
            .viewPost()
            .checkContainsText('actualTitlePost', titleName)
            .checkContainsText('actualParagraphContent', content)
    },
    
    // after: function () {
    //     addPost
    //         .stop()
    //         .pause(1000)
    //         .end();
    // }
};
