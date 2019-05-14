this.DashboardPage = $page("Dashboard Page", {
    linkPost: "//div[@class='wp-menu-name' and text()= 'Posts']",

    goToPage: function () {
        this.linkPost.click();
        this.findChild("//li[@id='menu-posts']//a[text()='Categories']").click();
    }
});