module.exports = {
  commands: [{
    addNewPage(titlePage, description) {
      this
        .setValue('@inputTitle', titlePage)
        .setValue('@inputDescription', description)
        .click('@buttonPublish')
        .waitForElementVisible('@subButtonPublish')
        .click('@subButtonPublish')
        .waitForElementVisible('@labelMessageSuccess');
    },
    getActualAddPageMessage(callback) {
      this.getContainText('@labelMessageSuccess', callback);
    }
  }],
  elements: {
    inputTitle: 'textarea[class=editor-post-title__input]',
    inputDescription: 'textarea[class=editor-post-text-editor]',
    buttonPublish: 'button.editor-post-publish-panel__toggle',
    subButtonPublish: 'button.editor-post-publish-button',
    linkViewPage: 'a.components-notice__action',
    labelMessageSuccess: 'div.components-notice__content'
  }
};