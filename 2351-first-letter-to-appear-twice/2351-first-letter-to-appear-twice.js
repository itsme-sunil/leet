/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const characterList = {};
    
    for (i = 0; i < s.length; i++) {
        if (characterList[s[i]]) return s[i];
        
        characterList[s[i]] = true;
    }
};