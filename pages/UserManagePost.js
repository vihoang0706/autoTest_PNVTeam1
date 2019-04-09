
var checkValueProduct = {
    checkValueNameProduct: function(){
        return this.verify.visible('@labelNameProduct')
        .assert.containsText('@labelNameProduct', 'fan')
    },
    CheckValueDescriptionProduct: function(){
        return this.verify.visible('@labelDescriptionProduct')
        .assert.containsText('@labelDescriptionProduct', 'I have used two years ago')
    },
    CheckValueAddress: function(){
        return this.verify.visible('@labelAddress')
        .assert.containsText('@labelAddress', 'Quang Nam')

    },
    CheckValuePrice: function(){
        return this.verify.visible('@labelPrice')
        .assert.containsText('@labelPrice', '250')
    },
    CheckValueQuality: function(){
        return this.verify.visible('@labelQuality')
        .assert.containsText('@labelQuality', '1')
    },
    checkImageProduct: function(){
        return this.verify.visible('@imgImageProduct')
    }

}

module.exports = {
 commands: [checkValueProduct],
    elements: {
        labelNameProduct: {
            selector: '(//p[@class="title"])[1]',
            locateStrategy: 'xpath'
        },
        labelDescriptionProduct: {
            selector: '(//p[@class="description"])[1]',
            locateStrategy: 'xpath'
        },
        labelAddress: {
            selector: '(//p[@class="city"])[1]',
            locateStrategy: 'xpath'
        },
        labelPrice: {
            selector: '(//p[@class="price"])[1]',
            locateStrategy: 'xpath'
        },
        labelQuality: {
            selector: '(//p[@class="quantity"])[1]',
            locateStrategy: 'xpath'
        },
        imgImageProduct: {
            selector: '(//img[@class="img-responsive"])[1]',
            locateStrategy: 'xpath'
        }

    }
}