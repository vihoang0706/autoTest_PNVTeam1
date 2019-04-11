
var redirectUserProfile = {
	goToUserProfile: function() {
        return this
            .click('@linkAccount')
			.click('@linkSeeAccount')
	},
};

module.exports = {
    commands: [redirectUserProfile],
    elements: {
        linkLogOut: {
            selector: '//a[@class="dropdown-item"][text()="Đăng xuất"]',
            locateStrategy: 'xpath'
        },
        linkSeeAccount: {
            selector: '//a[@class="dropdown-item"][text()="Xem tài khoản"]',
            locateStrategy: 'xpath'
        },
        linkAccount: {
            selector: '//li[@class="nav-item dropdown show"]',
            locateStrategy: 'xpath'
        }

    }
}