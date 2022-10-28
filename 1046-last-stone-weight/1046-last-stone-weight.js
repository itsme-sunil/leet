/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) { 
    while (stones.length > 1) {
        stones = stones.sort((a, b) => a - b);
        const last = stones.length - 1
        const newWeight = stones[last] - stones[last - 1];
        
        stones.pop();
        if (newWeight > 0) {
            stones[stones.length - 1] = newWeight;
        } else {
            stones.pop();
        }
    }
    
    return stones[0] || 0;
};