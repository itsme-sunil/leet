/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // filter out non alphanumeric characters with regex
    s = s.match(/[A-Z0-9]+/gi)?.join('').toLowerCase();
    if (!s?.length) return true;
        
    // same loop, checking backwards and forwards for palindrome chars
    for (let i = 0; i < s.length; i++) {
        const j = s.length - 1 - i;
        // return true if two indices are the same or if i > j
        if (i >= j) return true;
        // return false if we find a mismatch
        if (s[i] !== s[j]) return false;
    }
};