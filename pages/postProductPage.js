var postProducts = {
	validateForm: function() {
        return this
		.verify.visible('@inputNameProduct')
        .verify.visible('@textareaDescriptionProduct')
        .verify.visible('@selectCategoryProduct')
        .verify.visible('@inputAdress')
        .verify.visible('@inputImageProduct')
        .verify.visible('@inputPrice')
        .verify.visible('@inputQuantity')
        .verify.elementNotPresent('@lableErrorNameProduct')
        .verify.elementNotPresent('@lableErrorAddress')
        .verify.elementNotPresent('@lableErrorPrice')
        .verify.elementNotPresent('@lableErrorQuality')
	},
    fillInForm: function(nameproduct, descriptionproduct, address, price, quantity ){
        return this
        .setValue('@inputNameProduct', nameproduct)
        .setValue('@textareaDescriptionProduct', descriptionproduct)
        .click('@selectCategoryProduct')
        .setValue('@inputAdress', address)
        .setValue('@inputImageProduct', require('path').resolve('/Users/InternDN19.01.01/Pictures/1.png'))
        .setValue('@inputPrice', price)
        .setValue('@inputQuantity', quantity)
    },
    submit: function() {
		return this.verify.visible('@buttonSaveProduct')
            .click('@buttonSaveProduct')
            .saveScreenshot('screenshots/postproduct.png')
    },
    redirectManagePostPage: function(){
        return this.verify.visible('@linkRedirectManagePostPage')
        .click('@linkRedirectManagePostPage')
        .saveScreenshot('screenshots/manageproduct.png')
    }
}

module.exports = {
    commands: [postProducts],
    url: 'http://127.0.0.1:8000/post',
    elements: {
        inputNameProduct: {
            selector: '//div/input[@id="name"]',
            locateStrategy: 'xpath'
        },
        textareaDescriptionProduct: {
            selector: '//textarea[@id="description"]',
            locateStrategy: 'xpath'
        },
        selectCategoryProduct: {
            selector: '//select[@class="form-control category"]/option[@value="3"]',
            locateStrategy: 'xpath'
        },
        inputAdress: {
            selector: '//div/input[@id="city"]',
            locateStrategy: 'xpath'
        },
        inputImageProduct: {
            selector: '//div/input[@type="file"]',
            locateStrategy: 'xpath'
        },
        inputPrice: {
            selector: '//div/input[@id="price"]',
            locateStrategy: 'xpath'
        },
        inputQuantity: {
            selector: '//div/input[@id="quantity"]',
            locateStrategy: 'xpath'
        },
        buttonSaveProduct: {
            selector: '//button[@class="save"]',
            locateStrategy: 'xpath'
        },
        buttonCancel: {
            selector: '//div/button[@type="button"][text()="Hủy "]',
            locateStrategy: 'xpath'
        },
        linkRedirectManagePostPage: {
            selector: '//a[@id="link_post"]',
            locateStrategy: 'xpath'
        },
        lableErrorNameProduct: {
            selector: '(//div[@class="alert alert-danger alert-block"])[1]',
            locateStrategy: 'xpath'
        },
        lableErrorAddress: {
            selector: '(//div[@class="alert alert-danger alert-block"])[2]',
            locateStrategy: 'xpath'
        },
        lableErrorPrice: {
            selector: '(//div[@class="alert alert-danger alert-block"])[3]',
            locateStrategy: 'xpath'
        },
        lableErrorQuality: {
            selector: '(//div[@class="alert alert-danger alert-block"])[4]',
            locateStrategy: 'xpath'
        }

    }
}