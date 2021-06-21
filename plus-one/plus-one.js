/**
 * @param {number[]} digits
 * @return {number[]}
 
 Edge: The final digit and any that immediately precede it could be 9, which would mean that previous digits would need to increment while the 9 goes to a zero.
 Essentially, create a solution that carries the one all the way up to the beginning of the array.
 
 Strategy: iterative
 Iterate backwards through the array and count consecutive 9s starting from the end. Mark the indexOf where there is no longer a nine. **If there is no non-nine number, change every element to a zero and unshift a 1 to the beginning.**
 
 Iterate backwards through the array again and change consecutive 9s to zeros, then the stored index of a non-9 will increment.
 
 Return the array.
 
 
 [9,9,9,9] => [9,9,9,0] => [9,9,0,0] .... => [1,0,0,0,0]
 
 
 
 */
var plusOne = function(digits) {
    // index of last non-nine digit
    // let nonNine;
    
    // iterate through the array from the end to the beginning
        // if value is not a nine, 
            // store i of non-nine
            // break
        // increment nines counter
    
    // **if stored index is undefined, 
        // iterate through array
            // change every value to a 0
        // unshift a 1
        // return array
    
    // iterate backwards through array from end to beginning
    for (let i = digits.length - 1; i >= 0; i--) {
        // if j !== 9
        if (digits[i] !== 9) {
            // increment value
            digits[i]++;
            // return array   
            return digits;
        }
        // change value to 0
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
        }
    }
    
    // return array
    return digits;
};