module.exports = {
    commands: [{
        getContainText(selector, callback){
            this
                .waitForElementVisible(selector)
                .getText(selector, function(result){
                    callback(result.value);
            })
        },
        getColumActual(type, callback){
            switch(type){
              case 'Actual Title':
              this.getContainText('@columnActualTitle', callback); 
              break;
            }
        },
        deleteAllPages() {
            return this
                .click('@checkboxSelectAllPage')
                .click('@selectOptionTrash')
                .click('@buttonApply');
        },
        goToDetailPage(){
            return this
                .click('@columnActualTitle');
        },
        goToActionHideLink(type) {
            switch(type) {
                case 'Edit' : 
                    this
                        .waitForElementVisible('@columnActualTitle')
                        .moveToElement('@columnActualTitle', 0, 0)
                        .waitForElementVisible('@linkEdit')
                        .click('@linkEdit');
                break;
                case 'Delete' :
                    this
                        .waitForElementVisible('@columnActualTitle')
                        .moveToElement('@columnActualTitle', 0, 0)
                        .waitForElementVisible('@linkDelete')
                        .click('@linkDelete');
                break;
            }
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
        linkDelete: {
            selector: '(//a[text()="Trash"])[1]',
            locateStrategy: 'xpath'
        },
        linkEdit: {
            selector: '(//a[text()="Edit"])[1]',
            locateStrategy: 'xpath'
        },
    }
};