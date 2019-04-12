var tagsCommand = {
    gotoTagPage: function(){
        return this
                .waitForElementPresent('@linkPost',1000)
                .click('@linkPost')
                .waitForElementPresent('@linkTag',1000)
                .click('@linkTag');
    }
}

module.exports = {
    commands: [tagsCommand],
    elements: {
        linkPost: {
            selector: '#menu-posts > a > div.wp-menu-name',
            locateStrategy: 'css selector'
        },
        linkTag: {
            selector: '//input[@id="user_pass"]',
            locateStrategy: 'xpath'
        },
        inputLogin: {
            selector: '//input[@id="wp-submit"]',
            locateStrategy: 'xpath'
        }
    }
}