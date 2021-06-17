/**
 * @param {number} x
 * @return {number}
 
 Strategy: Iterative
 Store negative boolean
 Reassign x to absolute value
 Edge case: if x is between 1-9, return x

 result variable = 0
 While x is greater than 9
 Reassign x to eliminate ones place, grab last digit using % 10
 multiply result by 10, add last digit value
 
 add x to result
 
 return result 
 */
var reverse = function(x) {
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
    }
    
    x = Math.abs(x);

    
    if (x < 10) {
        if (isNegative) {
            return -x;
        }
        return x;
    }
    
    let result = 0;
    
    while (x > 9) {
        let lastDigit = x % 10;
        result *= 10;
        result += lastDigit;
        x = (x - lastDigit) / 10;
    }
    result *= 10;
    result += x;
    
    if (result > ((2 ** 31) - 1)) {
        return 0;
    }
    if (isNegative) {
        return -result;
    }
    return result;
};