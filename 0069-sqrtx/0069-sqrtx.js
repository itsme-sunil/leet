/**
 * @param {number} x
 * @return {number}
 1 => 1
 2 => 2
 3 => 9
 4 => 16
 5 => 25
 6 => 36
 7 => 49
 8 => 64
 9 => 81
 10 => 100
 
 55
 guess: 22.5
 55 / 22.5 = 2.44
 22.5 + 2.44 = 24.94
 24.94 / 2 = 12.47
 
 55 / 12.47 = 4.4105
 12.47 + 4.4105 = 16.88
 16.88 / 2 = 8.44
 
 55 / 8.44 = 6.5165
 8.44 + 6.5165 = 14.96
 14.96 / 2 = 7.48
 
 55 / 7.48 = 7.3529
 7.48 + 7.3529 = 14.83
 14.83 / 2 = 7.415
 
 check the floor of the current guess and the next guess
 if they're the same then return that floor
 
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    
    const pinpoint = (guess) => {
        const nextGuess = ((x / guess) + guess) / 2;
        if (Math.floor(guess) === Math.floor(nextGuess)) return Math.floor(guess);
        return pinpoint(nextGuess);
    }
    
    return pinpoint(x / 2);
};