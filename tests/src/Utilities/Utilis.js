const path = require('path');
const fs = require('fs');

const formatRegExp = /%[sdj%]/g;
const indentRegex = /^/gm;
const testSuiteNameRegxp = /(_|-|\.)*([A-Z]*)/g;
const nameSeparatorRegxp = /(\s|\/)/;

class Utils {
  static get PrimitiveTypes() {
    return {
      OBJECT: 'object',
      FUNCTION: 'function',
      BOOLEAN: 'boolean',
      NUMBER: 'number',
      STRING: 'string',
      UNDEFINED: 'undefined'
    };
  }

  static isObject(obj) {
    return obj !== null && typeof obj == 'object';
  }

  static isFunction(fn) {
    return typeof fn == Utils.PrimitiveTypes.FUNCTION;
  }

  static isBoolean(value) {
    return typeof value == Utils.PrimitiveTypes.BOOLEAN;
  }

  static isNumber(value) {
    return typeof value == Utils.PrimitiveTypes.NUMBER;
  }

  static isString(value) {
    return typeof value == Utils.PrimitiveTypes.STRING;
  }

  static isUndefined(value) {
    return typeof value == Utils.PrimitiveTypes.UNDEFINED;
  }

  static isES6AsyncFn(fn) {
    return Utils.isFunction(fn) && fn.constructor.name === 'AsyncFunction';
  }

  /**
   * A smaller version of util.format that doesn't support json and
   * if a placeholder is missing, it is omitted instead of appended
   *
   * @param f
   * @returns {string}
   */
  static format(f) {
    let i = 1;
    let args = arguments;
    let len = args.length;

    return String(f).replace(formatRegExp, function(x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        default:
          return x;
      }
    });
  }
}
module.exports = Utils;