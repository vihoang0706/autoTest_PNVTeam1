module.exports = {
    goToHideLink: ()=>{
        const category = this.api.page.adminCategoryPage();
        const usernameInput1 = category.elements.linkEditCategory.selector;
        const usernameInput2 = category.elements.rowFirstTable.selector;
        return this
            .moveToElement(usernameInput2, 0, 0)
            .click(usernameInput1);
    },
}