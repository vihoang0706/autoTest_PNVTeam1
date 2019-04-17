module.exports = {
    commands: [{
        cancelTip() {
            return this
            .click('@buttonCancelTip')
        },
        addNewPost(title, content) {
            return this
            .setValue('@inputTitle', title)
            .click('//textarea[@class="editor-default-block-appender__content"]')
            .setValue('@paragraphContent', content)
            .click('@buttonPublish')
            .click('@subButtonPublish')
        },
        goToViewPost() {
            return this
            .waitForElementVisible('@linkViewPost')
            .click('@linkViewPost');
        }
    }],
    elements: {
        linkAddNewInItem: {
            selector: '//div[@id="adminmenuwrap"]/ul/li[4]/ul/li/a[contains(text(), "Add New")]',
            locateStrategy: 'xpath'
        },
        linkCategory: {
            selector: '//div[@id="adminmenuwrap"]/ul/li[4]/ul/li/a[contains(text(), "Categories")]',
            locateStrategy: 'xpath'
        },
        linkTag: {
            selector: '//div[@id="adminmenuwrap"]/ul/li[4]/ul/li/a[contains(text(), "Tags")]',
            locateStrategy: 'xpath'
        },
        buttonCancelTip: {
            selector: '//button[@class="components-button components-icon-button nux-dot-tip__disable"]',
            locateStrategy: 'xpath'
        },
        inputTitle: {
            selector: '//textarea[@id="post-title-0"]',
            locateStrategy: 'xpath'
        },
        paragraphContent: {
            selector: '//div[@class="components-autocomplete"]/p',
            locateStrategy: 'xpath'
        },
        buttonPublish: {
            selector: '//button[@class="components-button editor-post-publish-panel__toggle is-button is-primary"]',
            locateStrategy: 'xpath'
        },
        subButtonPublish: {
            selector: '//button[@class="components-button editor-post-publish-button is-button is-default is-primary is-large"]',
            locateStrategy: 'xpath'
        },
        linkViewPost: {
            selector: '//a[@class="components-button components-notice__action is-link"]',
            locateStrategy: 'xpath'
        },
        titlePostCheck: {
            selector: '//h1[@class="entry-title"]',
            locateStrategy: 'xpath'
        },
        paragraphContentCheck: {
            selector: '//div[@class="entry-content"]/p',
            locateStrategy: 'xpath'
        }
    }
}