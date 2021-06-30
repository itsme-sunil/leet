/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length) {
        return haystack.indexOf(needle);
    }
    return 0;
};