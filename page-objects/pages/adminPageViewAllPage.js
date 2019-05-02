module.exports = {
    commands: [{
        getContainText(element, callback){
            this.getText('@' + element, function(result){
              callback(result.value);
            });
        },
        deleteAllPages() {
            return this
                .click('@checkboxSelectAllPage')
                .click('@selectOptionTrash')
                .click('@buttonApply');
        },
        waitUntilForElementVisible(element) {
            return this.waitForElementVisible('@' + element);
        },
        goToDetailPage(){
            return this
                .click('@columnActualTitle');
        }
    }],
    elements: {
        columnActualTitle: {
            selector: '(//table[@class="wp-list-table widefat fixed striped pages"]//tbody/tr//td[@class="title column-title has-row-actions column-primary page-title"]/strong/a)[1]',
            locateStrategy: 'xpath'
        },
        linkTrashPage: {
            selector: '//div[@class="row-actions"]//span[@class="trash"]/a[@class="submitdelete"]',
            locateStrategy: 'xpath'
        },
        checkboxSelectAllPage: {
            selector: '//input[@id="cb-select-all-2"]',
            locateStrategy: 'xpath'
        },
        selectOptionTrash: {
            selector: '//select[@id="bulk-action-selector-bottom"]/option[@value="trash"]',
            locateStrategy: 'xpath'
        },
        buttonApply: 'input[id=doaction2]',
    }
};