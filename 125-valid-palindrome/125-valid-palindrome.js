/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.match(/[A-Z0-9]+/gi)?.join('').toLowerCase();
    if (!s?.length) return true;
        
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
};