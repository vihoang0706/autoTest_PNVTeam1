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
        inputTitle: 'textarea[id=post-title-0]',
        inputDescription: 'textarea[class=editor-post-text-editor]',
        buttonPublish: 'button.editor-post-publish-panel__toggle',
        subButtonPublish: 'button.editor-post-publish-button',
        labelMessageSuccess: 'div[class=components-notice__content]',
        
    }
}