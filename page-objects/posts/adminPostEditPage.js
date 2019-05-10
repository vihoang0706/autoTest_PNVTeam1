module.exports = {
    commands: [{
        editPost(title, content) {
            this
                .waitForElementVisible('@buttonDismiss')
                .click('@buttonDismiss')
                .waitForElementVisible('@titlePost')
                .clearValue('@titlePost')
                .setValue('@titlePost', title)
                .clearValue('@desciprtionPost')
                .setValue('@desciprtionPost', content)
                .waitForElementVisible('@buttonUpdatePost')
                .click('@buttonUpdatePost')
        },
        getActualUpdatedPostMessage(callback) {
            this
                .waitForElementVisible('@labelUpdateMessageSuccess')
                .getContainText('@labelUpdateMessageSuccess', callback);
        },
    }],
    elements: {
        titlePost: 'textarea[id=post-title-0]',
        desciprtionPost: 'textarea[class=editor-post-text-editor]',
        buttonUpdatePost: 'button.editor-post-publish-button',
        labelUpdateMessageSuccess: 'div[class=components-notice__content]',
        buttonDismiss: 'button.nux-dot-tip__disable'
    }
}