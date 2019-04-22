module.exports = {
    commands: [{
        checkContainsText(element, expectedContain) {
            return this.assert.containsText('@'+element, expectedContain)
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
    }
}