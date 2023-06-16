/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
 p = new RegExp("^" + p + "$");
 return p.test(s);
};