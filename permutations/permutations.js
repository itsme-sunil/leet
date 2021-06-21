/**
 * @param {number[]} nums
 * @return {number[][]} [[], [], []...]
 C: answers can be returned any order. All values are unique.
 E: none
 
 Strategy: Recursive
 create results array
 
 inner recursion function, takes in solution array
    ** base case
    if length of solution array is same as length of nums
        add to results array
        return
    ** recursive case
    iterate through nums array
        if current solution does not include current num
            call inner function with current solution.concat(num)
 initial recursive call
 
 return results array
 */
var permute = function(nums) {
    let results = [];
    
    const solve = function(solution) {
        if (solution.length === nums.length) {
            results.push(solution);
            return;
        }
        
        for (num of nums) {
            if (!solution.includes(num)) {
                solve(solution.concat(num));
            }
        }
    }
    solve([]);
    
    return results;
};