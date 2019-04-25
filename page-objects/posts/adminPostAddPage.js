module.exports = {
    commands: [{
        addNewPost(title, content) {
            return this
                .click('@buttonCancelTip')
                .setValue('@inputTitle', title)
                .setValue('@paragraphContent', content)
                .click('@buttonPublish')
                .waitForElementVisible('@subButtonPublish')
                .click('@subButtonPublish');
        },
        viewPost() {
            return this
                .waitForElementVisible('@linkViewPost')
                .click('@linkViewPost');
        },
        goToHideLink(element) {
            return this
                .moveToElement('@columnTitleActual', 0, 0)
                .click(element);
        },
        goToEditPost() {
            return this
                .click('@linkAllPosts')
                .clickHideLine('@linkEditPost')
        },
        editPost(title, content) {
            return this
                .clearValue('@paragraphContent')
                .setValue('@inputTitle', title)
                .setValue('@paragraphContent', content)
                .waitForElementVisible('@buttonUpdatePost', 500)
                .click('@buttonUpdatePost')
                // .pause('500')
        },
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@' + element, expectedContain)
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
        inputTitle: {
            selector: '//textarea[@id="post-title-0"]',
            locateStrategy: 'xpath'
        },
        paragraphContent: {
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
        linkViewPost: {
            selector: '//a[@class="components-button components-notice__action is-link"]',
            locateStrategy: 'xpath'
        },
        actualTitlePost: {
            selector: '//h1[@class="entry-title"]',
            locateStrategy: 'xpath'
        },
        actualParagraphContent: {
            selector: '//div[@class="entry-content"]/p',
            locateStrategy: 'xpath'
        },
        linkStoreFrontWebsite: {
            selector: '//ul/li/a[@class="ab-item" and text() = "Store Front Website" ]',
            locateStrategy: 'xpath'
        },
        linkDashboard: {
            selector: '//ul/li/a[@class="ab-item" and text() = "Dashboard" ]',
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
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(3)',
        buttonApply: '#doaction2',
    }
}