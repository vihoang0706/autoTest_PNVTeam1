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
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@' + element, expectedContain)
        },
        waitUntilElementVisible(element) {
            return this.waitForElementVisible('@' + element);
        },
        editTag(tagsName, slugName, description) {
            return this
                .clearValue('@inputEditName')
                .setValue('@inputEditName', tagsName)
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
        goToAction(element) {
            return this
                .waitForElementVisible('@columnActualTitle')
                .moveToElement('@columnActualTitle', 0, 0)
                .waitForElementVisible('@' + element)
                .click('@' + element);
        }
    }],
    elements: {
        // Add Tag Form
        inputTagName: 'input[id=tag-name]',
        inputSlugName: 'input[id=tag-slug]',
        inputDescription: 'textarea[id=tag-description]',
        buttonAddNewTag: 'input[id=submit]',
        // Edit Form
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        inputEditDescription: 'textarea[id=description]',
        inputUpdate: 'input[type="submit"]',
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text(),"Back to Tags")]',
            locateStrategy: 'xpath'
        },
        // Delete All Tags
        checkboxSelectAll: 'input[id=cb-select-all-2]',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(2)',
        inputApply: 'input[id="doaction2"]',
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