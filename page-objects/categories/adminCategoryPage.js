module.exports = {
    commands: [{
        addNewCategory(name, slug, parent, description) {
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
            return this
                .moveToElement('@rowFirstTable', 0, 0)
                .click('@' + element);
        },
        getContainText(element, callback) {
            this.getText('@' + element, function (result) {
                callback(result.value);
            });
        },
        deleteAllCategories() {
            this
                .click('@checkboxCategory')
                .setValue('@selectDelete', 'Delete')
                .click('@inputApply')
            return this.api;
        },
    }],
    elements: {
        inputName: 'input[id=tag-name]',
        inputSlug: 'input[id=tag-slug]',
        selectParent: 'select[id=parent]',
        textareaDescription: 'textarea[id=tag-description]',
        inputAddCategory: 'input[id=submit]',
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
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        selectEditParent: 'select[id=parent]',
        textareaEditDescription: 'textarea[id=description]',
        inputUpdateCategory: 'input[type=submit]',
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
        linkEditCategory: 'div.row-actions > span.edit > a',
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