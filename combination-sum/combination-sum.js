/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 C: no repeated elements in [candidates], target may be among candidates
 E: no negative integers
 
 Strategy: 
 We're trying to build arrays where the integers inside add up to the target. They should be returned nested within a holder array.
 
 Recursive
 
 Create result array
 
 inner recursion function, takes in candidates, target, and combinations array
 ** base case if elements in combinations add up to target, push combinations to result. return.
 ** recursive case loop through candidates. call inner recursion on (candidates.slice, target, combinations.concat(current candidate)
 
 initial recursive call
 
 return result array
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const sumArray = (accumulator, currentValue) => (accumulator + currentValue);
    
    const findCombinations = function(candidatesToCheck, combination) {
        // base case ** if we find a sum
        if (combination.reduce(sumArray, 0) === target) {
            result.push(combination);
            return;
        }
        
        // base case ** if the combination is greater than the target
        if (combination.reduce(sumArray, 0) > target) {
            return;
        }
        
        // recursive case **
        for (let i = 0; i < candidatesToCheck.length; i++) {    
            findCombinations(candidatesToCheck.slice(i), combination.concat(candidatesToCheck[i]));
        }
    };
    findCombinations(candidates, []);
    
    return result;
};