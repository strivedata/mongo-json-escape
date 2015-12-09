exports.escape = escape;
exports.unescape = unescape;

/**
 * Escapes mongo characters from object.
 *
 * @param {String} obj
 * @return {String}
 */
function escape(obj) {
    return JSON.parse(JSON.stringify(obj).replace(/\$/g, '\uFF04').replace(/\./g, '\uFF0E'));
}

/**
 * Unescapes mongo characters from object.
 *
 * @param {String} obj
 * @return {String}
 */
function unescape(obj) {
    return JSON.parse(JSON.stringify(obj).replace(/\uFF04/g, '$').replace(/\uFF0E/g, '.'));
}