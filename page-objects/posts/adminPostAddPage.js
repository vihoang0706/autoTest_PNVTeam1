module.exports = {
  commands: [{
    addNewPost(title, content) {
      this
        .setValue('@inputTitle', title)
        .setValue('@inputDescription', content)
        .click('@buttonPublish')
        .waitForElementVisible('@subButtonPublish')
        .click('@subButtonPublish')
        .waitForElementVisible('@labelMessageSuccess');
    },
    getActualAddPostMessage(callback) {
      this.getContainText('@labelMessageSuccess', callback);
    }
  }],
  elements: {
    inputTitle: 'textarea[id=post-title-0]',
    inputDescription: 'textarea[class=editor-post-text-editor]',
    buttonPublish: 'button.editor-post-publish-panel__toggle',
    subButtonPublish: 'button.editor-post-publish-button',
    labelMessageSuccess: 'div[class=components-notice__content]',
  }
}