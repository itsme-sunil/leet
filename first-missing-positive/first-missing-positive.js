/**
 * @param {number[]} nums
 * @return {number}
Strategy:
Sort nums array (ascending).
**edge case: if array does not include [1], return 1. 
find and store index of 1. (if result is -1, return 1.)
iterate forward from that index, and if the value does not equal i - stored + 1, return i - stored + 1.
 */
var firstMissingPositive = function(nums) {
    // edge case**
    if (!nums.includes(1)) {
        return 1;
    }

    nums = [...new Set(nums.sort((a, b) => a - b))];
    let stored = nums.indexOf(1);
    let highest = nums[nums.length - 1];
    
    for (let i = stored; i < nums.length; i++) {
        let num = i - stored + 1;
        if (nums[i] !== num) {
            return num;
        }
    }
    
    return highest + 1;
};