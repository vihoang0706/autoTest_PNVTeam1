module.exports = {
    commands: [{
        addNewMedia(image) {
            return this
                .setValue('@inputImage', require('path').resolve(__dirname + image))
                .click('@buttonUpload')
        },          
        deleteImage() {
            this
                .moveToElement('@columnActualTitle', 0, 0)
                .click('@linkDeleteImage');
            this.api.acceptAlert();
        },
        getTitleValue(callback) {
            this.getText('@image', function (result) {
                callback(result.value);
            });
        },
    }],
    elements: {
        inputImage: 'input[id=async-upload]',
        buttonUpload: 'input[id=html-upload]',
        image: {
            selector: '//tr[1]/td/strong[@class="has-media-icon"]/a',
            locateStrategy: 'xpath'
        },
        columnActualTitle: {
            selector: '//tbody[@id="the-list"]/tr[1]/td[1]',
            locateStrategy: 'xpath'
        },
        linkDeleteImage: {
            selector: '//tr/td[1]/div[@class="row-actions"]/span[@class="delete"]/a[@class="submitdelete aria-button-if-js" and text()="Delete Permanently"]',
            locateStrategy: 'xpath'
        },
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(2)',
        buttonApply: '#doaction2'
    }
}