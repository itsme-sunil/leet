/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    return (
        coordinates[0].charCodeAt() + Number(coordinates[1])
    ) % 2 === 1;
};