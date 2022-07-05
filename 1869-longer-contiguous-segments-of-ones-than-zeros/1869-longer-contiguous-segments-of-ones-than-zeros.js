/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {    
    if (s === '1') return true;
    
    let contiguousOnes = 1;
    let contiguousZeros = 1;
    
    for (let i = 0; i < s.length; i++) {
        let streak = 1;
        let currentChar = s[i];
        
        for (let j = i + 1; j < s.length; j++) {
            if (s[j] !== currentChar) {
                i = j - 1;
                break;
            }
            
            streak++;
            
            if (s[j] === '1' && streak > contiguousOnes) {
                contiguousOnes = streak;
            } else if (s[j] === '0' && streak > contiguousZeros) {
                contiguousZeros = streak;
            }
        }
    }
    
    return contiguousOnes > contiguousZeros;
};