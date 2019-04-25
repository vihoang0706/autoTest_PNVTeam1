module.exports = {
    commands: [{
        checkContainsText(element, expected) {
            return this
                .assert.containsText('@' + element, expected)
        },
        editPost(title, content) {
            return this
                .clearValue('@contentPost')
                .setValue('@inputTitlePost', title)
                .setValue('@contentPost', content)
                .waitForElementVisible('@buttonUpdatePost')
                .click('@buttonUpdatePost')
                .waitForElementVisible('@messagePublishedSuccess')
        },
    }],
    elements: {
        actualTitlePost: {
            selector: '//textarea[@class="editor-post-title__input"]',
            locateStrategy: 'xpath  '
        },
        actualContentPost: {
            selector: '//div[@class="edit-post-text-editor__body"]/textarea[@class="editor-post-text-editor"]',
            locateStrategy: 'xpath'
        },
        inputTitlePost: {
            selector: '//textarea[@id="post-title-0"]',
            locateStrategy: 'xpath'
        },
        contentPost: {
            selector: '//textarea[@class="editor-post-text-editor"]',
            locateStrategy: 'xpath'
        },
        buttonUpdatePost: {
            selector: '//button[@class="components-button editor-post-publish-button is-button is-default is-primary is-large"]',
            locateStrategy: 'xpath'
        },
        messagePublishedSuccess: {
            selector: '//div[@class="components-notice__content"]',
            locateStrategy: 'xpath'
        },
    }
}















