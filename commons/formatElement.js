const util = require("util");
module.exports = {
    formatElement(elementName, data) {
        var element = this.elements[elementName.slice(1)];
        return util.format(element.selector, data);
    }
}