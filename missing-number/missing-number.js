/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a === b) {
            return 0;
        } else if (a < b) {
            return -1;
        }
    });
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};