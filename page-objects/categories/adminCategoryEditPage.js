module.exports = {
    commands: [{
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
        getActualUpdatedCategoryMessage(callback){
            this
                .waitForElementVisible('@labelUpdatedCategoryMessageSuccess')
                .getContainText('@labelUpdatedCategoryMessageSuccess', callback);
        },
    }],
    elements: {
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        selectEditParent: 'select[id=parent]',
        textareaEditDescription: 'textarea[id=description]',
        inputUpdateCategory: 'input[type=submit]',
        labelUpdatedCategoryMessageSuccess: '#message > p:nth-child(1) > strong',
        linkBackToCategories: '#message > p:nth-child(2) > a',
    }
}