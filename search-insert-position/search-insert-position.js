/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 Binary search algo
 Strategy
 Create a midpoint
 Create a start idx
 Create an end idx
 
 While the diff between start and end is greater than 1
     if target is same as nums[midpoint]
        return midpoint
     if target is greater than nums[midpoint]
        reassign start to midpoint + 1
     if target is less than nums[midpoint]
        reassign end to midpoint - 1
     reassign midpoint
 
 if nums[remaining idx] is the same as target
     return remaining idx
 else if target > nums[remaining idx]
     return remaining idx + 1
 return remaining idx - 1
 */
var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let midpoint = Math.floor((nums.length - 1) / 2);
    
    while (end - start > 0) {
        if (target === nums[midpoint]) {
            return midpoint;
        }
        if (target > nums[midpoint]) {
            start = midpoint + 1;
        }
        if (target < nums[midpoint]) {
            if (midpoint === 0) {
                end = 0;
            } else {
                end = midpoint - 1;
            }
        }
        midpoint = Math.floor((end - start) / 2) + start;
    }
    
    if (target === nums[midpoint]) {
        return midpoint;
    }
    if (target > nums[midpoint]) {
        return midpoint + 1;
    }
    if (target < nums[midpoint]) {
        if (midpoint === 0) return 0;
        return midpoint;
    }
};