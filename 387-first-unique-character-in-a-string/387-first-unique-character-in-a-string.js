/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let characterList = {};
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (characterList[char]) {
            characterList[char]++;
        } else {
            characterList[char] = 1;
        }
    }
    
    for (let j = 0; j < s.length; j++) {
        if (characterList[s[j]] === 1) return j;
    }
    
    return -1;
};