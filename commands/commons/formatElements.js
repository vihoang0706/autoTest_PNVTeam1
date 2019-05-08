const util = require('util');
exports.command = function (elementName,data,callback) {
    var element = this.elements[elementName.slice(1)];
      var elFormat = util.format(element.selector, data);
        callback.call(this,elFormat);
    };