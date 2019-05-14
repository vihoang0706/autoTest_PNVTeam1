const util = require("util");
var linkMainMenu = "//div[@class='wp-menu-name' and text()= '%s']";
var linkSubMenuPost = "//li[@id='menu-posts']//a[text()='%s']";
var linkSubMenuMedia = "//li[@id='menu-media']//a[text()='%s']";
var linkSubMenuPage = "//li[@id='menu-pages']//a[text()='%s']";
var linkSubMenuUser = "//li[@id='menu-users']//a[text()='%s']";
var linkSubMenuAppearance = "//li[@id='menu-appearance']//a[text()='%s']";
module.exports = {
    commands: [{
        selectMenu(mainMenu, subMenu) {
            this
                .click(mainMenu)
                .click(subMenu);
        },
        goToPage(pageName) {
            switch (pageName) {
                case "Add New Post":
                    this.selectMenu(util.format(linkMainMenu, 'Posts'), util.format(linkSubMenuPost, 'Add New'));
                    break;
                case "Category":
                    this.selectMenu(util.format(linkMainMenu, 'Posts'), util.format(linkSubMenuPost, 'Categories'));
                    break;
                case "Tag":
                    this.selectMenu(util.format(linkMainMenu, 'Posts'), util.format(linkSubMenuPost, 'Tags'));
                    break;
                case "Manage Post":
                    this.selectMenu(util.format(linkMainMenu, 'Posts'), util.format(linkSubMenuPost, 'All Posts'));
                    break;
                case "Add New Media":
                    this.selectMenu(util.format(linkMainMenu, 'Media'), util.format(linkSubMenuMedia, 'Add New'));
                    break;
                case "Library":
                    this.selectMenu(util.format(linkMainMenu, 'Media'), util.format(linkSubMenuMedia, 'Library'));
                    break;
                case "Manage Page":
                    this.selectMenu(util.format(linkMainMenu, 'Pages'), util.format(linkSubMenuPage, 'All Pages'));
                    break;
                case "Add New Page":
                    this.selectMenu(util.format(linkMainMenu, 'Pages'), util.format(linkSubMenuPage, 'Add New'));
                    break;
                case "Menu":
                    this.selectMenu(util.format(linkMainMenu, 'Appearance'), util.format(linkSubMenuAppearance, 'Menus'));
                    break;
                case "Manage User":
                    this.selectMenu(util.format(linkMainMenu, 'Users'), util.format(linkSubMenuUser, 'All Users'));
                    break;
                case "Add New User":
                    this.selectMenu(util.format(linkMainMenu, 'Users'), util.format(linkSubMenuUser, 'Add New'));
                    break;
                case "Edit User Profile":
                    this.selectMenu(util.format(linkMainMenu, 'Users'), util.format(linkSubMenuUser, 'Your Profile'));
                    break;
            }
        },
        isLogOutVisible(callback) {
            this
                .moveToElement('@linkYourAccount', 0, 0)
                .waitForElementVisible('@linkLogOut')
                .isVisible('@linkLogOut', function (result) {
                    callback(result.value);
                });
        },
        logout() {
            this
                .moveToElement('@linkYourAccount', 0, 0)
                .waitForElementVisible('@linkLogOut')
                .click('@linkLogOut');
        }
    }],
    elements: {
        //Header
        linkYourAccount: {
            selector: '//li[@id="wp-admin-bar-my-account"]/a/span[@class="display-name"]',
            locateStrategy: 'xpath'
        },
        linkLogOut: {
            selector: '//li[@id="wp-admin-bar-logout"]/a[text()="Log Out"]',
            locateStrategy: 'xpath'
        },
    }
}