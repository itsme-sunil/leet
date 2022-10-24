/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('').map(n => Number(n));
    
    const product = n.reduce((product, factor) => product * factor);
    const sum = n.reduce((sum, addend) => Number(sum) + Number(addend));
    
    return product - sum;
};