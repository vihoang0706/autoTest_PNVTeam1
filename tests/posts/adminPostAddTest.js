const titleName = 'Post: ' + (Math.floor(Math.random() * 50)) + ' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
let dashboard, addPost, login, username, password;
module.exports = {
    tags: ['addPostFunction'],
    'Pre-condition: Login with valid account': function (browser) {
        login = browser.page.adminUserLoginPage();
        addPost = browser.page.adminPostAddPage();
        dashboard = browser.page.adminBasePage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
        dashboard.goToPage('linkPosts', 'linkAllPosts');
        addPost.deleteAllPosts();
    },
    'Step 1: Go to post page ': function () {
        dashboard.goToPage('linkPosts', 'linkNewPost');
    },
    'Step 2: Post Information': function () {
        addPost
            .addNewPost(titleName, content)
            .viewPost()
            .checkContainsText('actualTitlePost', titleName)
            .checkContainsText('actualParagraphContent', content);
    },
};