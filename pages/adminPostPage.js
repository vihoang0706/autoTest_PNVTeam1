module.exports = {
    commands: [{
        
    }],
    elements: {
        linkAddNew: {
            selector: '//div[@id="adminmenuwrap"]/ul/li[4]/ul/li/a[contains(text(), "Add New")]',
            locateStrategy: 'xpath'
        },
        linkCategory: {
            selector: '//div[@id="adminmenuwrap"]/ul/li[4]/ul/li/a[contains(text(), "Categories")]',
            locateStrategy: 'xpath'
        },
        linkTag: {
            selector: '//div[@id="adminmenuwrap"]/ul/li[4]/ul/li/a[contains(text(), "Tags")]',
            locateStrategy: 'xpath'
        },
        inputTitle: {
            selector: '//textarea[@id="post-title-0"]',
            locateStrategy: 'xpath'
        },
        paragraphContent: {
            selector: '//div[@class="components-autocomplete"]/p[@id="mce_4"]',
            locateStrategy: 'xpath'
        }
    }
    
}