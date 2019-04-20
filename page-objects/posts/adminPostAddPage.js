const goToPost = require("../base-objects/adminBasePage");
module.exports = {
    commands: [{
        addNewPost(title, content) {
            return this
            .click('@buttonCancelTip')
            .setValue('@inputTitle', title)
            .click('//textarea[@class="editor-default-block-appender__content"]')
            .setValue('@paragraphContent', content)
            .click('@buttonPublish')
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
        titlePostCheck: {
            selector: '//h1[@class="entry-title"]',
            locateStrategy: 'xpath'
        },
        paragraphContentCheck: {
            selector: '//div[@class="entry-content"]/p',
            locateStrategy: 'xpath'
        },
        selectBulkActions: {
            selector: '//select[@id="bulk-action-selector-top"]',
            locateStrategy: 'xpath'
        },
        optionMoveToTrash: {
            selector: '//select[@id="bulk-action-selector-top"]/option[3]',
            locateStrategy: 'xpath'
        },
        buttonApply: {
            selector: '//input[@id="doaction"]',
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
        }
    }
}