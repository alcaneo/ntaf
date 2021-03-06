'use strict';

/**
 * @classdesc Object providing helping methods.
 */
class Helper {
  /**
   * @desc Return string with {placeHolder} replaced by object properties
   * @since 1.0.0
   * @param {string} string
   * @param {Object} replacementMappingArray
   * @returns {string} string
   */
  replacePlaceholders(string, replacementMappingArray) {
    const matches = new Set(string.match(/{[a-z]+}/gi));

    for (const placeholder of matches) {
      //Remove brackets
      const placeholderName = placeholder.substring(1, (placeholder.length - 1));

      if (replacementMappingArray[placeholderName]) {
        const regexp = new RegExp(placeholder, 'g');

        string = string.replace(regexp, replacementMappingArray[placeholderName]);
      }
    }

    return string;
  }
}

module.exports = new Helper();
