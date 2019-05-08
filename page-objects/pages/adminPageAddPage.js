module.exports = {
  commands: [{
    addNewPage(titlePage, description) {
      this
        .setValue('@inputTitle', titlePage)
        .setValue('@inputDescription', description)
        .click('@buttonPublish')
        .click('@subButtonPublish');
    },
    getActualMessageValue(callback) {
      this
        .waitForElementVisible('@labelMessageSuccess')
        .getContainText('@labelMessageSuccess', callback);
    },
    getColumActual(type, callback) {
      switch (type) {
        case 'Actual Title':
          this
            .waitForElementVisible('@inputTitle')
            .getContainText('@inputTitle', callback);
          break;
        case 'Actual Description':
          this
            .waitForElementVisible('@inputDescription')
            .getContainText('@inputDescription', callback);
          break;
      }
    },
  }],
  elements: {
    inputTitle: 'textarea[class=editor-post-title__input]',
    inputDescription: 'textarea[class=editor-post-text-editor]',
    buttonPublish: 'button.editor-post-publish-panel__toggle   ',
    subButtonPublish: 'button.editor-post-publish-button',
    linkViewPage: 'a.components-notice__action',
    labelMessageSuccess: 'div.components-notice__content',
    inputPageID: 'input[id=post_ID]'
  }
};