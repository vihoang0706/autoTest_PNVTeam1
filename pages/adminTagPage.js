module.exports = {
    url: 'http://localhost/team1_theme2/wordpress/wp-login.php',
    elements: {
        //Link go to Tag
        linkPosts: {
            selector: '//div[@class="wp-menu-name" and text()= "Posts"]',
            locateStrategy: 'xpath'
        },
        linkTags: {
            selector: '//li[@id="menu-posts"]//a[text()="Tags"]',
            locateStrategy: 'xpath'
        },

        // Add Tag Form
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

        // Edit Form
        inputEditName: '#name',
        inputEditSlug: '#slug',
        inputEditDescription: '#description',
        buttonUpdate: {
            selector: '//div[@class="edit-tag-actions"]/input',
            locateStrategy: 'xpath'
        },
        linkBackToTag: {
            selector: '//div[@id="message"]/p/a[contains(text()," Back to Tags")]',
            locateStrategy: 'xpath'
        },

        // Delete All Tags
        checkboxSelectAll: '#cb-select-all-2',
        buttonDeleteBulkAction: '#bulk-action-selector-bottom > option:nth-child(2)',
        buttonApply: '#doaction2',

        // Quick Edit Form
        inputTitleTextWrap: {
            selector: '//tr[@class="inline-edit-row inline-editor"]/td/fieldset/div/label[1]/span[2]/input',
            locateStrategy: 'xpath'
        },
        inputSlugTextWrap: {
            selector: '//tr[@class="inline-edit-row inline-editor"]/td/fieldset/div/label[2]/span[2]/input',
            locateStrategy: 'xpath'
        },
        buttonUpdateTagWrap: {
            selector: '//tr[@class="inline-edit-row inline-editor"]/td/div/button[@class="save button button-primary alignright"]',
            locateStrategy: 'xpath'
        },
        // Check Column Actual
        columnActualTitle: {
            selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="name column-name has-row-actions column-primary"]/strong/a)[1]',
            locateStrategy: 'xpath'
        },
        columnActualDescription: {
            selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr/td[@class="description column-description"]/p)[1]',
            locateStrategy: 'xpath'
        },
        columnActualSlug: {
            selector: '(//table[@class="wp-list-table widefat fixed striped tags"]//tbody/tr//td[@class="slug column-slug"])[1]',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        gotoTagPage() {
            return this
                .click('@linkPosts')
                .click('@linkTags');
        },
        fillInTagForm(tagsName, slugName, description) {
            return this
                .setValue('@inputTagName', tagsName)
                .setValue('@inputSlugName', slugName)
                .setValue('@inputDescription', description)
                .click('@buttonAddNewTag');
        },
        goBackToTagPage() {
            return this
                .click('@linkBackToTag');
        },
        editTagForm(tagsName, slugName, description) {
            return this
                .clearValue('@inputEditName')
                .setValue('@inputEditName', tagsName)
                .clearValue('@inputEditSlug')
                .setValue('@inputEditSlug', slugName)
                .clearValue('@inputEditDescription')
                .setValue('@inputEditDescription', description)
                .click('@buttonUpdate');

        },
        quickEditTagForm(tagsName, slugName,){
            return this
                .clearValue('@inputTitleTextWrap')
                .setValue('@inputTitleTextWrap', tagsName)
                .clearValue('@inputSlugTextWrap')
                .setValue('@inputSlugTextWrap', slugName)
                .click('@buttonUpdateTagWrap');
        },
        deleteAllTags() {
            return this
                .click('@checkboxSelectAll')
                .click('@buttonDeleteBulkAction')
                .click('@buttonApply');
        },
        deleteTag(){
            return this
                .pause(1000)
                .acceptAlert();
        }
    }]
};