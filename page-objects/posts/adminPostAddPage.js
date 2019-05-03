goToPage = require('./../base-objects/adminBasePage')
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
                .waitForElementVisible('@messagePublishedSuccess');
        },

        goToHideLink(element) {
            return this
                .moveToElement('@columnTitleActual', 0, 0)
                .click(element);
        },
        goToEditPost() {
            return this
                .click('@linkAllPosts')
                .goToHideLink('@linkEditPost');
        },
        goToDetailPost(){
            return this
            .waitForElementVisible('@actualTitle')
            .click('@actualTitle');
        },
        deletePost() {
            return this.goToHideLink('@linkDeletePost');
        },
        getTitleValue(callback) {
            this.getText('@actualTitle', function(result){
                callback(result.value);
            });
        },
        getId(browser) {
            browser.url(function(result){
            var savedUrl=result.value;
            var output = savedUrl.split("=");
            var a = output[1].substr(0,4);
            console.log("ID: "+a);
            })
        },
        goToHideLink(type) {
            switch(type) {
                case 'Edit' : 
                    this
                        .waitForElementVisible('@columnActualTitle')
                        .moveToElement('@columnActualTitle', 0, 0)
                        .waitForElementVisible('@linkEdit')
                        .click('@linkEdit');
                break;
                case 'Delete' :
                    this
                        .waitForElementVisible('@columnActualTitle')
                        .moveToElement('@columnActualTitle', 0, 0)
                        .waitForElementVisible('@linkDelete')
                        .click('@linkDelete');
                break;
            }
        },
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
        actualTitle: {
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
            locateStrategy: 'xpath'
        },
        linkDeletePost: {
            selector: '//tr/td[1]/div[@class="row-actions"]/span[@class="trash"]/a[@class="submitdelete" and text()="Trash"]',
            locateStrategy: 'xpath'
        },
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(3)',
        buttonApply: '#doaction2',
    }
}