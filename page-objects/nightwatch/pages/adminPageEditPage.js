module.exports = {
    commands: [{
        editPage(title, content) {
            this
                .waitForElementVisible('@buttonDismiss')
                .click('@buttonDismiss')
                .waitForElementVisible('@titlePage')
                .clearValue('@titlePage')
                .setValue('@titlePage', title)
                .clearValue('@desciprtionPage')
                .setValue('@desciprtionPage', content)
                .waitForElementVisible('@buttonUpdatePage')
                .click('@buttonUpdatePage')
                .waitForElementVisible('@labelUpdateMessageSuccess');
        },
        getActualUpdatedPageMessage(callback) {
            this.getContainText('@labelUpdateMessageSuccess', callback);
        },
        getColumActual(type, callback) {
            switch (type) {
                case 'Actual Title':
                    this
                        .waitForElementVisible('@titlePage')
                        .getContainText('@titlePage', callback);
                    break;
                case 'Actual Description':
                    this
                        .waitForElementVisible('@desciprtionPage')
                        .getContainText('@desciprtionPage', callback);
                    break;
            }
        }
    }],
    elements: {
        titlePage: 'textarea[id=post-title-0]',
        desciprtionPage: 'textarea[class=editor-post-text-editor]',
        buttonUpdatePage: 'button.editor-post-publish-button',
        labelUpdateMessageSuccess: 'div[class=components-notice__content]',
        buttonDismiss: 'button.nux-dot-tip__disable'
    }
}