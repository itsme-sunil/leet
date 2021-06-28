/**
 * @param {number[]} nums
 * @return {number}
 
 E: multiple repeated nums in a row, or the remainder of the array is the same number. 
 
 Strategy
 Create a counter
 Iterate through nums
 if next element is same as current element,
    increment counter.
    iterate forward until element no longer matches. Reassign i. Break.
 Return counter.
 */
var removeDuplicates = function(nums) {
//     let counter = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         counter++;
//         if (nums[i] === nums[i + 1]) {
//             for (let j = i + 1; j < nums.length; i++) {
//                 if (nums[j] !== nums[i]) {
//                     i = j;
//                     break;
//                 }
//                 if (j === nums.length - 1) {
//                     return counter;
//                 }
//             }
//         }
//     }
    
//     return counter;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i = i - 1;
        }
    }
    
    return nums.length;
};