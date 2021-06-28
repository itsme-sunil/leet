/**
 * @param {string} s
 * @return {boolean}
 Strategy: recursive
 ** edge case: if length of string is an odd number, return false
 
 ** recursive case: iterate through string. If we find matching consecutive parens, reassign string to a sliced version of the string without the matching parens.
 return isValid on sliced string.
 
 ** base case: if string has length, return false. otherwise, return true.
 
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        let open = s[i];
        if (matchingParens[open] === s[i + 1]) {
            s = s.slice(0, i) + s.slice(i + 2);
            return isValid(s);
        }
    }
    
    if (s.length > 0) {
        return false;
    } else {
        return true;
    }
};

const matchingParens = {
    '(': ')',
    '[': ']',
    '{': '}'
}