module.exports = {
    commands: [{
        addNewPost(title, content) {
            return this
                .click('@buttonCancelTip')
                .setValue('@inputTitlePost', title)
                .setValue('@contentPost', content)
                .click('@buttonPublish')
                .waitForElementVisible('@subButtonPublish')
                .click('@subButtonPublish')
                .pause(1000)
        },
        goToHideLink(element) {
            return this
                .moveToElement('@columnTitleActual', 0, 0)
                .click(element);
        },
        goToEditPost() {
            return this
                .click('@linkAllPosts')
                .goToHideLink('@linkEditPost')
        },
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@' + element, expectedContain)
        },
        clickPostItem(){
            return this
            .waitForElementVisible('@titleActual')
            .click('@titleActual');
        },
        deleteAllPosts() {
            return this
                .click('@checkboxSelectAll')
                .click('@buttonDeleteBulkAction')
                .click('@buttonApply');
        }
    }],
    elements: {
        buttonCancelTip: {
            selector: '//button[@class="components-button components-icon-button nux-dot-tip__disable"]',
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
        buttonPublish: {
            selector: '//button[@class="components-button editor-post-publish-panel__toggle is-button is-primary"]',
            locateStrategy: 'xpath'
        },
        subButtonPublish: {
            selector: '//button[@class="components-button editor-post-publish-button is-button is-default is-primary is-large"]',
            locateStrategy: 'xpath'
        },
        titleActual: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]/strong/a',
            locateStrategy: 'xpath'
        },
        columnTitleActual: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
            locateStrategy: 'xpath'
        },
        linkEditPost: {
            selector: '//div[@class="row-actions"]/span[@class="edit"]/a[text()="Edit"]',
            locateStrategy: 'xpath'
        },
        buttonUpdatePost: {
            selector: '//button[@class="components-button editor-post-publish-button is-button is-default is-primary is-large"]',
            locateStrategy: 'xpath'
        },
        linkAllPosts: {
            selector: '//li[@id="menu-posts"]//a[text()="All Posts"]',
            locateStrategy: 'xpath'
        },
        messagePublishedSuccess: {
            selector: '//div[@class="components-notice__content"]',
            localStorage: 'xpath'
        },
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(3)',
        buttonApply: '#doaction2',
    }
}