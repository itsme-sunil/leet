/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let result = [];
    const textArray = text.split(' ');
    
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i - 1] !== first || textArray[i] !== second) continue;
        if (textArray[i + 1] === undefined) continue;
        
        result.push(textArray[i + 1]);
    }
    
    return result;
};