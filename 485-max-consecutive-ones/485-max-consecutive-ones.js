/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let longestStreak = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            continue;
        }
        
        let currentStreak = 0;
            
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 0) {
                i = j;
                break;
            }

            currentStreak++;
        }

        longestStreak = currentStreak > longestStreak
            ? currentStreak
            : longestStreak;
    }
    
    return longestStreak;
};