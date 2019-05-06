module.exports = {
    commands: [{
        el: function (elementName, data) {
            var element = this.elements[elementName.slice(1)];
            return util.format(element.selector, data);
        },
        goToPage(mainlink, sublink) {
            this
                .click('@' + mainlink)
                .click('@' + sublink)
            return this;
        },
        selectMenu (mainMenu, subMenu) {
            return this
                    .click(mainMenu)
                    .click(subMenu);
        },
        goToPage(pageName) {
            switch (pageName) {
                case "Post":
                    this.selectMenu('@linkPosts', '@linkNewPost');
                    break;
                case "Category":
                    this.selectMenu('@linkPosts', '@linkCategories');
                    break;
                case "Tag":
                    this.selectMenu('@linkPosts', '@linkTags');
                    break;
                case "Manage Post":
                    this.selectMenu('@linkPosts', '@linkAllPosts');
                    break;
                case "Media":
                    this.selectMenu('@linkMedia', '@linkAddNewMedia');
                    break;
                case "Library":
                    this.selectMenu('@linkMedia', '@linkLibrary');
                    break;
                case "Manage Page":
                    this.selectMenu('@linkPages', '@linkAllPages');
                    break;
                case "Add New Page":
                    this.selectMenu('@linkPosts', '@linkAddNewPages');
                    break;
                case "Menu":
                    this.selectMenu('@linkAppearance', '@linkMenus');
                    break;
                case "Manage User":
                    this.selectMenu('@linkUsers', '@linkAllUsers');
                    break;
                case "Add New User":
                    this.selectMenu('@linkUsers', '@linkAddNewUser');
                    break;
                case "Library":
                    this.selectMenu('@linkUsers', '@linkYourProfile');
                    break;
            }
        },
        goToActionUser(element) {
            return this
                .waitForElementVisible('@linkYourAccount')
                .moveToElement('@linkYourAccount', 0, 0)
                .waitForElementVisible('@' + element)
                .click('@' + element);
        },
        getElementIsVisible(element, callback) {
            this.isVisible('@' + element, function (result) {
                callback(result.value);
            });
        },
    }],
    elements: {
        // Post, Media, Pages, Comments
        linkPosts: {
            selector: '//div[@class="wp-menu-name" and text()= "Posts"]',
            locateStrategy: 'xpath'
        },
        linkAllPosts: {
            selector: '//li[@id="menu-posts"]//a[text()="All Posts"]',
            locateStrategy: 'xpath'
        },
        linkNewPost: {
            selector: '//li[@id="menu-posts"]//a[text()="Add New"]',
            locateStrategy: 'xpath'
        },
        linkCategories: {
            selector: '//li[@id="menu-posts"]//a[text()="Categories"]',
            locateStrategy: 'xpath'
        },
        linkTags: {
            selector: '//li[@id="menu-posts"]//a[text()="Tags"]',
            locateStrategy: 'xpath'
        },
        // Media
        linkMedia: {
            selector: '//div[@class="wp-menu-name" and text()= "Media"]',
            locateStrategy: 'xpath'
        },
        linkLibrary: {
            selector: '//li[@id="menu-media"]//a[text()="Library"]',
            locateStrategy: 'xpath'
        },
        linkAddNewMedia: {
            selector: '//div[@id="wpbody-content"]/div/a',
            locateStrategy: 'xpath'
        },
        //Pages
        linkPages: {
            selector: '//div[@class="wp-menu-name" and text()= "Pages"]',
            locateStrategy: 'xpath'
        },
        linkAllPages: {
            selector: '//li[@id="menu-pages"]//a[text()="All Pages"]',
            locateStrategy: 'xpath'
        },
        linkAddNewPages: {
            selector: '//li[@id="menu-pages"]//a[text()="Add New"]',
            locateStrategy: 'xpath'
        },
        //Comments
        linkComments: {
            selector: '//div[@class="wp-menu-name" and text()= "Comments "]',
            locateStrategy: 'xpath'
        },
        //Appearance
        linkAppearance: {
            selector: '//div[@class="wp-menu-name" and text()= "Appearance"]',
            locateStrategy: 'xpath'
        },
        linkThemes: {
            selector: '//li[@id="menu-appearance"]//a[text()="Themes"]',
            locateStrategy: 'xpath'
        },
        linkCustomize: {
            selector: '//li[@id="menu-appearance"]//a[text()="Customize"]',
            locateStrategy: 'xpath'
        },
        linkWidgets: {
            selector: '//li[@id="menu-appearance"]//a[text()="Widgets"]',
            locateStrategy: 'xpath'
        },
        linkMenus: {
            selector: '//li[@id="menu-appearance"]//a[text()="Menus"]',
            locateStrategy: 'xpath'
        },
        //Plugins
        linkPlugins: {
            selector: '//div[@class="wp-menu-name" and text()= "Plugins "]',
            locateStrategy: 'xpath'
        },
        linkInstalledPlugins: {
            selector: '//li[@id="menu-plugins"]//a[text()="Installed Plugins"]',
            locateStrategy: 'xpath'
        },
        linkAddNewPlugins: {
            selector: '//li[@id="menu-plugins"]//a[text()="Add New"]',
            locateStrategy: 'xpath'
        },
        //Users
        linkUsers: {
            selector: '//div[@class="wp-menu-name" and text()= "Users"]',
            locateStrategy: 'xpath'
        },
        linkAllUsers: {
            selector: '//li[@id="menu-users"]//a[text()="All Users"]',
            locateStrategy: 'xpath'
        },
        linkAddNewUser: {
            selector: '//li[@id="menu-users"]//a[text()="Add New"]',
            locateStrategy: 'xpath'
        },
        linkYourProfile: {
            selector: '//li[@id="menu-users"]//a[text()="Your Profile"]',
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