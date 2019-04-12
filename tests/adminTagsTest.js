const utils = require('../pages/utils/setUp.js');
module.exports = {
    '@tags': ['crud-tags'],
    before: function(browser){
        utils.openBrowser(browser);
    },
    'Go to Create a tag page':function(browser){
        
    } 
}