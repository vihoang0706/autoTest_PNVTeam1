module.exports = {
    url: 'http://localhost/team1_theme2/wordpress/wp-login.php',
    elements: {
        // Post
        linkPosts: {
            selector: '//div[@class="wp-menu-name" and text()= "Posts"]',
            locateStrategy: 'xpath'
        },
        linkTags: {
            selector: '//li[@id="menu-posts"]//a[text()="Tags"]',
            locateStrategy: 'xpath'
        },
        inputTagName: {
            selector: '#tag-name',
            locateStrategy: 'css selector'
        },
        inputSlugName: {
            selector: '#tag-slug',
            locateStrategy: 'css selector'
        },
        inputDescription: '#tag-description',
        buttonAddNewTag: '#submit',
        rowTitle: {
            selector:'//*[@id="tag-11"]/td[1]/strong/a',
            locateStrategy: 'css selector'
        },
        // rowDescription: {
        //     selector: '//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr[1]//td[2]/p',
        //     locateStrategy: 'xpath'
        // },
        // rowSlug: {
        //     selector: '//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr[1]//td[last()-1]',
        //     locateStrategy: 'xpath'
        // },
    },
    commands: [{
        gotoTagPage() {
            return this
                .click('@linkPosts')
                .click('@linkTags');
        },
        fillInTagsForm(tagsName,slugName,description){
            return this
                .setValue('@inputTagName',tagsName)
                .setValue('@inputSlugName',slugName)
                .setValue('@inputDescription',description)
                .click('@buttonAddNewTag');
        },
        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value);
        },
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`);
        },
        search() {
            return this
                .click('@submitButton');
        }
    }]
};