/**
 * @param {string} s
 * @return {number}
 
 I: string
 O: number representing the length of the longest substring without any repeated characters
 C: none
 E: all repeated chars/no repeated chars
 
 Strategy: storage object.
 create result var
 Iterate through s
   create counter var
   create a storage obj 
   Iterate again through s from i
     store unique chars in storage 
     if repeated char, break
     increment counter
   if counter > result, reassign result
 return result
 */
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        let counter = 0;
        let storage = {};
        for (let j = i; j < s.length; j++) {
            let char = s[j];
            if (!storage[char]) {
                storage[char] = 1;
                counter++;
            } else {
                break;
            }
        }
        if (counter > result) {
            result = counter;
        }
    }
    
    return result;
};