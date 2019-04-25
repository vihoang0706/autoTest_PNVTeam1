module.exports = {
    commands: [{
        addNewMedia(image) {
            return this
                .setValue('@inputImage', require('path').resolve(__dirname+image))
                .click('@buttonUpload')
                // .pause('1000')
        },
        checkImageExist(element, nameImage) {
            return this.assert.containsText('@'+element, nameImage)
        },
        deleteAllImages() {
            return this
                .click('@checkboxSelectAll')
                .click('@buttonDeleteBulkAction')
                .click('@buttonApply');
        }
    }],
    elements: {
        inputImage: {
            selector: '//input[@id="async-upload"]',
            locateStrategy: 'xpath'
        },
        buttonUpload: {
            selector: '//input[@id="html-upload"]',
            locateStrategy: 'xpath'
        },
        image: {
            selector: '//tr[1]/td/strong[@class="has-media-icon"]/a',
            locateStrategy: 'xpath'
        },
        fristTableRow: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
            locateStrategy: 'xpath'
        },
        linkDeleteImage: {
            selector: '//span[@class="edit"]/a[@class="submitdelete aria-button-if-js" and text() ="Delete Permanently"]',
            locateStrategy: 'xpath'
        },
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(2)',
        buttonApply: '#doaction2',
    }
}