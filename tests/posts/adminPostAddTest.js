const titleName = 'Post: ' + (Math.floor(Math.random() * 50)) + ' Where were you';
const content = 'When you were in trouble and you needed a hand I was always there. When your legs got shaky and you could not stand I was always there. I was always there when you needed me the most. When trouble comes a-knocking and I needed a hand. Where will you be then? When you needed a hand, I am always ready and when I tired you, you where were you place?';
const updatecontent = 'I have some best friends their names are: Delia and Sofia. They are all really nice we all get along very well I only fought with Laura once and with Delia none! But I’ve fought with Sofia a few times (she is my sister). Anyway we get along very well and we have a lot of fun tougher, we all like music, playing and so on, we really enjoy spending time with each other.';
var dashboard, addPost, login, username, password, editPost, status;
module.exports = {
    tags: ['add-post'],
    'Verify that use is able add new post with valid data': function (browser) {
        login = browser.page.adminUserLoginPage();
        addPost = browser.page.adminPostAddPage();
        dashboard = browser.page.adminBasePage();
        editPost = browser.page.adminPostEditPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);

        dashboard.goToPage('Post');
        addPost.addNewPost(titleName, content);

        dashboard.goToPage('Manage Post');
        addPost.getTitleValue(function (actualTitle){
            browser.assert.equal(actualTitle, titleName);
        });
        addPost.goToDetailPost();
        editPost.getContentValue(function (actualContent) {
            browser.assert.equal(actualContent, content);
        });
 
        dashboard.goToPage('Manage Post');
        addPost.goToActionHiddenLink( titleName, 'Delete');
    },
    'Verify that User Admin is able edit post with valid data': async function (browser) {
        dashboard.goToPage('Post');
        addPost.addNewPost(titleName, content);

        addPost.goToEditPost(titleName);
    
        editPost.editPost('', updatecontent);
        dashboard.goToPage('Manage Post');
        addPost.getTitleValue(function (actualTitle){
            browser.assert.equal(actualTitle, titleName);
        });
        addPost.goToDetailPost();   
        editPost.getContentValue(function (actualContent){
            browser.assert.equal(actualContent, updatecontent);
        });
    
        dashboard.goToPage('Manage Post');
        addPost.goToActionHiddenLink( titleName, 'Delete');
    },
};