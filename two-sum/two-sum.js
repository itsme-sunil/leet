/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 Strategy: 
 Iterate through nums (i)
 Iterate through nums starting at i (j)
 If i + j adds up to target,
    return i + j
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};