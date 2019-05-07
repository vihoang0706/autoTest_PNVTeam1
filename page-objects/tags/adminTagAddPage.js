module.exports = {
    commands: [{
        addNewTag(tagName, slugName, description) {
            this
                .setValue('@inputTagName', tagName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@inputAddNewTag');
        },
        goBackToTagPage() {
            this.click('@linkBackToTag');
        },
        getColumnValueActual(type, callback) {
            switch (type) {
                case "Actual Title":
                    this
                        .waitForElementVisible('@columnActualTitle')
                        .getContains('@columnActualTitle', callback);
                    break;
                case "Actual Slug":
                    this
                        .waitForElementVisible('@columnActualSlug')
                        .getContains('@columnActualSlug', callback);
                    break;
                case "Actual Description":
                    this
                        .waitForElementVisible('@columnActualDescription')
                        .getContains('@columnActualDescription', callback);
                    break;
                case "Success Message": 
                    this
                        .waitForElementVisible('@strongMessageSuccess')
                        .getContains('@strongMessageSuccess',callback);
                    break;
            }
        },
        editTag(tagName, slugName, description) {
            this
                .clearValue('@inputEditName')
                .setValue('@inputEditName', tagName)
                .clearValue('@inputEditSlug')
                .setValue('@inputEditSlug', slugName)
                .clearValue('@inputEditDescription')
                .setValue('@inputEditDescription', description)
                .click('@inputUpdate');
        },
        deleteAllTags() {
            this
                .click('@checkboxSelectAll')
                .click('@buttonDeleteBulkAction')
                .click('@inputApply');
        },
        clickHideLink(elementContainHideLink, hideLink) {
            this
                .moveToElement(elementContainHideLink, 0, 0)
                .click(hideLink)
        },
        goToActionHiddenLink(tagName,action) {
            const columnNameTag = '//td[@data-colname="Name" and child::strong/a[text()="'+ tagName +'"]]';
            switch(action) {
                case 'Edit' : 
                    this
                        .useXpath()
                        .waitForElementVisible(columnNameTag)
                        .clickHideLink(columnNameTag,'@linkEdit');
                break;
                case 'Delete' :
                    this
                        .useXpath()
                        .waitForElementVisible(columnNameTag)
                        .clickHideLink(columnNameTag,'@linkDelete');
                    this.api.acceptAlert();
                break;
            }
        },
    }],
    elements: {
        // Add Tag Form
        inputTagName: 'input[id=tag-name]',
        inputSlugName: 'input[id=tag-slug]',
        inputDescription: 'textarea[id=tag-description]',
        inputAddNewTag: 'input[id=submit]',
        // Edit Form
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        inputEditDescription: 'textarea[id=description]',
        inputUpdate: 'input[type="submit"]',
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text(),"Back to Tags")]',
            locateStrategy: 'xpath'
        },
        strongMessageSuccess: {
            selector: '//div[@id="message"]//strong',
            locateStrategy: 'xpath'
        },
        // Delete All Tags
        checkboxSelectAll: 'input[id=cb-select-all-2]',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(2)',
        inputApply: 'input[id="doaction2"]',
        //Hidden link
        linkDelete: {
            selector: 'div.row-actions > span.delete > a',
            locateStrategy: 'css selector'
        },
        linkEdit: {
            selector: 'div.row-actions > span.edit > a',
            locateStrategy: 'css selector'
        },
        // Check Column Actual
        columnActualTitle: {
            selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="name column-name has-row-actions column-primary"]/strong/a)[1]',
            locateStrategy: 'xpath'
        },
        columnActualDescription: {
            selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr/td[@class="description column-description"]/p)[1]',
            locateStrategy: 'xpath'
        },
        columnActualSlug: {
            selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="slug column-slug"])[1]',
            locateStrategy: 'xpath'
        }
    }
};