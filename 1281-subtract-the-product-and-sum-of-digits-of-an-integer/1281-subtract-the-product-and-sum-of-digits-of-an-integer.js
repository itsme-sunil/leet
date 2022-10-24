/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('').map(n => Number(n));
    
    // const product = n.reduce((product, factor) => product * factor);
    // const sum = n.reduce((sum, addend) => sum + addend);
    
    let product = 1;
    let sum = 0;
    
    n.forEach(n => {
        product *= n;
        sum += n;
    });
    
    return product - sum;
};