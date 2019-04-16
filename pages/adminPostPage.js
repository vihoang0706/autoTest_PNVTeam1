var postPageCommands = {
    navigateMenuItem: function() {
        return this
        .click('@linkPostMenuItem')
    },
    goToAddNewPost: function() {
        return this
        .click('@linkAddNewInPost')
    },
    cancleTip: function() {
        return this
        .click('@buttonCancleTip')
    },
    fillInData: function(title, content) {
        return this
        .setValue('@inputTitle', title)
        .click('//textarea[@class="editor-default-block-appender__content"]')
        .setValue('@paragraphContent', content)
    },
    saveInfor: function() {
        return this
        .click('@buttonPublish')
        .click('@subButtonPublish')
    },
    reloadPage: function() {
        return this.refresh();
    },
    clickViewPost: function() {
        return this
        .waitForElementVisible('@linkViewPost')
        .click('@linkViewPost')
    },
    clickEditPost: function() {
        return this
        .click('@clickEditPost')
    },
    fillInDataEditPost: function(title, content) {
        return this
        .clearValue('@inputTitle')
        .clearValue('@paragraphContent')
        .setValue('@inputTitle', title)
        .setValue('@paragraphContent', content)
    },
    clickUpdatePost: function(){
        return this
        .click('@buttonUpdate')
    },
    clearInput: function() {
        return this
        .clearValue('@inputTitle')
        .clearValue('@paragraphContent')
    }
};

module.exports = {
    commands: [postPageCommands],
    elements: {
        linkPostMenuItem: {
            selector: '//div[@class="wp-menu-name" and text()="Posts"]',
            locateStrategy: 'xpath'
        },
        linkAddNewInPost: {
            selector: '//a[@class="page-title-action"]',
            locateStrategy: 'xpath'
        },
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
        buttonCancleTip: {
            selector: '//button[@class="components-button components-icon-button nux-dot-tip__disable"]',
            locateStrategy: 'xpath'
        },
        inputTitle: {
            selector: '//textarea[@id="post-title-0"]',
            locateStrategy: 'xpath'
        },
        textareaContent: {
            selector: '//textarea[@class="editor-default-block-appender__content"]',
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
        h1TiltePostCheck: {
            selector: '//h1[@class="entry-title"]',
            locateStrategy: 'xpath'
        },
        paragraphContentCheck: {
            selector: '//div[@class="entry-content"]/p',
            locateStrategy: 'xpath'
        },
        clickEditPost: {
            selector: '//tr[1]/td[@class="title column-title has-row-actions column-primary page-title"]/strong/a',
            locateStrategy: 'xpath'
        },
        buttonUpdate: {
            selector: '//button[@class="components-button editor-post-publish-button is-button is-default is-primary is-large"]',
            locateStrategy: 'xpath'
        }

    }
    
}