/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const file = coordinates[0].charCodeAt();
    const rank = Number(coordinates[1]);
        
    return (rank + file) % 2 === 1;
};