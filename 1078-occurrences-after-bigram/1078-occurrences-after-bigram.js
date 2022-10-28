/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let result = [];
    text = text.split(' ');
    
    for (let i = 0; i < text.length; i++) {
        if (text[i - 1] !== first || text[i] !== second) continue;
        if (text[i + 1] === undefined) continue;
        
        result.push(text[i + 1]);
    }
    
    return result;
};