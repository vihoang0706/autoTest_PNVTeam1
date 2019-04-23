module.exports = {
    commands: [{
        addCategory(name, slug, parent, description) {
            this
                .setValue('@inputName', name)
                .setValue('@inputSlug', slug)
                .setValue('@selectParent', parent)
                .setValue('@textareaDescription', description)
                .click('@inputAddCategory')
            return this.api;
        },
        editCategory(nameEditCategory, slugEditCategory, parentEditCategory, descriptionEditCategory) {
            this
                .getLocationInView('@inputUpdateCategory')
                .clearValue('@inputEditName')
                .clearValue('@inputEditSlug')
                .clearValue('@textareaEditDescription')
                .setValue('@inputEditName', nameEditCategory)
                .setValue('@inputEditSlug', slugEditCategory)
                .setValue('@selectEditParent', parentEditCategory)
                .setValue('@textareaEditDescription', descriptionEditCategory)
                .click('@inputUpdateCategory')
            return this.api;
        },
        goBackToCategory(element) {
            return this
                .click('@' + element);
        },
        goToHideLink(element) {
            this
                .moveToElement('@rowFirstTable', 0, 0)
                .click('@' + element)
            return this.api;
        },
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@' + element, expectedContain);
        },
        deleteAllCategories() {
            this
                .click('@checkboxCategory')
                .setValue('@selectDelete', 'Delete')
                .click('@inputApply')
            return this.api;
        }
    }],
    elements: {
        inputName: {
            selector: 'input[id=tag-name]',
        },
        inputSlug: {
            selector: 'input[id=tag-slug]',
        },
        selectParent: {
            selector: 'select[id=parent]',
        },
        textareaDescription: {
            selector: 'textarea[id=tag-description]',
        },
        inputAddCategory: {
            selector: 'input[id=submit]',
        },
        columnActualName: {
            selector: '(//table//tbody/tr//td[@data-colname="Name"]/strong/a)[1]',
            locateStrategy: 'xpath'
        },
        columnActualDescription: {
            selector: '(//table//tr/td[@class="description column-description"]/p)[1]',
            locateStrategy: 'xpath'
        },
        columnActualSlug: {
            selector: '(//table//tr/td[@class="slug column-slug"])[1]',
            locateStrategy: 'xpath'
        },
        // Edit category
        inputEditName: {
            selector: 'input[id=name]'
        },
        inputEditSlug: {
            selector: 'input[id=slug]'
        },
        selectEditParent: {
            selector: 'select[id=parent]'
        },
        textareaEditDescription: {
            selector: 'textarea[id=description]'
        },
        inputUpdateCategory: {
            selector: 'input[type=submit]'
        },
        strongMessageEditSuccessful: {
            selector: '//div[@id="message"]//strong',
            locateStrategy: 'xpath'
        },
        linkBackToCategories: {
            selector: '//div[@id="message"]//a',
            locateStrategy: 'xpath'
        },
        rowFirstTable: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
            locateStrategy: 'xpath'
        },
        linkDeleteCategory: {
            selector: '//span[@class="delete"]/a[@class="delete-tag aria-button-if-js"]',
            locateStrategy: 'xpath'
        },
        linkEditCategory: {
            selector: 'div.row-actions > span.edit > a',
        },
        checkboxCategory: {
            selector: '(//table//input[@type="checkbox"])[last()]',
            locateStrategy: 'xpath'
        },
        selectDelete: {
            selector: '//select[@id="bulk-action-selector-bottom"]',
            locateStrategy: 'xpath'
        },
        inputApply: {
            selector: '//input[@id="doaction2"]',
            locateStrategy: 'xpath'
        },
    }
};