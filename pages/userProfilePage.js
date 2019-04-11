
var redirectPostProducts = {
	goToPostProducts: function() {
        return this
            .click('@linkRedirectPostProducts')
			
	},
};

module.exports = {
    commands: [redirectPostProducts],
    elements: {
        linkRedirectPostProducts: {
            selector: '//a[@id="post_product"][text()="Kênh người cho thuê"]',
            locateStrategy: 'xpath'
        }

    }
}