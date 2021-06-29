/**
 * @param {number[]} nums
 * @return {number}
 C: length will be at least 1
 E: length 1, return 1
 Strategy: 
 Create counter, initialize at 1
 
 iterate through nums
    if current num < next num
        store interval between current num and next num
        iterate forward
            if interval to next num is not the same as stored interval
                break
            increment counter
 
 Return counter
 */
var findLengthOfLCIS = function(nums) {
    let result = 1;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            let counter = 1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[j - 1]) {
                    counter++;
                } else {
                    i = j - 1;
                    break;
                }
            }
            if (counter > result) {
                result = counter;
            }
        }
    }
    
    return result;
};