this.DashboardPage = $page("Dashboard Page", {
    linkPost: "//div[@class='wp-menu-name' and text()= 'Posts']",
    linkMedia: "//div[@class='wp-menu-name' and text()= 'Media']",
    navigation: "//div[@id='wpwrap']//div[@id='wpcontent']//li[@id='wp-admin-bar-menu-toggle']//span[@class='ab-icon']",
    goToNavigation: function () {
        if (this.navigation.isDisplayed()) {
            this.navigation.click();
        }
    },
    goToPage: function (namePage) {
        var linkCategory = "//li[@id='menu-posts']//a[text()='Categories']";
        var linkNewPost = "//li[@id='menu-posts']//a[text()='Add New']";
        var linkNewMedia = "//li[@id='menu-media']//a[text()='Add New']";
        switch (namePage) {
            case "Category":
                this.linkPost.click();
                this.findChild(linkCategory).click();
                break;
            case "Add New Post":
                this.linkPost.click();
                this.findChild(linkNewPost).click();
                break;
            case "Add New Media":
                this.linkMedia.click();
                this.findChild(linkNewMedia).click();
                break;
        }
    }
});