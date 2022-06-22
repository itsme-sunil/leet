/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let results = [];
    
    const buildResultString = (remainingDigits, string) => {
        if (string.length === digits.length) {
            if (string.length) {
                results.push(string);
            }
            return;
        }
        
        const firstDigit = remainingDigits[0];
        const letters = numberToLettersMap[firstDigit];
        
        for (let i = 0; i < letters?.length; i++) {
            buildResultString(remainingDigits.slice(1), string.concat(letters[i]));
        }
    }    
    buildResultString(digits, '');
    
    return results;
};

const numberToLettersMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}