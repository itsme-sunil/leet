/**
 * @param {number} num
 * @return {string}
 
 Create array of values (desc) and storage object to translate to roman
 create result string ''
 
 iterate through array (desc)
    while the input num is larger or equal to the current val
        if previous val / current val is 2
            store value of previous val / 10
        else
            store value of previous-previous val / 10
        if num is greater or equal to previous val - stored val
            concat both stored val + current val roman chars
        else
            concat the roman to the result array
        subtract current val from input num
    if input num is 0 
        return result string
 */
var intToRoman = function(num) {
    let result = '';
    
    for (let i = 0; i < values.length; i++) {
        let curr = values[i];
        let prev = values[i - 1];
        while (num >= curr) {
            let stored;
            if (prev / curr === 2) {
                stored = prev / 10;
            } else {
                stored = values[i - 2] / 10;
            }
            if (num >= prev - stored) {
                result += roman[stored] + roman[prev];
                num -= prev - stored;
            } else {
                result += roman[curr];
                num -= curr;
            }
        }
        if (!num) {
            return result;
        }
    }
};

const values = [1000, 500, 100, 50, 10, 5, 1];
const roman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
};