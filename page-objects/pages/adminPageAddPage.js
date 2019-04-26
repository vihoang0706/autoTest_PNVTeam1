module.exports = {
  commands: [{
    addNewPage(titlePage, description) {
      return this
        .setValue('@inputTitle', titlePage)
        .setValue('@inputDescription', description)
        .click('@buttonPublish')
        .click('@subButtonPublish');
    },
    dismissTip() {
      return this
        .click('@blockTip');
    }
  }],
  elements: {
    inputTitle: {
      selector: '//div[@class="edit-post-text-editor__body"]//textarea[@class="editor-post-title__input"]',
      locateStrategy: 'xpath'
    },
    inputDescription: {
      selector: '//div[@class="edit-post-text-editor__body"]//textarea[@class="editor-post-text-editor"]',
      locateStrategy: 'xpath'
    },
    buttonPublish: {
      selector: '//button[@class="components-button editor-post-publish-panel__toggle is-button is-primary"]',
      locateStrategy: 'xpath'
    },
    subButtonPublish: {
      selector: '//button[@class="components-button editor-post-publish-button is-button is-default is-primary is-large"]',
      locateStrategy: 'xpath'
    },
    linkViewPage: {
      selector: '//a[@class="components-button is-button is-default"]',
      locateStrategy: 'xpath'
    },
    blockTip: {
      selector: '//div[@class="components-popover__content"]/button[@class="components-button components-icon-button nux-dot-tip__disable"]',
      locateStrategy: 'xpath'
    },
    labelMessageSuccess: {
      selector: '//div[@class="components-notice__content"]',
      locateStrategy: 'xpath'
    }
  }
};