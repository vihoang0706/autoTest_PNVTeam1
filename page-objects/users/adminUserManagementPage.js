module.exports = {
    commands: [{
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@' + element, expectedContain)
        },
        deleteAllUser() {
            this
                .click('@checkboxUser')
                .setValue('@selectDelete', 'Delete')
                .click('@inputApply')
                .click('@inputDeleteAll')
                .click('@inputConfirmDeletion')
            // this.getText('@linkCountUser', function(result){
            //         if (result.value != "(1)") {
            //             console.log(result.value);
            //             return this

            //         }
            //     }
            // );  
            return this.api
        }
    }],
    elements: {
        collumnUsername: {
            selector: '(//table//tbody//td[@data-colname="Username"]//strong/a)[last()]',
            locateStrategy: 'xpath'
        },
        collumnName: {
            selector: '(//table//tbody//td[@class="name column-name"])[last()]',
            locateStrategy: 'xpath'
        },
        collumnEmail: {
            selector: '(//table//tbody//td[@class="email column-email"]/a)[last()]',
            locateStrategy: 'xpath'
        },
        collumnRole: {
            selector: '(//table//tbody//td[@class="role column-role"])[last()]',
            locateStrategy: 'xpath'
        },
        linkDelete: {
            selector: '(//span[@class="delete"]/a[@class="submitdelete"])[last()]',
            locateStrategy: 'xpath'
        },
        checkboxUser: {
            selector: '(//table//input[@type="checkbox"])[last()]',
            locateStrategy: 'xpath'
        },
        inputApply: {
            selector: '//input[@id="doaction2"]',
            locateStrategy: 'xpath'
        },
        selectDelete: {
            selector: '//select[@id="bulk-action-selector-bottom"]',
            locateStrategy: 'xpath'
        },
        inputDeleteAll: {
            selector: '//input[@id="delete_option0"]',
            locateStrategy: 'xpath'
        },
        inputConfirmDeletion: {
            selector: '//input[@id="submit"]',
            locateStrategy: 'xpath'
        },
        linkCountUser: {
            selector: '//li[@class="all"]//span[@class="count"]',
            locateStrategy: 'xpath'
        },
    }
}