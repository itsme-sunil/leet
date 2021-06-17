/**
 * @param {number} n
 * @return {boolean}
 */

/*
I: number (only positive integers)
O: boolean
C: operation will timeout if it is unhappy. 
E: 

Strategy:
call setTimeout to an interval of 5 seconds, return false.

Recursive Function.
Change number to string. Split string into array. Reduce array it to the sum of the squares (be sure to change each back to number before squaring).
***base case: if sum is 1, return true.
***recursive case: else, call isHappy again on new sum. 
*/
var isHappy = function(n, map = {}) {
    if (n === 1) {
        return true;
    }
    
    if (map[n]) {
        return false;
    }
    
    map[n] = true;
    
    let sum = 0;
    if (n < 10) {
        sum = n ** 2;
    } else {
        n.toString().split('').forEach(digit => {
        sum += digit ** 2;
    });   
    } 
    
    return isHappy(sum, map);
};