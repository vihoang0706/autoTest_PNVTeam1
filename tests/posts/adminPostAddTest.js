const titleName = 'Post: ' + (Math.floor(Math.random() * 100));
const content = 'When you were in trouble and you needed a hand I was always there.';
const updatecontent = 'I have some best friends their names are: Delia and Sofia.';
var dashboard, addPost, login, username, password, editPost;
module.exports = {
    tags: ['add-post'],
    'Verify that User Admin is able add new post with valid data': async function (browser) {
        login = browser.page.adminUserLoginPage();
        addPost = browser.page.adminPostAddPage();
        dashboard = browser.page.adminBasePage();
        editPost = browser.page.adminPostEditPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);

        dashboard.goToPage('Post');
        addPost.addNewPost(titleName, content);
        addPost.getId(browser);


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














