/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => s.match(new RegExp(p))?.includes(s) ? true : false;