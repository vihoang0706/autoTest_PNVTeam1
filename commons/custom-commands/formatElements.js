const util = require("util");
exports.command = function formatElement(elementName, data) {  
    var element = this.elements[elementName.slice(1)];
    return util.format(element.selector, data);
  };