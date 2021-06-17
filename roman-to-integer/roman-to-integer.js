/**
 * @param {string} s
 * @return {number}
 
 Strategy:
 Create values object.
 Create int value = 0.
 
 Iterate through string
 If current char value is less than next char value, 
    subtract from int
 Otherwise, add char value to int
 
 return int
 */
var romanToInt = function(s) {
    let int = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (values[s[i]] < values[s[i + 1]]) {
            int -= values[s[i]];
        } else {
            int += values[s[i]];
        }
    }
    
    return int;
};

const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}