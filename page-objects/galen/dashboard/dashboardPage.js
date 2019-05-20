

this.DashboardPage = $page("Dashboard Page", {
    linkPost: "//div[@class='wp-menu-name' and text()= 'Posts']",
    linkMedia: "//div[@class='wp-menu-name' and text()= 'Media']",
    navigation: "//div[@id='wpwrap']//div[@id='wpcontent']//li[@id='wp-admin-bar-menu-toggle']//span[@class='ab-icon']",
    goToNavigation:function() {
        if (this.navigation.isDisplayed()) {
            this.navigation.click(); 
        } 
    },
    goToPage: function (namePage) {
        switch (namePage) {
            case "Category":
                this.linkPost.click();
                this.findChild("//li[@id='menu-posts']//a[text()='Categories']").click();
                break;
            case "Tag":
                this.linkPost.click();
                this.findChild("//li[@id='menu-posts']//a[text()='Tags']").click();
                break;
            case "Add New Media":
                this.linkMedia.click();
                this.findChild("//li[@id='menu-media']//a[text()='Add New']").click();
                break;
        }
    }
});