module.exports = {
    commands: [{
        addNewTag(tagsName, slugName, description) {
            return this
                .setValue('@inputTagName', tagsName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@buttonAddNewTag');
        },
        goBackToTagPage() {
            return this
                .click('@linkBackToTag');
        },
        getContainsText(elements) {
            return this.getText(elements, function (el) {
                if (typeof callback === 'function') {
                    callback.call(this, el.value);
                }
            });
        },
        editTag(tagsName, slugName, description) {
            return this
                .clearValue('@inputEditName')
                .setValue('@inputEditName', tagsName)
                .clearValue('@inputEditSlug')
                .setValue('@inputEditSlug', slugName)
                .clearValue('@inputEditDescription')
                .setValue('@inputEditDescription', description)
                .click('@buttonUpdate');
        },
        deleteAllTags() {
            return this
                .click('@checkboxSelectAll')
                .click('@buttonDeleteBulkAction')
                .click('@buttonApply');
        },
        clickHiddenLink(element) {
            return this
                .waitForElementVisible('@columnActualTitle')
                .moveToElement('@columnActualTitle', 0, 0)
                .waitForElementVisible(element)
                .click(element);
        }
    }],
    elements: {
        // Add Tag Form
        inputTagName: {
            selector: '#tag-name',
            locateStrategy: 'css selector'
        },
        inputSlugName: {
            selector: '#tag-slug',
            locateStrategy: 'css selector'
        },
        inputDescription: '#tag-description',
        buttonAddNewTag: '#submit',
        // Edit Form
        inputEditName: '#name',
        inputEditSlug: '#slug',
        inputEditDescription: '#description',
        buttonUpdate: {
            selector: '//div[@class="edit-tag-actions"]/input',
            locateStrategy: 'xpath'
        },
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text()," Back to Tags")]',
            locateStrategy: 'xpath'
        },
        // Delete All Tags
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(2)',
        buttonApply: '#doaction2',
        // Quick Edit Form
        inputTitleTextWrap: {
            selector: '//tr[@class="inline-edit-row inline-editor"]/td/fieldset/div/label[1]/span[2]/input',
            locateStrategy: 'xpath'
        },
        inputSlugTextWrap: {
            selector: '//tr[@class="inline-edit-row inline-editor"]/td/fieldset/div/label[2]/span[2]/input',
            locateStrategy: 'xpath'
        },
        buttonUpdateTagWrap: {
            selector: '//tr[@class="inline-edit-row inline-editor"]/td/div/button[@class="save button button-primary alignright"]',
            locateStrategy: 'xpath'
        },
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