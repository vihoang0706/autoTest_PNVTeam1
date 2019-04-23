const goToPost = require("../base-objects/adminBasePage");
module.exports = {
    commands: [{
        addNewPost(title, content) {
            return this
            .click('@buttonCancelTip')
            .setValue('@inputTitle', title)
            .setValue('@paragraphContent', content)
            .click('@buttonPublish')
            .waitForElementVisible('@subButtonPublish',500)
            .click('@subButtonPublish')
            .pause('1000')
        },
        viewPost() {
            return this
            .waitForElementVisible('@linkViewPost')
            .click('@linkViewPost');
        },
        comeBackYourPost(){
            return this
            .moveToElement('@linkStoreFrontWebsite', 0, 0)
            .click('@linkDashboard')
            .click('@linkPosts')
            .click('@linkAllPosts')            
        },
        clickHideLine(element) {
            return this
            .moveToElement('@fristTableRow', 0, 0)
            .click(element)
        },
        stop() {
            return this
            .comeBackYourPost()
            .clickHideLine('@linkTrashPost')
        },
        goToEditPost() {
            return this
            .click('@linkAllPosts')
            .assert.title('Posts ‹ Store Front Website — WordPress')
            .clickHideLine('@linkEditPost')
        },
        clearInput() {
            return this
            .clearValue('@paragraphContent')
        },
        editPost(title, content) {
            return this
            .clearInput()
            .setValue('@inputTitle', title)
            .setValue('@paragraphContent', content)
            .click('@buttonUpdatePost')
            .pause('1000')
        },
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@'+element, expectedContain)
        },
        deleteAllPosts() {
            return this
            .click('@checkboxSelectAll')
            .click('@buttonDeleteBulkAction')
            .click('@buttonApply');
        }
    }],
    elements: {
        linkPosts: {
			selector: '//div[@class="wp-menu-name" and text()= "Posts"]',
			locateStrategy: 'xpath'
        },
        linkAllPosts: {
            selector: '//li[@id="menu-posts"]//a[text()="All Posts"]',
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
        fristTableRow: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
            locateStrategy: 'xpath'
        },
        linkTrashPost: {
            selector: '//span[@class="trash"]/a[text()="Trash"]',
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