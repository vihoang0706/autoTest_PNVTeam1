module.exports = {
    tags: ['addPostFunction'],

    before: function (browser) {
        const post = browser.page.postPage();
        post
        .navigate()
        .maximizeWindow()
        .assert.title('Log In ‹ Nightwatch_Auto — WordPress')
    }
}