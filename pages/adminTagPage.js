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
        inputEditName: '#name',
        inputEditSlug: '#slug',
        inputEditDescription:'#description',
        buttonUpdate: {
            selector: '//div[@class="edit-tag-actions"]/input',
            locateStrategy: 'xpath'
        },
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text()," Back to Tags")]',
            locateStrategy: 'xpath'
        },
        linkDeleteTag: {
            selector: 'div.row-actions > span.delete > a',
            locateStrategy: 'css selector'
        }
        // rowTitle: {
        //     selector:'(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="name column-name has-row-actions column-primary"]/strong/a)[1]',
        //     locateStrategy: 'xpath'
        // },
        // rowDescription: {
        //     selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="description column-description"]/p)[1]',
        //     locateStrategy: 'xpath'
        // },
        // rowSlug: {
        //     selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="slug column-slug"])[1]',
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
        goBackToTag() {
            return this
                .click('@linkBackToTag');
        },
        deleteTag() {
            return this
                .click('@linkDeleteTag');
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
        },
        editTagForm(tagsName,slugName,description){
            return this
                .clearValue('@inputEditName')
                .setValue('@inputEditName',tagsName)
                .clearValue('@inputEditSlug')
                .setValue('@inputEditSlug',slugName)
                .clearValue('@inputEditDescription')
                .setValue('@inputEditDescription',description)
                .click('@buttonUpdate');
                
        }
    }]
};