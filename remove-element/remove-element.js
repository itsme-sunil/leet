/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 Strategy: iterate through input array, splice matching values out, return length of array at end. O(n) time and O(1) space.

Strategy2: iterate through array. If we find a match, swap it with the next element that is not a match. Return array and length at end. O(n^2) time and O(1) space.
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === undefined) break;
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};