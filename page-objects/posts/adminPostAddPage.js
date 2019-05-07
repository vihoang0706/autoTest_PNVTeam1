module.exports = {
    commands: [{
        addNewPost(title, content) {
            return this
               
                .setValue('@inputTitlePost', title)
                .setValue('@contentPost', content)
                .click('@buttonPublish')
                .waitForElementVisible('@subButtonPublish')
                .click('@subButtonPublish')
                .waitForElementVisible('@messagePublishedSuccess');
        },
        cancelTip() {
            this
            .click('@buttonCancelTip')
        },
        goToEditPost(postName) {
            return this
                .click('@linkAllPosts')
                . goToActionHiddenLink(postName, "Edit");
        },
        goToDetailPost(){
            return this
            .waitForElementVisible('@actualTitle')
            .click('@actualTitle');
        },
        getTitleValue(callback) {
            this.getText('@actualTitle', function(result){
                callback(result.value);
            });
        },
        getId(browser) {
                browser.url(function(result){
                var savedUrl=result.value;
                var output= savedUrl.split("=");
                var a = output[1].substr(0,4);
                console.log("ID: "+a)
            });
        },
        clickHideLink(elementContainHideLink, hideLink) {
            return this
                .moveToElement(elementContainHideLink, 0, 0)
                .click(hideLink);
        },
        goToActionHiddenLink(postName, action) {
            var linkDeletePost = '//div[@class="row-actions"]/span[@class="trash" and ancestor::td[@data-colname="Title"]/strong/a[text()="'+postName+'"]]';
            var columnNamePost = '//td[@data-colname="Title" and child::strong/a[text()="'+postName+'"]]'
            switch(action) {
                case 'Edit' : 
                    this
                        .useXpath()
                        .waitForElementVisible(columnNamePost)
                        .clickHideLink(columnNamePost,'@linkEditPost');
                break;
                case 'Delete' :
                    this
                        .useXpath()
                        .waitForElementVisible(columnNamePost)
                        .clickHideLink(columnNamePost, linkDeletePost);
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
            selector: '//tbody[@id="the-list"]/tr/td[1]/strong/a',
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