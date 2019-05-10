// Can not clear value title when edit post  
const nameTitle = 'Post: ' + (Math.floor(Math.random() * 50)) + ' Where were you';
const description = 'When you were in trouble and you needed a hand I was always there.';
const updateDescription = 'I have some best friends their names are: Delia and Sofia.';
var dashboard, addPost, login, username, password, editPost, postID;
var expectedMessage = "Post published.\nView Post";
var expectedUpdateSuccessMessage = "Post updated.\nView Post";
module.exports = {
    tags: ['post'],
    before: (browser) => {
        login = browser.page.adminUserLoginPage();
        addPost = browser.page.adminPostAddPage();
        dashboard = browser.page.adminBasePage();
        editPost = browser.page.adminPostEditPage();
        viewAllPost = browser.page.adminPostViewAllPage();
        username = browser.globals.userNames.username;
        password = browser.globals.userNames.password;
        login.login(username, password);
    },
    'Verify that use can add new post with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Post');
            addPost.addNewPost(nameTitle, description);
            addPost.getActualAddPostMessage(function (actualMesssage) {
                browser.assert.equal(actualMesssage, expectedMessage);
            });
            browser.getID(function (id) {
                postID = id;
            }).perform(function (browser, done) {
                dashboard.goToPage('Manage Post');
                viewAllPost.goToDetailPost(postID);
                addPost.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                addPost.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, description);
                });
                dashboard.goToPage('Manage Post');
                viewAllPost.goToActionHiddenLink('Delete', postID);
                done();
            });
            done();
        });
    },
    'Verify that user can edit post with valid data': (browser) => {
        browser.perform(function (browser, done) {
            dashboard.goToPage('Post');
            addPost.addNewPost(nameTitle, description);
            browser.getID(function (id) {
                postID = id;
            }).perform(function (browser, done) {
                dashboard.goToPage('Manage Post');
                viewAllPost.goToActionHiddenLink('Edit', postID);
                editPost.editPost('', updateDescription);
                editPost.getActualUpdatedPostMessage(function (actualMesssage) {
                    browser.assert.equal(actualMesssage, expectedUpdateSuccessMessage);
                });
                dashboard.goToPage('Manage Post');
                viewAllPost.goToDetailPost(postID);
                addPost.getColumActual('Actual Title', function (actualTitle) {
                    browser.assert.equal(actualTitle, nameTitle);
                });
                addPost.getColumActual('Actual Description', function (actualDescription) {
                    browser.assert.equal(actualDescription, updateDescription);
                });
                dashboard.goToPage('Manage Post');
                viewAllPost.goToActionHiddenLink('Delete', postID);
                done();
            });
            done();
        });
    }
};