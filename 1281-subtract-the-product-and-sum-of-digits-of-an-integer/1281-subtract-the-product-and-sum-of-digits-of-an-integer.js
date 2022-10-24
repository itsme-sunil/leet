/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('').map(n => Number(n));

    return (
        n.reduce(
            (product, factor) => product * factor
        ) - n.reduce(
            (sum, addend) => sum + addend
        )
    );
};