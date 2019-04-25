const util = require('../../tests/src/utils/utils');
module.exports = {
    commands: [{
        goToPage(mainlink, sublink) {
            this
                .click(mainlink)
                .click(sublink)
            return this.api;
        },
        el: function (elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        goToActionUser(element) {
            return this
                .waitForElementVisible('@linkYourAccount')
                .moveToElement('@linkYourAccount', 0, 0)
                .waitForElementVisible('@' + element)
                .click('@' + element);
        },
        checkElementVisible(element) {
            return this.assert.visible('@' + element);
        },
    }],
    elements: {
        // Post
        linkMainMenu: {
            selector: '//div[@class="wp-menu-name" and text()= "' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        linkSubMenuPosts: {
            selector: '//li[@id="menu-posts"]//a[text()= "' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        // Media
        linkSubMenuMedia: {
            selector: '//li[@id="menu-media"]//a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        //Pages
        linkSubMenuPage: {
            selector: '//li[@id="menu-pages"]//a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        //Appearance
        linkSubMenuAppearence: {
            selector: '//li[@id="menu-appearance"]//a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        //Plugins
        linkSubMenuPlugins: {
            selector: '//li[@id="menu-plugins"]//a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        //Users
        linkSubMenuUsers: {
            selector: '//li[@id="menu-users"]//a[text()="' + '%s' + '"]',
            locateStrategy: 'xpath'
        },
        //Header
        linkYourAccount: {
            selector: '//li[@id="wp-admin-bar-my-account"]/a[@class="ab-item"]',
            locateStrategy: 'xpath'
        },
        linkLogOut: {
            selector: '//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"]',
            locateStrategy: 'xpath'
        },
        linkEditProfile: {
            selector: '#wp-admin-bar-edit-profile > a',
            locateStrategy: 'css selector'
        },
        linkViewUserInfor: {
            selector: '//li[@id="wp-admin-bar-user-info"]/ a// span',
            locateStrategy: 'xpath'
        }
    }
}