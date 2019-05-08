module.exports = {
    commands: [{
        addNewCategory(name, slug, parent, description) {
            this
                .setValue('@inputName', name)
                .setValue('@inputSlug', slug)
                .setValue('@selectParent', parent)
                .setValue('@textareaDescription', description)
                .click('@inputAddCategory');
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
                .click('@inputUpdateCategory');
        },
        goBackToCategory() {
            this.click('@linkBackToCategories');
        },
        getActualMessageValue(callback){
            this.getContainText('@strongMessageEditSuccessful', callback);
        },
        getCollumnValue(categoryName, type, callback) {
            var columnActualName ='//table//tbody/tr//td[@data-colname="Name"]/strong/a[text()="'+ categoryName +'"]';
            var columnActualDescription ='//td[@class="description column-description"]/p[ancestor::tr/td[@data-colname="Name"]/strong/a[text()="'+ categoryName +'"]]';
            var columnActualSlug ='//td[@class="slug column-slug" and ancestor::tr/td[@data-colname="Name"]/strong/a[text()="'+ categoryName +'"]]';
            switch (type) {
                case "Actual Name":
                    this.getContainText(columnActualName, callback);
                    break;
                case "Actual Description":
                    this.getContainText(columnActualDescription, callback);
                    break;
                case "Actual Slug":
                    this.getContainText(columnActualSlug, callback);
                    break;
            }
        },
        waitUntilCategoryVisible(categoryName) {
            var columnNameCategory = '//td[@data-colname="Name" and child::strong/a[text()="'+ categoryName +'"]]'
            this
                .useXpath()
                .waitForElementVisible(columnNameCategory);
        },
        clickHideLink(elementContainHideLink, hideLink) {
            this
                .moveToElement(elementContainHideLink, 0, 0)
                .click(hideLink);
        },
        goToActionHiddenLink(categoryName, action) {
            var linkDeleteCategory = '//div[@class="row-actions"]/span[@class="delete" and ancestor::td[@data-colname="Name"]/strong/a[text()="'+ categoryName +'"]]';
            var columnNameCategory = '//td[@data-colname="Name" and child::strong/a[text()="'+ categoryName +'"]]';
            switch(action) {
                case 'Edit' : 
                    this
                        .useXpath()
                        .waitForElementVisible(columnNameCategory)
                        .clickHideLink(columnNameCategory,'@linkEditCategory');
                break;
                case 'Delete' :
                    this
                        .useXpath()
                        .waitForElementVisible(columnNameCategory)
                        .clickHideLink(columnNameCategory, linkDeleteCategory);
                    this.api.acceptAlert();
                break;
            }
        },
    }],
    elements: {
        inputName: 'input[id=tag-name]',
        inputSlug: 'input[id=tag-slug]',
        selectParent: 'select[id=parent]',
        textareaDescription: 'textarea[id=tag-description]',
        inputAddCategory: 'input[id=submit]',
        // Edit category
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        selectEditParent: 'select[id=parent]',
        textareaEditDescription: 'textarea[id=description]',
        inputUpdateCategory: 'input[type=submit]',
        strongMessageEditSuccessful: '#message > p:nth-child(1) > strong',
        linkBackToCategories: '#message > p:nth-child(2) > a',
        linkEditCategory: 'div.row-actions > span.edit > a',
    }
};