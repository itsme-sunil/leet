/**
 * @param {number} x
 * @return {boolean}
 Edge: negative numbers are automatically false
 
 placeholder to work on number
 placeholder reversed number
 
 while working > 9
 store last digit by using modulus
 reassign working to working / 10
 multiply reversed number * 10
 add last digit
 
 add working to reversed
 
 return x === reversed
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    let working = x;
    let reversed = 0; // 1 
    
    while (working > 9) {
        let digit = working % 10; // 2
        working = (working - digit) / 10; // 1
        reversed *= 10; // 10
        reversed += digit; // 12
    }
    reversed *= 10;
    reversed += working;
    
    return x === reversed;
};