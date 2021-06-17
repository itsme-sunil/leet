/**
 * @param {string[]} strs
 * @return {string}
 
 Strategy:
 Create empty result string
 
 Iterate through letters 
    Store current letter
    Store isMatch bool
    Iterate through words
        If current letter of current word does not match
            flip isMatch bool to false
            Break
    If isMatch
        Concatenate with result string
        
 Return result string
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    
    for (let i = 0; i < strs[0].length; i++) { // words
        let letter = strs[0][i];
        let isMatch = true;
        for (let j = 0; j < strs.length; j++) { // letters
            if (strs[j][i] !== letter) {
                isMatch = false;
                break;
            }
        }
        if (isMatch) {
            result += letter;
        } else {
            break;
        }
    }
    
    return result;
};