module.exports = {
    commands: [{
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
        goBackToTagPage() {
            this.click('@linkBackToTag');
        },
        getActualUpdatedTagMessageValue(callback) {
            this
                .waitForElementVisible('@labelUpdatedTagMessageSuccess')
                .getContainText('@labelUpdatedTagMessageSuccess', callback);
        },
    }],
    elements: {
        inputEditName: 'input[id=name]',
        inputEditSlug: 'input[id=slug]',
        inputEditDescription: 'textarea[id=description]',
        inputUpdate: 'input[type=submit]',
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text(),"Back to Tags")]',
            locateStrategy: 'xpath'
        },
        labelUpdatedTagMessageSuccess: 'div#message>p>strong',
    }
}