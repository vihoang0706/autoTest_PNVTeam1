module.exports = {
    commands: [{
        gotoCreateNewMenu(){
            return this
            .click('@linkCreateNewMenu');
        },
        addNewMenuStruct(nameMenu) {
            return this
                .setValue('@inputNameMenu', nameMenu) 
                .click('@inputSaveMenuHeader')
        },
        addMenuSetting(){
            return this
                .click('@inputAutoAddPages')
                .click('@inputLocationPrimary')
                .click('@inputLocationFooter')
                .click('@inputLocationSocialLink')
                .click('@inputSaveMenuFooter');
        },
        selectMenu(){
            return this
                .click('@selectMenu')
                .click('@inputSelectMenu');
        },
        deleteMenu(){
            return this
                .click('@linkDeleteMenu');
        },
        checkElementVisible(element) {
            return this.assert.visible('@' + element);
        },
        checkSelectedOption(element) {
            return this
                .assert.attributeEquals('@' + element, "checked", 'true');
        },
        getContainValue(element, callback){
            this.getValue('@' + element, function(result){
              callback(result.value);
            });
          }
    }],
    elements: {
        inputSelectMenu: {
            selector: '//input[@class="button"]',
            locateStrategy: 'xpath'
        },
        linkCreateNewMenu: {
            selector: '//a[text()="create a new menu"]',
            locateStrategy: 'xpath'
        },
        linkDeleteMenu: {
            selector: '//a[@class="submitdelete deletion menu-delete"]',
            locateStrategy: 'xpath'
        },
        selectMenu: {
            selector: '//select[@id="select-menu-to-edit"]//option[contains(text(), "Comments")]',
            locateStrategy: 'xpath'
        },
        inputNameMenu: 'input[id=menu-name]',
        inputSaveMenuHeader: 'input[id=save_menu_header]',
        inputSaveMenuFooter: 'input[id=save_menu_footer]',
        inputAutoAddPages: 'input[id=auto-add-pages]',
        inputLocationPrimary: 'input[id=locations-menu-1]',
        inputLocationFooter: 'input[id=locations-footer]',
        inputLocationSocialLink: 'input[id=locations-social]',
       
    }
};