var dashboard = {
    // movetoLogOutLink: function(){
    //     this.moveTo('@linkAccountAdmin')
    //     return this;
    // },
	logOutAccount: function () {
		this
			.click('@linkLogOutAdmin')
		return this;
	}
};

module.exports = {
    commands: [dashboard],
    elements: {
        linkAccountAdmin: {
            selector: '//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]',
            locateStrategy: 'xpath'
        },
        linkLogOutAdmin: {
            selector: '//li[@id="wp-admin-bar-logout"]',
            locateStrategy: 'xpath'
        }
    }
}