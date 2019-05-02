module.exports = {
    commands: [{
        addNewTag(tagName, slugName, description) {
            return this
                .setValue('@inputTagName', tagName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@inputAddNewTag');
        },
        goBackToTagPage() {
            return this
                .click('@linkBackToTag');
        },
        getContainsText(selector, callback) {
            return this.getText(selector, function (result) {
                callback(result.value);
            });
        },
        getColumnValueActual(type, callback) {
            switch (type) {
                case "Actual Title":
                    this
                        .waitForElementVisible('@columnActualTitle')
                        .getContainsText('@columnActualTitle', callback);
                    break;
                case "Actual Slug":
                    this
                        .waitForElementVisible('@columnActualSlug')
                        .getContainsText('@columnActualSlug', callback);
                    break;
                case "Actual Description":
                    this
                        .waitForElementVisible('@columnActualDescription')
                        .getContainsText('@columnActualDescription', callback);
                    break;
                case "Success Message": 
                    this
                        .waitForElementVisible('@strongMessageSuccess')
                        .getContainsText('@strongMessageSuccess',callback);
                    break;
            }
        },
        editTag(tagName, slugName, description) {
            return this
                .clearValue('@inputEditName')
                .setValue('@inputEditName', tagName)
                .clearValue('@inputEditSlug')
                .setValue('@inputEditSlug', slugName)
                .clearValue('@inputEditDescription')
                .setValue('@inputEditDescription', description)
                .click('@inputUpdate');
        },
        deleteAllTags() {
            return this
                .click('@checkboxSelectAll')
                .click('@buttonDeleteBulkAction')
                .click('@inputApply');
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